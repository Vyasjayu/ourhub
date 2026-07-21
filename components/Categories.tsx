"use client";

import {
  Home,
  Wrench,
  Plane,
  Building2,
  Tractor,
  Car,
  MonitorSmartphone,
  Paintbrush,
  Megaphone,
  Landmark,
  Hammer,
  HeartHandshake,
} from "lucide-react";

const categories = [
  {
    title: "Religious",
    icon: Landmark,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Home Service",
    icon: Home,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Travel",
    icon: Plane,
    color: "from-sky-500 to-indigo-500",
  },
  {
    title: "Software",
    icon: MonitorSmartphone,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Agriculture",
    icon: Tractor,
    color: "from-green-500 to-lime-500",
  },
  {
    title: "Automobile",
    icon: Car,
    color: "from-gray-500 to-slate-600",
  },
  {
    title: "Construction",
    icon: Hammer,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Marketing",
    icon: Megaphone,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Animation",
    icon: Paintbrush,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Repair",
    icon: Wrench,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Business",
    icon: Building2,
    color: "from-amber-500 to-yellow-500",
  },
  {
    title: "Consulting",
    icon: HeartHandshake,
    color: "from-emerald-500 to-green-500",
  },
];

export default function Categories() {
  return (
    <section className="py-10 px-5">

      <div className="max-w-md mx-auto">

        <h2 className="text-white text-2xl font-bold mb-2">
          Categories
        </h2>

        <p className="text-gray-400 mb-6">
          Choose your required service
        </p>

        <div className="grid grid-cols-3 gap-4">

          {categories.map((item, index) => {

            const Icon = item.icon;

            return (

              <button
                key={index}
                className="group rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-4 transition-all duration-300 hover:scale-105 hover:border-yellow-400"
              >

                <div
                  className={`mx-auto mb-3 h-14 w-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-white text-sm font-semibold leading-5">
                  {item.title}
                </h3>

              </button>

            );

          })}

        </div>

      </div>
    </section>
  );
}