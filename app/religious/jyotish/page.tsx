"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Star,
} from "lucide-react";

// export default function JyotishBookingPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     city: "",
//     date: "",
//     time: "",
//     mode: "Audio Call",
//     category: "Career",
//     problem: "",
//   });

//   return (
//     <main className="min-h-screen bg-[#060a0f] flex justify-center">
//       <div className="w-full max-w-[430px] min-h-screen bg-[#0a121c] text-white pb-44">

//         {/* Header */}

//         <div className="sticky top-0 z-50 bg-[#0a121c]/90 backdrop-blur-xl border-b border-slate-800 px-4 py-4 flex items-center gap-3">

//           <Link
//             href="/religious/jyotish"
//             className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center"
//           >
//             <ChevronLeft size={18} />
//           </Link>

//           <div>

//             <h1 className="font-bold text-lg">
//               Jyotish Consultation
//             </h1>

//             <p className="text-xs text-amber-400">
//               Complete Booking Form
//             </p>

//           </div>

//         </div>

//         <form className="px-4 pt-5 space-y-5">

//           {/* Astrologer Card */}

//           <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 to-yellow-500/5 p-5">

//             <div className="flex gap-4">

//               <div className="w-20 h-20 rounded-2xl bg-[#D4AF37] flex items-center justify-center text-4xl">
//                 🔮
//               </div>

//               <div className="flex-1">

//                 <h2 className="font-bold text-lg">
//                   Acharya Rahul Sharma
//                 </h2>

//                 <p className="text-sm text-slate-400 mt-1">
//                   15+ Years Experience
//                 </p>

//                 <div className="flex items-center gap-1 mt-2">
//                   <Star
//                     size={16}
//                     className="fill-yellow-400 text-yellow-400"
//                   />
//                   <span className="text-sm">4.9 Rating</span>
//                 </div>

//                 <h3 className="mt-3 text-2xl font-bold text-[#D4AF37]">
//                   ₹499
//                 </h3>

//               </div>

//             </div>

//           </div>

//           {/* Customer Details */}

//           <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5">

//             <h2 className="text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-5">
//               Customer Details
//             </h2>

//             <div className="space-y-4">

//               {/* Name */}

//               <div>

//                 <label className="text-xs text-slate-400">
//                   Full Name
//                 </label>

//                 <div className="mt-2 flex items-center rounded-xl bg-[#071018] border border-slate-700 px-3">

//                   <User size={18} />

//                   <input
//                     type="text"
//                     value={formData.name}
//                     onChange={(e)=>
//                       setFormData({
//                         ...formData,
//                         name:e.target.value
//                       })
//                     }
//                     placeholder="Enter full name"
//                     className="flex-1 bg-transparent p-3 outline-none"
//                   />

//                 </div>

//               </div>

//               {/* Phone */}

//               <div>

//                 <label className="text-xs text-slate-400">
//                   Mobile Number
//                 </label>

//                 <div className="mt-2 flex items-center rounded-xl bg-[#071018] border border-slate-700 px-3">

//                   <Phone size={18} />

//                   <input
//                     type="tel"
//                     value={formData.phone}
//                     onChange={(e)=>
//                       setFormData({
//                         ...formData,
//                         phone:e.target.value
//                       })
//                     }
//                     placeholder="9876543210"
//                     className="flex-1 bg-transparent p-3 outline-none"
//                   />

//                 </div>

//               </div>

//               {/* Email */}

//               <div>

//                 <label className="text-xs text-slate-400">
//                   Email
//                 </label>

//                 <div className="mt-2 flex items-center rounded-xl bg-[#071018] border border-slate-700 px-3">

//                   <Mail size={18} />

//                   <input
//                     type="email"
//                     value={formData.email}
//                     onChange={(e)=>
//                       setFormData({
//                         ...formData,
//                         email:e.target.value
//                       })
//                     }
//                     placeholder="example@gmail.com"
//                     className="flex-1 bg-transparent p-3 outline-none"
//                   />

//                 </div>

//               </div>

//               {/* City */}

//               <div>

//                 <label className="text-xs text-slate-400">
//                   City
//                 </label>

//                 <div className="relative mt-2">

//                   <MapPin
//                     size={18}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                   />

//                   <select
//                     value={formData.city}
//                     onChange={(e)=>
//                       setFormData({
//                         ...formData,
//                         city:e.target.value
//                       })
//                     }
//                     className="w-full rounded-xl bg-[#071018] border border-slate-700 pl-10 pr-4 py-3 appearance-none"
//                   >

//                     <option value="">
//                       Select City
//                     </option>

//                     <option>Indore</option>
//                     <option>Ujjain</option>
//                     <option>Bhopal</option>
//                     <option>Dewas</option>
//                     <option>Ratlam</option>
//                     <option>Khargone</option>
//                     <option>Khandwa</option>

//                   </select>

//                 </div>

//               </div>
//                             {/* Preferred Date */}

//               <div>

//                 <label className="text-xs text-slate-400">
//                   Preferred Date
//                 </label>

//                 <div className="mt-2 flex items-center rounded-xl bg-[#071018] border border-slate-700 px-3">

