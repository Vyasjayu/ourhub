"use client";

import { Languages, Globe2, CheckCircle2 } from "lucide-react";

interface LanguageSectionProps {
  languages: string[];
}

export default function LanguageSection({
  languages,
}: LanguageSectionProps) {
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
          <Languages
            size={24}
            className="text-yellow-400"
          />
        </div>

        <div>

          <h2 className="text-xl font-bold text-white">
            Languages
          </h2>

          <p className="text-sm text-gray-400">
            Consultation Available In
          </p>

        </div>

      </div>

      {/* Language Chips */}

      <div className="mt-6 flex flex-wrap gap-3">

        {languages.map((language) => (

          <div
            key={language}
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-yellow-500/20
              bg-[#111C30]
              px-4
              py-2
              transition-all
              duration-300
              hover:border-yellow-400
              hover:bg-yellow-500/10
            "
          >
            <Globe2
              size={16}
              className="text-yellow-400"
            />

            <span className="text-white text-sm font-medium">
              {language}
            </span>

          </div>

        ))}

      </div>

      {/* Premium Card */}

      <div
        className="
          mt-6
          rounded-2xl
          border
          border-green-500/20
          bg-green-500/10
          p-4
        "
      >

        <div className="flex items-start gap-3">

          <CheckCircle2
            className="text-green-400 mt-1"
            size={22}
          />

          <div>

            <h3 className="font-semibold text-white">
              Easy Communication
            </h3>

            <p className="mt-2 text-sm leading-7 text-gray-300">
              Choose your preferred language for a
              comfortable and personalized consultation.
              The astrologer can explain remedies,
              predictions, and guidance in your selected
              language.
            </p>

          </div>

        </div>

      </div>

      {/* Extra Info */}

      <div
        className="
          mt-5
          rounded-2xl
          border
          border-yellow-500/20
          bg-yellow-500/10
          p-4
        "
      >

        <h3 className="font-semibold text-yellow-300">
          Why It Matters?
        </h3>

        <ul className="mt-3 space-y-2 text-sm text-gray-300">

          <li>✅ Better understanding of predictions</li>

          <li>✅ Comfortable conversation</li>

          <li>✅ Personalized remedies explained clearly</li>

          <li>✅ Easy communication during Chat & Calls</li>

        </ul>

      </div>

    </section>
  );
}