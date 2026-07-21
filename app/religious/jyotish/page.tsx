"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Star,
  Filter,
  ArrowLeft,
} from "lucide-react";

import CitySelector from "@/components/religious/CitySelector";

const astrologers = [
  {
    id: 1,
    name: "Acharya Rahul Sharma",
    experience: "15 Years",
    language: "Hindi, English",
    rating: 4.9,
    price: 499,
    image: "🧙",
  },
  {
    id: 2,
    name: "Pt. Amit Joshi",
    experience: "12 Years",
    language: "Hindi",
    rating: 4.8,
    price: 399,
    image: "🔮",
  },
  {
    id: 3,
    name: "Acharya Neha Shastri",
    experience: "10 Years",
    language: "Hindi, English",
    rating: 4.9,
    price: 599,
    image: "✨",
  },
];

export default function JyotishPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#071321] flex justify-center">
      <div className="w-full max-w-[430px] bg-[#071321] text-white min-h-screen pb-24">

        {/* Header */}
        <header className="sticky top-0 z-50 bg-[#081423] border-b border-white/10">
          <div className="flex items-center justify-between px-4 py-4">

            {/* Title */}
            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-white">Jyotish </span>
                <span className="text-[#D4AF37]">Consultation</span>
              </h1>

              <p className="text-sm text-gray-400 mt-1">
                Talk to Verified Astrologers
              </p>
            </div>

            {/* Back Button */}
            <button
              onClick={() => router.back()}
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              <ArrowLeft size={22} className="text-white" />
            </button>

          </div>
        </header>

        {/* Search */}
        <div className="px-4 mt-5">
          <div className="h-14 rounded-2xl bg-[#0d1b2a] flex items-center px-4">
            <Search className="text-gray-400" size={20} />

            <input
              placeholder="Search Astrologer..."
              className="flex-1 bg-transparent outline-none ml-3 placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* City */}
        <CitySelector />

        {/* Filter */}
        <div className="px-4 mt-5">
          <button className="h-11 px-5 rounded-xl bg-[#D4AF37] text-[#071321] font-semibold flex items-center gap-2">
            <Filter size={18} />
            Filters
          </button>
        </div>

        {/* Top Astrologers */}
        <div className="px-4 mt-8">
          <h2 className="text-xl font-bold mb-4">
            ⭐ Top Astrologers
          </h2>

          <div className="space-y-5">
            {astrologers.map((item) => (
              <div
                key={item.id}
                className="bg-[#0d1b2a] rounded-3xl p-5 border border-white/10"
              >
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-[#D4AF37] text-4xl flex items-center justify-center">
                    {item.image}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-lg">
                      {item.name}
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      {item.experience}
                    </p>

                    <p className="text-gray-400 text-sm">
                      {item.language}
                    </p>

                    <div className="flex items-center gap-1 mt-2">
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-gray-400 text-sm">
                    Starting From
                  </p>

                  <h3 className="text-2xl font-bold text-[#D4AF37]">
                    ₹{item.price}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-5">
                  <Link
                    href={`/religious/jyotish/${item.id}`}
                    className="h-12 rounded-xl border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center font-semibold"
                  >
                    View Profile
                  </Link>

                  <Link
                    href={`/religious/jyotish/${item.id}`}
                    className="h-12 rounded-xl bg-[#D4AF37] text-[#071321] flex items-center justify-center font-bold"
                  >
                    Consult Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}