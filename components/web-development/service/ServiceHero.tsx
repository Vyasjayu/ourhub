"use client";

import Image from "next/image";
import { Star, CheckCircle, ArrowRight } from "lucide-react";

interface Service {
  title: string;
  subtitle: string;
  image: string;
  price: string;
}

interface Props {
  service: Service;
  onStartProject: () => void;
}

export default function ServiceHero({
  service,
  onStartProject,
}: Props) {
  return (
    <section className="px-4 pt-5">
      <div
        className="
          overflow-hidden
          rounded-[28px]
          border
          border-yellow-500/20
          bg-[#111C30]
        "
      >
        {/* IMAGE */}
        <div className="relative h-60 w-full">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="(max-width: 430px) 100vw, 430px"
            className="object-cover"
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#050B14]
              via-black/20
              to-transparent
            "
          />
        </div>

        {/* CONTENT */}
        <div className="p-5">

          {/* RATING */}
          <div className="flex items-center gap-2">
            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="text-sm text-yellow-400">
              4.9 Rating • 250+ Projects
            </span>
          </div>

          {/* TITLE */}
          <h1 className="mt-3 text-3xl font-bold text-white">
            {service.title}
          </h1>

          {/* SUBTITLE */}
          <p className="mt-2 text-gray-300">
            {service.subtitle}
          </p>

          {/* PRICE */}
          <div
            className="
              mt-5
              rounded-2xl
              border
              border-yellow-500/20
              bg-[#0D1525]
              p-4
            "
          >
            <p className="text-sm text-gray-400">
              Starting From
            </p>

            <h2 className="mt-1 text-3xl font-extrabold text-yellow-400">
              {service.price}
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              One Time Payment • No Hidden Charges
            </p>
          </div>

          {/* HIGHLIGHTS */}
          <div className="mt-6 space-y-3">

            <div className="flex items-center gap-3">
              <CheckCircle
                size={18}
                className="shrink-0 text-green-400"
              />

              <span className="text-gray-300">
                100% Mobile Responsive
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle
                size={18}
                className="shrink-0 text-green-400"
              />

              <span className="text-gray-300">
                SEO Optimized Website
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle
                size={18}
                className="shrink-0 text-green-400"
              />

              <span className="text-gray-300">
                Free Support Included
              </span>
            </div>

          </div>

          {/* START PROJECT */}
          <button
            type="button"
            onClick={() => {
              console.log("START PROJECT CLICKED");
              onStartProject();
            }}
            className="
              mt-7
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-full
              bg-yellow-400
              py-4
              text-lg
              font-bold
              text-black
              shadow-[0_10px_30px_rgba(250,204,21,0.15)]
              transition
              hover:scale-[1.02]
              active:scale-[0.97]
            "
          >
            Start Project

            <ArrowRight size={20} />
          </button>

        </div>
      </div>
    </section>
  );
}