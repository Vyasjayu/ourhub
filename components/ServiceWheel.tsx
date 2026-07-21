"use client";

import Link from "next/link";
import {
  Home,
  Car,
  Plane,
  Wrench,
  Monitor,
  Tractor,
  Building2,
  Landmark,
} from "lucide-react";
import { FaOm } from "react-icons/fa6";

const services = [
  {
    name: "Religious",
    icon: FaOm,
    color: "#FF9F1C",
    href: "/religious",
  },
  {
    name: "Travel",
    icon: Plane,
    color: "#34D399",
    href: "/travel",
  },
  {
    name: "Software",
    icon: Monitor,
    color: "#38BDF8",
    href: "/software",
  },
  {
    name: "Construction",
    icon: Building2,
    color: "#FBBF24",
    href: "/construction",
  },
  {
    name: "Automobile",
    icon: Car,
    color: "#EF4444",
    href: "/automobile",
  },
  {
    name: "Agriculture",
    icon: Tractor,
    color: "#22C55E",
    href: "/agriculture",
  },
  {
    name: "Home Service",
    icon: Home,
    color: "#FB923C",
    href: "/home-service",
  },
  {
    name: "Tools",
    icon: Wrench,
    color: "#06B6D4",
    href: "/tools",
  },
];

export default function ServiceWheel() {
  const radius = 125;

  return (
    <section className="mt-8 px-4">

      <div className="mx-auto max-w-md">

        <div className="relative flex items-center justify-center">

          {/* Glow */}
          <div className="absolute h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-3xl" />


          {/* Outer Ring */}
          <div
            className="relative h-[340px] w-[340px] rounded-full p-[4px]"
            style={{
              background:
                "conic-gradient(from 180deg,#06b6d4,#facc15,#06b6d4,#22c55e,#06b6d4)",
            }}
          >

            <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#071321]">


              {/* Inner Circle */}
              <div className="absolute h-[230px] w-[230px] rounded-full border border-slate-600" />


              {/* Center Icon */}
              <div className="relative z-20 flex h-36 w-36 items-center justify-center rounded-full border-4 border-yellow-400 bg-slate-900 shadow-[0_0_35px_rgba(250,204,21,0.4)]">

                <div className="grid grid-cols-2 gap-4">

                  <Landmark
                    size={30}
                    className="text-yellow-400"
                  />

                  <Monitor
                    size={30}
                    className="text-cyan-400"
                  />

                  <Home
                    size={30}
                    className="text-blue-400"
                  />

                  <Wrench
                    size={30}
                    className="text-orange-400"
                  />

                </div>

              </div>



              {/* Circular Services */}
              {services.map((service, index) => {

                const angle =
                  (index / services.length) * Math.PI * 2 -
                  Math.PI / 2;


                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);


                const Icon = service.icon;


                return (

                  <Link
                    key={service.name}
                    href={service.href}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >

                    <div
                      className="group flex h-16 w-16 items-center justify-center rounded-full border border-slate-700 bg-slate-900 shadow-lg transition duration-300 hover:scale-110"
                      style={{
                        boxShadow: `0 0 20px ${service.color}50`,
                      }}
                    >

                      <Icon
                        size={28}
                        style={{
                          color: service.color,
                        }}
                        className="transition-transform duration-300 group-hover:scale-125"
                      />

                    </div>

                  </Link>

                );

              })}


            </div>

          </div>

        </div>



        {/* Bottom Service Cards */}

        <div className="mt-8 grid grid-cols-2 gap-3">

          {services.map((service)=>{

            const Icon = service.icon;

            return (

              <Link
                key={service.name}
                href={service.href}
                className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/70 p-3 transition hover:border-cyan-400"
              >

                <Icon
                  size={22}
                  style={{
                    color: service.color,
                  }}
                />


                <span className="text-sm font-medium text-white">
                  {service.name}
                </span>


              </Link>

            );

          })}

        </div>


      </div>

    </section>
  );
}