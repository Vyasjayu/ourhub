"use client";

import {
  Heart,
  Briefcase,
  Landmark,
  GraduationCap,
  Home,
  Baby,
  Plane,
  Gem,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface ExpertiseSectionProps {
  expertise: string[];
}

const iconMap: Record<string, React.ReactNode> = {
  Love: <Heart size={18} />,
  Marriage: <Heart size={18} />,
  Career: <Briefcase size={18} />,
  Finance: <Landmark size={18} />,
  Business: <Briefcase size={18} />,
  Education: <GraduationCap size={18} />,
  Property: <Home size={18} />,
  Child: <Baby size={18} />,
  Abroad: <Plane size={18} />,
  Vastu: <Home size={18} />,
  Numerology: <Gem size={18} />,
  Tarot: <Sparkles size={18} />,
};

export default function ExpertiseSection({
  expertise,
}: ExpertiseSectionProps) {
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
      {/* Header */}

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
          <ShieldCheck
            size={24}
            className="text-yellow-400"
          />
        </div>

        <div>

          <h2 className="text-xl font-bold text-white">
            Areas of Expertise
          </h2>

          <p className="text-sm text-gray-400">
            Personalized guidance in every aspect of life
          </p>

        </div>

      </div>

      {/* Expertise Grid */}

      <div className="mt-6 grid grid-cols-2 gap-4">

        {expertise.map((item) => (

          <div
            key={item}
            className="
              rounded-2xl
              border
              border-yellow-500/20
              bg-[#111C30]
              p-4
              transition-all
              duration-300
              hover:border-yellow-400
              hover:scale-[1.03]
            "
          >

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-yellow-500/10
                text-yellow-400
              "
            >
              {iconMap[item] || <Sparkles size={18} />}
            </div>

            <h3
              className="
                mt-4
                font-semibold
                text-white
              "
            >
              {item}
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-gray-400
              "
            >
              Expert consultation available for{" "}
              {item.toLowerCase()} related questions.
            </p>

          </div>

        ))}

      </div>

      {/* Bottom Info */}

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
        <h3 className="font-semibold text-yellow-300">
          Why Choose This Astrologer?
        </h3>

        <ul
          className="
            mt-3
            space-y-2
            text-sm
            text-gray-300
          "
        >
          <li>✅ Personalized solutions for every problem</li>
          <li>✅ Practical and easy-to-follow guidance</li>
          <li>✅ Confidential one-to-one consultation</li>
          <li>✅ Accurate predictions based on Vedic Astrology</li>
        </ul>
      </div>
    </section>
  );
}