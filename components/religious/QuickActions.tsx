"use client";

import Link from "next/link";

import {
  Flower2,
  UserRound,
  Sparkles,
  Home,
  CalendarDays,
  ScrollText,
} from "lucide-react";


const actions = [
  {
    title: "Book Pooja",
    subtitle: "Online Puja",
    icon: Flower2,
    link: "/pooja",
  },
  {
    title: "Talk Pandit",
    subtitle: "Consult Now",
    icon: UserRound,
    link: "/religious/pandit",
  },
  {
    title: "Kundli",
    subtitle: "Match & Analysis",
    icon: ScrollText,
    link: "/religious/kundli",
  },
  {
    title: "Astrology",
    subtitle: "Get Guidance",
    icon: Sparkles,
    link: "/religious/astrology",
  },
  {
    title: "Vastu",
    subtitle: "Home Energy",
    icon: Home,
    link: "/religious/vastu",
  },
  {
    title: "Festivals",
    subtitle: "Upcoming",
    icon: CalendarDays,
    link: "/religious/festivals",
  },
];


export default function QuickActions() {
  return (
    <section className="px-3 mt-5">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">

        <div>
          <h2 className="
          text-lg 
          font-bold 
          text-white
          ">
            Quick Actions
          </h2>

          <p className="
          text-xs 
          text-gray-400
          ">
            Explore religious services
          </p>
        </div>


        <Link
          href="/religious/services"
          className="
          text-xs
          text-yellow-400
          font-medium
          "
        >
          View All
        </Link>

      </div>



      {/* Action Grid */}

      <div
      className="
      grid
      grid-cols-3
      gap-3
      "
      >

        {
          actions.map((item,index)=>{

            const Icon = item.icon;

            return (

              <Link
              key={index}
              href={item.link}
              className="
              group
              rounded-2xl
              border
              border-yellow-500/20
              bg-white/5
              backdrop-blur-xl
              p-3
              text-center
              hover:border-yellow-400/50
              transition
              "
              >


                {/* Icon */}

                <div
                className="
                mx-auto
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
                bg-gradient-to-br
                from-yellow-400
                to-orange-500
                shadow-lg
                shadow-yellow-500/20
                group-hover:scale-110
                transition
                "
                >

                  <Icon
                  size={22}
                  className="
                  text-black
                  "
                  />

                </div>



                {/* Text */}

                <h3
                className="
                mt-2
                text-xs
                font-semibold
                text-white
                "
                >
                  {item.title}
                </h3>


                <p
                className="
                text-[10px]
                text-gray-400
                mt-1
                "
                >
                  {item.subtitle}
                </p>


              </Link>

            )

          })
        }

      </div>


    </section>
  );
}