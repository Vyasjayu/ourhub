"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How long does a website take?",
    answer:
      "Most business websites are completed within 7–15 working days depending on the requirements.",
  },
  {
    question: "Do you provide SEO?",
    answer:
      "Yes. Every website includes basic on-page SEO, fast loading speed and mobile optimization.",
  },
  {
    question: "Will my website work on mobile?",
    answer:
      "Yes. Every website is fully responsive for mobile, tablet and desktop.",
  },
  {
    question: "Do you provide support after delivery?",
    answer:
      "Yes. We provide free support based on the selected package.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-4 mt-10">

      <h2 className="text-2xl font-bold text-white">
        Frequently Asked Questions
      </h2>

      <p className="text-gray-400 mt-2">
        Everything you need to know.
      </p>

      <div className="space-y-4 mt-6">

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="rounded-3xl border border-yellow-500/20 bg-[#111C30]"
          >

            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="w-full flex items-center justify-between p-5"
            >

              <span className="font-semibold text-white text-left">
                {faq.question}
              </span>

              {open === index ? (
                <ChevronUp className="text-yellow-400" />
              ) : (
                <ChevronDown className="text-yellow-400" />
              )}

            </button>

            {open === index && (

              <div className="px-5 pb-5">

                <p className="text-gray-300 leading-7">
                  {faq.answer}
                </p>

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}