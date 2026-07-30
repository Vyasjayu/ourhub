"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


const offers = [
  {
    id: 1,
    title: "Special Maha Shivratri Pooja",
    subtitle: "Book Online Pooja with Experienced Pandit Ji",
    discount: "20% OFF",
    image: "/images/offers/shiv-pooja.jpg",
    link: "/religious/pooja/mahashivratri",
  },

  {
    id: 2,
    title: "Get Kundli Analysis",
    subtitle: "Expert Astrology Consultation",
    discount: "₹99 Starting",
    image: "/images/offers/kundli.jpg",
    link: "/religious/kundli",
  },

  {
    id: 3,
    title: "Home Vastu Consultation",
    subtitle: "Bring Positive Energy To Your Home",
    discount: "30% OFF",
    image: "/images/offers/vastu.jpg",
    link: "/religious/vastu",
  },

  {
    id: 4,
    title: "Book Trusted Pandit Ji",
    subtitle: "Pooja At Your Home Or Online",
    discount: "Limited Offer",
    image: "/images/offers/pandit.jpg",
    link: "/religious/pandit",
  },
];


export default function OfferSlider() {

  return (

    <section className="mt-6 px-3">


      {/* Heading */}

      <div className="flex justify-between items-center mb-4">

        <div>

          <h2
          className="
          text-lg
          font-bold
          text-white
          "
          >
            Special Offers
          </h2>


          <p
          className="
          text-xs
          text-gray-400
          "
          >
            Save more on spiritual services
          </p>

        </div>


      </div>



      <Swiper

        modules={[
          Autoplay,
          Pagination
        ]}

        autoplay={{
          delay:3500,
          disableOnInteraction:false,
        }}

        pagination={{
          clickable:true
        }}

        spaceBetween={14}

        slidesPerView={1}

        loop={true}

        className="
        offerSwiper
        "

      >


        {
          offers.map((offer)=>(


            <SwiperSlide key={offer.id}>


              <div
              className="
              relative
              h-44
              overflow-hidden
              rounded-3xl
              border
              border-yellow-500/20
              bg-[#071424]
              shadow-xl
              "
              >


                {/* Image */}

                <Image

                src={offer.image}

                alt={offer.title}

                fill

                className="
                object-cover
                opacity-60
                "

                />


                {/* Overlay */}

                <div
                className="
                absolute
                inset-0
                bg-gradient-to-r
                from-black/90
                via-black/50
                to-transparent
                "
                />




                {/* Content */}

                <div
                className="
                relative
                z-10
                p-5
                w-[75%]
                "
                >


                  <span
                  className="
                  inline-block
                  px-3
                  py-1
                  rounded-full
                  bg-yellow-400
                  text-black
                  text-[11px]
                  font-bold
                  "
                  >

                    {offer.discount}

                  </span>



                  <h3
                  className="
                  mt-3
                  text-lg
                  font-bold
                  text-white
                  leading-tight
                  "
                  >

                    {offer.title}

                  </h3>



                  <p
                  className="
                  mt-2
                  text-xs
                  text-gray-300
                  "
                  >

                    {offer.subtitle}

                  </p>



                  <button

                  className="
                  mt-4
                  px-4
                  py-2
                  rounded-full
                  bg-gradient-to-r
                  from-yellow-400
                  to-orange-500
                  text-black
                  text-xs
                  font-semibold
                  "

                  >

                    Book Now

                  </button>



                </div>


              </div>


            </SwiperSlide>


          ))
        }


      </Swiper>


    </section>

  );

}