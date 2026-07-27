"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I start a consultation?",
    answer:
      "Recharge your wallet first. Once your wallet has sufficient balance, you can start Chat, Voice Call or Video Call instantly.",
  },
  {
    question: "What is the consultation charge?",
    answer:
      "The consultation charge depends on the astrologer. For example, if the astrologer charges ₹25/min, your wallet balance will be deducted every minute during the consultation.",
  },
  {
    question: "What is the minimum recharge?",
    answer:
      "The minimum recommended recharge is ₹125, which allows approximately 5 minutes of consultation at ₹25/min.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "If a consultation cannot be completed due to a technical issue from our side, the unused wallet balance will be credited back automatically.",
  },
  {
    question: "Is my consultation private?",
    answer:
      "Yes. All chats, calls, and video consultations are completely private and secure.",
  },
  {
    question: "Can I generate my Kundli for free?",
    answer:
      "Yes. Basic Janam Kundli generation is free. Premium reports are available at an additional cost.",
  },
  {
    question: "How is the wallet balance deducted?",
    answer:
      "The balance is deducted automatically every minute according to the astrologer's consultation rate.",
  },
  {
    question: "Can I consult in my preferred language?",
    answer:
      "Yes. Every astrologer profile displays the languages they speak. Choose an astrologer who supports your preferred language.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="
        mt-6
        rounded-3xl
        border
        border-yellow-500/20
        bg-gradient-to-br
        from-[#0E1726]
        to-[#09111D]
        p-5
        shadow-xl
      "
    >
      {/* Header */}

      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-yellow-500/10
          "
        >
          <HelpCircle
            size={24}
            className="text-yellow-400"
          />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="text-sm text-gray-400">
            Everything you need to know
          </p>

        </div>

      </div>

      {/* FAQ List */}

      <div className="mt-6 space-y-4">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="
              overflow-hidden
              rounded-2xl
              border
              border-yellow-500/10
              bg-[#111C30]
            "
          >
            <button
              onClick={() => toggle(index)}
              className="
                flex
                w-full
                items-center
                justify-between
                p-5
                text-left
              "
            >
              <span className="pr-4 font-semibold text-white">
                {faq.question}
              </span>

              <ChevronDown
                size={22}
                className={`text-yellow-400 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                activeIndex === index
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className="
                    border-t
                    border-yellow-500/10
                    px-5
                    py-4
                    leading-7
                    text-gray-300
                  "
                >
                  {faq.answer}
                </p>
              </div>
            </div>

          </div>
        ))}

      </div>

      {/* Bottom Card */}

      <div
        className="
          mt-6
          rounded-2xl
          border
          border-green-500/20
          bg-gradient-to-r
          from-green-500/10
          to-emerald-500/10
          p-5
        "
      >
        <h3 className="text-lg font-bold text-white">
          Still Have Questions?
        </h3>

        <p className="mt-2 text-sm leading-7 text-gray-300">
          Our support team is available 24×7 to help you with wallet,
          payments, consultations, and astrology services.
        </p>

        <button
          className="
            mt-5
            w-full
            rounded-2xl
            bg-gradient-to-r
            from-green-500
            to-emerald-500
            py-3
            font-semibold
            text-white
            transition
            hover:scale-[1.02]
          "
        >
          Contact Support
        </button>
      </div>

    </section>
  );
}