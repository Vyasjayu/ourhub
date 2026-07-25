"use client";

import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

export default function HelpCard() {
  return (
    <section className="mt-6 mb-24">
      <div
        className="
        rounded-3xl
        border
        border-[#374151]
        bg-[#0D1724]
        overflow-hidden
        shadow-[0_0_30px_rgba(255,180,40,0.08)]
        "
      >
        <div className="flex">

          {/* Left Image */}

          <div className="w-[38%] flex items-end justify-center p-3">

            <Image
              src="/images/guru.png"
              alt="Pandit"
              width={130}
              height={170}
              className="object-contain"
            />

          </div>

          {/* Right Content */}

          <div className="flex-1 p-4">

            <h2 className="text-3xl font-bold text-white">
              Need Help?
            </h2>

            <p className="text-gray-400 mt-2 text-[15px] leading-6">
              Talk to our Pandit Expert for
              <br />
              the right guidance.
            </p>

            <button
              className="
              mt-6
              w-full
              h-12
              rounded-xl
              bg-gradient-to-r
              from-yellow-400
              to-yellow-500
              text-black
              font-bold
              flex
              items-center
              justify-center
              gap-3
              "
            >
              <Phone size={20} />

              Call Pandit Expert
            </button>

            <button
              className="
              mt-3
              w-full
              h-12
              rounded-xl
              border
              border-yellow-500
              text-yellow-400
              font-semibold
              flex
              items-center
              justify-center
              gap-3
              "
            >
              <MessageCircle size={20} />

              Book Consultation
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}