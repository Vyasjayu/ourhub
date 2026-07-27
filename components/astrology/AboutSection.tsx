"use client";

import { BookOpen, ShieldCheck, Sparkles } from "lucide-react";

interface AboutSectionProps {
  about: string;
}

export default function AboutSection({
  about,
}: AboutSectionProps) {
  return (
    <section
      className="
        mt-6
        rounded-3xl
        border
        border-yellow-500/20
        bg-gradient-to-br
        from-[#0E1726]
        to-[#09111D]
        p-5
        shadow-xl
      "
    >
      {/* Heading */}

      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-yellow-500/10
          "
        >
          <BookOpen
            size={24}
            className="text-yellow-400"
          />
        </div>

        <div>

          <h2 className="text-xl font-bold text-white">
            About Astrologer
          </h2>

          <p className="text-sm text-gray-400">
            Professional Introduction
          </p>

        </div>

      </div>

      {/* Description */}

      <p
        className="
          mt-6
          text-[15px]
          leading-8
          text-gray-300
        "
      >
        {about}
      </p>

      {/* Highlights */}

      <div className="mt-8 space-y-4">

        <div
          className="
            flex
            items-center
            gap-4
            rounded-2xl
            bg-[#111C30]
            p-4
          "
        >
          <ShieldCheck
            className="text-green-400"
            size={22}
          />

          <div>

            <h3 className="font-semibold text-white">
              Verified Astrologer
            </h3>

            <p className="text-sm text-gray-400">
              Identity & experience verified by OurHub.
            </p>

          </div>

        </div>

        <div
          className="
            flex
            items-center
            gap-4
            rounded-2xl
            bg-[#111C30]
            p-4
          "
        >
          <Sparkles
            className="text-yellow-400"
            size={22}
          />

          <div>

            <h3 className="font-semibold text-white">
              Personalized Guidance
            </h3>

            <p className="text-sm text-gray-400">
              Get accurate advice for Career, Love,
              Marriage, Finance and Business.
            </p>

          </div>

        </div>

      </div>

      {/* Bottom Card */}

      <div
        className="
          mt-6
          rounded-2xl
          border
          border-yellow-500/20
          bg-yellow-500/10
          p-4
        "
      >
        <p className="text-sm leading-7 text-yellow-100">
          Every consultation is completely confidential.
          Your personal details and birth information
          remain secure and private.
        </p>
      </div>
    </section>
  );
}