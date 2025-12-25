import { HydrateClient } from "~/trpc/server";
import { BaseDetail } from "~/app/_components/BaseDetail";

export default function BasePage({ params }: { params: { baseId: string } }) {
  return (
    <HydrateClient>
      <BaseDetail baseId={params.baseId} />
    </HydrateClient>
  );
}
