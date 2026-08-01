"use client";

import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import ContactBottomSheet from "./ContactBottomSheet";

// import ContactBottomSheet from "./ContactBottomSheet";

export default function StickyBottom() {

  const [open, setOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hello OurHub Team 👋\n\nI want to develop a website. Please share more details."
  );

  return (

    <>

      <div
        className="
        fixed
        bottom-0
        left-1/2
        z-50
        w-full
        max-w-[430px]
        -translate-x-1/2
        border-t
        border-yellow-500/20
        bg-[#08111D]/95
        backdrop-blur-xl
        px-4
        py-3
        "
      >

        <div className="flex gap-3">

          {/* WhatsApp */}

          <a
            href={`https://wa.me/919876543210?text=${whatsappMessage}`}
            target="_blank"
            className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-green-500
            transition
            hover:scale-105
            "
          >

            <MessageCircle
              size={24}
              className="text-white"
            />

          </a>

          {/* Call */}

          <a
            href="tel:+919876543210"
            className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-[#111C30]
            border
            border-yellow-500/20
            transition
            hover:border-yellow-400
            "
          >

            <Phone
              size={22}
              className="text-yellow-400"
            />

          </a>

          {/* Start Project */}

          <button
            onClick={() => setOpen(true)}
            className="
            flex-1
            rounded-2xl
            bg-yellow-400
            font-bold
            text-black
            text-lg
            transition
            hover:scale-[1.02]
            "
          >

            Start Project

          </button>

        </div>

      </div>

      {/* Bottom Sheet */}

      <ContactBottomSheet
        open={open}
        onClose={() => setOpen(false)}
      />

    </>

  );

}