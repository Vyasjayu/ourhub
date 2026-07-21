"use client";

import Image from "next/image";
import { Star, MapPin, Languages, Briefcase } from "lucide-react";
import Link from "next/link";

const pandits = [
  {
    id: 1,
    name: "Pt. Rajesh Sharma",
    city: "Indore",
    experience: "15 Years",
    languages: "Hindi, Sanskrit",
    rating: "4.9",
    price: "₹999",
    image: "/pandits/pandit1.jpg",
    href: "/religious/pandit-booking/1",
  },
  {
    id: 2,
    name: "Pt. Mahesh Joshi",
    city: "Ujjain",
    experience: "18 Years",
    languages: "Hindi, Gujarati",
    rating: "5.0",
    price: "₹1499",
    image: "/pandits/pandit2.jpg",
    href: "/religious/pandit-booking/2",
  },
  {
    id: 3,
    name: "Pt. Anil Mishra",
    city: "Ratlam",
    experience: "12 Years",
    languages: "Hindi",
    rating: "4.8",
    price: "₹799",
    image: "/pandits/pandit3.jpg",
    href: "/religious/pandit-booking/3",
  },
];

export default function TopPandits() {
  return (
    <section className="mt-8">

      <div className="flex items-center justify-between px-4 mb-4">
        <h2 className="text-xl font-bold text-white">
          ⭐ Top Rated Pandits
        </h2>

        <button className="text-[#D4AF37] text-sm font-medium">
          View All
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide">

        {pandits.map((pandit) => (

          <div
            key={pandit.id}
            className="min-w-[270px] rounded-3xl bg-[#0d1b2a] border border-white/10 overflow-hidden"
          >

            {/* Image */}

            <div className="relative h-48">

              <Image
                src={pandit.image}
                alt={pandit.name}
                fill
                className="object-cover"
              />

              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                Online
              </div>

            </div>

            <div className="p-4">

              <h3 className="font-bold text-lg text-white">
                {pandit.name}
              </h3>

              <div className="flex items-center gap-2 mt-3 text-gray-300">

                <Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />

                <span>{pandit.rating}</span>

              </div>

              <div className="flex items-center gap-2 mt-3 text-gray-400">

                <Briefcase size={16} />

                <span>{pandit.experience}</span>

              </div>

              <div className="flex items-center gap-2 mt-3 text-gray-400">

                <Languages size={16} />

                <span>{pandit.languages}</span>

              </div>

              <div className="flex items-center gap-2 mt-3 text-gray-400">

                <MapPin size={16} />

                <span>{pandit.city}</span>

              </div>

              <div className="flex items-center justify-between mt-5">

                <span className="text-2xl font-bold text-[#D4AF37]">
                  {pandit.price}
                </span>

                <Link
                  href={pandit.href}
                  className="px-5 py-2 rounded-xl bg-[#D4AF37] text-[#071321] font-semibold"
                >
                  Book Now
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}