
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  CreditCard,
  Headphones,
  HelpCircle,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  UserRound,
  WalletCards,
  X,
} from "lucide-react";

const faqs = [
  {
    question: "How do I book a service?",
    answer:
      "Choose your service, select your preferred option, enter your details and complete the booking. You will receive confirmation after successful booking.",
  },
  {
    question: "Are the professionals verified?",
    answer:
      "Yes. OurHub works with verified service professionals. Provider verification helps us maintain a safer and more reliable service experience.",
  },
  {
    question: "How can I make a payment?",
    answer:
      "You can complete eligible bookings using the available secure online payment options shown during checkout.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Cancellation availability depends on the service and booking status. Please check the cancellation terms associated with your booking.",
  },
  {
    question: "How can I check my booking?",
    answer:
      "Open your Bookings section from the navigation menu to view your upcoming and previous bookings.",
  },
  {
    question: "What if I need help with my booking?",
    answer:
      "Our support team can help with booking, payment, service and general assistance. You can contact us by phone or WhatsApp.",
  },
];

const helpTopics = [
  {
    title: "My Bookings",
    description: "Track, manage or get help with your bookings.",
    icon: CalendarDays,
    // href: "/bookings",
  },
  {
    title: "Payments",
    description: "Get help with payments and transaction issues.",
    icon: CreditCard,
    // href: "/payments",
  },
  {
    title: "Account",
    description: "Manage your profile and account information.",
    icon: UserRound,
    // href: "/profile",
  },
  {
    title: "Wallet",
    description: "Check wallet balance and transaction details.",
    icon: WalletCards,
    // href: "/wallet",
  },
];

