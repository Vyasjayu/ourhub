"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  User,
  Phone,
  Mail,
  MapPin,
  Home,
  Calendar,
  Clock,
} from "lucide-react";

export default function VastuBookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    landmark: "",
    propertyType: "Home",
    consultationMode: "Site Visit",
    date: "",
    time: "",
  });

  return (
    <main className="min-h-screen bg-[#060a0f] flex justify-center">

      <div className="w-full max-w-[430px] min-h-screen bg-[#0a121c] text-white pb-44">

        {/* Header */}

        <div className="sticky top-0 z-50 bg-[#0a121c]/90 backdrop-blur-xl border-b border-slate-800 px-4 py-4 flex items-center gap-3">

          <Link
            href="/religious/vastu"
            className="p-2 rounded-full bg-slate-900 border border-slate-700"
          >
            <ChevronLeft size={18} />
          </Link>

          <div>

            <h1 className="font-bold">
              Vastu Consultation
            </h1>

            <p className="text-xs text-amber-400">
              Complete Booking Form
            </p>

          </div>

        </div>

        <form className="px-4 pt-5 space-y-5">

          {/* Hero Card */}

          <div className="rounded-2xl bg-gradient-to-r from-amber-500/10 to-yellow-500/5 border border-amber-500/20 p-5">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center text-3xl">
                🏡
              </div>

              <div>

                <h2 className="font-bold text-lg">
                  Home Vastu Consultation
                </h2>

                <p className="text-xs text-slate-400 mt-1">
                  Certified Vastu Expert
                </p>

                <h3 className="text-xl font-bold text-amber-400 mt-2">
                  ₹999
                </h3>

              </div>

            </div>

          </div>

          {/* Customer Details */}

          <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-4">

            <h3 className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-4">

              Customer Details

            </h3>

            <div className="space-y-4">

              <div>

                <label className="text-xs text-slate-400">

                  Full Name

                </label>

                <div className="mt-2 flex items-center rounded-xl bg-[#071018] border border-slate-700 px-3">

                  <User size={18} />

                  <input
                    type="text"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="flex-1 bg-transparent outline-none p-3"
                  />

                </div>

              </div>

              <div>

                <label className="text-xs text-slate-400">

                  Mobile Number

                </label>

                <div className="mt-2 flex items-center rounded-xl bg-[#071018] border border-slate-700 px-3">

                  <Phone size={18} />

                  <input
                    type="tel"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className="flex-1 bg-transparent outline-none p-3"
                  />

                </div>

              </div>

              <div>

                <label className="text-xs text-slate-400">

                  Email

                </label>

                <div className="mt-2 flex items-center rounded-xl bg-[#071018] border border-slate-700 px-3">

                  <Mail size={18} />

                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="flex-1 bg-transparent outline-none p-3"
                  />

                </div>

              </div>

            </div>

          </div>

          {/* Property Details */}

          <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-4">

            <h3 className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-4">

              Property Details

            </h3>

            <div className="space-y-4">

              <div>

                <label className="text-xs text-slate-400">

                  Property Type

                </label>

                <select
                  value={formData.propertyType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      propertyType: e.target.value,
                    })
                  }
                  className="mt-2 w-full rounded-xl bg-[#071018] border border-slate-700 p-3"
                >
                  <option>Home</option>
                  <option>Flat</option>
                  <option>Office</option>
                  <option>Shop</option>
                  <option>Factory</option>
                  <option>Plot</option>
                </select>

              </div>

             <div>

  <label className="text-xs text-slate-400">
    City
  </label>

  <div className="mt-2 relative">

    <MapPin
      size={18}
      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
    />

    <select
      value={formData.city}
      onChange={(e) =>
        setFormData({
          ...formData,
          city: e.target.value,
        })
      }
      className="w-full rounded-xl bg-[#071018] border border-slate-700 pl-10 pr-4 py-3 text-white outline-none appearance-none"
    >
      <option value="">Select City</option>

      <option value="Indore">Indore</option>
      <option value="Ujjain">Ujjain</option>
      <option value="Bhopal">Bhopal</option>

    </select>

    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
      ▼
    </span>

  </div>

