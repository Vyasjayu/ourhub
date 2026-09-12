"use client";

import Image from "next/image";
import { ShieldCheck, BadgeCheck, Sparkles, ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/banners/hero11.png",
    eyebrow: "AUTHENTIC • TRUSTED • SACRED",
    title: "Divine Blessings\nDelivered to You",
    subtitle: "Book authentic poojas with verified pandits.",
  },
  {
    image: "/banners/hero22.png",
    eyebrow: "LIVE TEMPLE EXPERIENCE",
    title: "Online Temple\nExperience",
    subtitle: "Join live poojas and sacred rituals from home.",
  },
  {
    image: "/banners/hero33.png",
    eyebrow: "VERIFIED PANDITS",
    title: "Book Premium\nPandits",
    subtitle: "Connect with experienced and trusted priests.",
  },
];

export default function HeroSlider() {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-[#080F19] shadow-[0_20px_55px_rgba(0,0,0,0.35)]">

      {/* =====================================================
          GOLD AMBIENT GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute -right-16 -top-16 z-10 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-[55px]" />


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
        className="premium-pooja-swiper"
      >

        {slides.map((item, index) => (
          <SwiperSlide key={index}>

            <div className="relative h-[285px] w-full overflow-hidden">

              {/* =================================================
                  BACKGROUND IMAGE
              ================================================= */}

              <Image
                src={item.image}
                alt={item.title.replace("\n", " ")}
                fill
                priority={index === 0}
                sizes="430px"
                className="object-cover transition-transform duration-[6000ms] ease-out group-hover:scale-[1.03]"
              />


              {/* =================================================
                  CINEMATIC OVERLAY
              ================================================= */}

              <div className="absolute inset-0 bg-gradient-to-r from-[#02050A]/95 via-[#02050A]/60 to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#02050A]/95 via-transparent to-[#02050A]/15" />


              {/* =================================================
                  TOP PREMIUM BADGE
              ================================================= */}

              <div className="absolute left-5 top-5 z-10">

                <div className="flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-black/40 px-3 py-1.5 backdrop-blur-md">

                  <Sparkles
                    size={11}
                    className="text-[#DFAE45]"
                  />

                  <span className="text-[8px] font-bold tracking-[0.16em] text-[#F3D27A]">
                    {item.eyebrow}
                  </span>

                </div>

              </div>


              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-9">

                <h2 className="whitespace-pre-line text-[28px] font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-lg">
                  {item.title}
                </h2>


                <p className="mt-2 max-w-[245px] text-[11px] leading-5 text-gray-300">
                  {item.subtitle}
                </p>


                {/* =================================================
                    TRUST CHIPS
                ================================================= */}

                <div className="mt-3 flex items-center gap-2">

                  <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-2.5 py-1.5 backdrop-blur-md">

                    <ShieldCheck
                      size={12}
                      className="text-[#DFAE45]"
                    />

                    <span className="text-[8px] font-semibold text-white">
                      Verified
                    </span>

                  </div>


                  <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-2.5 py-1.5 backdrop-blur-md">

                    <BadgeCheck
                      size={12}
                      className="text-[#DFAE45]"
                    />

                    <span className="text-[8px] font-semibold text-white">
                      Secure Booking
                    </span>

                  </div>

                </div>


                {/* =================================================
                    CTA
                ================================================= */}

                <button
                  type="button"
                  className="mt-4 flex h-10 items-center gap-2 rounded-xl bg-gradient-to-r from-[#F3C75F] to-[#DFAE45] px-4 text-[11px] font-extrabold text-black shadow-[0_8px_25px_rgba(223,174,69,0.22)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(223,174,69,0.35)] active:scale-95"
                >

                  Book Pooja

                  <ArrowRight
                    size={14}
                    strokeWidth={2.5}
                  />

                </button>

              </div>


              {/* =================================================
                  SLIDE NUMBER
              ================================================= */}

              <div className="absolute bottom-5 right-5 z-10 flex h-7 min-w-7 items-center justify-center rounded-full border border-white/10 bg-black/30 px-2 backdrop-blur-md">

                <span className="text-[8px] font-bold text-gray-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>


      {/* =====================================================
          CUSTOM SWIPER STYLING
      ===================================================== */}

      <style jsx global>{`
        .premium-pooja-swiper .swiper-pagination {
          bottom: 10px !important;
          left: 20px !important;
          width: auto !important;
          text-align: left !important;
        }

        .premium-pooja-swiper .swiper-pagination-bullet {
          width: 5px;
          height: 5px;
          margin: 0 3px !important;
          background: rgba(255, 255, 255, 0.45);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .premium-pooja-swiper .swiper-pagination-bullet-active {
          width: 20px;
          border-radius: 999px;
          background: #dfa e45;
        }
      `}</style>

    </div>
  );
}