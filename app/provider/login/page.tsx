"use client";

import { Suspense } from "react";
import ProviderLoginContent from "./ProviderLoginContent";


export default function ProviderLoginPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#071424] flex items-center justify-center text-white">
          Loading...
        </main>
      }
    >
      <ProviderLoginContent />
    </Suspense>
  );
}