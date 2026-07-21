// "use client";

// import { useEffect } from "react";
// import Link from "next/link";
// import {
//   X,
//   Home,
//   Building2,
//   Wrench,
//   Car,
//   Plane,
//   Monitor,
//   Tractor,
// } from "lucide-react";
// import { FaOm } from "react-icons/fa6";

// const menuItems = [
//   { name: "Home", icon: Home, href: "/" },
//   { name: "Religious", icon: FaOm, href: "/religious" },
//   { name: "Home Service", icon: Wrench, href: "/home-service" },
//   { name: "Travel", icon: Plane, href: "/travel" },
//   { name: "Software", icon: Monitor, href: "/software" },
//   { name: "Agriculture", icon: Tractor, href: "/agriculture" },
//   { name: "Automobile", icon: Car, href: "/automobile" },
// ];

// interface Props {
//   open: boolean;
//   onClose: () => void;
// }

// export default function Sidebar({ open, onClose }: Props) {

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [open]);

//   return (
//     <>
    
//       {/* Overlay */}
//       <div
//         onClick={onClose}
//         className={`fixed inset-0 bg-black/60 transition-opacity duration-300 z-40
//         ${
//           open
//             ? "opacity-100 visible"
//             : "opacity-0 invisible"
//         }`}
//       />

//       {/* Sidebar */}
//       <aside
//         className={`fixed top-0 left-0 h-screen
//         w-[82%] max-w-[320px]
//         bg-[#081423]
//         text-white
//         shadow-2xl
//         z-50
//         transform
//         transition-transform
//         duration-300
//         ease-in-out
//         ${
//           open
//             ? "translate-x-0"
//             : "-translate-x-full"
//         }`}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between p-5 border-b border-gray-700">

//           <h2 className="text-2xl font-bold text-yellow-400">
//             OurHub
//           </h2>

//           <button
//             onClick={onClose}
//             className="p-2 rounded-full hover:bg-gray-700"
//           >
//             <X size={26} />
//           </button>

//         </div>

//         {/* Menu */}

//         <nav className="p-4 space-y-2">

//           {menuItems.map((item, i) => {

//             const Icon = item.icon;

//             return (

//               <Link
//                 key={i}
//                 href={item.href}
//                 onClick={onClose}
//                 className="flex items-center gap-4 rounded-xl p-3 hover:bg-yellow-500 hover:text-black transition-all duration-200"
//               >
//                 <Icon size={22} />

//                 <span className="text-[17px] font-medium">
//                   {item.name}
//                 </span>

//               </Link>

//             );

//           })}

//         </nav>

//       </aside>
//     </>
//   );
// }


"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  X,
  Home,
  Wrench,
  Car,
  Plane,
  Monitor,
  Tractor,
} from "lucide-react";
import { FaOm } from "react-icons/fa6";

const menuItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Religious", icon: FaOm, href: "/religious" },
  { name: "Home Service", icon: Wrench, href: "/home-service" },
  { name: "Travel", icon: Plane, href: "/travel" },
  { name: "Software", icon: Monitor, href: "/software" },
  { name: "Agriculture", icon: Tractor, href: "/agriculture" },
  { name: "Automobile", icon: Car, href: "/automobile" },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
console.log("Sidebar open:", open);

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[999] ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Mobile App Container */}
      <div className="relative h-full max-w-[430px] mx-auto">
        <aside
          className={`absolute top-0 left-0 h-full
          w-[82%]
          max-w-[320px]
          bg-[#081423]
          text-white
          shadow-2xl
          transform
          transition-transform
          duration-300
          ease-in-out
          ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <h2 className="text-2xl font-bold text-yellow-400">
              OurHub
            </h2>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu */}
          <nav className="p-4 space-y-2">
            {menuItems.map((item, i) => {
              const Icon = item.icon;

              return (
                <Link
                  key={i}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-4 rounded-xl p-3 hover:bg-[#D4AF37] hover:text-[#071321] transition"
                >
                  <Icon size={22} />

                  <span className="text-[16px] font-medium">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>
        </aside>
      </div>
    </div>
  );
}