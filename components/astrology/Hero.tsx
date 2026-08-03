"use client";

import Image from "next/image";

import {
  Star,
  Heart,
  Share2,
  Circle,
  Clock3,
  Users,
  PhoneCall,
} from "lucide-react";

const DEFAULT_PROFILE = "/astrologers/default-avatar.png";
const DEFAULT_COVER = "/astrologers/banner1.jpg";

interface Props {
  astrologer?: any;
}

export default function Hero({ astrologer }: Props) {
  // ==========================
  // Listing Hero
  // ==========================

  if (!astrologer) {
    return (
      <section
        className="
          relative
          w-full
          overflow-hidden
          rounded-b-3xl
          bg-gradient-to-b
          from-[#160B2D]
          via-[#0C1630]
          to-[#071424]
          p-4
          sm:p-6
          md:max-w-lg
          md:mx-auto
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,#FFD54F20,transparent_60%)]
          "
        />

        <div className="relative z-10">
          <h1
            className="
              text-2xl
              sm:text-3xl
              font-extrabold
              text-white
            "
          >
            Expert Astrology Consultation
          </h1>

          <p
            className="
              mt-3
              text-sm
              sm:text-base
              text-gray-300
            "
          >
            Connect with verified astrologers for Kundli,
            Marriage, Career & Life Guidance.
          </p>

          <div
            className="
              mt-5
              rounded-2xl
              border
              border-yellow-500/20
              bg-white/5
              p-4
              backdrop-blur-xl
            "
          >
            <p className="font-semibold text-yellow-400">
              ✨ Trusted Vedic Astrologers
            </p>

            <p className="mt-1 text-sm text-gray-400">
              Chat • Call • Video Consultation
            </p>
          </div>
        </div>
      </section>
    );
  }

  // ==========================
  // MongoDB Data Mapping
  // ==========================

  const name =
    astrologer.displayName ||
    astrologer.fullName ||
    "Astrologer";

  const image =
    astrologer.profilePhoto &&
    astrologer.profilePhoto.trim() !== ""
      ? astrologer.profilePhoto
      : DEFAULT_PROFILE;

  const cover =
    astrologer.cover &&
    astrologer.cover.trim() !== ""
      ? astrologer.cover
      : DEFAULT_COVER;

  const rating = Number(astrologer.rating ?? 5);

  const experience = Number(
    astrologer.experience ?? 0
  );

  const price = Number(
    astrologer.price ?? 0
  );

  const online = Boolean(
    astrologer.isActive
  );

  const totalConsultations =
    Number(astrologer.totalConsultations ?? 0);

  const followers =
    Number(astrologer.followers ?? 0);

  const responseTime =
    astrologer.responseTime || "30 sec";

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        rounded-b-3xl
        bg-gradient-to-b
        from-[#160B2D]
        via-[#0C1630]
        to-[#071424]
        md:max-w-lg
        md:mx-auto
      "
    >
      {/* Cover Image */}

      <div
        className="
          relative
          h-44
          sm:h-56
          w-full
        "
      >
        <Image
          src={cover}
          alt={name}
          fill
          priority
          className="
            object-cover
            opacity-50
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#071424]
            via-[#071424]/50
            to-transparent
          "
        />
      </div>

      {/* Top Buttons */}

      <div
        className="
          absolute
          top-4
          left-3
          right-3
          flex
          justify-between
        "
      >
        <button
          className="
            rounded-full
            bg-black/40
            p-2
            backdrop-blur
          "
        >
          <Heart
            size={18}
            className="text-white"
          />
        </button>

        <button
          className="
            rounded-full
            bg-black/40
            p-2
            backdrop-blur
          "
        >
          <Share2
            size={18}
            className="text-white"
          />
        </button>
      </div>
            {/* Profile Card */}

      <div
        className="
          relative
          z-20
          -mt-14
          px-3
          pb-5
          sm:-mt-20
          sm:px-4
        "
      >
        <div
          className="
            rounded-3xl
            border
            border-yellow-500/20
            bg-white/5
            p-4
            sm:p-5
            shadow-xl
            backdrop-blur-xl
          "
        >
          <div
            className="
              flex
              items-start
              gap-3
            "
          >
            {/* Profile Image */}

            <div className="relative shrink-0">
              <Image
                src={image}
                alt={name}
                width={90}
                height={90}
                className="
                  h-20
                  w-20
                  sm:h-24
                  sm:w-24
                  rounded-full
                  border-4
                  border-yellow-400
                  object-cover
                "
              />

              {online && (
                <span
                  className="
                    absolute
                    bottom-1
                    right-1
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-green-500
                    ring-4
                    ring-[#071424]
                  "
                >
                  <Circle
                    size={8}
                    fill="white"
                    className="text-white"
                  />
                </span>
              )}
            </div>

            {/* Right Content */}

            <div className="flex-1">
              <h1
                className="
                  text-lg
                  sm:text-xl
                  font-bold
                  text-white
                "
              >
                {name}
              </h1>

              <p className="text-sm text-gray-300">
                Vedic Astrologer
              </p>

              <div
                className="
                  mt-2
                  flex
                  flex-wrap
                  gap-2
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-1
                    rounded-full
                    bg-yellow-500/15
                    px-3
                    py-1
                  "
                >
                  <Star
                    size={14}
                    fill="#FFD54F"
                    className="text-yellow-400"
                  />

                  <span className="text-sm text-white">
                    {rating.toFixed(1)}
                  </span>
                </div>

                <div
                  className="
                    rounded-full
                    bg-green-500/20
                    px-3
                    py-1
                    text-xs
                    text-green-400
                  "
                >
                  {online ? "Online" : "Offline"}
                </div>
              </div>
            </div>
          </div>

          {/* Price */}

          <div
            className="
              mt-5
              rounded-2xl
              bg-gradient-to-r
              from-yellow-500
              to-yellow-300
              p-4
            "
          >
            <p className="text-xs text-black/70">
              Consultation Fee
            </p>

            <h2
              className="
                text-3xl
                font-extrabold
                text-black
              "
            >
              ₹{price}

              <span className="text-lg">
                /min
              </span>
            </h2>
          </div>

          {/* Stats */}

          <div
            className="
              mt-5
              grid
              grid-cols-3
              gap-2
            "
          >
            <Stat
              icon={<PhoneCall size={18} />}
              value={totalConsultations}
              title="Calls"
            />

            <Stat
              icon={<Users size={18} />}
              value={followers}
              title="Followers"
            />

            <Stat
              icon={<Clock3 size={18} />}
              value={responseTime}
              title="Reply"
            />
          </div>

          {/* Experience */}

          <div
            className="
              mt-5
              rounded-2xl
              bg-[#101C30]
              p-4
            "
          >
            <p className="text-sm text-gray-400">
              Experience
            </p>

            <h2
              className="
                text-2xl
                font-bold
                text-yellow-400
              "
            >
              {experience}+ Years
            </h2>
          </div>
        </div>
      </div>
          </section>
  );
}

// ==========================
// Stat Card
// ==========================

function Stat({
  icon,
  value,
  title,
}: {
  icon: React.ReactNode;
  value: string | number;
  title: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        bg-white/5
        p-3
        text-center
      "
    >
      <div className="flex justify-center text-yellow-400">
        {icon}
      </div>

      <h3
        className="
          mt-2
          text-sm
          sm:text-base
          font-bold
          text-white
        "
      >
        {value}
      </h3>

      <p
        className="
          text-[11px]
          text-gray-400
        "
      >
        {title}
      </p>
    </div>
  );
}