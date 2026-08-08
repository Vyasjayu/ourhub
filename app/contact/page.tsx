import PageLayout from "@/components/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout title="Contact Us">
      <div className="space-y-6 text-gray-300 leading-8">

        <p>
          We are always here to help you. If you have any questions regarding
          bookings, payments, cancellations, refunds, or our services, feel
          free to contact our support team. We aim to respond to all customer
          queries as quickly as possible.
        </p>

        <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">
          <h2 className="mb-4 text-xl font-semibold text-yellow-400">
            Contact Information
          </h2>

          <div className="space-y-4">

            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium text-white">
                support@ourhubservices.com
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="font-medium text-white">
                +91 8878632431
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Working Hours</p>
              <p className="font-medium text-white">
                Monday – Sunday
                <br />
                9:00 AM – 8:00 PM
              </p>
            </div>

          </div>
        </div>

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

      </div>
    </PageLayout>
  );
}