"use client";

import { CheckCircle2 } from "lucide-react";

interface Service {
  features: string[];
}

interface Props {
  service: Service;
}

export default function Features({
  service,
}: Props) {
  return (
    <section className="px-4 mt-8">

      {/* Heading */}

      <div className="mb-5">

        <h2 className="text-2xl font-bold text-white">
          What's Included
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Everything you need to launch your business online.
        </p>

      </div>

      {/* Features Grid */}

      <div className="grid grid-cols-2 gap-4">

        {service.features.map((feature) => (

          <div
            key={feature}
            className="
            rounded-2xl
            border
            border-yellow-500/20
            bg-[#111C30]
            p-4
            transition
            hover:border-yellow-400
            "
          >

            <div
              className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-yellow-400/10
              "
            >

              <CheckCircle2
                size={22}
                className="text-yellow-400"
              />

            </div>

            <h3 className="mt-4 text-sm font-semibold text-white leading-6">
              {feature}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}