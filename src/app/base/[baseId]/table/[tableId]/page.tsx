import { HydrateClient } from "~/trpc/server";
import { TableView } from "~/app/_components/TableView";

export default async function TablePage({
  params,
}: {
  params: Promise<{ baseId: string; tableId: string }>;
}) {
  const { baseId, tableId } = await params;

  return (
    <HydrateClient>
      <TableView baseId={baseId} tableId={tableId} />
    </HydrateClient>
  );
}
