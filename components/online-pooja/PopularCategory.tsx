"use client";

import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Popular Pooja",
    icon: "🙏",
    slug: "popular",
  },
  {
    id: 2,
    title: "Shiv Pooja",
    icon: "🔱",
    slug: "shiv-pooja",
  },
  {
    id: 3,
    title: "Lakshmi Pooja",
    icon: "🪔",
    slug: "lakshmi-pooja",
  },
  {
    id: 4,
    title: "Dosh Nivaran",
    icon: "✨",
    slug: "dosh-nivaran",
  },
  {
    id: 5,
    title: "Griha Pravesh",
    icon: "🏠",
    slug: "griha-pravesh",
  },
  {
    id: 6,
    title: "Business Pooja",
    icon: "💼",
    slug: "business-pooja",
  },
];


export default function PopularCategory() {

  return (

    <section className="mt-6">


      <div className="flex justify-between items-center mb-3">

        <h2 className="text-white text-lg font-semibold">
          Pooja Categories
        </h2>


        <Link
          href="/online-pooja/all"
          className="text-yellow-400 text-sm"
        >
          View All
        </Link>

      </div>



      <div className="grid grid-cols-3 gap-3">


        {categories.map((item)=>(
          
          <Link
            key={item.id}
            href={`/online-pooja/category/${item.slug}`}
            className="
            bg-[#10243b]
            rounded-xl
            p-3
            text-center
            border
            border-white/10
            active:scale-95
            transition
            "
          >

            <div className="
              w-12
              h-12
              mx-auto
              rounded-full
              bg-[#162f4d]
              flex
              items-center
              justify-center
              text-2xl
            ">
              {item.icon}
            </div>


            <p className="
              text-white
              text-xs
              mt-2
              leading-tight
            ">
              {item.title}
            </p>


          </Link>

        ))}


      </div>


    </section>

  );
}