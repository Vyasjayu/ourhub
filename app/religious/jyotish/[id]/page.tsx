"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Star,
  Briefcase,
  Globe,
  Phone,
  Video,
  MessageCircle,
  Calendar,
  BadgeCheck,
} from "lucide-react";

export default function AstrologerDetailsPage() {
  return (
    <main className="min-h-screen bg-[#071321] flex justify-center">

      <div className="w-full max-w-[430px] bg-[#071321] text-white min-h-screen pb-28">

        {/* Header */}

        <header className="sticky top-0 z-50 h-16 bg-[#081423] border-b border-white/10 flex items-center px-4">

          <Link href="/religious/jyotish">
            <ArrowLeft />
          </Link>

          <h1 className="ml-4 text-xl font-bold">
            Astrologer Details
          </h1>

        </header>

        {/* Profile */}

        <section className="px-4 mt-6">

          <div className="bg-[#0d1b2a] rounded-3xl p-6 border border-white/10">

            <div className="flex justify-center">

              <div className="w-28 h-28 rounded-full bg-[#D4AF37] flex items-center justify-center text-6xl">

                🔮

              </div>

            </div>

            <h2 className="text-2xl font-bold text-center mt-5">

              Acharya Rahul Sharma

            </h2>

            <p className="text-center text-gray-400 mt-1">

              Vedic Astrologer

            </p>

            <div className="flex justify-center items-center gap-2 mt-3">

              <Star
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />

              <span>4.9 (1245 Reviews)</span>

            </div>

          </div>

        </section>

        {/* Information */}

        <section className="px-4 mt-6">

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-[#0d1b2a] rounded-2xl p-4">

              <Briefcase className="text-[#D4AF37]" />

              <h3 className="font-semibold mt-3">

                Experience

              </h3>

              <p className="text-gray-400">

                15 Years

              </p>

            </div>

            <div className="bg-[#0d1b2a] rounded-2xl p-4">

              <Globe className="text-[#D4AF37]" />

              <h3 className="font-semibold mt-3">

                Languages

              </h3>

              <p className="text-gray-400">

                Hindi, English

              </p>

            </div>

          </div>

        </section>

        {/* Expertise */}

        <section className="px-4 mt-6">

          <div className="bg-[#0d1b2a] rounded-3xl p-5">

            <h2 className="text-xl font-bold">

              Expertise

            </h2>

            <div className="flex flex-wrap gap-3 mt-4">

              {[
                "Marriage",
                "Career",
                "Business",
                "Health",
                "Kundli",
                "Love",
                "Finance",
              ].map((item) => (

                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-[#D4AF37]/15 text-[#D4AF37]"
                >

                  {item}

                </span>

              ))}

            </div>

          </div>

        </section>

        {/* About */}

        <section className="px-4 mt-6">

          <div className="bg-[#0d1b2a] rounded-3xl p-5">

            <h2 className="text-xl font-bold">

              About

            </h2>

            <p className="text-gray-400 leading-7 mt-3">

              Acharya Rahul Sharma has over 15 years of experience
              in Vedic Astrology, Kundli Analysis, Marriage,
              Career Guidance and Business Consultation.

            </p>

          </div>

        </section>

        {/* Consultation */}

        <section className="px-4 mt-6">

          <h2 className="text-xl font-bold mb-4">

            Consultation Types

          </h2>

          <div className="space-y-4">

            <div className="bg-[#0d1b2a] rounded-2xl p-4 flex justify-between items-center">

              <div className="flex items-center gap-4">

                <Phone className="text-[#D4AF37]" />

                <div>

                  <h3 className="font-semibold">

                    Phone Call

                  </h3>

                  <p className="text-gray-400 text-sm">

                    Audio Consultation

                  </p>

                </div>

              </div>

              ₹399

            </div>

            <div className="bg-[#0d1b2a] rounded-2xl p-4 flex justify-between items-center">

              <div className="flex items-center gap-4">

                <Video className="text-[#D4AF37]" />

                <div>

                  <h3 className="font-semibold">

                    Video Call

                  </h3>

                  <p className="text-gray-400 text-sm">

                    Face to Face

                  </p>

                </div>

              </div>

              ₹499

            </div>

            <div className="bg-[#0d1b2a] rounded-2xl p-4 flex justify-between items-center">

              <div className="flex items-center gap-4">

                <MessageCircle className="text-[#D4AF37]" />

                <div>

                  <h3 className="font-semibold">

                    Chat

                  </h3>

                  <p className="text-gray-400 text-sm">

                    Instant Messaging

                  </p>

                </div>

              </div>

              ₹299

            </div>

          </div>

        </section>

        {/* Reviews */}

        <section className="px-4 mt-6">

          <div className="bg-[#0d1b2a] rounded-3xl p-5">

            <h2 className="text-xl font-bold">

              Customer Reviews

            </h2>

            <div className="mt-5 space-y-4">

              <div>

                <div className="flex items-center gap-2">

                  <BadgeCheck className="text-green-500" />

                  <span className="font-semibold">

                    Rahul Patel

                  </span>

                </div>

                <p className="text-gray-400 mt-2">

                  Very accurate prediction and polite behaviour.

                </p>

              </div>

              <div>

                <div className="flex items-center gap-2">

                  <BadgeCheck className="text-green-500" />

                  <span className="font-semibold">

                    Priya Sharma

                  </span>

                </div>

                <p className="text-gray-400 mt-2">

                  Highly recommended for career consultation.

                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Bottom Button */}

        <div className="fixed bottom-0 left-0 right-0 flex justify-center bg-[#071321]/95 backdrop-blur">

          <div className="w-full max-w-[430px] p-4">

            <Link
              href="/religious/jyotish/booking"
              className="h-14 rounded-2xl bg-[#D4AF37] text-[#071321] font-bold flex items-center justify-center gap-2"
            >

              <Calendar size={20} />

              Book Consultation

            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}