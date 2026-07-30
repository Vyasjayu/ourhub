"use client";
import { Search, Mic, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // URL se existing query parameter nikal kar default state banana
  const [search, setSearch] = useState(searchParams.get("query") || "");

  // Agar URL ka query param change ho toh state update ho jaye
  useEffect(() => {
    setSearch(searchParams.get("query") || "");
  }, [searchParams]);

  // Main Search Logic Function
  const handleSearch = (searchTerm: string) => {
    const trimmed = searchTerm.trim();
    if (trimmed) {
      // User ko search results page par redirect karna query ke saath
      router.push(`/services?query=${encodeURIComponent(trimmed)}`);
    } else {
      // Agar input khali ho toh default ya empty search target par bhej sakte hain
      router.push(`/services`);
    }
  };

  // Enter key press handle karne ke liye
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(search);
    }
  };

  // Web Speech API se Voice Search functional banana
  const handleVoiceSearch = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Aapka browser voice search support nahi karta hai.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "hi-IN"; // Hindi aur English dono support karega

    recognition.onstart = () => {
      setSearch("Listening...");
    };

    recognition.onerror = () => {
      setSearch("");
      alert("Voice samajh nahi aayi, kripya dobara koshish karein.");
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setSearch(transcript);
      handleSearch(transcript); // Voice input milte hi automatic search trigger hoga
    };

    recognition.start();
  };

  return (
    <section className="px-4">
      <div className="rounded-[28px] border border-yellow-500/20 bg-[#101B2C] p-4 shadow-[0_10px_35px_rgba(0,0,0,.35)]">
        {/* Title */}
        <div className="mb-4 flex items-center gap-2">
          <Sparkles size={18} className="text-yellow-400" />
          <h3 className="text-sm font-semibold text-yellow-400">
            Find Your Spiritual Service
          </h3>
        </div>

        {/* Search Input Box */}
        <div className="flex items-center rounded-2xl border border-yellow-500/20 bg-[#071424] px-3 py-2">
          <Search size={20} className="text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search Pandit, Pooja, Astrology..."
            className="flex-1 bg-transparent px-3 text-[15px] text-white placeholder:text-slate-500 outline-none"
          />

          {/* Voice Search Button */}
          <button
            onClick={handleVoiceSearch}
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition hover:bg-white/10"
            title="Voice Search"
          >
            <Mic size={18} className="text-yellow-400" />
          </button>

          {/* Search Submit Button */}
          <button
            onClick={() => handleSearch(search)}
            type="button"
            className="ml-2 flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-[#071424] shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Search size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Popular Searches */}
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Ganesh Pooja",
            "Satyanarayan",
            "Pandit",
            "Rudrabhishek",
            "Kundli",
          ].map((item) => (
            <button
              key={item}
              onClick={() => handleSearch(item)} // Tag click karte hi direct search functional hoga
              className="rounded-full border border-yellow-500/20 bg-[#071424] px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-yellow-400 hover:text-yellow-400"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