//                   <Calendar size={18} />

//                   <input
//                     type="date"
//                     value={formData.date}
//                     onChange={(e)=>
//                       setFormData({
//                         ...formData,
//                         date:e.target.value
//                       })
//                     }
//                     className="flex-1 bg-transparent p-3 outline-none"
//                   />

//                 </div>

//               </div>

//               {/* Preferred Time */}

//               <div>

//                 <label className="text-xs text-slate-400">
//                   Preferred Time
//                 </label>

//                 <div className="mt-2 flex items-center rounded-xl bg-[#071018] border border-slate-700 px-3">

//                   <Clock size={18} />

//                   <input
//                     type="time"
//                     value={formData.time}
//                     onChange={(e)=>
//                       setFormData({
//                         ...formData,
//                         time:e.target.value
//                       })
//                     }
//                     className="flex-1 bg-transparent p-3 outline-none"
//                   />

//                 </div>

//               </div>

//             </div>

//           </div>

//           {/* Consultation */}

//           <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5">

//             <h2 className="text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-5">
//               Consultation Details
//             </h2>

//             <div className="space-y-5">

//               <div>

//                 <label className="text-xs text-slate-400">
//                   Consultation Mode
//                 </label>

//                 <div className="grid grid-cols-3 gap-3 mt-3">

//                   {["Audio Call","Video Call","Chat"].map((mode)=>(
//                     <button
//                       type="button"
//                       key={mode}
//                       onClick={()=>
//                         setFormData({
//                           ...formData,
//                           mode
//                         })
//                       }
//                       className={`rounded-xl py-3 text-sm transition ${
//                         formData.mode===mode
//                         ? "bg-[#D4AF37] text-black font-bold"
//                         : "bg-[#071018] border border-slate-700"
//                       }`}
//                     >
//                       {mode}
//                     </button>
//                   ))}

//                 </div>

//               </div>

//               <div>

//                 <label className="text-xs text-slate-400">
//                   Problem Category
//                 </label>

//                 <select
//                   value={formData.category}
//                   onChange={(e)=>
//                     setFormData({
//                       ...formData,
//                       category:e.target.value
//                     })
//                   }
//                   className="mt-2 w-full rounded-xl bg-[#071018] border border-slate-700 p-3"
//                 >

//                   <option>Career</option>
//                   <option>Marriage</option>
//                   <option>Business</option>
//                   <option>Finance</option>
//                   <option>Health</option>
//                   <option>Love</option>
//                   <option>Education</option>
//                   <option>Family</option>

//                 </select>

//               </div>

//               <div>

//                 <label className="text-xs text-slate-400">
//                   Describe Your Problem
//                 </label>

//                 <textarea
//                   rows={5}
//                   value={formData.problem}
//                   onChange={(e)=>
//                     setFormData({
//                       ...formData,
//                       problem:e.target.value
//                     })
//                   }
//                   placeholder="Write your problem..."
//                   className="mt-2 w-full rounded-xl bg-[#071018] border border-slate-700 p-3 resize-none outline-none"
//                 />

//               </div>

//             </div>

//           </div>

//           {/* Booking Summary */}

//           <div className="rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/10 to-transparent p-5">

//             <h2 className="font-bold text-lg">
//               Booking Summary
//             </h2>

//             <div className="space-y-3 mt-4 text-sm">

//               <div className="flex justify-between">
//                 <span>Astrologer</span>
//                 <span>Acharya Rahul Sharma</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Experience</span>
//                 <span>15 Years</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Consultation</span>
//                 <span>{formData.mode}</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Fees</span>
//                 <span>₹499</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Platform Fee</span>
//                 <span>₹49</span>
//               </div>

//               <hr className="border-slate-700"/>

//               <div className="flex justify-between text-lg font-bold">

//                 <span>Total</span>

//                 <span className="text-[#D4AF37]">
//                   ₹548
//                 </span>

//               </div>

//             </div>

//           </div>

//           <div className="h-32"/>

//         </form>

//         {/* Bottom Button */}

//         <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-[#0a121c]/95 backdrop-blur-xl border-t border-slate-800 p-4">

//           <button
//             type="button"
//             onClick={() => {

//               const phoneNumber = "918878632431";

//               const message = `🔮 *New Jyotish Consultation*

// 👤 Name: ${formData.name}

// 📞 Phone: ${formData.phone}

// 📧 Email: ${formData.email}

// 🏙 City: ${formData.city}

// 📅 Date of birth: ${formData.date}

// ⏰ Birth Time: ${formData.time}

// 🎧 Mode: ${formData.mode}

// 📂 Category: ${formData.category}

// 📝 Problem:
// ${formData.problem}

// 🙏 OurHub`;

//               window.open(
//                 `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
//                 "_blank"
//               );

//             }}
//             className="w-full h-14 rounded-2xl bg-[#D4AF37] text-black font-bold text-lg"
//           >
//             Book Consultation
//           </button>

//           <a
//             href="tel:8878632431"
//             className="block text-center mt-3 rounded-2xl border border-slate-700 py-3"
//           >
//             📞 Call Astrologer
//           </a>

//         </div>

//       </div>

//     </main>
//   );
// }