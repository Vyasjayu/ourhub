
import PageLayout from "@/components/PageLayout";

export default function CancellationPolicyPage() {
  return (
    <PageLayout title="Cancellation Policy">
      <div className="space-y-8 text-slate-300 leading-relaxed">
        {/* Introduction */}
        <p>
          At <strong className="text-white">OurHub Services</strong>, we
          understand that plans may change. This Cancellation Policy explains
          the rules and conditions for cancelling service bookings made through
          our platform.
        </p>

        {/* Customer Cancellation */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Customer Cancellation
          </h2>

          <p className="mb-4">
            Customers may request cancellation of a confirmed service booking
            subject to the following cancellation window:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-white">
                24 hours or more before the scheduled service:
              </strong>{" "}
              Customers may cancel the booking and may be eligible for a full
              refund, subject to the applicable service terms.
            </li>

            <li>
              <strong className="text-white">
                Less than 24 hours before the scheduled service:
              </strong>{" "}
              The booking may be cancelled, but an applicable cancellation
              charge may be deducted from the refundable amount.
            </li>

            <li>
              <strong className="text-white">
                After the scheduled service time:
              </strong>{" "}
              Cancellation requests may not be eligible for a refund if the
              customer is unavailable or the service provider has already
              arrived or started the service.
            </li>
          </ul>
        </div>

        {/* Cancellation Request */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            How to Cancel a Booking
          </h2>

          <p>
            Customers should contact OurHub Services support as soon as
            possible to request cancellation. The cancellation request will be
            reviewed based on the booking date, scheduled service time, service
            status, and applicable cancellation conditions.
          </p>
        </div>

        {/* Provider Cancellation */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Provider Cancellation
          </h2>

          <p>
            If a service provider is unable to fulfil a confirmed booking due
            to unforeseen circumstances, OurHub Services will make reasonable
            efforts to arrange another verified provider or reschedule the
            service.
          </p>

          <p className="mt-3">
            If a suitable replacement or rescheduled service is not available,
            the customer may be eligible for a full refund in accordance with
            our Refund Policy.
          </p>
        </div>

        {/* Cancellation Charges */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Cancellation Charges
          </h2>

          <p>
            Cancellation charges may apply when a customer cancels a booking
            less than 24 hours before the scheduled service time. The
            applicable charge may vary depending on the type of service,
            booking conditions, and service requirements.
          </p>

          <p className="mt-3">
            Any applicable cancellation charge will be communicated to the
            customer during the cancellation process.
          </p>
        </div>

        {/* No Show */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Customer No-Show
          </h2>

          <p>
            If the customer is unavailable at the confirmed service location
            or fails to attend an agreed appointment without prior notice, the
            booking may be treated as a no-show. In such cases, the customer
            may not be eligible for a refund.
          </p>
        </div>

        {/* Exceptions */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Exceptions
          </h2>

          <p className="mb-4">
            Certain circumstances may be considered for cancellation or refund
            on a case-by-case basis, including:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Natural disasters or emergency situations.</li>
            <li>
              Technical issues affecting booking confirmation or payment.
            </li>
            <li>
              Situations where the service cannot be provided by the assigned
              provider.
            </li>
            <li>
              Other circumstances that prevent the service from being
              reasonably delivered.
            </li>
          </ul>
        </div>

        {/* Refund Connection */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Refund After Cancellation
          </h2>

          <p>
            Where a cancellation qualifies for a refund, the eligible amount
            will be processed in accordance with the{" "}
            <strong className="text-white">Refund Policy</strong> of OurHub
            Services.
          </p>

          <p className="mt-3">
            Approved refunds will generally be initiated to the original
            payment method within{" "}
            <strong className="text-white">5–10 business days</strong>,
            subject to processing times of the payment gateway and the
            customer&apos;s bank or financial institution.
          </p>
        </div>

        {/* Important */}
        <div className="rounded-xl border border-yellow-500/20 bg-slate-800 p-5">
          <h2 className="mb-2 text-lg font-semibold text-yellow-400">
            Important
          </h2>

          <p>
            Customers should review the service details, scheduled date and
            time, and applicable cancellation conditions before making a
            payment. If a particular service has different cancellation terms,
            those terms will be displayed to the customer before or during the
            booking process.
          </p>
        </div>

        {/* Support */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Need Assistance?
          </h2>

          <p>
            If you need to cancel a booking or have questions regarding this
            Cancellation Policy, please contact our customer support team with
            your booking details.
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
              <span className="font-semibold text-white">Working Hours:</span>{" "}
              Monday – Saturday, 9:00 AM – 8:00 PM
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
