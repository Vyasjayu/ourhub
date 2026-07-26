"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { banners } from "@/data/banners";

export default function HeroSlider() {
  return (
    <section className="mt-4">

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop
        speed={900}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="heroSwiper rounded-[28px]"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>

            <Link href={banner.link}>

              <div className="relative h-[220px] overflow-hidden rounded-[28px]">

                {/* Banner */}

                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  priority
                  className="object-cover"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

              </div>

            </Link>

          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`

.heroSwiper{
overflow:hidden;
}

.heroSwiper .swiper-pagination{
bottom:12px!important;
}

.heroSwiper .swiper-pagination-bullet{
background:#888;
opacity:1;
width:8px;
height:8px;
transition:.35s;
}

.heroSwiper .swiper-pagination-bullet-active{
background:#FFC107;
width:28px;
border-radius:20px;
}

.heroSwiper .swiper-button-next,
.heroSwiper .swiper-button-prev{

width:40px;
height:40px;
border-radius:999px;

background:rgba(255,255,255,.18);

backdrop-filter:blur(12px);

color:white;

}

.heroSwiper .swiper-button-next:after,
.heroSwiper .swiper-button-prev:after{

font-size:15px;
font-weight:bold;

}

.heroSwiper img{

transition:1.2s;

}

.heroSwiper .swiper-slide-active img{

transform:scale(1.03);

}

`}</style>
    </section>
  );
}