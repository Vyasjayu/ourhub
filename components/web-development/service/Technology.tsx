"use client";

import {
  Code2,
  Database,
  Globe,
  Server,
  Smartphone,
} from "lucide-react";

interface Service {
  technologies: string[];
}

interface Props {
  service: Service;
}

export default function Technology({
  service,
}: Props) {

  const getIcon = (tech: string) => {

    const value = tech.toLowerCase();

    if (
      value.includes("react") ||
      value.includes("next")
    ) {
      return <Code2 size={22} />;
    }

    if (
      value.includes("mongo") ||
      value.includes("firebase")
    ) {
      return <Database size={22} />;
    }

    if (
      value.includes("node") ||
      value.includes("express")
    ) {
      return <Server size={22} />;
    }

    if (
      value.includes("android") ||
      value.includes("ios") ||
      value.includes("react native")
    ) {
      return <Smartphone size={22} />;
    }

    return <Globe size={22} />;
  };

  return (

    <section className="px-4 mt-10">

      {/* Heading */}

      <div>

        <h2 className="text-2xl font-bold text-white">
          Technology Stack
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Latest technologies used to build your project.
        </p>

      </div>

      {/* Cards */}

      <div className="mt-6 grid grid-cols-2 gap-4">

        {service.technologies.map((tech) => (

          <div
            key={tech}
            className="
            rounded-2xl
            border
            border-yellow-500/20
            bg-[#111C30]
            p-5
            transition
            hover:border-yellow-400
            hover:scale-[1.02]
            "
          >

            <div
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-yellow-400/10
              text-yellow-400
              "
            >

              {getIcon(tech)}

            </div>

            <h3 className="mt-4 text-base font-semibold text-white">
              {tech}
            </h3>

            <p className="mt-1 text-xs text-gray-400">
              Industry Standard Technology
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}