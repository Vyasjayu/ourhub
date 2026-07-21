"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I book a Pandit?",
    answer:
      "Select your city, choose a Pandit or Puja, select your preferred date and time, then complete the booking.",
  },
  {
    question: "Can I choose my preferred Pandit?",
    answer:
      "Yes. You can view Pandit profiles, experience, ratings, languages, and choose the one you prefer.",
  },
  {
    question: "Which cities are currently available?",
    answer:
      "Currently, services are available in Indore, Ujjain, and Ratlam. More cities will be added soon.",
  },
  {
    question: "Do you provide online Jyotish consultation?",
    answer:
      "Yes. You can book audio, video, or chat consultations with verified astrologers.",
  },
  {
    question: "How can I pay?",
    answer:
      "You can pay securely using UPI, Debit Card, Credit Card, Net Banking, or Wallet.",
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer:
      "Yes. Depending on the service, you can cancel or reschedule before the scheduled time.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-4 mt-8 mb-24">

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-xl font-bold text-white">
          ❓ Frequently Asked Questions
        </h2>

      </div>

      <div className="space-y-4">

        {faqs.map((faq, index) => {

          const open = openIndex === index;

          return (
            <div
              key={index}
              className="bg-[#0d1b2a] border border-white/10 rounded-2xl overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpenIndex(open ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left"
              >

                <span className="font-semibold text-white pr-4">
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`transition-transform duration-300 ${
                    open ? "rotate-180 text-[#D4AF37]" : "text-gray-400"
                  }`}
                />

              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">

                  <p className="px-5 pb-5 text-sm leading-7 text-gray-300">
                    {faq.answer}
                  </p>

                </div>
              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}