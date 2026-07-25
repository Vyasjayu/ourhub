"use client";

import { ArrowLeft, Heart, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 pt-5">
      <div className="flex items-center gap-3">
        <ArrowLeft className="text-yellow-400 w-6 h-6" />

        <h1 className="text-3xl font-bold text-yellow-400">
          All Pooja Services
        </h1>
      </div>

      <div className="flex gap-5">
        <Search className="text-yellow-300 w-7 h-7" />
        <Heart className="text-yellow-300 w-7 h-7" />
      </div>
    </header>
  );
}