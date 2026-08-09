"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  X,
  Search,
  ChevronRight,
  Video,
  Home,
  BadgeCheck,
  CalendarDays,
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

  const filterData = (data: PoojaItem[]) => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* ================= OVERLAY ================= */}

      <div
        onClick={onClose}
        className="
          absolute
          inset-0
          bg-black/70
          backdrop-blur-sm
        "
      />

      {/* ================= BOTTOM SHEET ================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          mx-auto
          flex
          h-[92vh]
          w-full
          max-w-[430px]
          flex-col
          overflow-hidden
          rounded-t-[32px]
          border
          border-white/10
          bg-[#061426]
          shadow-[0_-15px_60px_rgba(0,0,0,0.6)]
        "
      >
        {/* ================= DRAG HANDLE ================= */}

        <div className="flex justify-center pt-3">
          <div className="h-1.5 w-16 rounded-full bg-white/20" />
        </div>

        {/* ================= HEADER ================= */}

        <div
          className="
            border-b
            border-white/10
            bg-[#061426]/95
            px-5
            pb-4
            pt-4
            backdrop-blur-xl
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">
                Pooja Services 🛕
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Online & Home Pooja Booking
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                transition
                hover:bg-white/15
                active:scale-95
              "
            >
              <X size={20} />
            </button>
          </div>

          {/* ================= SEARCH ================= */}

          <div
            className="
              mt-4
              flex
              h-12
              items-center
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-4
              transition
              focus-within:border-violet-500/50
              focus-within:bg-white/[0.07]
            "
          >
            <Search
              size={18}
              className="shrink-0 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search pooja..."
              className="
                ml-3
                w-full
                bg-transparent
                text-sm
                text-white
                outline-none
                placeholder:text-slate-500
              "
            />
          </div>
        </div>

        {/* ================= SCROLL CONTENT ================= */}

        <div
          className="
            flex-1
            overflow-y-auto
            px-5
            py-5
          "
        >
          <div className="space-y-6">

            {/* ================================================= */}
            {/* ONLINE POOJA CARD - NOW CLICKABLE */}
            {/* ================================================= */}

            <Link
              href="/pooja/online"
              onClick={onClose}
              className="
                group
                relative
                block
                overflow-hidden
                rounded-3xl
                bg-gradient-to-br
                from-violet-600
                via-indigo-600
                to-purple-700
                p-5
                shadow-lg
                shadow-violet-900/20
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-xl
                hover:shadow-violet-900/30
                active:scale-[0.98]
              "
            >
              {/* Glow */}

              <div
                className="
                  absolute
                  -right-10
                  -top-10
                  h-36
                  w-36
                  rounded-full
                  bg-white/20
                  blur-3xl
                "
              />

              <div className="relative z-10">
                {/* Badge */}

                <span
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    bg-white/20
                    px-3
                    py-1
                    text-[11px]
                    font-semibold
                    tracking-wide
                    text-white
                  "
                >
                  🔥 MOST BOOKED
                </span>

                {/* Title + Arrow */}

                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">
                    Online Pooja
                  </h3>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white/15
                      transition
                      group-hover:bg-white/25
                      group-hover:translate-x-1
                    "
                  >
                    <ChevronRight
                      size={22}
                      className="text-white"
                    />
                  </div>
                </div>

                {/* Description */}

                <p
                  className="
                    mt-2
                    max-w-[270px]
                    text-sm
                    leading-5
                    text-white/80
                  "
                >
                  Join live poojas from temple with
                  experienced and verified Pandits.
                </p>

                {/* Features */}

                <div className="mt-4 flex flex-wrap gap-2">
                  <span
                    className="
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      bg-white/15
                      px-3
                      py-1.5
                      text-[11px]
                      text-white
                    "
                  >
                    <Video size={13} />
                    Live Video
                  </span>

                  <span
                    className="
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      bg-white/15
                      px-3
                      py-1.5
                      text-[11px]
                      text-white
                    "
                  >
                    <BadgeCheck size={13} />
                    Verified
                  </span>
                </div>

                {/* CTA */}

                <div
                  className="
                    mt-4
                    text-xs
                    font-semibold
                    text-white/90
                  "
                >
                  Explore Online Poojas →
                </div>
              </div>
            </Link>

            {/* ================================================= */}
            {/* OFFLINE POOJA CARD - NOW CLICKABLE */}
            {/* ================================================= */}

            <Link
              href="/pooja"
              onClick={onClose}
              className="
                group
                relative
                block
                overflow-hidden
                rounded-3xl
                bg-gradient-to-br
                from-amber-400
                to-orange-500
                p-5
                shadow-lg
                shadow-orange-900/20
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-xl
                hover:shadow-orange-900/30
                active:scale-[0.98]
              "
            >
              {/* Glow */}

              <div
                className="
                  absolute
                  -right-10
                  -top-10
                  h-36
                  w-36
                  rounded-full
                  bg-white/20
                  blur-3xl
                "
              />

              <div className="relative z-10">
                {/* Badge */}

                <span
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    bg-black/10
                    px-3
                    py-1
                    text-[11px]
                    font-semibold
                    tracking-wide
                    text-black
                  "
                >
                  ⭐ VERIFIED PANDITS
                </span>

                {/* Title + Arrow */}

                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-black">
                    Offline Pooja
                  </h3>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-black/10
                      transition
                      group-hover:bg-black/15
                      group-hover:translate-x-1
                    "
                  >
                    <ChevronRight
                      size={22}
                      className="text-black"
                    />
                  </div>
                </div>

                {/* Description */}

                <p
                  className="
                    mt-2
                    max-w-[270px]
                    text-sm
                    leading-5
                    text-black/70
                  "
                >
                  Book experienced and verified Pandits
                  for pooja at your home.
                </p>

                {/* Features */}

                <div className="mt-4 flex flex-wrap gap-2">
                  <span
                    className="
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      bg-black/10
                      px-3
                      py-1.5
                      text-[11px]
                      text-black
                    "
                  >
                    <Home size={13} />
                    Home Visit
                  </span>

                  <span
                    className="
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      bg-black/10
                      px-3
                      py-1.5
                      text-[11px]
                      text-black
                    "
                  >
                    <CalendarDays size={13} />
                    Easy Booking
                  </span>
                </div>

                {/* CTA */}

                <div
                  className="
                    mt-4
                    text-xs
                    font-semibold
                    text-black/80
                  "
                >
                  Explore Home Poojas →
                </div>
              </div>
            </Link>

            {/* ================================================= */}
            {/* POPULAR ONLINE */}
            {/* ================================================= */}

            <div>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">
                  Popular Online Pooja
                </h3>

                <Link
                  href="/pooja/online"
                  onClick={onClose}
                  className="
                    text-xs
                    font-medium
                    text-violet-400
                  "
                >
                  View All
                </Link>
              </div>

              <div className="space-y-3">
                {filterData(onlinePoojas).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      p-3
                      transition
                      hover:border-violet-500/40
                      hover:bg-white/[0.07]
                      active:scale-[0.99]
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        h-14
                        w-14
                        shrink-0
                        rounded-xl
                        object-cover
                      "
                    />

                    <div className="min-w-0 flex-1">
                      <h4 className="truncate font-medium text-white">
                        {item.name}
                      </h4>

                      <p className="mt-1 text-xs text-slate-400">
                        Live temple pooja
                      </p>
                    </div>

                    <ChevronRight
                      size={20}
                      className="
                        shrink-0
                        text-slate-500
                        transition
                        group-hover:translate-x-1
                        group-hover:text-violet-400
                      "
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* ================================================= */}
            {/* HOME POOJA */}
            {/* ================================================= */}

            <div>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">
                  Home Pooja Services
                </h3>

                <Link
                  href="/pooja"
                  onClick={onClose}
                  className="
                    text-xs
                    font-medium
                    text-orange-400
                  "
                >
                  View All
                </Link>
              </div>

              <div className="space-y-3">
                {filterData(offlinePoojas).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      p-3
                      transition
                      hover:border-orange-500/40
                      hover:bg-white/[0.07]
                      active:scale-[0.99]
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        h-14
                        w-14
                        shrink-0
                        rounded-xl
                        object-cover
                      "
                    />

                    <div className="min-w-0 flex-1">
                      <h4 className="truncate font-medium text-white">
                        {item.name}
                      </h4>

                      <p className="mt-1 text-xs text-slate-400">
                        Pandit home visit
                      </p>
                    </div>

                    <ChevronRight
                      size={20}
                      className="
                        shrink-0
                        text-slate-500
                        transition
                        group-hover:translate-x-1
                        group-hover:text-orange-400
                      "
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Empty Search Result */}

            {filterData([
              ...onlinePoojas,
              ...offlinePoojas,
            ]).length === 0 && (
              <div className="py-10 text-center">
                <div className="text-4xl">🔍</div>

                <p className="mt-3 font-medium text-white">
                  No pooja found
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Try searching another pooja
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}