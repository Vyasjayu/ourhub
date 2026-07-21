"use client";

import Link from "next/link";
import {
  Star,
  MapPin,
  ArrowRight,
  Wrench,
  Car,
  Plane,
  Monitor,
  Home,
} from "lucide-react";


const trendingServices = [
  {
    id: 1,
    title: "Home Cleaning",
    category: "Home Service",
    price: "₹499",
    rating: "4.8",
    location: "Near You",
    icon: Home,
    color: "text-orange-400",
    href: "/home-service",
  },

  {
    id: 2,
    title: "Car Repair",
    category: "Automobile",
    price: "₹799",
    rating: "4.7",
    location: "Nearby",
    icon: Car,
    color: "text-red-400",
    href: "/automobile",
  },

  {
    id: 3,
    title: "Website Development",
    category: "Software",
    price: "₹4999",
    rating: "4.9",
    location: "Online",
    icon: Monitor,
    color: "text-cyan-400",
    href: "/software",
  },

  {
    id: 4,
    title: "Travel Package",
    category: "Travel",
    price: "₹2999",
    rating: "4.6",
    location: "India",
    icon: Plane,
    color: "text-green-400",
    href: "/travel",
  },

  {
    id: 5,
    title: "Repair Tools",
    category: "Tools",
    price: "₹299",
    rating: "4.5",
    location: "Nearby",
    icon: Wrench,
    color: "text-yellow-400",
    href: "/tools",
  },
];



export default function TrendingServices() {


  return (

    <section className="mt-8 px-4">


      {/* Header */}

      <div className="mb-4 flex items-center justify-between">


        <h2 className="text-xl font-bold text-white">
          Trending Services
        </h2>


        <Link
          href="/services"
          className="flex items-center gap-1 text-sm text-cyan-400"
        >
          View All
          <ArrowRight size={15}/>
        </Link>


      </div>





      {/* Horizontal Cards */}

      <div
        className="
        flex
        gap-4
        overflow-x-auto
        pb-3
        scrollbar-hide
        "
      >


        {trendingServices.map((service)=>{


          const Icon = service.icon;


          return (

            <Link
              href={service.href}
              key={service.id}
              className="
              min-w-[230px]
              rounded-2xl
              border
              border-slate-700
              bg-slate-900
              p-4
              transition
              hover:scale-105
              "
            >


              {/* Icon */}

              <div
                className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-slate-800
                "
              >

                <Icon
                  size={30}
                  className={service.color}
                />

              </div>




              <h3
                className="
                mt-4
                text-base
                font-semibold
                text-white
                "
              >
                {service.title}
              </h3>




              <p
                className="
                mt-1
                text-sm
                text-slate-400
                "
              >
                {service.category}
              </p>





              {/* Rating */}

              <div
                className="
                mt-3
                flex
                items-center
                justify-between
                "
              >


                <div
                  className="
                  flex
                  items-center
                  gap-1
                  text-sm
                  text-yellow-400
                  "
                >

                  <Star
                    size={15}
                    fill="currentColor"
                  />

                  {service.rating}

                </div>



                <span
                  className="
                  text-sm
                  font-semibold
                  text-cyan-400
                  "
                >
                  {service.price}
                </span>


              </div>





              {/* Location */}

              <div
                className="
                mt-3
                flex
                items-center
                gap-1
                text-xs
                text-slate-400
                "
              >

                <MapPin size={13}/>

                {service.location}

              </div>



            </Link>

          );


        })}


      </div>


    </section>

  );

}