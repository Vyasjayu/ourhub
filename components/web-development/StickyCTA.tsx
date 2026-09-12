
"use client";

import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function StickyCTA() {
  const phone = "918878632431";

  const message = encodeURIComponent(
    "Hi OurHub, I want to start a Web Development project. Please share the details."
  );

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] flex justify-center pointer-events-none">
      <div className="pointer-events-auto relative w-full max-w-[430px] px-3 pb-3">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -bottom-5 left-1/2 h-24 w-64 -translate-x-1/2 rounded-full bg-[#DFAE45]/10 blur-3xl" />

        {/* CTA Container */}
        <div
          className="
            group relative overflow-hidden rounded-[24px]
            border border-white/[0.09]
            bg-[#07111D]/95
            p-2
            shadow-[0_-10px_45px_rgba(0,0,0,0.45)]
            backdrop-blur-2xl
          "
        >
          {/* Top Highlight */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/50 to-transparent" />

          <div className="flex items-center gap-2">
            {/* Info */}
            <div className="hidden min-w-0 flex-1 pl-2 sm:block">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />

                <span className="text-[8px] font-bold uppercase tracking-[1.3px] text-green-400">
                  Ready to build
                </span>
              </div>

              <p className="mt-0.5 text-[10px] font-semibold text-gray-400">
                Start your digital journey with OurHub
              </p>
            </div>

            {/* WhatsApp Quick Action */}
            <a
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with OurHub on WhatsApp"
              className="
                flex h-[48px] w-[48px] shrink-0 items-center justify-center
                rounded-[17px]
                border border-green-400/15
                bg-green-500/[0.08]
                text-green-400
                transition-all duration-300
                hover:border-green-400/30
                hover:bg-green-500/15
                active:scale-95
              "
            >
              <MessageCircle
                size={19}
                strokeWidth={2.2}
              />
            </a>

            {/* Main CTA */}
            <a
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group/cta relative flex h-[48px] flex-1
                items-center justify-center gap-2
                overflow-hidden rounded-[17px]
                bg-gradient-to-r from-[#DFAE45] to-[#FFD86A]
                px-4
                text-[11px] font-extrabold
                text-black
                shadow-[0_10px_30px_rgba(223,174,69,0.18)]
                transition-all duration-300
                hover:shadow-[0_12px_35px_rgba(223,174,69,0.28)]
                active:scale-[0.98]
              "
            >
              {/* Shine */}
              <span className="pointer-events-none absolute -left-12 top-0 h-full w-10 rotate-[20deg] bg-white/30 blur-sm transition-all duration-700 group-hover/cta:left-[120%]" />

              <Sparkles
                size={15}
                strokeWidth={2.2}
                className="relative z-10"
              />

              <span className="relative z-10">
                Start Your Project
              </span>

              <ArrowRight
                size={15}
                strokeWidth={2.7}
                className="relative z-10 transition-transform duration-300 group-hover/cta:translate-x-1"
              />
            </a>
          </div>

          {/* Trust Row */}
          <div className="mt-1 flex items-center justify-center gap-2">
            <CheckCircle2
              size={10}
              strokeWidth={2.5}
              className="text-green-400"
            />

            <span className="text-[7px] font-semibold uppercase tracking-[0.8px] text-gray-600">
              Free Consultation
            </span>

            <span className="h-1 w-1 rounded-full bg-white/10" />

            <span className="text-[7px] font-semibold uppercase tracking-[0.8px] text-gray-600">
              Quick Response
            </span>

            <span className="h-1 w-1 rounded-full bg-white/10" />

            <span className="text-[7px] font-semibold uppercase tracking-[0.8px] text-gray-600">
              OurHub
            </span>
          </div>

          {/* Bottom Gold Glow */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/35 to-transparent" />
        </div>
      </div>
    </div>
  );
}

