
import PageLayout from "@/components/PageLayout";

export default function RefundPolicyPage() {
  return (
    <PageLayout title="Refund & Cancellation Policy">
      <div className="space-y-8 text-slate-300 leading-relaxed">
        {/* Introduction */}
        <p>
          At <strong className="text-white">OurHub Services</strong>, customer
          satisfaction and transparent service policies are our priorities.
          This Refund and Cancellation Policy explains the conditions under
          which customers may cancel a booking and receive a refund for
          services purchased through our platform.
        </p>

        {/* Cancellation Policy */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Cancellation Policy
          </h2>

          <p className="mb-4">
            Customers may request cancellation of a paid service booking
            subject to the following conditions:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-white">
                Cancellation 24 hours or more before the scheduled service:
              </strong>{" "}
              Eligible customers may receive a full refund of the amount paid.
            </li>

            <li>
              <strong className="text-white">
                Cancellation less than 24 hours before the scheduled service:
              </strong>{" "}
              A cancellation charge may apply depending on the service and
              booking conditions. The remaining eligible amount, if any, will
              be refunded.
            </li>

            <li>
              <strong className="text-white">
                Cancellation after the scheduled service time:
              </strong>{" "}
              Refunds may not be available if the customer is unavailable or
              fails to attend the scheduled service without prior notice.
            </li>
          </ul>
        </div>

        {/* Provider Cancellation */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Service Provider Cancellation
          </h2>

          <p>
            If a service provider cancels a confirmed booking and the service
            cannot be rescheduled or a suitable replacement is not available,
            the customer will be eligible for a full refund of the amount paid
            for that booking.
          </p>

          <p className="mt-3">
            Where possible, OurHub Services may offer the customer an
            alternative service provider or a rescheduled appointment instead
            of a refund, subject to the customer&apos;s agreement.
          </p>
        </div>

        {/* Service Unavailable */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Service Unavailable
          </h2>

          <p>
            If a booked service cannot be delivered due to circumstances
            attributable to OurHub Services or the assigned service provider,
            the customer may be offered a rescheduled service, replacement
            provider, or a full refund where the service cannot be fulfilled.
          </p>
        </div>

        {/* Incorrect Payment */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Incorrect or Duplicate Payment
          </h2>

          <p>
            If a customer is charged incorrectly or a duplicate payment is
            successfully processed due to a technical or payment processing
            issue, the excess or incorrect amount will be reviewed and, where
            verified, refunded to the original payment method.
          </p>
        </div>

        {/* Non Refundable */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Non-Refundable Situations
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              The customer provides incorrect or incomplete booking details
              that prevent successful service delivery.
            </li>

            <li>
              The customer is unavailable at the confirmed service time or
              location without providing prior notice.
            </li>

            <li>
              The customer cancels the booking less than 24 hours before the
              scheduled service and the applicable cancellation conditions do
              not allow a full refund.
            </li>

            <li>
              The service has already been successfully completed.
            </li>

            <li>
              A refund is specifically excluded under the terms applicable to
              the particular service or booking.
            </li>
          </ul>
        </div>

        {/* Refund Eligibility */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Refund Eligibility
          </h2>

          <p>
            Refund eligibility is determined based on the booking details,
            cancellation time, service status, reason for cancellation, and
            the applicable service terms. If a service has specific
            cancellation or refund conditions, those conditions will be
            displayed to the customer before or during the booking process.
          </p>
        </div>

        {/* Refund Process */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Refund Process
          </h2>

          <p>
            Customers requesting a refund should contact our support team with
            their booking details and payment information. Refund requests will
            be reviewed and verified before approval.
          </p>

          <p className="mt-3">
            Once a refund is approved, the eligible amount will be initiated to
            the original payment method used for the transaction.
          </p>
        </div>

        {/* Refund Timeline */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Refund Timeline
          </h2>

          <p>
            Approved refunds are generally initiated within{" "}
            <strong className="text-white">5–10 business days</strong>. The
            actual time taken for the amount to reflect in the customer&apos;s
            account may vary depending on the payment gateway, bank, card
            issuer, or other financial institution.
          </p>
        </div>

        {/* Important Note */}
        <div className="rounded-xl border border-yellow-500/20 bg-slate-800 p-5">
          <h2 className="mb-2 text-lg font-semibold text-yellow-400">
            Important
          </h2>

          <p>
            Customers are advised to review the service details, scheduled date
            and time, service location, and applicable cancellation conditions
            before making a payment. Service-specific terms, where applicable,
            will take precedence over general refund conditions.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Need Help?
          </h2>

          <p>
            If you have any questions regarding cancellation or refunds, or
            believe you are eligible for a refund, please contact our support
            team with your booking details.
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

