"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { banners } from "@/data/banners";

export default function HeroSlider() {
  return (
    <section className="mt-4">

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop
        speed={800}
        navigation
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="heroSwiper overflow-hidden rounded-[24px]"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Link href={banner.link}>

              <div className="relative h-[190px] overflow-hidden rounded-[24px] border border-yellow-500/30">

    <Image
        src={banner.image}
        alt={banner.title}
        fill
        priority
        sizes="100vw"
        className="object-fill"
    />

</div>

            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}