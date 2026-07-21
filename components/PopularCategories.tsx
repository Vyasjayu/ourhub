"use client";

import Link from "next/link";
import {
  Home,
  Car,
  Plane,
  Monitor,
  Building2,
  Tractor,
  Wrench,
  Sparkles,
} from "lucide-react";


const categories = [
  {
    name: "Home Service",
    icon: Home,
    color: "text-orange-400",
    href: "/home-service",
  },
  {
    name: "Automobile",
    icon: Car,
    color: "text-red-400",
    href: "/automobile",
  },
  {
    name: "Travel",
    icon: Plane,
    color: "text-green-400",
    href: "/travel",
  },
  {
    name: "Software",
    icon: Monitor,
    color: "text-cyan-400",
    href: "/software",
  },
  {
    name: "Construction",
    icon: Building2,
    color: "text-yellow-400",
    href: "/construction",
  },
  {
    name: "Agriculture",
    icon: Tractor,
    color: "text-green-500",
    href: "/agriculture",
  },
  {
    name: "Tools",
    icon: Wrench,
    color: "text-blue-400",
    href: "/tools",
  },
  {
    name: "More",
    icon: Sparkles,
    color: "text-purple-400",
    href: "/services",
  },
];


export default function PopularCategories() {

  return (

    <section className="mt-8 px-4">

      <div className="flex items-center justify-between mb-4">

        <h2 className="text-xl font-bold text-white">
          Popular Categories
        </h2>


        <Link
          href="/services"
          className="text-sm text-cyan-400"
        >
          View All
        </Link>

      </div>



      <div className="grid grid-cols-4 gap-3">

        {categories.map((item)=>{

          const Icon = item.icon;


          return (

            <Link
              href={item.href}
              key={item.name}
              className="
              flex
              flex-col
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-700
              bg-slate-900
              p-3
              transition
              hover:scale-105
              "
            >

              <div
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-slate-800
                "
              >

                <Icon
                  size={25}
                  className={item.color}
                />

              </div>


              <span
                className="
                mt-2
                text-center
                text-xs
                text-slate-200
                "
              >
                {item.name}
              </span>


            </Link>

          );

        })}

      </div>


    </section>

  );

}