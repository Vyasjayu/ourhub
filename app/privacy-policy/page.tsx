import PageLayout from "@/components/PageLayout";

export default function PrivacyPolicyPage() {
  return (
    <PageLayout title="Privacy Policy">
      <div className="space-y-6 text-gray-300 leading-8">

        <p>
          At <strong className="text-white">OurHub Services</strong>, we value
          your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, store,
          and protect the information you provide while using our platform.
        </p>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Information We Collect
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>Name, mobile number and email address.</li>
            <li>Booking details and service preferences.</li>
            <li>Payment-related information required to process transactions.</li>
            <li>Location details, only when necessary for providing services.</li>
            <li>Device and browser information to improve website performance.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            How We Use Your Information
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>To process and manage your service bookings.</li>
            <li>To communicate booking confirmations and updates.</li>
            <li>To improve our website and customer experience.</li>
            <li>To provide customer support.</li>
            <li>To comply with applicable legal and regulatory requirements.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Data Security
          </h2>

          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, misuse, alteration, or
            disclosure. While no online platform can guarantee absolute
            security, we continuously work to maintain a secure environment for
            our users.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Sharing of Information
          </h2>

          <p>
            We do not sell or rent your personal information to third parties.
            Information may be shared only with verified service providers for
            the purpose of fulfilling your booking or when required by law.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Cookies
          </h2>

          <p>
            Our website may use cookies and similar technologies to improve
            functionality, remember user preferences, and enhance your browsing
            experience.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Policy Updates
          </h2>

          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be published on this page and become effective immediately upon
            posting.
          </p>
        </div>

        <div className="rounded-xl border border-yellow-500/20 bg-slate-800 p-5">
          <h2 className="mb-2 text-lg font-semibold text-yellow-400">
            Contact Us
          </h2>

          <p>
            If you have any questions regarding this Privacy Policy, please
            contact us at <strong>support@ourhubservices.com</strong>.
          </p>
        </div>

      </div>
    </PageLayout>
  );
}