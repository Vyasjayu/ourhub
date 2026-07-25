"use client";

import { useState, use } from "react";
import Link from "next/link";
import { ChevronLeft, User, Phone, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import { allPoojas } from "@/data/allPooja";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CheckoutPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const poojaId = resolvedParams.id;
  const currentPooja = allPoojas.find((item) => String(item.id) === poojaId);

  // Form States
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    landmark: "",
    city: "Indore",
    notes: ""
  });

  const poojaName = currentPooja?.name || "Pooja Booking";

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const phoneNumber = "918878632431"; // Country Code + Mobile Number (91 + Number)

  const message = `🙏 *New Pooja Booking*

📿 *Pooja:* ${poojaName}

👤 *Name:* ${formData.name}
📞 *Phone:* +91 ${formData.phone}

📍 *City:* ${formData.city}

🏠 *Address:*
${formData.address}

🗺️ *Landmark:* ${
    formData.landmark || "Not Provided"
  }

📝 *Instructions:*
${formData.notes || "None"}

Har Har Mahadev 🙏`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");
};

  return (
    <main className="min-h-screen bg-[#060a0f] flex justify-center items-start antialiased selection:bg-amber-500/30">
      <div className="w-full max-w-[430px] min-h-screen bg-[#0a121c] text-slate-100 flex flex-col relative shadow-[0_0_60px_rgba(0,0,0,0.85)] border-x border-slate-900/60 pb-44">
        
        {/* Sticky Header Layer */}
        <div className="sticky top-0 z-50 bg-[#0a121c]/80 backdrop-blur-xl border-b border-slate-800/30 px-4 py-4 flex items-center gap-3">
          <Link href={`/pooja/${poojaId}`} className="p-2 bg-slate-900/80 rounded-full hover:bg-slate-800/60 border border-slate-800/50 transition">
            <ChevronLeft className="w-4 h-4 text-slate-300" />
          </Link>
          <div>
            <h1 className="font-bold text-sm text-slate-100 tracking-wide uppercase">Confirm Booking</h1>
            <p className="text-[10px] text-amber-400 font-medium truncate max-w-[280px]">{poojaName}</p>
          </div>
        </div>

        {/* Scrollable Form Layout */}
        <form onSubmit={handleSubmit} className="px-4 pt-5 space-y-5 flex-1 overflow-y-auto index-scroll-none">
          
          {/* Quick Call Action (Top Highlight) */}
          <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-xl p-4 text-center space-y-2.5">
            <p className="text-xs text-slate-300 font-medium">Form nahi barna chahte? Direct call par book karein</p>
            <a href="tel:8878632431" className="inline-flex items-center justify-center gap-2 w-full bg-slate-900/60 hover:bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-bold py-2.5 rounded-xl transition duration-150" >
              <Phone size={13} className="animate-pulse" />
              Call Pandit Ji: 8878632431
            </a>
          </div>

          {/* Section 1: User Identity info */}
          <div className="space-y-3 bg-slate-900/30 border border-slate-800/40 rounded-xl p-4 backdrop-blur-sm">
            <h3 className="text-[11px] font-bold text-amber-400 tracking-widest uppercase flex items-center gap-2">
              <User size={13} /> Devotee Details
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">Full Name *</label>
                <input type="text" required placeholder="Enter your full name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-[#070d14] border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition duration-150" />
              </div>
              <div>
                <label className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">Mobile Number *</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 font-medium">+91</span>
                  <input type="tel" required pattern="[0-9]{10}" placeholder="Enter 10-digit mobile" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-[#070d14] border border-slate-800 rounded-xl pl-11 pr-3 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition duration-150" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Address Inputs */}
          <div className="space-y-3 bg-slate-900/30 border border-slate-800/40 rounded-xl p-4 backdrop-blur-sm">
            <h3 className="text-[11px] font-bold text-amber-400 tracking-widest uppercase flex items-center gap-2">
              <MapPin size={13} /> Pooja Location Address
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">House No, Building, Street *</label>
                <textarea required rows={2} placeholder="Flat no., House name, Road details..." value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} className="w-full bg-[#070d14] border border-slate-800 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500/50 resize-none transition duration-150" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">Landmark</label>
                  <input type="text" placeholder="e.g. Near Temple" value={formData.landmark} onChange={(e) => setFormData({...formData, landmark: e.target.value})} className="w-full bg-[#070d14] border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500/50" />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">City *</label>
                  <select value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} className="w-full bg-[#070d14] border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-amber-500/50 appearance-none" >
                    <option value="Indore">Indore</option>
                    <option value="Ujjain">Ujjain</option>
                    <option value="Ratlam">Ratlam</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Special Request Notes */}
          <div className="space-y-3 bg-slate-900/30 border border-slate-800/40 rounded-xl p-4 backdrop-blur-sm">
            <h3 className="text-[11px] font-bold text-slate-400 tracking-widest uppercase flex items-center gap-2">
              <MessageSquare size={13} /> Any Special Instructions?
            </h3>
            <input type="text" placeholder="e.g. Gotra name, specific timing request..." value={formData.notes} onChange={(e) => setFormData({...formData, notes: e.target.value})} className="w-full bg-[#070d14] border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500/50" />
          </div>

          {/* Security Badge */}
          <div className="flex items-center justify-center gap-2 py-2 text-slate-500 text-[10px] uppercase tracking-wider">
            <ShieldCheck className="text-emerald-500" size={14} /> Verified Pooja Management & Zero Advanced Booking Fee
          </div>

          {/* Fixed Bottom Action Container (Double Stack Layout) */}
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 px-4 pb-5 pt-3.5 bg-[#0a121c]/95 backdrop-blur-xl border-t border-slate-800/50 shadow-[0_-10px_30px_rgba(0,0,0,0.55)] flex flex-col gap-2">
            <button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs py-3.5 rounded-xl shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:brightness-110 active:scale-[0.98] transition duration-150 uppercase tracking-widest" >
              Confirm Booking (Free Registration)
            </button>
            <a href="tel:8878632431" className="w-full text-center bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-bold text-xs py-3 rounded-xl transition" >
              Instant Book via Call
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
