"use client";

import { FileText } from "lucide-react";

interface Service {
  description: string;
}

interface Props {
  service: Service;
}

export default function ServiceOverview({
  service,
}: Props) {
  return (
    <section className="px-4 mt-8">

      <div
        className="
        rounded-3xl
        bg-[#111C30]
        border
        border-yellow-500/20
        p-5
        "
      >

        <div className="flex items-center gap-3">

          <div
            className="
            h-12
            w-12
            rounded-2xl
            bg-yellow-400/15
            flex
            items-center
            justify-center
            "
          >

            <FileText
              className="text-yellow-400"
              size={22}
            />

          </div>

          <div>

            <h2 className="text-xl font-bold text-white">
              About This Service
            </h2>

            <p className="text-sm text-gray-400">
              Premium Website Development
            </p>

          </div>

        </div>

        <p className="mt-5 leading-8 text-gray-300">
          {service.description}
        </p>

      </div>

    </section>
  );
}