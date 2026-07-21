
"use client";

import { useEffect } from "react";
import Link from "next/link";

import {
  X,
  Home,
  Wrench,
  Car,
  Plane,
  Monitor,
  Tractor,
  Sparkles,
  MapPin,
  Building2,
} from "lucide-react";

import { FaOm } from "react-icons/fa6";


const menuItems = [
  {
    name: "Home",
    icon: Home,
    href: "/",
  },
  {
    name: "Religious",
    icon: FaOm,
    href: "/religious",
  },
  {
    name: "Home Service",
    icon: Wrench,
    href: "/home-service",
  },
  {
    name: "Travel",
    icon: Plane,
    href: "/travel",
  },
  {
    name: "Software",
    icon: Monitor,
    href: "/software",
  },
  {
    name: "Agriculture",
    icon: Tractor,
    href: "/agriculture",
  },
  {
    name: "Automobile",
    icon: Car,
    href: "/automobile",
  },
  {
    name: "Construction",
    icon: Building2,
    href: "/construction",
  },
];


interface Props {
  open: boolean;
  onClose: () => void;
}



export default function Sidebar({
  open,
  onClose,
}: Props) {


  useEffect(() => {

    document.body.style.overflow =
      open ? "hidden" : "auto";


    return () => {
      document.body.style.overflow = "auto";
    };

  },[open]);





  return (

    <div

      className={`
      fixed
      inset-0
      z-[999]
      ${
        open
        ? "pointer-events-auto"
        : "pointer-events-none"
      }
      `}

    >




      {/* Overlay */}

      <div

        onClick={onClose}

        className={`
        absolute
        inset-0
        bg-black/70
        transition-opacity
        duration-300

        ${
          open
          ? "opacity-100"
          : "opacity-0"
        }

        `}

      />







      {/* Sidebar Wrapper */}

      <div className="relative h-full max-w-[430px] mx-auto">



        <aside


          className={`

          absolute
          left-0
          top-0

          flex
          h-full
          flex-col


          w-[85%]
          max-w-[330px]


          bg-[#071321]


          text-white


          shadow-2xl


          border-r
          border-slate-700


          transition-transform
          duration-300
          ease-in-out


          ${
            open
            ? "translate-x-0"
            : "-translate-x-full"
          }

          `}


        >








          {/* Header */}

          <div

            className="
            flex
            items-center
            justify-between
            border-b
            border-slate-700
            p-5
            "

          >


            <div>


              <h2

                className="
                text-2xl
                font-bold
                text-yellow-400
                "

              >

                OurHub

              </h2>


              <p

                className="
                mt-1
                text-xs
                text-slate-400
                "

              >

                Smart Service Platform

              </p>


            </div>





            <button

              onClick={onClose}

              className="
              rounded-full
              bg-slate-800
              p-2
              hover:bg-slate-700
              "

            >

              <X size={24}/>

            </button>



          </div>









          {/* User Card */}

          <div

            className="
            mx-4
            mt-5
            rounded-2xl
            border
            border-slate-700
            bg-slate-900
            p-4
            "

          >


            <div

              className="
              flex
              items-center
              gap-3
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
                bg-cyan-400/20
                "

              >

                <Sparkles

                  size={24}

                  className="text-cyan-400"

                />

              </div>




              <div>

                <h3

                  className="
                  text-sm
                  font-semibold
                  "

                >

                  Welcome Guest

                </h3>



                <p

                  className="
                  flex
                  items-center
                  gap-1
                  text-xs
                  text-slate-400
                  "

                >

                  <MapPin size={12}/>

                  Services near you

                </p>


              </div>



            </div>


          </div>









          {/* Menu */}

          <nav

            className="
            mt-5
            flex-1
            overflow-y-auto
            px-4
            pb-5
            "

          >


            <div className="space-y-2">


            {
              menuItems.map((item)=>{


                const Icon = item.icon;


                return (

                  <Link

                    key={item.name}

                    href={item.href}

                    onClick={onClose}


                    className="

                    group

                    flex
                    items-center
                    gap-4

                    rounded-xl

                    border
                    border-transparent

                    bg-slate-900/70

                    p-3

                    text-slate-300


                    transition-all


                    hover:border-yellow-400/40

                    hover:bg-yellow-400

                    hover:text-black

                    "

                  >



                    <div

                      className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      bg-slate-800
                      group-hover:bg-black/10
                      "

                    >

                      <Icon size={21}/>


                    </div>





                    <span

                      className="
                      text-sm
                      font-medium
                      "

                    >

                      {item.name}

                    </span>



                  </Link>

                );


              })
            }


            </div>


          </nav>









          {/* Bottom Premium Card */}

          <div

            className="
            m-4
            rounded-2xl
            border
            border-yellow-400/30
            bg-slate-900
            p-4
            "

          >

            <div

              className="
              flex
              items-center
              gap-2
              "

            >

              <Sparkles

                size={20}

                className="text-yellow-400"

              />


              <p

                className="
                text-sm
                text-white
                "

              >

                Premium Services

              </p>


            </div>


          </div>





        </aside>



      </div>



    </div>


  );

}