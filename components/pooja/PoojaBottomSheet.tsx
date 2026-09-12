
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  Search,
  ChevronRight,
  Video,
  Home,
  BadgeCheck,
  CalendarDays,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  Flame,
} from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

interface PoojaItem {
  name: string;
  image: string;
  href: string;
}

export default function PoojaBottomSheet({
  open,
  onClose,
}: Props) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const onlinePoojas: PoojaItem[] = [
    {
      name: "Online Ganesh Pooja",
      image: "/images/pooja/ganesh.jpg",
      href: "/online-pooja/ganesh-pooja",
    },
    {
      name: "Online Lakshmi Pooja",
      image: "/images/pooja/lakshmi.jpg",
      href: "/online-pooja/lakshmi-pooja",
    },
    {
      name: "Online Rudrabhishek",
      image: "/images/pooja/rudrabhishek.jpg",
      href: "/online-pooja/rudrabhishek",
    },
    {
      name: "Online Satyanarayan",
      image: "/images/pooja/satyanarayan.jpg",
      href: "/online-pooja/satyanarayan",
    },
  ];

  const offlinePoojas: PoojaItem[] = [
    {
      name: "Ganesh Pooja",
      image: "/images/pooja/ganesh.jpg",
      href: "/pooja/ganesh-pooja",
    },
    {
      name: "Lakshmi Pooja",
      image: "/images/pooja/lakshmi.jpg",
      href: "/pooja/lakshmi-pooja",
    },
    {
      name: "Satyanarayan Katha",
      image: "/images/pooja/satyanarayan.jpg",
      href: "/pooja/satyanarayan",
    },
    {
      name: "Griha Pravesh",
      image: "/images/pooja/griha-pravesh.jpg",
      href: "/pooja/griha-pravesh",
    },
  ];

  const filteredOnline = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) return onlinePoojas;

    return onlinePoojas.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
  }, [search]);

  const filteredOffline = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) return offlinePoojas;

    return offlinePoojas.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
  }, [search]);

  const totalResults =
    filteredOnline.length + filteredOffline.length;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999]">

      {/* =====================================================
          BACKDROP
      ====================================================== */}

      <div
        onClick={onClose}
        className="
          absolute
          inset-0
          bg-black/80
          backdrop-blur-md
        "
      />

      {/* =====================================================
          BOTTOM SHEET
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          flex
          h-[94vh]
          w-full
          max-w-[430px]
          -translate-x-1/2
          flex-col
          overflow-hidden
          rounded-t-[32px]
          border
          border-[#DFAE45]/20
          bg-[#050B14]
          shadow-[0_-25px_80px_rgba(0,0,0,0.75)]
        "
      >

        {/* Ambient Background */}
        <div className="pointer-events-none absolute -right-28 -top-24 h-64 w-64 rounded-full bg-[#DFAE45]/10 blur-3xl" />

        <div className="pointer-events-none absolute -left-32 top-[45%] h-64 w-64 rounded-full bg-indigo-500/[0.05] blur-3xl" />

        {/* =====================================================
            DRAG HANDLE
        ====================================================== */}

        <div className="relative z-20 flex justify-center pt-3">
          <div className="h-1 w-12 rounded-full bg-white/15" />
        </div>

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            relative
            z-20
            border-b
            border-white/[0.07]
            bg-[#050B14]/90
            px-5
            pb-4
            pt-4
            backdrop-blur-2xl
          "
        >

          <div className="flex items-center justify-between">

            {/* Branding */}
            <div>

              <div className="mb-1 flex items-center gap-1.5">

                <Sparkles
                  size={11}
                  className="text-[#F3C75F]"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
                  Sacred Services
                </span>

              </div>

              <h2 className="text-[21px] font-bold tracking-tight text-white">
                Pooja Services
              </h2>

              <p className="mt-0.5 text-[11px] text-gray-500">
                Online & home pooja booking
              </p>

            </div>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.04]
                text-gray-400
                transition-all
                duration-200
                hover:border-[#DFAE45]/30
                hover:bg-[#DFAE45]/10
                hover:text-white
                active:scale-90
              "
            >
              <X size={19} />
            </button>

          </div>

          {/* ===================================================
              SEARCH
          ==================================================== */}

          <div
            className="
              mt-4
              flex
              h-[50px]
              items-center
              rounded-[17px]
              border
              border-white/[0.08]
              bg-white/[0.035]
              px-3
              transition-all
              duration-300
              focus-within:border-[#DFAE45]/40
              focus-within:bg-[#DFAE45]/[0.04]
              focus-within:shadow-[0_0_25px_rgba(223,174,69,0.06)]
            "
          >

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/[0.04]">
              <Search
                size={16}
                className="text-gray-500"
              />
            </div>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search pooja, katha..."
              className="
                ml-2.5
                w-full
                bg-transparent
                text-[12px]
                text-white
                outline-none
                placeholder:text-gray-600
              "
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/[0.06]
                  text-gray-500
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <X size={13} />
              </button>
            )}

          </div>
        </div>

        {/* =====================================================
            SCROLL CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-10
            flex-1
            overflow-y-auto
            px-5
            py-5
          "
        >

          <div className="space-y-6">

            {/* =================================================
                ONLINE POOJA
            ================================================== */}

            <Link
              href="/pooja/online"
              onClick={onClose}
              className="
                group
                relative
                block
                overflow-hidden
                rounded-[26px]
                border
                border-[#DFAE45]/25
                bg-gradient-to-br
                from-[#171044]
                via-[#101531]
                to-[#08101D]
                p-5
                shadow-[0_18px_45px_rgba(0,0,0,0.35)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#DFAE45]/45
                active:scale-[0.985]
              "
            >

              {/* Glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />

              <div className="absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-3xl" />

              <div className="relative z-10">

                {/* Badge */}
                <div className="flex items-center justify-between">

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.14em] text-[#F3C75F]">
                    <Flame
                      size={10}
                      fill="currentColor"
                    />
                    Most Booked
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#DFAE45]/30 group-hover:bg-[#DFAE45]/10">
                    <ArrowUpRight
                      size={17}
                      className="text-gray-300 group-hover:text-[#F3C75F]"
                    />
                  </div>

                </div>

                {/* Title */}
                <h3 className="mt-5 text-[23px] font-bold tracking-tight text-white">
                  Online Pooja
                </h3>

                <p className="mt-2 max-w-[280px] text-[11px] leading-5 text-gray-400">
                  Join sacred rituals from the temple with
                  experienced and verified Pandits.
                </p>

                {/* Feature Chips */}
                <div className="mt-4 flex flex-wrap gap-2">

                  <span className="flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.04] px-2.5 py-1.5 text-[9px] font-medium text-gray-300">
                    <Video size={11} className="text-[#F3C75F]" />
                    Live Video
                  </span>

                  <span className="flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.04] px-2.5 py-1.5 text-[9px] font-medium text-gray-300">
                    <BadgeCheck size={11} className="text-[#F3C75F]" />
                    Verified Pandits
                  </span>

                </div>

                {/* CTA */}
                <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-3.5">

                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#F3C75F]">
                    Explore Online Poojas
                  </span>

                  <ChevronRight
                    size={15}
                    className="text-[#DFAE45] transition-transform duration-300 group-hover:translate-x-1"
                  />

                </div>

              </div>
            </Link>

            {/* =================================================
                OFFLINE POOJA
            ================================================== */}

            <Link
              href="/offline-pooja"
              onClick={onClose}
              className="
                group
                relative
                block
                overflow-hidden
                rounded-[26px]
                border
                border-[#DFAE45]/25
                bg-gradient-to-br
                from-[#2A1D08]
                via-[#17140D]
                to-[#0A1017]
                p-5
                shadow-[0_18px_45px_rgba(0,0,0,0.35)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#DFAE45]/45
                active:scale-[0.985]
              "
            >

              {/* Glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-400/15 blur-3xl" />

              <div className="absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-3xl" />

              <div className="relative z-10">

                {/* Badge */}
                <div className="flex items-center justify-between">

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.14em] text-[#F3C75F]">
                    <ShieldCheck size={10} />
                    Verified Service
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#DFAE45]/30 group-hover:bg-[#DFAE45]/10">
                    <ArrowUpRight
                      size={17}
                      className="text-gray-300 group-hover:text-[#F3C75F]"
                    />
                  </div>

                </div>

                {/* Title */}
                <h3 className="mt-5 text-[23px] font-bold tracking-tight text-white">
                  Offline Pooja
                </h3>

                <p className="mt-2 max-w-[280px] text-[11px] leading-5 text-gray-400">
                  Book experienced Pandits for authentic rituals
                  at your home or preferred temple.
                </p>

                {/* Feature Chips */}
                <div className="mt-4 flex flex-wrap gap-2">

                  <span className="flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.04] px-2.5 py-1.5 text-[9px] font-medium text-gray-300">
                    <Home size={11} className="text-[#F3C75F]" />
                    Home Visit
                  </span>

                  <span className="flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.04] px-2.5 py-1.5 text-[9px] font-medium text-gray-300">
                    <CalendarDays size={11} className="text-[#F3C75F]" />
                    Easy Booking
                  </span>

                </div>

                {/* CTA */}
                <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-3.5">

                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#F3C75F]">
                    Explore Home Poojas
                  </span>

                  <ChevronRight
                    size={15}
                    className="text-[#DFAE45] transition-transform duration-300 group-hover:translate-x-1"
                  />

                </div>

              </div>
            </Link>

            {/* =================================================
                POPULAR ONLINE
            ================================================== */}

            <section>

              <div className="mb-3.5 flex items-end justify-between">

                <div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles
                      size={11}
                      className="text-[#DFAE45]"
                    />

                    <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#DFAE45]">
                      Live Rituals
                    </span>
                  </div>

                  <h3 className="mt-1 text-[17px] font-bold text-white">
                    Popular Online Pooja
                  </h3>
                </div>

                <Link
                  href="/pooja/online"
                  onClick={onClose}
                  className="flex items-center gap-0.5 text-[10px] font-semibold text-[#F3C75F]"
                >
                  View All
                  <ChevronRight size={13} />
                </Link>

              </div>

              <div className="space-y-2.5">

                {filteredOnline.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-[18px]
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      p-2.5
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:border-[#DFAE45]/30
                      hover:bg-[#DFAE45]/[0.04]
                      active:scale-[0.99]
                    "
                  >

                    {/* Image */}
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[15px] border border-white/[0.08]">

                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="56px"
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">

                      <h4 className="truncate text-[12px] font-semibold text-white">
                        {item.name}
                      </h4>

                      <div className="mt-1.5 flex items-center gap-1.5">

                        <span className="flex items-center gap-1 text-[9px] text-gray-500">
                          <Video size={9} className="text-[#DFAE45]" />
                          Live temple pooja
                        </span>

                        <span className="text-gray-700">•</span>

                        <span className="text-[9px] text-gray-500">
                          Verified
                        </span>

                      </div>

                    </div>

                    {/* Arrow */}
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.025] transition-all group-hover:border-[#DFAE45]/30 group-hover:bg-[#DFAE45]/10">

                      <ChevronRight
                        size={14}
                        className="text-gray-600 transition-all group-hover:translate-x-0.5 group-hover:text-[#F3C75F]"
                      />

                    </div>

                  </Link>
                ))}

              </div>
            </section>

            {/* =================================================
                HOME POOJA
            ================================================== */}

            <section>

              <div className="mb-3.5 flex items-end justify-between">

                <div>
                  <div className="flex items-center gap-1.5">
                    <Home
                      size={11}
                      className="text-[#DFAE45]"
                    />

                    <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#DFAE45]">
                      At Your Doorstep
                    </span>
                  </div>

                  <h3 className="mt-1 text-[17px] font-bold text-white">
                    Home Pooja Services
                  </h3>
                </div>

                <Link
                  href="/pooja"
                  onClick={onClose}
                  className="flex items-center gap-0.5 text-[10px] font-semibold text-[#F3C75F]"
                >
                  View All
                  <ChevronRight size={13} />
                </Link>

              </div>

              <div className="space-y-2.5">

                {filteredOffline.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-[18px]
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      p-2.5
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:border-[#DFAE45]/30
                      hover:bg-[#DFAE45]/[0.04]
                      active:scale-[0.99]
                    "
                  >

                    {/* Image */}
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[15px] border border-white/[0.08]">

                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="56px"
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">

                      <h4 className="truncate text-[12px] font-semibold text-white">
                        {item.name}
                      </h4>

                      <div className="mt-1.5 flex items-center gap-1.5">

                        <span className="flex items-center gap-1 text-[9px] text-gray-500">
                          <Home size={9} className="text-[#DFAE45]" />
                          Pandit home visit
                        </span>

                        <span className="text-gray-700">•</span>

                        <span className="text-[9px] text-gray-500">
                          Easy booking
                        </span>

                      </div>

                    </div>

                    {/* Arrow */}
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.025] transition-all group-hover:border-[#DFAE45]/30 group-hover:bg-[#DFAE45]/10">

                      <ChevronRight
                        size={14}
                        className="text-gray-600 transition-all group-hover:translate-x-0.5 group-hover:text-[#F3C75F]"
                      />

                    </div>

                  </Link>
                ))}

              </div>
            </section>

            {/* =================================================
                EMPTY SEARCH
            ================================================== */}

            {totalResults === 0 && (
              <div className="rounded-[22px] border border-white/[0.07] bg-white/[0.025] px-5 py-10 text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">

                  <Search
                    size={22}
                    className="text-[#DFAE45]"
                  />

                </div>

                <p className="mt-4 text-[13px] font-semibold text-white">
                  No pooja found
                </p>

                <p className="mt-1.5 text-[10px] text-gray-600">
                  Try searching for another pooja or katha.
                </p>

                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="mt-4 rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10 px-4 py-2 text-[10px] font-semibold text-[#F3C75F]"
                >
                  Clear Search
                </button>

              </div>
            )}

            {/* Bottom Safe Space */}
            <div className="h-5" />

          </div>
        </div>

        {/* Bottom Gold Accent */}
        <div className="absolute bottom-0 left-1/2 z-30 h-px w-[45%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/50 to-transparent" />

      </div>
    </div>
  );
}
