import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const bases = await api.base.getAll();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold">My Bases</h1>
          <div className="grid gap-4">
            {bases.length === 0 ? (
              <p>No bases yet. Create one to get started!</p>
            ) : (
              bases.map((base) => (
                <div key={base.id} className="rounded-xl bg-white/10 p-4">
                  <h3 className="text-2xl font-bold">
                    {base.icon} {base.name}
                  </h3>
                  <p>{base.description}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}