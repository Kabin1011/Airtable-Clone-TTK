"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
          <div className="container flex flex-col items-center justify-center gap-4 px-4">
            <h2 className="text-2xl font-bold">Something went wrong!</h2>
            <p className="text-red-400">{error.message}</p>
            {error.digest && (
              <p className="text-sm text-gray-400">Error ID: {error.digest}</p>
            )}
            <button
              onClick={reset}
              className="rounded-lg bg-white/10 px-4 py-2 font-semibold text-white hover:bg-white/20"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
