"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  MapPin,
  Languages,
  Briefcase,
  BadgeCheck,
  Calendar,
} from "lucide-react";

export default function PanditDetailsPage() {
  return (
    <main className="min-h-screen bg-[#071321] flex justify-center">

      <div className="w-full max-w-[430px] bg-[#071321] text-white min-h-screen relative">

        {/* Header */}

        <header className="sticky top-0 z-50 bg-[#081423] h-16 flex items-center px-4 border-b border-white/10">

          <Link href="/religious/pandit-booking">

            <ArrowLeft />

          </Link>

          <h1 className="ml-4 text-xl font-bold">

            Pandit Details

          </h1>

        </header>

        {/* Image */}

        <Image
          src="/pandits/pandit1.jpg"
          alt="Pandit"
          width={430}
          height={300}
          className="w-full h-72 object-cover"
        />

        {/* Content */}

        <div className="p-5 pb-32">

          <div className="flex justify-between">

            <div>

              <div className="flex items-center gap-2">

                <h2 className="text-2xl font-bold">

                  Pt. Rajesh Sharma

                </h2>

                <BadgeCheck
                  size={20}
                  className="text-blue-400"
                />

              </div>

              <div className="flex items-center gap-2 mt-3">

                <Star
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />

                <span>4.9</span>

                <span className="text-gray-400">

                  (235 Reviews)

                </span>

              </div>

            </div>

            <span className="text-3xl font-bold text-[#D4AF37]">

              ₹999

            </span>

          </div>

          {/* Details */}

          <div className="space-y-4 mt-7">

            <div className="flex items-center gap-3">

              <Briefcase className="text-[#D4AF37]" />

              <span>15 Years Experience</span>

            </div>

            <div className="flex items-center gap-3">

              <Languages className="text-[#D4AF37]" />

              <span>Hindi, Sanskrit</span>

            </div>

            <div className="flex items-center gap-3">

              <MapPin className="text-[#D4AF37]" />

              <span>Indore</span>

            </div>

          </div>

          {/* About */}

          <div className="mt-8">

            <h3 className="text-xl font-bold">

              About

            </h3>

            <p className="text-gray-300 leading-7 mt-3">

              Experienced Vedic Pandit with more than 15 years
              of expertise in Griha Pravesh, Satyanarayan Katha,
              Rudrabhishek, Marriage Puja, Mundan Sanskar,
              Bhoomi Pujan and many other religious ceremonies.

            </p>

          </div>

          {/* Services */}

          <div className="mt-8">

            <h3 className="text-xl font-bold mb-4">

              Services

            </h3>

            <div className="grid grid-cols-2 gap-3">

              {[
                "Griha Pravesh",
                "Marriage",
                "Rudrabhishek",
                "Satyanarayan",
                "Mundan",
                "Bhoomi Pujan",
              ].map((service) => (

                <div
                  key={service}
                  className="bg-[#0d1b2a] rounded-xl p-3 border border-white/10 text-center"
                >

                  {service}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom Button */}

        <div className="fixed bottom-0 left-0 right-0 flex justify-center bg-[#071321]/95 backdrop-blur">

          <div className="w-full max-w-[430px] p-4">

            <Link
              href="/religious/booking"
              className="h-14 rounded-2xl bg-[#D4AF37] text-[#071321] font-bold flex items-center justify-center gap-2"
            >

              <Calendar size={20} />

              Book Appointment

            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}