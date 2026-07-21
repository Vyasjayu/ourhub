// "use client";

// import { Menu, Bell } from "lucide-react";
// import Image from "next/image";

// interface HeaderProps {
//   onMenuClick: () => void;
// }

// export default function Header({ onMenuClick }: HeaderProps) {
//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-[#061225]/95 backdrop-blur-xl border-b border-white/10">
//       <div className="max-w-md mx-auto h-16 px-5 flex items-center justify-between">

//         {/* Menu */}
//         <button
//           onClick={onMenuClick}
//           className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
//         >
//           <Menu className="text-white" size={24} />
//         </button>

//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <Image
//             src="/ourhub-logo.png"
//             alt="OurHub"
//             width={120}
//             height={120}
//             priority
//           />

//           <h1 className="text-3xl font-extrabold">
//             <span className="text-white">Our</span>
//             <span className="text-[#D4AF37]">Hub</span>
//           </h1>
//         </div>

//         {/* Notification */}
//         <button className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
//           <Bell className="text-white" size={22} />
//         </button>

//       </div>
//     </header>
//   );
// }

"use client";

import { Menu, Bell } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#061225]/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[430px] mx-auto h-16 px-5 flex items-center justify-between">

        {/* Menu */}
        <button
          onClick={onMenuClick}
          className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
        >
          <Menu className="text-white" size={24} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/ourhub-logo.png"
            alt="OurHub"
            width={120}
            height={100}
            priority
          />

          <h1 className="text-3xl font-extrabold">
            <span className="text-white">Our</span>
            <span className="text-[#D4AF37]">Hub</span>
          </h1>
        </div>

        {/* Notification */}
        <button className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
          <Bell className="text-white" size={22} />
        </button>

      </div>
    </header>
  );
}