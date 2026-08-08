"use client";

import Image from "next/image";
import { ShieldCheck, BadgeCheck } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/banners/hero11.png",
    title: "Divine Blessings\nDelivered to You",
    subtitle: "Book authentic poojas with verified pandits",
  },
  {
    image: "/banners/hero22.png",
    title: "Online Temple\nExperience",
    subtitle: "Join live poojas from your home",
  },
  {
    image: "/banners/hero33.png",
    title: "Book Premium\nPandits",
    subtitle: "Verified experienced priests",
  },
];

export default function HeroSlider() {
  return (
    <div className="mt-5 overflow-hidden rounded-3xl border border-yellow-500/20 shadow-xl">

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>

            <div className="relative h-[220px] w-full">

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="430px"
                priority={index === 0}
              />

              {/* Overlay */}

              {/* <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" /> */}

              {/* Content */}

              {/* <div className="absolute inset-0 flex flex-col justify-center px-5">

                <h2 className="whitespace-pre-line text-2xl font-bold leading-tight text-white">
                  {item.title}
                </h2>

                <p className="mt-2 max-w-[220px] text-xs leading-5 text-gray-300">
                  {item.subtitle}
                </p>

                {/* Features */}

                <div className="mt-4 flex flex-wrap gap-3">

                  <div className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 backdrop-blur">

                    <ShieldCheck
                      size={14}
                      className="text-yellow-400"
                    />

                    <span className="text-[10px] text-white">
                      Verified
                    </span>

                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 backdrop-blur">

                    <BadgeCheck
                      size={14}
                      className="text-yellow-400"
                    />

                    <span className="text-[10px] text-white">
                      Secure
                    </span>

                  </div>

                </div>

                {/* Button */}

                <button className="mt-5 h-11 w-40 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-sm font-bold text-black shadow-lg transition active:scale-95">
                  Book Pooja
                </button>

              {/* </div> */}

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}