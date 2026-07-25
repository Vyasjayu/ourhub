"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Star,
} from "lucide-react";

export default function BookingPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    date: "",
    time: "",
  });

  return (
    <main className="min-h-screen bg-[#071321] flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen bg-[#071321] text-white pb-32">

        {/* Header */}

        <header className="sticky top-0 z-50 bg-[#081423]/95 backdrop-blur border-b border-white/10">

          <div className="flex items-center gap-3 px-4 py-4">

            <button
              onClick={() => router.back()}
              className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center"
            >
              <ArrowLeft size={20} />
            </button>

            <div>

              <h1 className="text-xl font-bold">
                Book Consultation
              </h1>

              <p className="text-xs text-gray-400">
                Fill your details
              </p>

            </div>

          </div>

        </header>

        {/* Astrologer Card */}

        <section className="px-4 mt-5">

          <div className="rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#1B2735] via-[#0d1b2a] to-[#071321] p-5">

            <div className="flex gap-4">

              <div className="w-20 h-20 rounded-2xl bg-[#D4AF37] flex items-center justify-center text-4xl">
                🧙
              </div>

              <div className="flex-1">

                <h2 className="text-xl font-bold">
                  Acharya Rahul Sharma
                </h2>

                <p className="text-gray-400 mt-1">
                  Vedic Astrology Expert
                </p>

                <div className="flex items-center gap-2 mt-3">

                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span>4.9</span>

                  <span className="text-gray-500">
                    •
                  </span>

                  <span>15 Years Experience</span>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Customer Information */}

        <section className="px-4 mt-7">

          <h2 className="text-xl font-bold mb-5">
            Customer Information
          </h2>

          <div className="space-y-5">

            {/* Full Name */}

            <div>

              <label className="text-sm text-gray-300">
                Full Name
              </label>

              <div className="mt-2 flex items-center h-14 rounded-2xl bg-[#0d1b2a] border border-white/10 px-4">

                <User size={18} />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      fullName: e.target.value,
                    })
                  }
                  className="ml-3 flex-1 bg-transparent outline-none"
                />

              </div>

            </div>

            {/* Mobile */}

            <div>

              <label className="text-sm text-gray-300">
                Mobile Number
              </label>

              <div className="mt-2 flex items-center h-14 rounded-2xl bg-[#0d1b2a] border border-white/10 px-4">

                <Phone size={18} />

                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  value={form.mobile}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      mobile: e.target.value,
                    })
                  }
                  className="ml-3 flex-1 bg-transparent outline-none"
                />

              </div>

            </div>

            {/* Email */}

            <div>

              <label className="text-sm text-gray-300">
                Email Address
              </label>

              <div className="mt-2 flex items-center h-14 rounded-2xl bg-[#0d1b2a] border border-white/10 px-4">

                <Mail size={18} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  className="ml-3 flex-1 bg-transparent outline-none"
                />

              </div>

            </div>

            {/* City */}

            <div>

              <label className="text-sm text-gray-300">
                City
              </label>

              <div className="mt-2 flex items-center h-14 rounded-2xl bg-[#0d1b2a] border border-white/10 px-4">

                <MapPin size={18} />

                <input
                  type="text"
                  placeholder="Enter your city"
                  value={form.city}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      city: e.target.value,
                    })
                  }
                  className="ml-3 flex-1 bg-transparent outline-none"
                />

              </div>

            </div>

          </div>

        </section>

        {/* Date & Time */}

        <section className="px-4 mt-8">

          <h2 className="text-xl font-bold mb-5">
            Select Date & Time
          </h2>

          <div className="space-y-5">

            <div>

              <label className="text-sm text-gray-300">
                Preferred Date
              </label>

              <div className="mt-2 flex items-center h-14 rounded-2xl bg-[#0d1b2a] border border-white/10 px-4">

                <Calendar size={18} />

                <input
                  type="date"
                  value={form.date}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      date: e.target.value,
                    })
                  }
                  className="ml-3 flex-1 bg-transparent outline-none"
                />

              </div>

            </div>

            <div>

              <label className="text-sm text-gray-300">
                Preferred Time
              </label>

              <div className="mt-2 flex items-center h-14 rounded-2xl bg-[#0d1b2a] border border-white/10 px-4">

                <Clock size={18} />

                <input
                  type="time"
                  value={form.time}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      time: e.target.value,
                    })
                  }
                  className="ml-3 flex-1 bg-transparent outline-none"
                />

              </div>

            </div>

          </div>

        </section>
                {/* Consultation Mode */}
        <section className="px-4 mt-8">
          <h2 className="text-xl font-bold mb-5">
            Consultation Mode
          </h2>

          <div className="space-y-3">

            <label className="flex items-center justify-between rounded-2xl bg-[#0d1b2a] border border-[#D4AF37] p-4 cursor-pointer">
              <div>
                <h3 className="font-semibold">🎧 Audio Call</h3>
                <p className="text-xs text-gray-400">
                  Talk directly with astrologer
                </p>
              </div>

              <input
                type="radio"
                name="mode"
                defaultChecked
                className="accent-yellow-500"
              />
            </label>

            <label className="flex items-center justify-between rounded-2xl bg-[#0d1b2a] border border-white/10 p-4 cursor-pointer">
              <div>
                <h3 className="font-semibold">📹 Video Call</h3>
                <p className="text-xs text-gray-400">
                  Face-to-face consultation
                </p>
              </div>

              <input
                type="radio"
                name="mode"
                className="accent-yellow-500"
              />
            </label>

            <label className="flex items-center justify-between rounded-2xl bg-[#0d1b2a] border border-white/10 p-4 cursor-pointer">
              <div>
                <h3 className="font-semibold">💬 Chat</h3>
                <p className="text-xs text-gray-400">
                  Text consultation
                </p>
              </div>

              <input
                type="radio"
                name="mode"
                className="accent-yellow-500"
              />
            </label>

          </div>
        </section>

        {/* Problem Category */}

        <section className="px-4 mt-8">

          <h2 className="text-xl font-bold mb-5">
            Problem Category
          </h2>

          <select className="w-full h-14 rounded-2xl bg-[#0d1b2a] border border-white/10 px-4 outline-none">

            <option>Career</option>

            <option>Marriage</option>

            <option>Business</option>

            <option>Finance</option>

            <option>Health</option>

            <option>Love</option>

            <option>Education</option>

            <option>Family</option>

          </select>

        </section>

        {/* Description */}

        <section className="px-4 mt-8">

          <h2 className="text-xl font-bold mb-5">
            Describe Your Problem
          </h2>

          <textarea
            rows={5}
            placeholder="Write your concern..."
            className="w-full rounded-2xl bg-[#0d1b2a] border border-white/10 p-4 outline-none resize-none"
          />

        </section>

        {/* Booking Summary */}

        <section className="px-4 mt-8">

          <h2 className="text-xl font-bold mb-5">
            Booking Summary
          </h2>

          <div className="rounded-3xl bg-[#0d1b2a] border border-white/10 p-5">

            <div className="flex justify-between">

              <span className="text-gray-400">
                Astrologer
              </span>

              <span className="font-semibold">
                Acharya Rahul Sharma
              </span>

            </div>

            <div className="flex justify-between mt-4">

              <span className="text-gray-400">
                Experience
              </span>

              <span>15 Years</span>

            </div>

            <div className="flex justify-between mt-4">

              <span className="text-gray-400">
                Consultation Fee
              </span>

              <span>₹499</span>

            </div>

            <div className="flex justify-between mt-4">

              <span className="text-gray-400">
                Platform Fee
              </span>

              <span>₹49</span>

            </div>

            <div className="border-t border-white/10 mt-5 pt-5 flex justify-between">

              <span className="font-bold text-lg">
                Total
              </span>

              <span className="font-bold text-2xl text-[#D4AF37]">
                ₹548
              </span>

            </div>

          </div>

        </section>

        {/* Terms */}

        <section className="px-4 mt-6">

          <div className="rounded-2xl bg-[#0d1b2a] border border-white/10 p-4 text-sm text-gray-300">

            <label className="flex items-start gap-3">

              <input
                type="checkbox"
                defaultChecked
                className="accent-yellow-500 mt-1"
              />

              <span>
                I agree to the Terms & Conditions and Privacy Policy.
              </span>

            </label>

          </div>

        </section>

        <div className="h-28"></div>

      </div>

      {/* Sticky Bottom */}

      <div className="fixed bottom-0 left-0 right-0 flex justify-center z-50">

        <div className="w-full max-w-[430px] bg-[#071321] border-t border-[#D4AF37]/20 p-4">

          <div className="flex items-center justify-between mb-3">

            <div>

              <p className="text-xs text-gray-400">
                Total Amount
              </p>

              <h3 className="text-2xl font-bold text-[#D4AF37]">
                ₹548
              </h3>

            </div>

            <button
              className="bg-[#D4AF37] text-black px-8 h-14 rounded-2xl font-bold"
              onClick={() => {
                alert("Proceed to Payment");
              }}
            >
              Continue
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}