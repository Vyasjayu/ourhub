"use client";

import Image from "next/image";
import { Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { useLanguage } from "@/context/LanguageContext";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    city: "Indore",
    image: "/images/testimonials/user1.jpg",
    review: {
      en: "Excellent service! Booking was quick and the pandit arrived on time. Highly recommended.",
      hi: "बेहतरीन सर्विस! बुकिंग बहुत जल्दी हो गई और पंडित जी समय पर पहुंचे। बहुत अच्छा अनुभव रहा।",
    },
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Verma",
    city: "Bhopal",
    image: "/images/testimonials/user2.jpg",
    review: {
      en: "Booked AC repair through OurHub. Very professional and affordable.",
      hi: "OurHub के जरिए AC रिपेयर बुक किया। सर्विस बहुत प्रोफेशनल और किफायती थी।",
    },
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    city: "Ujjain",
    image: "/images/testimonials/user3.jpg",
    review: {
      en: "Very smooth experience. Secure payment and excellent customer support.",
      hi: "बहुत शानदार अनुभव रहा। पेमेंट सुरक्षित था और कस्टमर सपोर्ट भी बेहतरीन था।",
    },
    rating: 5,
  },
];

export default function Testimonials() {
  const { language } = useLanguage();

  const isHindi = language === "hi";

  const t = {
    badge: isHindi
      ? "ग्राहकों की समीक्षाएं"
      : "CUSTOMER REVIEWS",

    title: isHindi
      ? "हमारे ग्राहक क्या कहते हैं"
      : "What Our Customers Say",

    subtitle: isHindi
      ? "हजारों संतुष्ट ग्राहकों का भरोसा।"
      : "Trusted by thousands of happy customers.",
  };

  return (
    <section className="mt-8">
      {/* ================= HEADING ================= */}

      <div className="mb-6 text-center">
        <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-300">
          {t.badge}
        </span>

        <h2 className="mt-3 text-2xl font-bold text-white">
          {t.title}
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          {t.subtitle}
        </p>
      </div>

      {/* ================= TESTIMONIAL SLIDER ================= */}

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
              {/* ================= USER ================= */}

              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="
                    rounded-full
                    border-2
                    border-yellow-400
                    object-cover
                  "
                />

                <div>
                  <h3 className="font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {item.city}
                  </p>

                  {/* Rating */}

                  <div className="mt-2 flex gap-1">
                    {[...Array(item.rating)].map(
                      (_, index) => (
                        <Star
                          key={index}
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* ================= REVIEW ================= */}

              <p className="mt-5 text-sm leading-7 text-slate-300">
                "{item.review[language]}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}