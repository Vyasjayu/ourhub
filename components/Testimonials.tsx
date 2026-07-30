"use client";

import Image from "next/image";
import { Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    city: "Indore",
    image: "/images/testimonials/user1.jpg",
    review:
      "Excellent service! Booking was quick and the pandit arrived on time. Highly recommended.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Verma",
    city: "Bhopal",
    image: "/images/testimonials/user2.jpg",
    review:
      "Booked AC repair through OurHub. Very professional and affordable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    city: "Ujjain",
    image: "/images/testimonials/user3.jpg",
    review:
      "Very smooth experience. Secure payment and excellent customer support.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="mt-8">

      {/* Heading */}

      <div className="mb-6 text-center">

        <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-300">
          CUSTOMER REVIEWS
        </span>

        <h2 className="mt-3 text-2xl font-bold text-white">
          What Our Customers Say
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Trusted by thousands of happy customers.
        </p>

      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1.1}
        spaceBetween={16}
        centeredSlides
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="testimonialSwiper"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>

            <div
              className="
                rounded-3xl
                border
                border-yellow-500/20
                bg-[#111827]
                p-5
                shadow-lg
              "
            >
              {/* User */}

              <div className="flex items-center gap-4">

                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-yellow-400 object-cover"
                />

                <div>

                  <h3 className="font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {item.city}
                  </p>

                  <div className="mt-2 flex gap-1">
                    {[...Array(item.rating)].map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                </div>

              </div>

              {/* Review */}

              <p className="mt-5 text-sm leading-7 text-slate-300">
                "{item.review}"
              </p>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}