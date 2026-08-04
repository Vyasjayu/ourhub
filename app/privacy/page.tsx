"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

        </div>

      </div>

      <div className="mx-auto max-w-md px-5">

        {/* Top Card */}

        <div className="mt-6 rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-[#13233C] to-[#0B1527] p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400/10">

              <ShieldCheck
                size={34}
                className="text-yellow-400"
              />

            </div>

            <div>

              <h2 className="text-xl font-bold">
                Your Privacy Matters
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Last Updated: August 2026
              </p>

            </div>

          </div>

        </div>

        {/* Section 1 */}

        <Section
          title="1. Information We Collect"
          content="We collect your name, mobile number, email address, profile details, booking information and payment details only to provide better services on OurHub."
        />

        {/* Section 2 */}

        <Section
          title="2. How We Use Your Information"
          content="Your information is used for booking services, verifying your account, improving customer experience, sending important notifications and providing customer support."
        />

        {/* Section 3 */}

        <Section
          title="3. Data Security"
          content="We use secure servers, encrypted connections and authentication methods to keep your personal information safe and protected."
        />

        {/* Section 4 */}

        <Section
          title="4. Sharing Information"
          content="We never sell your personal information. Limited information may be shared with service providers only for completing your requested booking."
        />

        {/* Section 5 */}

        <Section
          title="5. Cookies"
          content="OurHub may use cookies to improve website performance, remember login sessions and provide a better browsing experience."
        />

        {/* Section 6 */}

        <Section
          title="6. Your Rights"
          content="You can update your profile, request deletion of your account or contact us regarding any privacy concerns at any time."
        />

        {/* Section 7 */}

        <Section
          title="7. Contact Us"
          content="If you have any questions regarding this Privacy Policy, you can contact the OurHub Support Team through the Help & Support section."
        />

        {/* Footer */}

        <div className="mt-8 rounded-2xl border border-yellow-400/20 bg-[#13233C] p-5 text-center">

          <p className="text-sm leading-7 text-gray-300">
            By using <span className="font-semibold text-yellow-400">OurHub</span>,
            you agree to this Privacy Policy and our Terms of Service.
          </p>

        </div>

      </div>

    </main>
  );
}

type SectionProps = {
  title: string;
  content: string;
};

function Section({
  title,
  content,
}: SectionProps) {
  return (
    <div className="mt-6 rounded-3xl border border-white/10 bg-[#13233C] p-5">

      <h3 className="text-lg font-semibold text-yellow-400">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-gray-300">
        {content}
      </p>

    </div>
  );
}