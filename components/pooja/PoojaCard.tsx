"use client";

import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string | number;
  name: string;
  image: string;
  href?: string;
}

export default function PoojaCard({
  id,
  name,
  image,
  href,
}: Props) {
  const targetPath = href || `/pooja/${id}`;

  return (
    <Link
      href={targetPath}
      className="
      group
      relative
      overflow-hidden
      rounded-2xl
      border
      border-[#2B3C55]
      bg-gradient-to-b
      from-[#13243D]
      via-[#0E1B2E]
      to-[#09131F]
      h-[122px]
      p-2.5
      flex
      flex-col
      items-center
      justify-center
      transition-all
      duration-300
      active:scale-95
      hover:-translate-y-1
      hover:border-yellow-400
      hover:shadow-[0_0_25px_rgba(250,204,21,.18)]
    "
    >
      {/* Golden Glow */}

      <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-yellow-400/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Shine */}

      <div
        className="
        absolute
        -left-16
        top-0
        h-full
        w-8
        rotate-12
        bg-white/10
        blur-md
        transition-all
        duration-700
        group-hover:left-[120%]
      "
      />

      {/* Image */}

      <div
        className="
        relative
        flex
        h-[62px]
        w-[62px]
        items-center
        justify-center
        rounded-[18px]
        border
        border-yellow-500/20
        bg-gradient-to-br
        from-yellow-500/20
        to-yellow-500/5
        transition
        duration-300
        group-hover:scale-110
      "
      >
        <div className="absolute h-12 w-12 rounded-full bg-yellow-400/20 blur-xl" />

        <Image
          src={image}
          alt={name}
          width={58}
          height={58}
          priority
          className="
          relative
          object-contain
          drop-shadow-[0_6px_12px_rgba(0,0,0,.45)]
        "
        />
      </div>

      {/* Name */}

      <h3
        className="
        mt-3
        line-clamp-2
        text-center
        text-[11px]
        font-semibold
        leading-4
        text-white
        transition
        duration-300
        group-hover:text-yellow-300
      "
      >
        {name}
      </h3>

      {/* Bottom Highlight */}

      <div
        className="
        absolute
        bottom-0
        left-0
        h-[2px]
        w-0
        bg-gradient-to-r
        from-yellow-400
        via-yellow-500
        to-yellow-300
        transition-all
        duration-300
        group-hover:w-full
      "
      />

      {/* Corner Glow */}

      <div
        className="
        absolute
        right-2
        top-2
        h-2
        w-2
        rounded-full
        bg-yellow-400
        opacity-0
        transition
        group-hover:opacity-100
      "
      />
    </Link>
  );
}