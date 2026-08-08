"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Video,
  Landmark,
  Sparkles,
} from "lucide-react";

export default function OnlineOfflineCard() {
  return (
    <section className="mt-8">

      <div className="relative overflow-hidden rounded-[28px] border border-yellow-500/30 bg-[#111827]">

        {/* Background Temple */}
        <Image
          src="/pooja/temple.jpg"
          alt="Temple"
          fill
          className="object-cover opacity-35"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071424] via-[#071424]/85 to-[#071424]/20" />

        {/* Content */}
        <div className="relative z-10 p-5">

          {/* Heading */}

          <div>

            <h2 className="flex items-center gap-2 text-[24px] font-bold text-yellow-400">

              <Sparkles size={22} />

              Online & Offline Pooja

            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Choose how you want to receive divine blessings
            </p>

          </div>

          {/* Cards */}

          <div className="mt-5 grid grid-cols-2 gap-3">

            {/* Online */}

            <Link
              href="/pooja/online"
              className="rounded-3xl border border-yellow-500/40 bg-[#111827]/90 p-4 backdrop-blur-md transition hover:border-yellow-400"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500 bg-yellow-500/10">

                <Video
                  size={30}
                  className="text-yellow-400"
                />

              </div>

              <h3 className="mt-4 text-center text-xl font-bold text-white">
                Online
              </h3>

              <p className="mt-2 text-center text-sm leading-6 text-gray-300">
                Attend pooja from the comfort of your home.
              </p>

              <button className="mt-5 w-full rounded-xl border border-yellow-500 bg-yellow-400 py-3 font-bold text-black transition hover:bg-yellow-300">
                Book Online
              </button>

            </Link>

            {/* Offline */}

            <Link
              href="/pooja/offline"
              className="rounded-3xl border border-yellow-500/40 bg-[#111827]/90 p-4 backdrop-blur-md transition hover:border-yellow-400"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500 bg-yellow-500/10">

                <Landmark
                  size={30}
                  className="text-yellow-400"
                />

              </div>

              <h3 className="mt-4 text-center text-xl font-bold text-white">
                Offline
              </h3>

              <p className="mt-2 text-center text-sm leading-6 text-gray-300">
                Pandit performs pooja at your home or temple.
              </p>

              <button className="mt-5 w-full rounded-xl border border-yellow-500 bg-yellow-400 py-3 font-bold text-black transition hover:bg-yellow-300">
                Book Offline
              </button>

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}