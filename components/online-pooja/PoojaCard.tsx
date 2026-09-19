"use client";

import Image from "next/image";
import Link from "next/link";
import {
ArrowRight,
CheckCircle2,
Clock3,
Sparkles,
Star,
Video,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
title: string;
description: string;
duration: string;
price: string;
image: string;
}

export default function PoojaCard({
title,
description,
duration,
price,
image,
}: Props) {
const { language } = useLanguage();
const isHindi = language === "hi";

const text = {
sacred: isHindi ? "पवित्र" : "SACRED",
verified: isHindi ? "प्रमाणित" : "VERIFIED",
online: isHindi ? "ऑनलाइन" : "Online",
liveRitual: isHindi ? "लाइव अनुष्ठान" : "Live Ritual",
startingFrom: isHindi ? "शुरुआत" : "Starting From",
bookNow: isHindi ? "अभी बुक करें" : "Book Now",
imageAlt: isHindi
? `${title} - पूजा सेवा`
: `${title} - Pooja Service`,
};

return ( <article
   className="
     group
     relative
     overflow-hidden
     rounded-[25px]
     border
     border-white/[0.07]
     bg-gradient-to-br
     from-[#0D1A2B]
     via-[#0A1422]
     to-[#070D16]
     shadow-[0_15px_45px_rgba(0,0,0,0.32)]
     transition-all
     duration-300
     hover:-translate-y-1
     hover:border-[#DFAE45]/30
     hover:shadow-[0_20px_55px_rgba(0,0,0,0.45)]
   "
 >
{/* Ambient Card Glow */} <div
     className="
       pointer-events-none
       absolute
       -right-16
       -top-16
       h-36
       w-36
       rounded-full
       bg-[#DFAE45]/7
       blur-3xl
       transition-all
       duration-500
       group-hover:bg-[#DFAE45]/12
     "
   />

```
  <div className="relative flex min-h-[158px]">
    {/* ================= IMAGE ================= */}
    <div className="relative h-[158px] w-[125px] shrink-0 overflow-hidden">
      <Image
        src={image}
        alt={text.imageAlt}
        fill
        sizes="125px"
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-[#07111D]/80" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

      {/* Sacred Badge */}
      <div
        className="
          absolute
          left-2.5
          top-2.5
          flex
          items-center
          gap-1
          rounded-full
          border
          border-white/15
          bg-black/45
          px-2
          py-1
          backdrop-blur-md
        "
      >
        <Sparkles
          size={9}
          className="text-[#DFAE45]"
        />

        <span className="text-[7px] font-semibold tracking-wide text-white">
          {text.sacred}
        </span>
      </div>

      {/* Verified */}
      <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 rounded-full border border-emerald-400/20 bg-black/50 px-2 py-1 backdrop-blur-md">
        <CheckCircle2
          size={9}
          className="text-emerald-400"
        />

        <span className="text-[7px] font-medium text-white/80">
          {text.verified}
        </span>
      </div>
    </div>

    {/* ================= CONTENT ================= */}
    <div className="flex min-w-0 flex-1 flex-col justify-between p-3">
      {/* Top Content */}
      <div className="min-w-0">
        {/* Online + Rating */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="flex h-5 items-center gap-1 rounded-full border border-emerald-400/15 bg-emerald-400/5 px-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

              <span className="text-[7px] font-semibold uppercase tracking-wide text-emerald-400">
                {text.online}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Star
              size={9}
              fill="currentColor"
              className="text-[#DFAE45]"
            />

            <span className="text-[8px] font-semibold text-gray-300">
              4.9
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-2 line-clamp-1 text-[14px] font-bold leading-5 text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-1 line-clamp-2 text-[9px] leading-4 text-gray-500">
          {description}
        </p>

        {/* Meta */}
        <div className="mt-2.5 flex items-center gap-2">
          {/* Duration */}
          <div className="flex items-center gap-1 rounded-lg bg-white/[0.035] px-1.5 py-1">
            <Clock3
              size={10}
              className="text-[#DFAE45]"
            />

            <span className="text-[8px] text-gray-400">
              {duration}
            </span>
          </div>

          {/* Live Ritual */}
          <div className="flex items-center gap-1 rounded-lg bg-white/[0.035] px-1.5 py-1">
            <Video
              size={10}
              className="text-[#DFAE45]"
            />

            <span className="text-[8px] text-gray-400">
              {text.liveRitual}
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-2.5 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

      {/* Bottom */}
      <div className="flex items-end justify-between gap-2">
        {/* Price */}
        <div>
          <p className="text-[7px] uppercase tracking-[0.14em] text-gray-600">
            {text.startingFrom}
          </p>

          <div className="mt-0.5 flex items-baseline gap-0.5">
            <span className="text-[8px] font-medium text-gray-500">
              ₹
            </span>

            <span className="text-[17px] font-bold leading-none text-[#DFAE45]">
              {price}
            </span>
          </div>
        </div>

        {/* Book Button */}
        <Link
          href="/pooja/book"
          className="
            group/button
            flex
            items-center
            gap-1.5
            rounded-xl
            bg-gradient-to-r
            from-[#DFAE45]
            to-[#F3C75F]
            px-3
            py-2.5
            text-[9px]
            font-bold
            text-[#080B10]
            shadow-[0_6px_18px_rgba(223,174,69,0.15)]
            transition-all
            duration-300
            hover:shadow-[0_8px_24px_rgba(223,174,69,0.3)]
            active:scale-95
          "
        >
          {text.bookNow}

          <ArrowRight
            size={11}
            strokeWidth={2.5}
            className="
              transition-transform
              duration-300
              group-hover/button:translate-x-0.5
            "
          />
        </Link>
      </div>
    </div>
  </div>

  {/* Bottom Gold Accent */}
  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
</article>


);
}
