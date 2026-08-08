"use client";

import Link from "next/link";
import { CalendarCheck } from "lucide-react";

export default function StickyBooking() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-gradient-to-t from-[#071424] via-[#071424]/95 to-transparent pb-4 pt-4">

      <div className="w-full max-w-[430px] px-4">

        <Link
          href="/pooja/book"
          className="flex h-16 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-lg font-bold text-black shadow-2xl transition active:scale-95"
        >

          <CalendarCheck size={24} />

          Book Online Pooja

        </Link>

      </div>

    </div>
  );
}