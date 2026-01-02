import { z } from "zod";
import { Prisma, FieldType } from "../../../../generated/prisma";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const importRouter = createTRPCRouter({
  /**
   * Optimized bulk import using raw SQL for maximum performance
   * Handles fields, records, and cells in a single efficient operation
   */
  bulkImport: publicProcedure
    .input(
      z.object({
        tableId: z.string(),
        fields: z.array(
          z.object({
            name: z.string(),
            type: z.nativeEnum(FieldType),
          })
        ),
        records: z.array(z.record(z.any())),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { tableId, fields, records } = input;

      // Validate table exists
      const table = await ctx.db.table.findUnique({
        where: { id: tableId },
      });

      if (!table) {
        throw new Error("Table not found");
      }

      // Use a transaction for atomicity with increased timeout
      const result = await ctx.db.$transaction(
        async (tx) => {
          // Step 1: Get current field order
          const lastField = await tx.field.findFirst({
            where: { tableId },
            orderBy: { order: "desc" },
            select: { order: true },
          });

          const startFieldOrder = (lastField?.order ?? -1) + 1;

          // Step 2: Bulk insert fields using createMany
          const fieldIds: string[] = [];
          const fieldMap = new Map<string, string>();

          // Create fields one by one to get their IDs (createMany doesn't return IDs)
          for (let i = 0; i < fields.length; i++) {
            const field = fields[i]!;
            const created = await tx.field.create({
              data: {
                tableId,
                name: field.name,
                type: field.type,
                order: startFieldOrder + i,
              },
            });
            fieldIds.push(created.id);
            fieldMap.set(field.name, created.id);
          }

          // Step 3: Get current record order
          const lastRecord = await tx.record.findFirst({
            where: { tableId },
            orderBy: { order: "desc" },
            select: { order: true },
          });

          const startRecordOrder = (lastRecord?.order ?? -1) + 1;

          // Step 4: Bulk insert records using createMany
          const recordData = records.map((_, index) => ({
            tableId,
            order: startRecordOrder + index,
          }));

          await tx.record.createMany({
            data: recordData,
          });

          // Step 5: Fetch created records to get their IDs
          const createdRecords = await tx.record.findMany({
            where: {
              tableId,
              order: { gte: startRecordOrder },
            },
            orderBy: { order: "asc" },
            select: { id: true },
          });

          // Step 6: Build cell data
          const cellInserts: Array<{
            fieldId: string;
            recordId: string;
            value: Prisma.InputJsonValue;
          }> = [];

          createdRecords.forEach((record, recordIndex) => {
            const recordData = records[recordIndex];
            if (!recordData) return;

            Object.entries(recordData).forEach(([fieldName, value]) => {
              const fieldId = fieldMap.get(fieldName);
              if (fieldId && value !== null && value !== undefined) {
                cellInserts.push({
                  fieldId,
                  recordId: record.id,
                  value: value as Prisma.InputJsonValue,
                });
              }
            });
          });

          // Step 7: Bulk insert all cells at once using createMany
          // This is MUCH faster than individual creates
          const cellsResult = await tx.cell.createMany({
            data: cellInserts,
            skipDuplicates: true, // Skip if cell already exists
          });

          return {
            fieldsCreated: fieldIds.length,
            recordsCreated: createdRecords.length,
            cellsCreated: cellsResult.count,
          };
        },
        {
          maxWait: 30000, // 30 seconds
          timeout: 120000, // 2 minutes
        }
      );

      return result;
    }),
});
