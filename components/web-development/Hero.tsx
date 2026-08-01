"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-4 mt-5">
      <Link
        href="/web-development"
        className="
          block
          overflow-hidden
          rounded-3xl
          border
          border-yellow-500/20
          bg-[#111C30]
          shadow-[0_20px_60px_rgba(0,0,0,.45)]
          transition
          duration-300
          hover:scale-[1.02]
          hover:border-yellow-400/50
          active:scale-[0.99]
        "
      >
        <Image
          src="/services/web/banner.jpg"
          alt="Website Development"
          width={1200}
          height={700}
          priority
          className="w-full h-64 object-cover"
        />
      </Link>
    </section>
  );
}