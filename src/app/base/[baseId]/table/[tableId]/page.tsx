import { HydrateClient } from "~/trpc/server";
import { TableView } from "~/app/_components/TableView";

export default function TablePage({
  params,
}: {
  params: { baseId: string; tableId: string };
}) {
  return (
    <HydrateClient>
      <TableView baseId={params.baseId} tableId={params.tableId} />
    </HydrateClient>
  );
}
