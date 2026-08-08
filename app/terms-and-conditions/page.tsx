import PageLayout from "@/components/PageLayout";

export default function TermsAndConditionsPage() {
  return (
    <PageLayout title="Terms & Conditions">
      <div className="space-y-6 text-gray-300 leading-8">

        <p>
          Welcome to <strong className="text-white">OurHub Services</strong>.
          By accessing or using our website, you agree to comply with these
          Terms & Conditions. Please read them carefully before using our
          platform or booking any service.
        </p>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Acceptance of Terms
          </h2>

          <p>
            By using OurHub Services, you confirm that you have read,
            understood, and agreed to these Terms & Conditions, along with our
            Privacy Policy, Refund Policy, and Cancellation Policy.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Service Booking
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>Customers can book available services through our platform.</li>
            <li>Bookings are subject to provider availability.</li>
            <li>Customers must provide accurate booking information.</li>
            <li>Incorrect information may affect service delivery.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Payments
          </h2>

          <p>
            Payments made through OurHub Services are processed using secure
            payment gateways. Customers agree to pay the applicable charges
            before or during the booking process, depending on the selected
            service.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            User Responsibilities
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>Provide accurate personal and booking information.</li>
            <li>Respect service providers during service delivery.</li>
            <li>Do not misuse the platform for unlawful activities.</li>
            <li>Comply with all applicable laws while using our services.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Limitation of Liability
          </h2>

          <p>
            OurHub Services acts as a platform connecting customers with
            verified professionals. While we strive to ensure service quality,
            we are not liable for delays, interruptions, or issues beyond our
            reasonable control.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Changes to Terms
          </h2>

          <p>
            We reserve the right to update or modify these Terms & Conditions
            at any time. Updated terms will be published on this page and will
            become effective immediately after publication.
          </p>
        </div>

        <div className="rounded-xl border border-yellow-500/20 bg-slate-800 p-5">
          <h2 className="mb-2 text-lg font-semibold text-yellow-400">
            Contact Us
          </h2>

          <p>
            If you have any questions regarding these Terms & Conditions,
            please contact us at:
          </p>

          <p className="mt-3 text-white font-medium">
            support@ourhubservices.com
          </p>

          <p className="text-white">
            +91 8878632431
          </p>
        </div>

      </div>
    </PageLayout>
  );
}