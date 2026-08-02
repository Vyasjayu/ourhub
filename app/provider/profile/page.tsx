"use client";

import { Suspense } from "react";
import ProviderProfileContent from "./ProviderProfileContent";


export default function ProviderProfilePage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#071424] flex items-center justify-center text-white">
          Loading...
        </main>
      }
    >
      <ProviderProfileContent />
    </Suspense>
  );
}