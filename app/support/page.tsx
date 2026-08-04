"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Phone,
  Mail,
  MessageCircle,
  CircleHelp,
  FileQuestion,
  ChevronRight,
} from "lucide-react";

export default function SupportPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#071424] text-white pb-10">

      {/* Header */}

      <div className="sticky top-0 z-20 border-b border-white/10 bg-[#071424]/95 backdrop-blur">

        <div className="mx-auto flex max-w-md items-center gap-4 px-5 py-5">

          <button
            onClick={() => router.back()}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"
          >
            <ArrowLeft size={22} />
          </button>

          <h1 className="text-2xl font-bold">
            Help & Support
          </h1>

        </div>

      </div>

      <div className="mx-auto max-w-md px-5">

        {/* Hero Card */}

        <div className="mt-6 rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-[#13233C] to-[#0B1527] p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400/10">

              <CircleHelp
                size={34}
                className="text-yellow-400"
              />

            </div>

            <div>

              <h2 className="text-xl font-bold">
                Need Help?
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                We're available 24×7 to assist you.
              </p>

            </div>

          </div>

        </div>

        {/* Contact Options */}

        <div className="mt-8 space-y-4">

          <SupportItem
            icon={<Phone size={22} />}
            title="Call Support"
            subtitle="+91 8878632431"
            onClick={() =>
              window.open("tel:+918878632431")
            }
          />

          <SupportItem
            icon={<Mail size={22} />}
            title="Email Support"
            subtitle="support@ourhubservices.com"
            onClick={() =>
              window.open(
                "mailto:support@ourhubservices.com"
              )
            }
          />

          <SupportItem
            icon={<MessageCircle size={22} />}
            title="WhatsApp Support"
            subtitle="Chat with our support team"
            onClick={() =>
              window.open(
                "https://wa.me/918878632431",
                "_blank"
              )
            }
          />

          <SupportItem
            icon={<FileQuestion size={22} />}
            title="Frequently Asked Questions"
            subtitle="Find answers instantly"
            onClick={() =>
              alert("FAQ Coming Soon")
            }
          />

          <SupportItem
            icon={<CircleHelp size={22} />}
            title="Report an Issue"
            subtitle="Tell us about your problem"
            onClick={() =>
              alert("Report Issue Coming Soon")
            }
          />

        </div>

        {/* Office */}

        <div className="mt-8 rounded-3xl border border-white/10 bg-[#13233C] p-5">

          <h3 className="text-lg font-semibold text-yellow-400">
            OurHub Office
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-300">
            OurHub Services Pvt. Ltd.
            <br />
            Ratlam, Madhya Pradesh
            <br />
            India
          </p>

        </div>

        {/* Footer */}

        <div className="mt-8 rounded-2xl border border-yellow-400/20 bg-[#13233C] p-5 text-center">

          <p className="text-sm text-gray-300">
            Support Hours
          </p>

          <h3 className="mt-2 text-lg font-bold text-yellow-400">
            24 × 7 Customer Support
          </h3>

        </div>

      </div>

    </main>
  );
}

type SupportItemProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onClick: () => void;
};

function SupportItem({
  icon,
  title,
  subtitle,
  onClick,
}: SupportItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-[#13233C] p-4 transition hover:border-yellow-400 hover:bg-[#1A2942]"
    >
      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
          {icon}
        </div>

        <div className="text-left">

          <h3 className="font-semibold text-white">
            {title}
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            {subtitle}
          </p>

        </div>

      </div>

      <ChevronRight
        size={20}
        className="text-gray-500"
      />

    </button>
  );
}