</div>

              <div>

                <label className="text-xs text-slate-400">

                  Complete Address

                </label>

                <textarea
                  rows={3}
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: e.target.value,
                    })
                  }
                  className="mt-2 w-full rounded-xl bg-[#071018] border border-slate-700 p-3 resize-none"
                  placeholder="House No, Street, Area..."
                />

              </div>
                            <div>
                <label className="text-xs text-slate-400">
                  Landmark (Optional)
                </label>

                <input
                  type="text"
                  placeholder="Near Temple, School..."
                  value={formData.landmark}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      landmark: e.target.value,
                    })
                  }
                  className="mt-2 w-full rounded-xl bg-[#071018] border border-slate-700 p-3 outline-none"
                />
              </div>

            </div>
          </div>

          {/* Consultation Details */}

          <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-4">

            <h3 className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-4">
              Consultation Details
            </h3>

            <div className="space-y-4">

              <div>

                <label className="text-xs text-slate-400">
                  Consultation Mode
                </label>

                <select
                  value={formData.consultationMode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      consultationMode: e.target.value,
                    })
                  }
                  className="mt-2 w-full rounded-xl bg-[#071018] border border-slate-700 p-3"
                >
                  <option>Site Visit</option>
                  <option>Video Consultation</option>
                  <option>Phone Consultation</option>
                </select>

              </div>

              <div className="grid grid-cols-2 gap-3">

                <div>

                  <label className="text-xs text-slate-400">
                    Preferred Date
                  </label>

                  <div className="mt-2 flex items-center rounded-xl bg-[#071018] border border-slate-700 px-3">

                    <Calendar size={18} />

                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          date: e.target.value,
                        })
                      }
                      className="flex-1 bg-transparent outline-none p-3"
                    />

                  </div>

                </div>

                <div>

                  <label className="text-xs text-slate-400">
                    Preferred Time
                  </label>

                  <div className="mt-2 flex items-center rounded-xl bg-[#071018] border border-slate-700 px-3">

                    <Clock size={18} />

                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          time: e.target.value,
                        })
                      }
                      className="flex-1 bg-transparent outline-none p-3"
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Problem Description */}

          <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-4">

            <h3 className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-4">
              Describe Your Requirement
            </h3>

            <textarea
              rows={5}
              placeholder="Example: Need Vastu consultation for a new home, facing direction, entrance placement, kitchen, bedroom etc."
              className="w-full rounded-xl bg-[#071018] border border-slate-700 p-3 resize-none outline-none"
            />

          </div>

          {/* Booking Summary */}

          <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 to-yellow-500/5 p-5">

            <h3 className="font-bold text-lg mb-4">
              Booking Summary
            </h3>

            <div className="space-y-3 text-sm">

              <div className="flex justify-between">
                <span className="text-slate-400">
                  Consultation
                </span>

                <span>
                  Vastu Consultation
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">
                  Property
                </span>

                <span>
                  {formData.propertyType}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">
                  Expert Fee
                </span>

                <span>
                  ₹999
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">
                  Platform Fee
                </span>

                <span>
                  ₹99
                </span>
              </div>

              <hr className="border-slate-700" />

              <div className="flex justify-between font-bold text-lg">

                <span>Total</span>

                <span className="text-amber-400">
                  ₹1098
                </span>

              </div>

            </div>

          </div>

          {/* Bottom Space */}

          <div className="h-32" />

        </form>

        {/* Bottom Fixed Button */}

        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-[#0a121c]/95 backdrop-blur-xl border-t border-slate-800 p-4">

          <button
            onClick={() => {
              const phoneNumber = "918878632431";

              const message = `🏡 *New Vastu Consultation Booking*

👤 Name: ${formData.name}

📞 Phone: ${formData.phone}

📧 Email: ${formData.email}

🏠 Property: ${formData.propertyType}

📍 City: ${formData.city}

🏠 Address:
${formData.address}

📅 Date: ${formData.date}

⏰ Time: ${formData.time}

🧭 Mode:
${formData.consultationMode}

📍 Landmark:
${formData.landmark || "N/A"}

Thank You 🙏`;

              window.open(
                `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`,
                "_blank"
              );
            }}
            className="w-full rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 py-4 text-black font-bold text-lg"
          >
            Book Consultation
          </button>

          <a
            href="tel:8878632431"
            className="mt-3 block w-full rounded-2xl border border-slate-700 py-3 text-center text-sm font-semibold"
          >
            📞 Call Vastu Expert
          </a>

        </div>

      </div>

    </main>
  );
}