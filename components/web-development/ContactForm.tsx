"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.message) {
      alert("Please fill all required fields.");
      return;
    }

    const phoneNumber = "+918878632431"; // Your WhatsApp Number

    const whatsappMessage = `💻 *New Web Development Enquiry*

👤 *Name:* ${form.name}

📞 *Phone:* +91 ${form.phone}

📧 *Email:* ${form.email || "Not Provided"}

📝 *Project Details:*
${form.message}

━━━━━━━━━━━━━━━
🚀 Sent from OurHub Website`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="px-4 mt-10">

      <h2 className="text-2xl font-bold text-white">
        Request a Free Quote
      </h2>

      <p className="text-gray-400 mt-2">
        Tell us about your project.
      </p>

      <div className="mt-6 space-y-4">

        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          className="w-full rounded-2xl bg-[#111C30] border border-yellow-500/20 px-4 py-4 text-white outline-none focus:border-yellow-400"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
          className="w-full rounded-2xl bg-[#111C30] border border-yellow-500/20 px-4 py-4 text-white outline-none focus:border-yellow-400"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          className="w-full rounded-2xl bg-[#111C30] border border-yellow-500/20 px-4 py-4 text-white outline-none focus:border-yellow-400"
        />

        <textarea
          rows={5}
          placeholder="Project Details..."
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
          className="w-full rounded-2xl bg-[#111C30] border border-yellow-500/20 px-4 py-4 text-white outline-none resize-none focus:border-yellow-400"
        />

        <button
          onClick={handleSubmit}
          className="
            w-full
            rounded-full
            bg-yellow-400
            py-4
            font-bold
            text-black
            transition
            hover:scale-105
          "
        >
          Send Request
        </button>

      </div>

    </section>
  );
}