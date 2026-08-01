"use client";

import {
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function ContactCTA() {

  const startProject = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello OurHub Team 👋\n\nI want to develop a website. Please share more details."
  );

  return (

    <section className="px-4 mt-10">

      <div
        className="
        rounded-3xl
        border
        border-yellow-500/20
        bg-gradient-to-br
        from-[#111C30]
        to-[#0B1423]
        p-6
        "
      >

        <div className="text-center">

          <h2 className="text-2xl font-bold text-white">
            Ready To Start Your Project?
          </h2>

          <p className="mt-3 text-gray-400 leading-7">
            Contact our experts today and get a premium website
            designed for your business.
          </p>

        </div>

        {/* Buttons */}

        <div className="mt-8 space-y-4">

          {/* WhatsApp */}

          <a
            href={`https://wa.me/+918878632431?text=${whatsappMessage}`}
            target="_blank"
            className="
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-green-500
            py-4
            font-semibold
            text-white
            transition
            hover:scale-[1.02]
            "
          >

            <MessageCircle size={22} />

            Chat on WhatsApp

          </a>

          {/* Call */}

          <a
            href="tel: +918878632431"
            className="
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-yellow-500/20
            bg-[#050B14]
            py-4
            font-semibold
            text-white
            transition
            hover:border-yellow-400
            "
          >

            <Phone
              size={22}
              className="text-yellow-400"
            />

            Call Now

          </a>

          {/* Contact Form */}

          <button
            onClick={startProject}
            className="
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-yellow-400
            py-4
            font-bold
            text-black
            transition
            hover:scale-[1.02]
            "
          >

            Start Project

            <ArrowRight size={20} />

          </button>

        </div>

        {/* Bottom Note */}

        <div
          className="
          mt-6
          rounded-2xl
          border
          border-yellow-500/10
          bg-[#050B14]
          p-4
          text-center
          "
        >

          <p className="text-sm text-gray-400">
            ⭐ Free Consultation • Premium Design • Fast Delivery
          </p>

        </div>

      </div>

    </section>

  );

}