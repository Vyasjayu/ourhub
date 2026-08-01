"use client";

import { webServices } from "@/data/webDevelopment";
import ServiceCard from "./ServiceCard";

export default function FeaturedServices() {
  return (
    <section className="px-4 mt-8">

      <div
        className="
        mb-5
        flex
        items-center
        justify-between
        "
      >

        <div>

          <h2 className="text-xl font-bold text-white">
            Featured Services
          </h2>

          <p className="text-sm text-gray-400">
            Premium Website Solutions
          </p>

        </div>

        <button className="text-yellow-400 font-semibold">
          View All
        </button>

      </div>

      <div
        className="
        grid
        grid-cols-2
        gap-4
        "
      >

        {webServices.map((item) => (

          <ServiceCard
            key={item.id}
            slug={item.slug}   // ✅ Important
            title={item.title}
            price={item.price}
            icon={item.icon}
            color={item.color}
          />

        ))}

      </div>

    </section>
  );
}