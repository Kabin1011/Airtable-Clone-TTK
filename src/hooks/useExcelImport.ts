import { useCallback, useState } from 'react';
import { api } from '~/trpc/react';
import { importFromExcel } from '~/lib/excelUtils';

export function useExcelImport(tableId: string) {
  const [isImporting, setIsImporting] = useState(false);
  const [importError, setImportError] = useState<string | null>(null);
  const [importProgress, setImportProgress] = useState<{
    current: number;
    total: number;
    status: string;
  } | null>(null);
  const utils = api.useUtils();

  const bulkImport = api.import.bulkImport.useMutation({
    onSuccess: async () => {
      // Invalidate queries to refresh the UI with new data
      await Promise.all([
        utils.field.getByTableId.invalidate({ tableId }),
        utils.record.getByTableId.invalidate({ tableId }),
      ]);
    },
  });

  const handleImport = useCallback(async (file: File) => {
    if (!tableId) {
      setImportError('No table selected');
      return;
    }

    setIsImporting(true);
    setImportError(null);
    setImportProgress({ current: 0, total: 100, status: 'Parsing Excel file...' });

    try {
      // Parse Excel file
      const { fields, records } = await importFromExcel(file);

      setImportProgress({
        current: 30,
        total: 100,
        status: `Uploading ${fields.length} fields and ${records.length} records...`
      });

      // Single optimized server call
      const result = await bulkImport.mutateAsync({
        tableId,
        fields,
        records,
      });

      setImportProgress({
        current: 90,
        total: 100,
        status: 'Finalizing import...'
      });

      // Small delay to let the progress show
      await new Promise(resolve => setTimeout(resolve, 300));

      setImportProgress({
        current: 100,
        total: 100,
        status: 'Import complete!'
      });

      console.log(`Import successful: ${result.fieldsCreated} fields, ${result.recordsCreated} records, ${result.cellsCreated} cells`);

      return result;
    } catch (error) {
      console.error('Import error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to import Excel file';
      setImportError(errorMessage);
      throw error;
    } finally {
      setIsImporting(false);
      // Clear progress after a short delay
      setTimeout(() => setImportProgress(null), 1000);
    }
  }, [tableId, bulkImport]);

  return {
    handleImport,
    isImporting,
    importError,
    importProgress,
    clearError: () => setImportError(null),
  };
}
