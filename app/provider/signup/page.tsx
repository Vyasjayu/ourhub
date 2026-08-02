import { Suspense } from "react";
import ProviderSignupContent from "./ProviderSignupContent";


export default function ProviderSignupPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#071424] flex items-center justify-center text-white">
          Loading...
        </main>
      }
    >
      <ProviderSignupContent />
    </Suspense>
  );
}