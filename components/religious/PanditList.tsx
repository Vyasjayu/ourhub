"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Languages, Briefcase, BadgeCheck } from "lucide-react";

const pandits = [
  {
    id: 1,
    name: "Pt. Rajesh Sharma",
    city: "Indore",
    experience: "15 Years",
    language: "Hindi, Sanskrit",
    rating: "4.9",
    reviews: "235",
    price: "₹999",
    image: "/pandits/pandit1.jpg",
  },
  {
    id: 2,
    name: "Pt. Mahesh Joshi",
    city: "Ujjain",
    experience: "18 Years",
    language: "Hindi, Gujarati",
    rating: "5.0",
    reviews: "410",
    price: "₹1499",
    image: "/pandits/pandit2.jpg",
  },
  {
    id: 3,
    name: "Pt. Anil Mishra",
    city: "Ratlam",
    experience: "12 Years",
    language: "Hindi",
    rating: "4.8",
    reviews: "188",
    price: "₹799",
    image: "/pandits/pandit3.jpg",
  },
];

export default function PanditList() {
  return (
    <section className="px-4 py-6">

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-xl font-bold text-white">
          Top Rated Pandits
        </h2>

        <span className="text-sm text-[#D4AF37]">
          {pandits.length} Results
        </span>

      </div>

      <div className="space-y-5">

        {pandits.map((pandit) => (

          <div
            key={pandit.id}
            className="bg-[#0d1b2a] rounded-3xl border border-white/10 overflow-hidden"
          >

            {/* Image */}

            <div className="relative">

              <Image
                src={pandit.image}
                alt={pandit.name}
                width={430}
                height={230}
                className="w-full h-52 object-cover"
              />

              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">

                Online

              </div>

            </div>

            {/* Content */}

            <div className="p-5">

              <div className="flex justify-between items-start">

                <div>

                  <div className="flex items-center gap-2">

                    <h3 className="text-xl font-bold text-white">

                      {pandit.name}

                    </h3>

                    <BadgeCheck
                      size={18}
                      className="text-blue-400"
                    />

                  </div>

                  <div className="flex items-center gap-2 mt-2">

                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="text-white">

                      {pandit.rating}

                    </span>

                    <span className="text-gray-400">

                      ({pandit.reviews} Reviews)

                    </span>

                  </div>

                </div>

                <span className="text-2xl font-bold text-[#D4AF37]">

                  {pandit.price}

                </span>

              </div>

              {/* Details */}

              <div className="space-y-3 mt-5">

                <div className="flex items-center gap-3 text-gray-300">

                  <Briefcase
                    size={18}
                    className="text-[#D4AF37]"
                  />

                  {pandit.experience} Experience

                </div>

                <div className="flex items-center gap-3 text-gray-300">

                  <Languages
                    size={18}
                    className="text-[#D4AF37]"
                  />

                  {pandit.language}

                </div>

                <div className="flex items-center gap-3 text-gray-300">

                  <MapPin
                    size={18}
                    className="text-[#D4AF37]"
                  />

                  {pandit.city}

                </div>

              </div>

              {/* Buttons */}

              <div className="flex gap-3 mt-6">

                <Link
                  href={`/religious/pandit-booking/${pandit.id}`}
                  className="flex-1 h-12 rounded-xl border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center font-semibold"
                >
                  View Profile
                </Link>

                <Link
                  href={`/religious/pandit-booking/${pandit.id}`}
                  className="flex-1 h-12 rounded-xl bg-[#D4AF37] text-[#071321] flex items-center justify-center font-bold"
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