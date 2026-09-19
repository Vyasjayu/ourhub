
"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function StickyBooking() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const text = {
    title: isHindi
      ? "ऑनलाइन पूजा बुक करें"
      : "Book Online Pooja",

    live: isHindi
      ? "लाइव"
      : "Live",

    subtitle: isHindi
      ? "प्रमाणित पंडित • सुरक्षित बुकिंग"
      : "Verified Pandits • Secure Booking",

    responsibility: isHindi
      ? "आपकी श्रद्धा • हमारी जिम्मेदारी"
      : "Your devotion • Our responsibility",
  };

  return (
    <div
      className="
        pointer-events-none
        fixed
        bottom-0
        left-0
        right-0
        z-[100]
        flex
        justify-center
        bg-gradient-to-t
        from-[#03070D]
        via-[#03070D]/95
        to-transparent
        px-0
        pb-3
        pt-8
      "
    >
      <div className="pointer-events-auto w-full max-w-[430px] px-4">
        <div className="relative">
          {/* Ambient Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -inset-3
              rounded-[24px]
              bg-[#DFAE45]/10
              blur-2xl
            "
          />

          <Link
            href="/pooja/book"
            className="
              group
              relative
              flex
              h-[62px]
              w-full
              items-center
              gap-3
              overflow-hidden
              rounded-[20px]
              border
              border-[#F3C75F]/40
              bg-gradient-to-r
              from-[#DFAE45]
              via-[#E9B94F]
              to-[#F3C75F]
              px-3
              shadow-[0_10px_35px_rgba(223,174,69,0.25)]
              transition-all
              duration-300
              hover:shadow-[0_14px_42px_rgba(223,174,69,0.35)]
              active:scale-[0.98]
            "
          >
            {/* Animated Shine */}
            <span
              className="
                pointer-events-none
                absolute
                inset-y-0
                -left-16
                w-12
                rotate-12
                bg-white/35
                blur-sm
                transition-all
                duration-700
                group-hover:left-[115%]
              "
            />

            {/* Icon */}
            <div
              className="
                relative
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-[14px]
                border
                border-black/10
                bg-black/10
              "
            >
              <CalendarCheck
                size={22}
                strokeWidth={2}
                className="text-[#080B10]"
              />

              {/* Small Spark */}
              <span
                className="
                  absolute
                  -right-1
                  -top-1
                  flex
                  h-4
                  w-4
                  items-center
                  justify-center
                  rounded-full
                  bg-[#080B10]
                "
              >
                <Sparkles
                  size={8}
                  className="text-[#F3C75F]"
                />
              </span>
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span
                  className="
                    text-[14px]
                    font-bold
                    leading-5
                    text-[#080B10]
                  "
                >
                  {text.title}
                </span>

                {/* Live Indicator */}
                <span
                  className="
                    flex
                    items-center
                    gap-1
                    rounded-full
                    bg-black/10
                    px-1.5
                    py-0.5
                  "
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-700" />

                  <span
                    className="
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-wide
                      text-[#080B10]/70
                    "
                  >
                    {text.live}
                  </span>
                </span>
              </div>

              <p
                className="
                  mt-0.5
                  text-[8px]
                  font-medium
                  text-[#080B10]/60
                "
              >
                {text.subtitle}
              </p>
            </div>

            {/* Arrow */}
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-[13px]
                bg-black/10
                transition-all
                duration-300
                group-hover:bg-black/15
              "
            >
              <ArrowRight
                size={19}
                strokeWidth={2.4}
                className="
                  text-[#080B10]
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                "
              />
            </div>
          </Link>

          {/* Bottom Micro Text */}
          <div className="mt-1.5 flex items-center justify-center gap-1.5">
            <Sparkles
              size={8}
              className="text-[#DFAE45]/60"
            />

            <span
              className="
                text-[7px]
                font-medium
                tracking-wide
                text-gray-600
              "
            >
              {text.responsibility}
            </span>

            <Sparkles
              size={8}
              className="text-[#DFAE45]/60"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


