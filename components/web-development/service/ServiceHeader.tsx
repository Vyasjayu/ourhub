"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Phone, MessageCircle } from "lucide-react";

export default function ServiceHeader() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-yellow-500/10 bg-[#050B14]/95 backdrop-blur-xl">

      <div className="flex items-center justify-between px-4 py-4">

        {/* Left */}

        <div className="flex items-center gap-3">

          <button
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111C30]"
          >
            <ArrowLeft
              size={20}
              className="text-white"
            />
          </button>

          <div>

            <h1 className="text-lg font-bold text-white">
              Web Development
            </h1>

            <p className="text-xs text-yellow-400">
              Premium Digital Solutions
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-3">

          <a
            href="tel:+919876543210"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111C30]"
          >
            <Phone
              size={18}
              className="text-green-400"
            />
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111C30]"
          >
            <MessageCircle
              size={18}
              className="text-green-500"
            />
          </a>

        </div>

      </div>

    </header>
  );
}