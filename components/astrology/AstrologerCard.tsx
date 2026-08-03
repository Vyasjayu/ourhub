"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Star,
  Video,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function AstrologerCard({
  astrologer,
}: any) {
  const router = useRouter();

  function startConsultation() {
    router.push(
      `/payment?amount=${astrologer.price}&providerId=${astrologer._id}&phone=${astrologer.mobile}&name=${encodeURIComponent(
        astrologer.displayName || astrologer.fullName
      )}`
    );
  }

  const image =
    astrologer.profilePhoto && astrologer.profilePhoto !== ""
      ? astrologer.profilePhoto
      : "/images/default-avatar.png";

  return (
    <div className="rounded-3xl border border-yellow-500/20 bg-[#101C30] p-4 shadow-xl">
      <div className="flex gap-4">
        {/* Image */}
        <div className="relative">
          <Image
            src={image}
            alt={astrologer.displayName || astrologer.fullName}
            width={80}
            height={80}
            className="h-20 w-20 rounded-full border-4 border-yellow-400 object-cover"
          />

          {astrologer.isActive && (
            <span className="absolute bottom-1 right-1 h-5 w-5 rounded-full bg-green-500 ring-4 ring-[#101C30]" />
          )}
        </div>

        <div className="flex-1">
          <h2 className="text-lg font-bold text-white">
            {astrologer.displayName || astrologer.fullName}
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            {astrologer.specialization || "Vedic Astrologer"}
          </p>

          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center rounded-full bg-yellow-500/20 px-3 py-1">
              <Star
                size={14}
                fill="#FFD54F"
                className="text-yellow-400"
              />

              <span className="ml-1 text-sm text-white">
                {astrologer.rating || 5}
              </span>
            </div>

            <span className="text-sm text-gray-400">
              {astrologer.experience || "0"} Experience
            </span>
          </div>

          <div className="mt-2 text-sm text-yellow-400">
            ₹{astrologer.price || 0}/min
          </div>

          <div className="mt-1 text-xs text-gray-400">
            📍 {astrologer.city || "India"}
          </div>
        </div>
      </div>

      {/* Consultation */}
      <div className="mt-4 flex gap-4 text-gray-300">
        <button
          onClick={startConsultation}
          className="flex items-center gap-1 text-xs hover:text-yellow-400"
        >
          <MessageCircle size={14} />
          Chat
        </button>

        <button
          onClick={startConsultation}
          className="flex items-center gap-1 text-xs hover:text-yellow-400"
        >
          <Phone size={14} />
          Call
        </button>

        <button
          onClick={startConsultation}
          className="flex items-center gap-1 text-xs hover:text-yellow-400"
        >
          <Video size={14} />
          Video
        </button>
      </div>

      <Link
        href={`/religious/astrology/${astrologer._id}`}
        className="mt-4 block rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-300 py-3 text-center font-bold text-black"
      >
        View Profile
      </Link>
    </div>
  );
}