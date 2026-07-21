"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Tag } from "lucide-react";


export default function OfferBanner() {

  return (

    <section className="mt-8 px-4">

      <div
        className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-cyan-400/30
        bg-gradient-to-br
        from-cyan-500/20
        via-slate-900
        to-purple-600/20
        p-5
        "
      >


        {/* Background Glow */}

        <div
          className="
          absolute
          -right-10
          -top-10
          h-32
          w-32
          rounded-full
          bg-cyan-400/20
          blur-3xl
          "
        />


        <div
          className="
          absolute
          -bottom-10
          -left-10
          h-32
          w-32
          rounded-full
          bg-purple-500/20
          blur-3xl
          "
        />



        {/* Content */}

        <div className="relative z-10">


          <div className="flex items-center gap-2">

            <div
              className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-yellow-400/20
              "
            >

              <Tag
                size={22}
                className="text-yellow-400"
              />

            </div>


            <span
              className="
              text-sm
              font-medium
              text-cyan-300
              "
            >
              Special Offer
            </span>


          </div>




          <h2
            className="
            mt-4
            text-2xl
            font-bold
            leading-tight
            text-white
            "
          >
            Get Best Services
            <br />
            At Affordable Price
          </h2>



          <p
            className="
            mt-2
            text-sm
            text-slate-300
            "
          >
            Book trusted professionals near you
            and save more on your first booking.
          </p>




          <Link
            href="/services"
            className="
            mt-5
            flex
            w-fit
            items-center
            gap-2
            rounded-full
            bg-cyan-400
            px-5
            py-3
            text-sm
            font-semibold
            text-slate-900
            transition
            hover:bg-cyan-300
            "
          >

            Explore Services

            <ArrowRight size={18}/>

          </Link>



        </div>




        {/* Floating Icon */}

        <div
          className="
          absolute
          bottom-5
          right-5
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-white/10
          backdrop-blur
          "
        >

          <Sparkles
            size={32}
            className="text-yellow-300"
          />

        </div>



      </div>


    </section>

  );

}