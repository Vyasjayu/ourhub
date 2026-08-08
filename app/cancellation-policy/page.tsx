import PageLayout from "@/components/PageLayout";

export default function CancellationPolicyPage() {
  return (
    <PageLayout title="Cancellation Policy">
      <div className="space-y-6 text-gray-300 leading-8">

        <p>
          At <strong className="text-white">OurHub Services</strong>, we
          understand that plans may change. This Cancellation Policy explains
          the rules and conditions for cancelling service bookings made through
          our platform.
        </p>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Customer Cancellation
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              Customers may request cancellation before the scheduled service
              time.
            </li>
            <li>
              Cancellation requests should be made as early as possible to
              avoid inconvenience to the assigned service provider.
            </li>
            <li>
              Late cancellation requests may be subject to cancellation charges,
              depending on the selected service.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Provider Cancellation
          </h2>

          <p>
            If a service provider is unable to fulfill the booking due to
            unforeseen circumstances, OurHub Services will make reasonable
            efforts to arrange another verified provider. If a replacement is
            not available, the customer may be eligible for a refund in
            accordance with our Refund Policy.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Cancellation Charges
          </h2>

          <p>
            Cancellation charges, if applicable, depend on the type of service,
            the timing of the cancellation, and the provider's policy. Any
            applicable charges will be communicated during the cancellation
            process.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Exceptions
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>Natural disasters or emergency situations.</li>
            <li>Technical issues affecting booking confirmation.</li>
            <li>Situations where the service cannot be provided by the provider.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Need Assistance?
          </h2>

          <p>
            If you need to cancel a booking or have questions regarding this
            Cancellation Policy, please contact our customer support team.
          </p>

          <div className="mt-4 rounded-xl border border-yellow-500/20 bg-slate-800 p-5">
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              support@ourhubservices.com
            </p>

            <p className="mt-2">
              <span className="font-semibold text-white">Phone:</span>{" "}
              +91 8878632431
            </p>

            <p className="mt-2">
              <span className="font-semibold text-white">
                Working Hours:
              </span>{" "}
              Monday – Sunday, 9:00 AM – 8:00 PM
            </p>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}