"use client";

import {
  Award,
  Star,
  Users,
  PhoneCall,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";

interface ExperienceSectionProps {
  experience: number;
  rating: number;
  totalConsultations?: number;
  followers?: number;
  successRate?: number;
  isOnline?: boolean;
}

export default function ExperienceSection({
  experience,
  rating,
  totalConsultations = 12000,
  followers = 8500,
  successRate = 98,
  isOnline = true,
}: ExperienceSectionProps) {
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

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-white">
            Experience & Statistics
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Trusted by thousands of devotees
          </p>

        </div>

        <div
          className={`
            flex items-center gap-2
            rounded-full
            px-3
            py-2
            text-sm
            font-semibold
            ${
              isOnline
                ? "bg-green-500/10 text-green-400"
                : "bg-red-500/10 text-red-400"
            }
          `}
        >
          <div
            className={`
              h-2.5
              w-2.5
              rounded-full
              ${
                isOnline
                  ? "bg-green-400"
                  : "bg-red-400"
              }
            `}
          />

          {isOnline ? "Online" : "Offline"}
        </div>

      </div>

      {/* Stats Grid */}

      <div className="mt-6 grid grid-cols-2 gap-4">

        {/* Experience */}

        <div className="rounded-2xl bg-[#111C30] p-5">

          <Award
            className="text-yellow-400"
            size={28}
          />

          <h3 className="mt-4 text-3xl font-bold text-white">
            {experience}+
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Years Experience
          </p>

        </div>

        {/* Rating */}

        <div className="rounded-2xl bg-[#111C30] p-5">

          <Star
            className="text-yellow-400"
            size={28}
            fill="currentColor"
          />

          <h3 className="mt-4 text-3xl font-bold text-white">
            {rating}
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Average Rating
          </p>

        </div>

        {/* Consultations */}

        <div className="rounded-2xl bg-[#111C30] p-5">

          <PhoneCall
            className="text-blue-400"
            size={28}
          />

          <h3 className="mt-4 text-3xl font-bold text-white">
            {totalConsultations.toLocaleString()}+
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Consultations
          </p>

        </div>

        {/* Followers */}

        <div className="rounded-2xl bg-[#111C30] p-5">

          <Users
            className="text-purple-400"
            size={28}
          />

          <h3 className="mt-4 text-3xl font-bold text-white">
            {followers.toLocaleString()}+
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Followers
          </p>

        </div>

      </div>

      {/* Success Card */}

      <div
        className="
          mt-6
          rounded-2xl
          border
          border-green-500/20
          bg-green-500/10
          p-5
        "
      >

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-300">
              Consultation Success Rate
            </p>

            <h3 className="mt-2 text-3xl font-bold text-green-400">
              {successRate}%
            </h3>

          </div>

          <TrendingUp
            size={38}
            className="text-green-400"
          />

        </div>

      </div>

      {/* Verification */}

      <div
        className="
          mt-6
          flex
          items-center
          gap-4
          rounded-2xl
          border
          border-yellow-500/20
          bg-yellow-500/10
          p-4
        "
      >

        <BadgeCheck
          size={28}
          className="text-yellow-400"
        />

        <div>

          <h3 className="font-semibold text-white">
            Verified Professional Astrologer
          </h3>

          <p className="mt-1 text-sm text-gray-300">
            Profile, experience and consultation quality
            have been verified by OurHub Astrology.
          </p>

        </div>

      </div>

    </section>
  );
}