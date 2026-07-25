"use client";

import Image from "next/image";
import Link from "next/link"; // 1. Next Link Import Kiya

interface Props {
  id: string | number; // Added to fallback if dynamic slug is used
  name: string;
  image: string;
  href?: string; // 2. Optional Href Prop Receive Kiya
}

export default function PoojaCard({ id, name, image, href }: Props) {
  // Agar parent component se href nahi aa raha, toh default fallback path set kiya
  const targetPath = href || `/pooja/${id}`;

  return (
    // 3. Poore Div Ko Link Component Se Replace Kiya
    <Link
      href={targetPath}
      className="group bg-[#0e1724]/90 backdrop-blur-sm rounded-xl border border-slate-800/60 flex flex-col items-center justify-center p-2 h-[112px] active:scale-[0.96] transition-all duration-200 hover:border-amber-500/30 hover:bg-[#121d2e] shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
    >
      {/* 
        Premium Glow Container Behind Deity Images:
        Isse transparent backgrounds modern aur glowing premium design ban jate hain
      */}
      <div className="relative w-12 h-12 flex items-center justify-center bg-radial-gradient from-amber-500/10 to-transparent rounded-full group-hover:scale-105 transition-transform duration-200">
        <div className="absolute inset-0 bg-amber-500/5 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative w-11 h-11">
          <Image
            src={image}
            alt={name}
            fill
            sizes="44px"
            priority
            className="object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>

      {/* Typography: Space optimization & multi-line safety */}
      <p className="mt-2 text-center text-[10px] font-medium text-slate-300 leading-3 tracking-wide group-hover:text-slate-100 line-clamp-2 transition-colors">
        {name}
      </p>
    </Link>
  );
}
