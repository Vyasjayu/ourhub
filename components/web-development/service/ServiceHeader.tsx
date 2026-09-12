"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Code2,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

export default function ServiceHeader() {
  const router = useRouter();

  const phone = "918878632431";

  const whatsappMessage = encodeURIComponent(
    "Hi OurHub, I need help with Web Development services. Please share the details."
  );

  return (
    <header className="sticky top-0 z-[80] border-b border-white/[0.06] bg-[#050B14]/90 backdrop-blur-2xl">
      {/* Top gold highlight */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/40 to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-[#DFAE45]/[0.06] blur-3xl" />

      <div className="relative mx-auto flex h-[70px] w-full items-center justify-between px-4">
        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div className="flex min-w-0 items-center gap-3">
          {/* Back Button */}
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="Go back"
            className="group flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[15px] border border-white/[0.08] bg-white/[0.035] shadow-[0_8px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-[#DFAE45]/30 hover:bg-[#DFAE45]/10 active:scale-95"
          >
            <ArrowLeft
              size={19}
              strokeWidth={2.1}
              className="text-gray-300 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:text-[#DFAE45]"
            />
          </button>

          {/* Brand / Page Info */}
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              {/* Code Icon */}
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#DFAE45]/10">
                <Code2
                  size={14}
                  strokeWidth={2}
                  className="text-[#DFAE45]"
                />
              </div>

              <h1 className="truncate text-[14px] font-extrabold tracking-tight text-white">
                Web Development
              </h1>
            </div>

            <div className="mt-1 flex items-center gap-1.5 pl-0.5">
              {/* Live Indicator */}
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
              </span>

              <span className="text-[7px] font-bold uppercase tracking-[1.1px] text-gray-500">
                Premium Digital Solutions
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}

        <div className="flex shrink-0 items-center gap-2">
          {/* Online / Premium Badge */}
          <div className="hidden items-center gap-1.5 rounded-full border border-[#DFAE45]/15 bg-[#DFAE45]/[0.06] px-2.5 py-1.5 min-[390px]:flex">
            <Sparkles
              size={10}
              strokeWidth={2}
              className="text-[#DFAE45]"
            />

            <span className="text-[7px] font-extrabold uppercase tracking-[0.8px] text-[#DFAE45]">
              OurHub Pro
            </span>
          </div>

          {/* Call */}
          <a
            href={`tel:+${phone}`}
            aria-label="Call OurHub"
            className="group flex h-[40px] w-[40px] items-center justify-center rounded-[14px] border border-white/[0.08] bg-white/[0.035] transition-all duration-300 hover:border-green-400/25 hover:bg-green-400/[0.08] active:scale-95"
          >
            <Phone
              size={17}
              strokeWidth={2}
              className="text-green-400 transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${phone}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with OurHub on WhatsApp"
            className="group relative flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-[14px] border border-green-400/20 bg-green-500/[0.08] transition-all duration-300 hover:border-green-400/40 hover:bg-green-500/[0.14] active:scale-95"
          >
            {/* Shine */}
            <span className="pointer-events-none absolute -left-8 top-0 h-full w-5 rotate-[25deg] bg-white/15 blur-sm transition-all duration-700 group-hover:left-[120%]" />

            <MessageCircle
              size={18}
              strokeWidth={2}
              className="relative z-10 text-green-400 transition-transform duration-300 group-hover:scale-110"
            />

            {/* Online dot */}
            <span className="absolute right-[5px] top-[5px] h-1.5 w-1.5 rounded-full border border-[#07111D] bg-green-400" />
          </a>
        </div>
      </div>

      {/* =======================================================
          BOTTOM STATUS LINE
      ======================================================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/20 to-transparent" />
      </div>
    </header>
  );
}