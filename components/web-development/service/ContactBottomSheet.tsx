"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ContactBottomSheet({
  open,
  onClose,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleSubmit = () => {
    if (!form.name || !form.phone) {
      alert("Please enter Name & Phone Number");
      return;
    }

    const text = encodeURIComponent(`
🚀 *New Website Inquiry*

👤 Name : ${form.name}

📞 Phone : ${form.phone}

📧 Email : ${form.email}

💰 Budget : ${form.budget}

📝 Project :

${form.message}

--------------------------
Sent from OurHub Website
`);

    window.open(
      `https://wa.me/8878632431?text=${text}`,
      "_blank"
    );

    onClose();

    setForm({
      name: "",
      phone: "",
      email: "",
      budget: "",
      message: "",
    });
  };

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-[60]
          bg-black/60
          backdrop-blur-sm
          transition-all duration-300
          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Bottom Sheet */}

      <div
        className={`
        fixed
        left-1/2
        bottom-0
        z-[70]
        w-full
        max-w-[430px]
        -translate-x-1/2
        rounded-t-[30px]
        bg-[#091321]
        border-t
        border-yellow-500/20
        px-5
        pb-8
        pt-4
        transition-all
        duration-300
        ${
          open
            ? "translate-y-0"
            : "translate-y-full"
        }
        `}
      >
        {/* Handle */}

        <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-gray-500" />

        {/* Header */}

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Start Your Project
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Fill the details below.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-[#111C30] p-2"
          >
            <X className="text-white" size={20} />
          </button>
        </div>

        {/* Form */}

        <div className="space-y-4">
          <input
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full rounded-2xl border border-yellow-500/20 bg-[#111C30] px-4 py-4 text-white outline-none"
          />

          <input
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
            className="w-full rounded-2xl border border-yellow-500/20 bg-[#111C30] px-4 py-4 text-white outline-none"
          />

          <input
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full rounded-2xl border border-yellow-500/20 bg-[#111C30] px-4 py-4 text-white outline-none"
          />

          <select
            value={form.budget}
            onChange={(e) =>
              setForm({
                ...form,
                budget: e.target.value,
              })
            }
            className="w-full rounded-2xl border border-yellow-500/20 bg-[#111C30] px-4 py-4 text-white outline-none"
          >
            <option value="">Select Budget</option>
            <option>₹10k - ₹25k</option>
            <option>₹25k - ₹50k</option>
            <option>₹50k - ₹1L</option>
            <option>₹1L+</option>
          </select>

          <textarea
            rows={5}
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
            className="w-full resize-none rounded-2xl border border-yellow-500/20 bg-[#111C30] px-4 py-4 text-white outline-none"
          />

          <button
            onClick={handleSubmit}
            className="
            w-full
            rounded-2xl
            bg-yellow-400
            py-4
            text-lg
            font-bold
            text-black
            transition
            hover:scale-[1.02]
            "
          >
            Send Request
          </button>
        </div>
      </div>
    </>
  );
}