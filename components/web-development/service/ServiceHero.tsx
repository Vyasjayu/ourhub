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
}

export default function ServiceHero({ service }: Props) {
  const startProject = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="px-4 pt-5">

      {/* Hero Card */}

      <div
        className="
        overflow-hidden
        rounded-[28px]
        border
        border-yellow-500/20
        bg-[#111C30]
      "
      >

        {/* Image */}

        <div className="relative h-60 w-full">

          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
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

          <div
            className="
            absolute
            left-4
            top-4
            rounded-full
            bg-yellow-400
            px-3
            py-1
            text-xs
            font-bold
            text-black
          "
          >
            Premium Service
          </div>

        </div>

        {/* Content */}

        <div className="p-5">

          <div className="flex items-center gap-2">

            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="text-sm text-yellow-400">
              4.9 Rating • 250+ Projects
            </span>

          </div>

          <h1 className="mt-3 text-3xl font-bold text-white">
            {service.title}
          </h1>

          <p className="mt-2 text-gray-300">
            {service.subtitle}
          </p>

          {/* Price */}

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

          {/* Highlights */}

          <div className="mt-6 space-y-3">

            <div className="flex items-center gap-3">

              <CheckCircle
                size={18}
                className="text-green-400"
              />

              <span className="text-gray-300">
                100% Mobile Responsive
              </span>

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle
                size={18}
                className="text-green-400"
              />

              <span className="text-gray-300">
                SEO Optimized Website
              </span>

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle
                size={18}
                className="text-green-400"
              />

              <span className="text-gray-300">
                Free Support Included
              </span>

            </div>

          </div>

          {/* CTA */}

          <button
            onClick={startProject}
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
            transition
            hover:scale-[1.02]
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