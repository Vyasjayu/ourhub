"use client";

import { allPoojas } from "@/data/allPooja";
import Image from "next/image";
import Link from "next/link";
// import { allPoojas } from "@/data/pooja";


export default function PoojaList() {


  return (

    <section className="mt-8">


      <div className="flex items-center justify-between mb-4">

        <h2 className="text-white text-lg font-semibold">
          All Pooja Services
        </h2>


        <Link
          href="/online-pooja/all"
          className="text-yellow-400 text-sm"
        >
          View All
        </Link>

      </div>



      <div className="grid grid-cols-2 gap-4">


        {allPoojas.slice(0,10).map((pooja)=>(


          <div
            key={pooja.id}
            className="
            bg-[#10243b]
            rounded-2xl
            overflow-hidden
            border
            border-white/10
            "
          >


            {/* Image */}

            <div className="relative h-32 w-full">


              <Image

                src={pooja.image}

                alt={pooja.name}

                fill

                className="object-cover"

              />



              {pooja.popular && (

                <span
                  className="
                  absolute
                  top-2
                  left-2
                  bg-yellow-500
                  text-black
                  text-[10px]
                  px-2
                  py-1
                  rounded-full
                  font-semibold
                  "
                >

                  Popular

                </span>

              )}



            </div>




            {/* Content */}

            <div className="p-3">


              <h3
                className="
                text-white
                text-sm
                font-semibold
                line-clamp-1
                "
              >

                {pooja.name}

              </h3>



              <p
                className="
                text-gray-400
                text-xs
                mt-1
                "
              >

                ⏱ {pooja.duration}

              </p>




              <div className="
                flex
                justify-between
                items-center
                mt-3
              ">


                <span
                  className="
                  text-yellow-400
                  text-sm
                  font-bold
                  "
                >

                  ₹{pooja.price}

                </span>




                <Link

                  href={`/online-pooja/${pooja.id}`}

                  className="
                  bg-yellow-500
                  text-black
                  text-xs
                  px-3
                  py-2
                  rounded-lg
                  font-semibold
                  "

                >

                  Book

                </Link>


              </div>


            </div>



          </div>


        ))}


      </div>



    </section>

  );

}