export default function HelpPage() {
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredFaqs = faqs.filter((faq) => {
    const query = search.toLowerCase();

    return (
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query)
    );
  });

  return (
    <main className="min-h-screen bg-[#02060B] text-white">
      {/* =====================================================
          MOBILE CONTAINER
      ====================================================== */}

      <div className="relative mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#071424]">
        {/* Ambient Background */}

        <div className="pointer-events-none absolute -right-32 top-[-80px] h-72 w-72 rounded-full bg-[#DFAE45]/[0.07] blur-[100px]" />

        <div className="pointer-events-none absolute -left-32 top-[420px] h-64 w-64 rounded-full bg-blue-500/[0.04] blur-[100px]" />

        {/* =====================================================
            HEADER
        ====================================================== */}

        <header className="relative z-20 px-4 pb-2 pt-4">
          <div
            className="
              relative
              flex
              h-[62px]
              items-center
              justify-between
              rounded-[22px]
              border
              border-white/[0.07]
              bg-white/[0.025]
              px-3
              backdrop-blur-xl
            "
          >
            {/* Back */}

            <Link
              href="/pooja"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.04]
                text-slate-300
                transition
                hover:border-[#DFAE45]/30
                hover:text-[#F3C75F]
                active:scale-90
              "
            >
              <ArrowLeft size={21} />
            </Link>

            {/* Title */}

            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5">
                <Sparkles
                  size={11}
                  className="text-[#DFAE45]"
                  fill="currentColor"
                />

                <p className="text-[10px] font-bold tracking-[0.28em] text-[#DFAE45]">
                  OURHUB
                </p>

                <Sparkles
                  size={11}
                  className="text-[#DFAE45]"
                  fill="currentColor"
                />
              </div>

              <h1 className="mt-0.5 text-[18px] font-bold tracking-tight">
                Help & Support
              </h1>
            </div>

            {/* Notification */}

            <button
              type="button"
              aria-label="Notifications"
              className="
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.04]
                text-slate-300
                transition
                hover:text-[#F3C75F]
                active:scale-90
              "
            >
              <Bell size={20} />

              <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-[#E7B94F] shadow-[0_0_8px_rgba(231,185,79,0.9)]" />
            </button>
          </div>
        </header>

        <div className="relative px-4 pb-32">
          {/* =====================================================
              HERO
          ====================================================== */}

          <section className="relative mt-4 overflow-hidden rounded-[30px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#151B27] via-[#0C1625] to-[#07101B] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
            {/* Glow */}

            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="absolute bottom-[-50px] left-[-40px] h-36 w-36 rounded-full bg-blue-500/[0.05] blur-3xl" />

            <div className="relative">
              {/* Badge */}

              <div className="inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/[0.08] px-3 py-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DFAE45]/15">
                  <Headphones
                    size={12}
                    className="text-[#F3C75F]"
                  />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#E7B94F]">
                  We're Here For You
                </span>
              </div>

              <h2 className="mt-4 max-w-[300px] text-[29px] font-extrabold leading-[1.08] tracking-tight">
                How can we
                <span className="block text-[#F3C75F]">
                  help you today?
                </span>
              </h2>

              <p className="mt-3 max-w-[340px] text-[13px] leading-6 text-slate-400">
                Find quick answers or connect with our support team for
                personalized assistance.
              </p>

              {/* Online Status */}

              <div className="mt-5 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[11px] font-medium text-slate-300">
                  Support team is online
                </span>

                <span className="text-slate-600">•</span>

                <span className="text-[11px] text-[#DFAE45]">
                  24×7 Assistance
                </span>
              </div>
            </div>
          </section>

          {/* =====================================================
              SEARCH
          ====================================================== */}

          <section className="mt-5">
            <div
              className="
                group
                relative
                flex
                h-[56px]
                items-center
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#0C1725]
                transition
                focus-within:border-[#DFAE45]/45
                focus-within:shadow-[0_0_25px_rgba(223,174,69,0.08)]
              "
            >
              <div className="ml-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/[0.08]">
                <Search
                  size={19}
                  className="text-[#DFAE45]"
                />
              </div>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search your question..."
                className="
                  h-full
                  flex-1
                  bg-transparent
                  px-3
                  text-[13px]
                  text-white
                  outline-none
                  placeholder:text-slate-600
                "
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] text-slate-400"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </section>

          {/* =====================================================
              QUICK HELP
          ====================================================== */}

          <section className="mt-7">
            <div className="mb-4 flex items-end justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
                  Quick Assistance
                </p>

                <h2 className="mt-1 text-[21px] font-bold">
                  What do you need help with?
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {helpTopics.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href=""
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[22px]
                      border
                      border-white/[0.07]
                      bg-gradient-to-br
                      from-[#111C2A]
                      to-[#091321]
                      p-4
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#DFAE45]/25
                      active:scale-[0.97]
                    "
                  >
                    {/* Number */}

                    <span className="absolute right-3 top-3 text-[9px] font-bold text-slate-700">
                      0{index + 1}
                    </span>

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-[#DFAE45]/15
                        bg-[#DFAE45]/[0.08]
                        text-[#E7B94F]
                        transition
                        group-hover:bg-[#DFAE45]/15
                      "
                    >
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-4 text-[14px] font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 line-clamp-2 text-[11px] leading-5 text-slate-500">
                      {item.description}
                    </p>

                    <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-[#DFAE45]">
                      Get Help
                      <ArrowRight size={12} />
                    </div>

                    <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/30 to-transparent opacity-0 transition group-hover:opacity-100" />
                  </Link>
                );
              })}
            </div>
          </section>

          {/* =====================================================
              CONTACT SUPPORT
          ====================================================== */}

          <section className="mt-7">
            <div className="relative overflow-hidden rounded-[26px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#171A20] via-[#111827] to-[#09121D] p-5">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-3xl" />

              <div className="relative flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                      <Headphones
                        size={19}
                        className="text-[#E7B94F]"
                      />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#DFAE45]">
                        Direct Support
                      </p>

                      <h2 className="text-[19px] font-bold">
                        Talk to OurHub
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.07] px-2.5 py-1">
                  <span className="text-[9px] font-bold text-emerald-400">
                    ONLINE
                  </span>
                </div>
              </div>

              <p className="relative mt-4 text-[12px] leading-5 text-slate-400">
                Our support team is available to assist you with bookings,
                payments, services and general queries.
              </p>

              <div className="relative mt-5 grid grid-cols-2 gap-3">
                {/* Call */}

                <a
                  href="tel:+918878632431"
                  className="
                    group
                    flex
                    h-[52px]
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#F3C75F]
                    via-[#DFAE45]
                    to-[#C28B2D]
                    text-[13px]
                    font-extrabold
                    text-[#161008]
                    shadow-[0_8px_25px_rgba(223,174,69,0.18)]
                    transition
                    hover:scale-[1.02]
                    active:scale-95
                  "
                >
                  <Phone size={18} />
                  Call Now
                </a>

                {/* WhatsApp */}

                <a
                  href="https://wa.me/918878632431"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    h-[52px]
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    border
                    border-white/[0.09]
                    bg-white/[0.04]
                    text-[13px]
                    font-bold
                    text-white
                    transition
                    hover:border-emerald-400/30
                    hover:bg-emerald-400/[0.07]
                    active:scale-95
                  "
                >
                  <MessageCircle
                    size={18}
                    className="text-emerald-400"
                  />
                  WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* =====================================================
              TRUST STRIP
          ====================================================== */}

          <section className="mt-5 grid grid-cols-3 gap-2">
            {[
              {
                icon: ShieldCheck,
                title: "Verified",
                text: "Professionals",
              },
              {
                icon: Clock3,
                title: "24×7",
                text: "Support",
              },
              {
                icon: CheckCircle2,
                title: "Secure",
                text: "Experience",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/[0.06]
                    bg-white/[0.025]
                    px-2
                    py-3
                    text-center
                  "
                >
                  <Icon
                    size={17}
                    className="text-[#DFAE45]"
                  />

                  <p className="mt-1.5 text-[10px] font-bold text-slate-200">
                    {item.title}
                  </p>

                  <p className="mt-0.5 text-[8px] text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </section>

          {/* =====================================================
              FAQ
          ====================================================== */}

          <section className="mt-8">
            <div className="mb-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
                Frequently Asked
              </p>

              <div className="mt-1 flex items-center justify-between">
                <h2 className="text-[21px] font-bold">
                  Common Questions
                </h2>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03]">
                  <HelpCircle
                    size={18}
                    className="text-[#DFAE45]"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={faq.question}
                      className={`
                        overflow-hidden
                        rounded-2xl
                        border
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "border-[#DFAE45]/25 bg-[#101B2A]"
                            : "border-white/[0.07] bg-white/[0.025]"
                        }
                      `}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(isOpen ? null : index)
                        }
                        className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              text-[10px]
                              font-bold
                              ${
                                isOpen
                                  ? "bg-[#DFAE45]/15 text-[#F3C75F]"
                                  : "bg-white/[0.04] text-slate-500"
                              }
                            `}
                          >
                            0{index + 1}
                          </span>

                          <span
                            className={`
                              text-[13px]
                              font-semibold
                              ${
                                isOpen
                                  ? "text-white"
                                  : "text-slate-300"
                              }
                            `}
                          >
                            {faq.question}
                          </span>
                        </div>

                        <ChevronDown
                          size={17}
                          className={`
                            shrink-0
                            text-slate-500
                            transition-transform
                            duration-300
                            ${
                              isOpen
                                ? "rotate-180 text-[#DFAE45]"
                                : ""
                            }
                          `}
                        />
                      </button>

                      <div
                        className={`
                          grid
                          transition-all
                          duration-300
                          ${
                            isOpen
                              ? "grid-rows-[1fr]"
                              : "grid-rows-[0fr]"
                          }
                        `}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t border-white/[0.05] px-4 pb-4 pt-3 pl-[60px]">
                            <p className="text-[11px] leading-5 text-slate-500">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-8 text-center">
                  <Search
                    size={25}
                    className="mx-auto text-slate-600"
                  />

                  <p className="mt-3 text-sm font-semibold text-slate-300">
                    No questions found
                  </p>

                  <p className="mt-1 text-[11px] text-slate-600">
                    Try searching with different keywords.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* =====================================================
              FINAL HELP CARD
          ====================================================== */}

          <section className="mt-8">
            <div className="relative overflow-hidden rounded-[26px] border border-white/[0.07] bg-[#0B1624] p-5 text-center">
              <div className="absolute left-1/2 top-[-70px] h-36 w-36 -translate-x-1/2 rounded-full bg-[#DFAE45]/10 blur-3xl" />

              <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/[0.08]">
                <Sparkles
                  size={21}
                  className="text-[#DFAE45]"
                />
              </div>

              <h2 className="relative mt-4 text-[19px] font-bold">
                Still need help?
              </h2>

              <p className="relative mx-auto mt-2 max-w-[290px] text-[11px] leading-5 text-slate-500">
                Don't worry. Our support team is ready to help you with
                anything you need.
              </p>

              <a
                href="https://wa.me/918878632431"
                target="_blank"
                rel="noreferrer"
                className="
                  relative
                  mx-auto
                  mt-5
                  flex
                  h-[48px]
                  max-w-[230px]
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#F3C75F]
                  to-[#C9902F]
                  text-[12px]
                  font-extrabold
                  text-[#171008]
                  shadow-[0_8px_30px_rgba(223,174,69,0.18)]
                  transition
                  active:scale-95
                "
              >
                <MessageCircle size={17} />
                {/* Chat With Support */}
                <ArrowUpRight size={15} />
              </a>

              <div className="relative mt-5 flex items-center justify-center gap-2">
                <ShieldCheck
                  size={13}
                  className="text-[#DFAE45]"
                />

                <span className="text-[9px] font-medium tracking-wide text-slate-600">
                  Secure • Trusted • Dedicated Support
                </span>
              </div>
            </div>
          </section>

          {/* =====================================================
              FOOTER
          ====================================================== */}

          <footer className="pb-5 pt-9 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#DFAE45]/30" />

              <span className="text-[10px] font-extrabold tracking-[0.28em] text-[#DFAE45]">
                OURHUB
              </span>

              <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#DFAE45]/30" />
            </div>

            <p className="mt-2 text-[9px] tracking-wide text-slate-700">
              One Hub. Every Service.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}

