"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Share2, Star, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { allPoojas } from "@/data/allPooja";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function PoojaDetailsPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const poojaId = resolvedParams.id;

  const currentPooja = allPoojas.find((item) => String(item.id) === poojaId);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const name = currentPooja?.name || "Pooja Details";
  const imageSrc = currentPooja?.image || "";
  // const basePrice = currentPooja?.price || 1599;
  // const originalPrice = currentPooja?.originalPrice || 2199;
  // const discountPercent = currentPooja?.discount || 25;

  return (
    <main className="min-h-screen bg-[#060a0f] flex justify-center items-start antialiased selection:bg-amber-500/30">
      <div className="w-full max-w-[430px] min-h-screen bg-[#0a121c] text-slate-100 flex flex-col relative shadow-[0_0_60px_rgba(0,0,0,0.85)] border-x border-slate-900/60 pb-36">

        {/* Sticky Header Layer with Premium Glassmorphism */}
        <div className="sticky top-0 z-50 bg-[#0a121c]/80 backdrop-blur-xl border-b border-slate-800/30 px-4 py-4 flex items-center justify-between">
          <Link href="/pooja" className="p-2 bg-slate-900/80 rounded-full hover:bg-slate-800/60 border border-slate-800/50 transition">
            <ChevronLeft className="w-4 h-4 text-slate-300" />
          </Link>
          <h1 className="font-semibold text-sm max-w-[220px] truncate text-slate-100 tracking-wide uppercase">{name}</h1>
          <button className="p-2 bg-slate-900/80 rounded-full hover:bg-slate-800/60 border border-slate-800/50 transition">
            <Share2 className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* Hero Section - Glowing Immersive Card */}
        <div className="relative h-64 w-full px-4 pt-4">
          <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-slate-800/50 bg-gradient-to-b from-[#111e2e] to-[#0a121c] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a121c] via-transparent to-black/10 z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_70%)]" />
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={name}
                fill
                priority
                className="object-contain p-6 filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.7)] scale-105 transition-transform duration-500 hover:scale-110"
              />
            ) : (
              <span className="text-slate-600 text-xs tracking-widest uppercase font-mono">[ Divine Asset Canvas ]</span>
            )}
          </div>
        </div>

        {/* Core Layout Content Block (With consistent horizontal padding) */}
        <div className="px-4 pt-5 space-y-5">

          {/* Unlocked & Beautified Pricing Structure */}
          <div className="flex items-center justify-between bg-slate-900/30 border border-slate-800/40 rounded-xl p-3 backdrop-blur-sm">
            <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded-lg">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-[11px] font-bold text-amber-400">4.9 (3.2k Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              {/* <span className="text-xl font-extrabold text-amber-400 tracking-tight">₹{basePrice}</span> */}
              {/* <span className="text-xs line-through text-slate-500">₹{originalPrice}</span> */}
              {/* <span className="text-[9px] font-bold bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20 uppercase"> */}
              {/* {discountPercent}% OFF */}
              {/* </span> */}
            </div>
          </div>

          {/* Metrics Row (Now perfectly padded within screen boundaries) */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-900/50 border border-slate-800/40 rounded-xl p-3 flex items-center gap-3">
              <div className="p-2 bg-amber-500/5 rounded-lg border border-amber-500/10">
                <Clock className="w-4 h-4 text-amber-400/90" />
              </div>
              <div>
                <p className="text-[9px] text-slate-500 uppercase tracking-widest font-medium">Duration</p>
                <p className="text-xs font-semibold text-slate-300">90 Minutes</p>
              </div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800/40 rounded-xl p-3 flex items-center gap-3">
              <div className="p-2 bg-amber-500/5 rounded-lg border border-amber-500/10">
                <MapPin className="w-4 h-4 text-amber-400/90" />
              </div>
              <div>
                <p className="text-[9px] text-slate-500 uppercase tracking-widest font-medium">Available In</p>
                <p className="text-xs font-semibold text-slate-300 truncate max-w-[110px]">Indore, Ujjain...</p>
              </div>
            </div>
          </div>

          {/* Package Inclusions Section */}
          <div className="bg-gradient-to-b from-slate-900/60 to-slate-900/20 border border-slate-800/40 rounded-xl p-4 space-y-3 shadow-inner">
            <h3 className="text-[11px] font-bold text-amber-400/90 tracking-widest uppercase">What You'll Get</h3>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2.5 text-xs text-slate-300">
              {[
                "Experienced Pandit",
                "Complete Samagri",
                "Muhurat Guidance",
                "Sankalp & Prasad",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-950/20 border border-slate-900/50 py-1.5 px-2 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span className="truncate text-slate-300 font-medium text-[11px]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Horizontal Scheduler Module */}
          <div className="space-y-2.5">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Select Date</h3>
            <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-none snap-x">
              {[
                { day: "Mon", date: "27" },
                { day: "Tue", date: "28" },
                { day: "Wed", date: "29" },
                { day: "Thu", date: "30" },
              ].map((d, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedDate(d.date)}
                  className={`flex flex-col items-center justify-center min-w-[64px] h-16 rounded-xl border snap-mini snap-start transition-all duration-200 ${selectedDate === d.date
                      ? "bg-gradient-to-b from-amber-400 to-amber-500 text-slate-950 border-amber-400 font-black shadow-[0_4px_15px_rgba(245,158,11,0.25)] scale-102"
                      : "bg-slate-900/40 border-slate-800/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                    }`}
                >
                  <span className="text-[9px] uppercase tracking-wider font-semibold opacity-80">{d.day}</span>
                  <span className="text-sm font-bold mt-0.5">{d.date}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Time Picker Module */}
          <div className="space-y-2.5">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Available Slots</h3>
            <div className="grid grid-cols-3 gap-2">
              {["09:00 AM", "11:30 AM", "04:00 PM"].map((time, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedTime(time)}
                  className={`py-2.5 px-2 text-xs font-semibold rounded-xl border transition-all duration-200 text-center ${selectedTime === time
                      ? "bg-amber-400 text-slate-950 border-amber-400 shadow-[0_4px_12px_rgba(245,158,11,0.15)]"
                      : "bg-slate-900/40 border-slate-800/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                    }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Fixed Transaction Tracker Footer with Unlocked Dynamic Price */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 px-4 pb-6 pt-3.5 bg-[#0a121c]/95 backdrop-blur-xl border-t border-slate-800/50 flex items-center justify-between gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
          <div>
            <p className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold">Total Payable</p>
            {/* <p className="text-xl font-black text-amber-400 tracking-tight mt-0.5">₹{basePrice}</p> */}
          </div>
          <Link
            href={`/pooja/${poojaId}/checkout`}
            className="flex-1 text-center bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-xs py-3.5 rounded-xl shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:brightness-110 active:scale-[0.98] transition duration-150 uppercase tracking-wider block"
          >
            Book Service Now
          </Link>

        </div>

      </div>
    </main>
  );
}
