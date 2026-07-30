"use client";

import Image from "next/image";
import Link from "next/link";

export default function OfferBanner() {
  return (
    <section className="mt-6">

      <Link href="/offers">

        <div
          className="
            relative
            h-[190px]
            overflow-hidden
            rounded-[24px]
            border
            border-yellow-500/30
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:border-yellow-400/60
            hover:shadow-[0_0_25px_rgba(244,197,66,.25)]
          "
        >
          <Image
            src="/images/offers/offer.png"
            alt="Special Offer"
            fill
            priority
            sizes="100vw"
            className="object-fill"
          />
        </div>

      </Link>

    </section>
  );
}