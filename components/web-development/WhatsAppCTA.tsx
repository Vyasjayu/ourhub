"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function WhatsAppCTA() {

  const phone = "8878632431";

  return (

    <section className="px-4 mt-10 mb-24">

      <div
        className="
        rounded-3xl
        bg-gradient-to-r
        from-green-500
        to-emerald-600
        p-6
        "
      >

        <h2 className="text-2xl font-bold text-white">
          Need Instant Support?
        </h2>

        <p className="mt-2 text-green-100">
          Talk directly with our Web Development Team.
        </p>

        <div className="mt-6 flex gap-3">

          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            className="
            flex-1
            rounded-full
            bg-white
            py-3
            flex
            items-center
            justify-center
            gap-2
            font-semibold
            text-green-700
            "
          >

            <MessageCircle size={20} />

            WhatsApp

          </a>

          <a
            href={`tel:+${phone}`}
            className="
            flex-1
            rounded-full
            border
            border-white
            py-3
            flex
            items-center
            justify-center
            gap-2
            text-white
            font-semibold
            "
          >

            <Phone size={20} />

            Call

          </a>

        </div>

      </div>

    </section>

  );
}