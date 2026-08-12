import { Suspense } from "react";
import KundliResultPage from "./KundliResultPage";

export default function KundliResultRoute() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#071424] text-white">
          <div className="text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-yellow-400" />

            <p className="mt-4 text-sm text-gray-400">
              Loading Kundli...
            </p>
          </div>
        </main>
      }
    >
      <KundliResultPage />
    </Suspense>
  );
}