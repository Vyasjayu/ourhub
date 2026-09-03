"use client";

import Link from "next/link";
import { Percent, ArrowRight } from "lucide-react";

export default function DiscountBanner() {
  return (
    <section className="px-4 pt-5">
      <div className="flex items-center justify-between gap-3 rounded-[15px] border border-[#80631b] bg-[#12130f] px-3 py-4">
        {/* Left */}
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full bg-[#f3c84b]">
            <Percent size={24} className="text-[#111]" strokeWidth={3} />
          </div>

          <div>
            <h3 className="text-[14px] font-extrabold text-[#f5c84c]">
              First Service Discount
            </h3>

            <p className="mt-1 text-[10px] leading-[14px] text-gray-400">
              Get special discount on your
              <br />
              first home service booking.
            </p>
          </div>
        </div>

        {/* Button */}
        <Link
          href="/home-services"
          className="flex shrink-0 items-center gap-1 rounded-[8px] bg-[#f5c84c] px-3 py-2.5 text-[10px] font-extrabold text-black"
        >
          Book Now
          <ArrowRight size={12} />
        </Link>
      </div>
    </section>
  );
}