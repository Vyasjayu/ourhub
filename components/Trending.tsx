"use client";

import {
  ArrowRight,
  Star,
  Landmark,
  Home,
  Plane,
  Tractor,
  Car,
  Laptop,
} from "lucide-react";

const services = [
  {
    title: "Pandit Booking",
    price: "₹499",
    rating: "4.9",
    icon: Landmark,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Home Service",
    price: "₹299",
    rating: "4.8",
    icon: Home,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Travel Booking",
    price: "₹999",
    rating: "4.9",
    icon: Plane,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Agriculture",
    price: "₹799",
    rating: "4.7",
    icon: Tractor,
    color: "from-green-500 to-lime-500",
  },
  {
    title: "Automobile",
    price: "₹599",
    rating: "4.8",
    icon: Car,
    color: "from-gray-500 to-slate-700",
  },
  {
    title: "Software",
    price: "₹1499",
    rating: "5.0",
    icon: Laptop,
    color: "from-purple-500 to-indigo-500",
  },
];

export default function Trending() {
  return (
    <section className="py-12">

      <div className="max-w-md mx-auto">

        <div className="px-5 flex items-center justify-between mb-6">

          <div>

            <h2 className="text-3xl font-bold text-white">
              Trending
            </h2>

            <p className="text-gray-400">
              Most Booked Services
            </p>

          </div>

          <button className="text-yellow-400 font-semibold">
            View All
          </button>

        </div>

        <div className="flex gap-5 overflow-x-auto px-5 scrollbar-hide">

          {services.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="min-w-[250px] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden hover:scale-105 duration-300"
              >

                {/* Top */}

                <div
                  className={`h-40 bg-gradient-to-br ${item.color} flex items-center justify-center`}
                >

                  <Icon
                    className="text-white"
                    size={70}
                  />

                </div>

                {/* Body */}

                <div className="p-5">

                  <div className="flex justify-between items-center">

                    <h3 className="text-white text-xl font-bold">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-1 text-yellow-400">

                      <Star
                        size={16}
                        fill="currentColor"
                      />

                      <span className="text-sm">
                        {item.rating}
                      </span>

                    </div>

                  </div>

                  <p className="mt-3 text-gray-400">
                    Starting From
                  </p>

                  <h4 className="text-2xl font-bold text-yellow-400 mt-1">
                    {item.price}
                  </h4>

                  <button
                    className="mt-5 w-full rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 py-3 font-bold text-black flex items-center justify-center gap-2 hover:scale-105 transition"
                  >
                    Book Now

                    <ArrowRight size={18} />

                  </button>

                </div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}