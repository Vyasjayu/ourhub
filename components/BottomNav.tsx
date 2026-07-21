"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  Search,
  CalendarCheck,
  User,
  Grid2X2,
} from "lucide-react";


const navItems = [

  {
    name: "Home",
    icon: Home,
    href: "/",
  },

  {
    name: "Services",
    icon: Grid2X2,
    href: "/services",
  },

  {
    name: "Search",
    icon: Search,
    href: "/search",
  },

  {
    name: "Bookings",
    icon: CalendarCheck,
    href: "/bookings",
  },

  {
    name: "Profile",
    icon: User,
    href: "/profile",
  },

];



export default function BottomNav() {


  const pathname = usePathname();



  return (

    <nav

      className="
      fixed
      bottom-0
      left-0
      right-0
      z-[9999]
      h-20
      w-full
      border-t
      border-slate-700
      bg-[#071321]
      shadow-[0_-5px_20px_rgba(0,0,0,0.4)]
      "

    >


      <div

        className="
        mx-auto
        flex
        h-full
        max-w-md
        items-center
        justify-around
        px-2
        "

      >



        {
          navItems.map((item)=>{


            const Icon = item.icon;


            const active =
              pathname === item.href;



            return (

              <Link

                key={item.name}

                href={item.href}

                className="
                flex
                flex-1
                flex-col
                items-center
                justify-center
                gap-1
                "

              >



                <div

                  className={`
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    active
                    ? "bg-cyan-400/20"
                    : "bg-transparent"
                  }

                  `}

                >


                  <Icon

                    size={23}

                    className={

                      active
                      ? "text-cyan-400"
                      : "text-slate-400"

                    }

                  />


                </div>





                <span

                  className={`

                  text-[11px]
                  font-medium

                  ${
                    active
                    ? "text-cyan-400"
                    : "text-slate-400"
                  }

                  `}

                >

                  {item.name}

                </span>



              </Link>

            );


          })
        }



      </div>


    </nav>

  );

}