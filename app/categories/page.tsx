"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Search } from "lucide-react";

const categories = [
  {
    title: "Religious",
    image: "/images/categories/religious.png",
    link: "/religious",
  },
  {
    title: "Home Services",
    image: "/images/categories/home.png",
    link: "/home-services",
  },
  {
    title: "Astrology",
    image: "/images/categories/astrology.png",
    link: "/astrology",
  },
  {
    title: "Events",
    image: "/images/categories/events.png",
    link: "/events",
  },
  {
    title: "Digital Marketing",
    image: "/images/categories/digital-marketing.png",
    link: "/digital-marketing",
  },
  {
    title: "Automobile",
    image: "/images/categories/automobile.png",
    link: "/automobile",
  },
  {
    title: "Construction",
    image: "/images/categories/construction.png",
    link: "/construction",
  },
  {
    title: "Software",
    image: "/images/categories/software.png",
    link: "/software",
  },
  {
    title: "Health",
    image: "/images/categories/health.png",
    link: "/health",
  },
  {
    title: "Education",
    image: "/images/categories/education.png",
    link: "/education",
  },
  {
    title: "Cleaning",
    image: "/images/categories/cleaning.png",
    link: "/cleaning",
  },
  {
    title: "Travel",
    image: "/images/categories/travel.png",
    link: "/travel",
  },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-[#071424] pb-28">

      {/* Header */}

      <header className="sticky top-0 z-50 border-b border-yellow-500/10 bg-[#071424]/95 backdrop-blur-xl">

        <div className="mx-auto flex max-w-md items-center gap-4 px-4 py-4">

          <Link href="/">
            <ChevronLeft className="text-white" />
          </Link>

          <h1 className="text-xl font-bold text-white">
            All Categories
          </h1>

        </div>

      </header>

      <div className="mx-auto max-w-md px-4">

        {/* Search */}

        <div className="relative mt-5">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            placeholder="Search category..."
            className="w-full rounded-2xl border border-yellow-500/20 bg-[#111827] py-3 pl-12 pr-4 text-white outline-none placeholder:text-slate-500"
          />

        </div>

        {/* Grid */}

        <div className="mt-6 grid grid-cols-2 gap-4">

          {categories.map((item) => (

            <Link
              key={item.title}
              href={item.link}
              className="group rounded-3xl border border-yellow-500/20 bg-[#111827] p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(250,204,21,.2)]"
            >

              <div className="flex justify-center">

                <div className="relative h-20 w-20">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="80px"
                    className="object-contain transition duration-300 group-hover:scale-110"
                  />

                </div>

              </div>

              <h3 className="mt-4 text-center text-sm font-semibold text-white">
                {item.title}
              </h3>

            </Link>

          ))}

        </div>

      </div>

    </main>
  );
}