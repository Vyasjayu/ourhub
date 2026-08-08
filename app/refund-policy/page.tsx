import PageLayout from "@/components/PageLayout";

export default function RefundPolicyPage() {
  return (
    <PageLayout title="Refund Policy">
      <div className="space-y-6 text-gray-300 leading-8">

        <p>
          At <strong className="text-white">OurHub Services</strong>, customer
          satisfaction is our priority. This Refund Policy explains the
          circumstances under which refunds may be provided for bookings made
          through our platform.
        </p>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Eligible Refunds
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              If a booking is cancelled by the service provider and no
              replacement is available.
            </li>
            <li>
              If the booked service cannot be delivered due to reasons
              attributable to the platform or service provider.
            </li>
            <li>
              If an incorrect payment is charged because of a technical issue.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Non-Refundable Situations
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              If the customer provides incorrect booking details.
            </li>
            <li>
              If the customer is unavailable at the scheduled service time.
            </li>
            <li>
              If the service has already been completed successfully.
            </li>
            <li>
              Any other situation where the refund is restricted under the
              applicable service terms.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Refund Process
          </h2>

          <p>
            Eligible refunds will be reviewed after receiving the request. Once
            approved, the refund will be initiated to the original payment
            method used during the transaction.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Refund Timeline
          </h2>

          <p>
            Approved refunds are generally processed within
            <strong className="text-white"> 5–10 business days</strong>,
            depending on the payment provider or the customer's bank.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Need Help?
          </h2>

          <p>
            If you have any questions regarding refunds or believe you are
            eligible for a refund, please contact our support team.
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
          </div>
        </div>

      </div>
    </PageLayout>
  );
}