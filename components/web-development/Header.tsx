"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header
      className="
      sticky
      top-0
      z-50
      bg-[#050B14]/95
      backdrop-blur-xl
      border-b
      border-yellow-500/10
      "
    >
      <div className="max-w-md mx-auto px-4 py-4 flex items-center gap-4">

        <button
          onClick={() => router.back()}
          className="
          h-10
          w-10
          rounded-full
          bg-[#111C30]
          border
          border-yellow-500/20
          flex
          items-center
          justify-center
          "
        >
          <ChevronLeft
            className="text-white"
            size={20}
          />
        </button>

        <div>

          <h1 className="text-lg font-bold text-white">
            Web Development
          </h1>

          <p className="text-xs text-yellow-400">
            Premium Website Design Services
          </p>

        </div>

      </div>
    </header>
  );
}