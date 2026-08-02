import { Suspense } from "react";
import VerifyOtpContent from "./VerifyOtpContent";

export default function VerifyOtpPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#071424] flex items-center justify-center text-white">
          Loading...
        </main>
      }
    >
      <VerifyOtpContent />
    </Suspense>
  );
}