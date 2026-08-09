
import PageLayout from "@/components/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout title="Contact Us">
      <div className="space-y-8 text-slate-300 leading-relaxed">
        {/* Introduction */}
        <p>
          We are always here to help you. If you have any questions regarding
          bookings, payments, cancellations, refunds, or our services, feel
          free to contact our support team. We aim to respond to customer
          queries as quickly as possible.
        </p>

        {/* Contact Information */}
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">
          <h2 className="mb-5 text-xl font-semibold text-yellow-400">
            Contact Information
          </h2>

          <div className="space-y-5">
            {/* Business / Owner */}
            <div>
              <p className="text-sm text-gray-400">
                Business / Owner
              </p>

              <p className="mt-1 font-medium text-white">
                Jayant Vyas
              </p>
            </div>

            {/* Email */}
            <div>
              <p className="text-sm text-gray-400">
                Support Email
              </p>

              <a
                href="mailto:support@ourhubservices.com"
                className="mt-1 block font-medium text-white transition hover:text-yellow-400"
              >
                support@ourhubservices.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <p className="text-sm text-gray-400">
                Phone
              </p>

              <a
                href="tel:+918878632431"
                className="mt-1 block font-medium text-white transition hover:text-yellow-400"
              >
                +91 8878632431
              </a>
            </div>

            {/* Working Hours */}
            <div>
              <p className="text-sm text-gray-400">
                Working Hours
              </p>

              <p className="mt-1 font-medium text-white">
                Monday – Saturday
                <br />
                9:00 AM – 8:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Business Address */}
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Business Address
          </h2>

          <p className="text-slate-300">
            OurHub Services
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Business address will be displayed here.
          </p>
        </div>

        {/* Customer Support */}
        <div className="rounded-xl border border-yellow-500/20 bg-slate-800 p-5">
          <h2 className="mb-3 text-lg font-semibold text-yellow-400">
            Customer Support
          </h2>

          <p>
            Our support team is available to assist you with service bookings,
            payment-related queries, provider information, technical issues,
            cancellations, and refund requests. Your satisfaction is our
            priority, and we are committed to providing timely assistance.
          </p>
        </div>

        {/* Payment & Refund Support */}
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">
          <h2 className="mb-3 text-lg font-semibold text-yellow-400">
            Payment & Refund Support
          </h2>

          <p>
            For payment failures, duplicate payments, cancellation requests,
            or refund-related queries, please contact us using the email or
            phone number provided above. Please keep your booking details or
            payment reference available so that we can assist you efficiently.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

