"use client";

import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({
  title,
  description,
}: ComingSoonProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">

      <div className="max-w-5xl mx-auto px-5 py-16">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-yellow-400 mb-10"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur p-10 text-center">

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500/20">
            <Clock className="text-yellow-400" size={40} />
          </div>

          <h1 className="text-4xl font-bold mb-4">
            {title}
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {description}
          </p>

          <div className="mt-10 inline-flex rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black">
            🚀 Coming Soon
          </div>

        </div>
      </div>
    </main>
  );
}