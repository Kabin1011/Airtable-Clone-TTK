import { HydrateClient } from "~/trpc/server";
import { BaseDetail } from "~/app/_components/BaseDetail";

export default async function BasePage({ params }: { params: Promise<{ baseId: string }> }) {
  const { baseId } = await params;

  return (
    <HydrateClient>
      <BaseDetail baseId={baseId} />
    </HydrateClient>
  );
}
