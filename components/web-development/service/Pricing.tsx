"use client";

import {
  IndianRupee,
  Clock,
  RefreshCcw,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

interface Service {
  price: string;
}

interface Props {
  service: Service;
}

export default function Pricing({ service }: Props) {

  const startProject = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="px-4 mt-10">

      {/* Heading */}

      <div>

        <h2 className="text-2xl font-bold text-white">
          Pricing
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Transparent pricing with no hidden charges.
        </p>

      </div>

      {/* Pricing Card */}

      <div
        className="
        mt-6
        rounded-3xl
        border
        border-yellow-500/20
        bg-[#111C30]
        p-6
        "
      >

        {/* Price */}

        <div className="flex items-center gap-3">

          <div
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-yellow-400/10
            "
          >

            <IndianRupee
              className="text-yellow-400"
              size={24}
            />

          </div>

          <div>

            <p className="text-sm text-gray-400">
              Starting From
            </p>

            <h3 className="text-3xl font-extrabold text-yellow-400">
              {service.price}
            </h3>

          </div>

        </div>

        {/* Divider */}

        <div className="my-6 border-t border-white/10" />

        {/* Included */}

        <div className="space-y-4">

          <div className="flex items-center gap-3">

            <Clock
              size={20}
              className="text-green-400"
            />

            <span className="text-gray-300">
              Delivery in 7–15 Days
            </span>

          </div>

          <div className="flex items-center gap-3">

            <RefreshCcw
              size={20}
              className="text-blue-400"
            />

            <span className="text-gray-300">
              Unlimited Revisions
            </span>

          </div>

          <div className="flex items-center gap-3">

            <ShieldCheck
              size={20}
              className="text-yellow-400"
            />

            <span className="text-gray-300">
              Free 30 Days Support
            </span>

          </div>

        </div>

        {/* CTA */}

        <button
          onClick={startProject}
          className="
          mt-8
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

    </section>
  );
}