
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  BadgeCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { useLanguage } from "@/context/LanguageContext";

const slides = [
  {
    image: "/banners/hero11.png",

    en: {
      eyebrow: "AUTHENTIC • TRUSTED • SACRED",
      title: "Divine Blessings\nDelivered to You",
      subtitle: "Book authentic poojas with verified pandits.",
      cta: "Book Pooja",
    },

    hi: {
      eyebrow: "प्रामाणिक • विश्वसनीय • पवित्र",
      title: "दिव्य आशीर्वाद\nआपके द्वार",
      subtitle: "प्रमाणित पंडितों के साथ प्रामाणिक पूजा बुक करें।",
      cta: "पूजा बुक करें",
    },

    href: "/religious/pooja",
  },

  {
    image: "/banners/hero22.png",

    en: {
      eyebrow: "LIVE TEMPLE EXPERIENCE",
      title: "Online Temple\nExperience",
      subtitle: "Join live poojas and sacred rituals from home.",
      cta: "Explore Pooja",
    },

    hi: {
      eyebrow: "लाइव मंदिर अनुभव",
      title: "ऑनलाइन मंदिर\nअनुभव",
      subtitle: "घर बैठे लाइव पूजा और पवित्र अनुष्ठानों से जुड़ें।",
      cta: "पूजा देखें",
    },

    href: "/religious/pooja/online",
  },

  {
    image: "/banners/hero33.png",

    en: {
      eyebrow: "VERIFIED PANDITS",
      title: "Book Premium\nPandits",
      subtitle: "Connect with experienced and trusted priests.",
      cta: "Book Pandit",
    },

    hi: {
      eyebrow: "प्रमाणित पंडित",
      title: "अनुभवी पंडित\nबुक करें",
      subtitle: "अनुभवी और विश्वसनीय पंडितों से जुड़ें।",
      cta: "पंडित बुक करें",
    },

    href: "/religious/pandit",
  },
];

export default function HeroSlider() {
  const { language } = useLanguage();

  return (
    <div className="premium-pooja-hero">
      <div className="premium-pooja-glow" />

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        loop
        speed={800}
        className="premium-pooja-swiper"
      >
        {slides.map((item, index) => {
          const content = language === "hi" ? item.hi : item.en;

          return (
            <SwiperSlide key={item.image}>
              <div className="relative h-[285px] w-full overflow-hidden">

                {/* Background */}
                <Image
                  src={item.image}
                  alt={content.title.replace("\n", " ")}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 430px) 100vw, 430px"
                  className="object-cover transition-transform duration-[6000ms] ease-out"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#02050A]/95 via-[#02050A]/60 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#02050A]/95 via-transparent to-[#02050A]/15" />

                {/* Premium badge */}
                <div className="absolute left-5 top-5 z-10">
                  <div className="flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-black/40 px-3 py-1.5 backdrop-blur-md">

                    <Sparkles
                      size={11}
                      strokeWidth={2.2}
                      className="text-[#DFAE45]"
                    />

                    <span className="text-[8px] font-bold tracking-[0.14em] text-[#F3D27A]">
                      {content.eyebrow}
                    </span>

                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-9">

                  <h2 className="whitespace-pre-line text-[28px] font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-lg">
                    {content.title}
                  </h2>

                  <p className="mt-2 max-w-[260px] text-[11px] leading-5 text-gray-300">
                    {content.subtitle}
                  </p>

                  {/* Trust chips */}
                  <div className="mt-3 flex items-center gap-2">

                    <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-2.5 py-1.5 backdrop-blur-md">
                      <ShieldCheck
                        size={12}
                        strokeWidth={2.3}
                        className="text-[#DFAE45]"
                      />

                      <span className="text-[8px] font-semibold text-white">
                        {language === "hi" ? "प्रमाणित" : "Verified"}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-2.5 py-1.5 backdrop-blur-md">
                      <BadgeCheck
                        size={12}
                        strokeWidth={2.3}
                        className="text-[#DFAE45]"
                      />

                      <span className="text-[8px] font-semibold text-white">
                        {language === "hi"
                          ? "सुरक्षित बुकिंग"
                          : "Secure Booking"}
                      </span>
                    </div>

                  </div>

                  {/* CTA */}
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex h-10 items-center gap-2 rounded-xl bg-gradient-to-r from-[#F3C75F] to-[#DFAE45] px-4 text-[11px] font-extrabold text-black shadow-[0_8px_25px_rgba(223,174,69,0.22)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(223,174,69,0.35)] active:scale-95"
                  >
                    <span>{content.cta}</span>

                    <ArrowRight
                      size={14}
                      strokeWidth={2.5}
                    />
                  </Link>
                </div>

                {/* Slide number */}
                <div className="absolute bottom-5 right-5 z-10 flex h-7 min-w-7 items-center justify-center rounded-full border border-white/10 bg-black/30 px-2 backdrop-blur-md">
                  <span className="text-[8px] font-bold text-gray-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

