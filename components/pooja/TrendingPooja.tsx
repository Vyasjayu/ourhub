import { Flame } from "lucide-react";
import TrendingCard from "./TrendingCard";
import { trendingPoojas } from "@/data/poojaData";
// import { trendingPoojas } from "@/data/poojaData";

export default function TrendingPooja() {
  return (
    <section className="mt-4">

      <div className="flex justify-between items-center px-1">

        <div className="flex items-center gap-2">

          <Flame
            className="text-orange-500"
            fill="#ff6b00"
            size={20}
          />

          <h2 className="font-bold text-xl">
            Trending Poojas
          </h2>

        </div>

        <button className="text-yellow-400 font-semibold">
          View All
        </button>

      </div>

      <div
        className="
        flex
        gap-4
        overflow-x-auto
        mt-5
        pb-2
        scrollbar-hide
      "
      >
        {trendingPoojas.map((item) => (
          <TrendingCard
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}