
import PageLayout from "@/components/PageLayout";

export default function TermsAndConditionsPage() {
  return (
    <PageLayout title="Terms & Conditions">
      <div className="space-y-8 text-slate-300 leading-relaxed">
        {/* Introduction */}
        <p>
          Welcome to{" "}
          <strong className="text-white">OurHub Services</strong>. OurHub
          Services is an online platform that enables customers to discover,
          request, and book various services from available service providers.
          By accessing our website or using our services, you agree to comply
          with these Terms & Conditions.
        </p>

        <p>
          Please read these Terms & Conditions carefully before creating a
          booking, making a payment, or using any service available through
          OurHub Services.
        </p>

        {/* Acceptance */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Acceptance of Terms
          </h2>

          <p>
            By accessing or using OurHub Services, you confirm that you have
            read, understood, and agreed to these Terms & Conditions, along
            with our Privacy Policy, Refund Policy, and Cancellation Policy.
          </p>

          <p className="mt-3">
            If you do not agree with any part of these terms, please do not use
            the website or book services through OurHub Services.
          </p>
        </div>

        {/* Business Description */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            About OurHub Services
          </h2>

          <p>
            OurHub Services provides an online service marketplace through
            which customers can explore and book available services. Depending
            on availability, services may include religious services,
            household services, professional services, digital services,
            events, and other service categories listed on the platform.
          </p>

          <p className="mt-3">
            OurHub Services facilitates the booking process and coordinates
            between customers and applicable service providers. Service
            availability, pricing, timing, and delivery may vary depending on
            the selected service and provider.
          </p>
        </div>

        {/* Customer Eligibility */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Customer Eligibility
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              Customers must provide accurate and complete information when
              using the platform.
            </li>

            <li>
              Customers must have the legal capacity to enter into a service
              transaction.
            </li>

            <li>
              Customers must use the platform only for lawful purposes.
            </li>

            <li>
              Customers are responsible for maintaining the accuracy of their
              contact and booking information.
            </li>
          </ul>
        </div>

        {/* Service Booking */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Service Booking
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              Customers can select and request available services through the
              OurHub Services platform.
            </li>

            <li>
              Service bookings are subject to availability and confirmation.
            </li>

            <li>
              Customers must provide accurate name, contact, service location,
              date, time, and other information required for the selected
              service.
            </li>

            <li>
              A booking may not be considered confirmed until the applicable
              confirmation process has been completed.
            </li>

            <li>
              OurHub Services may contact the customer to verify booking
              details when necessary.
            </li>
          </ul>
        </div>

        {/* Pricing */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Service Pricing
          </h2>

          <p>
            Service prices displayed on OurHub Services may vary depending on
            the type of service, location, provider, service requirements, and
            other applicable factors.
          </p>

          <p className="mt-3">
            The applicable amount payable by the customer will be communicated
            during the booking or payment process. Customers should review the
            applicable service details and charges before making a payment.
          </p>
        </div>

        {/* Payments */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Payments
          </h2>

          <p>
            Payments for applicable services may be processed through secure
            third-party payment gateways supported by OurHub Services.
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Customers agree to pay the applicable amount for the selected
              service.
            </li>

            <li>
              Payment information may be processed by the applicable payment
              gateway according to its terms and policies.
            </li>

            <li>
              OurHub Services does not intentionally store complete card
              numbers, CVV numbers, or other sensitive payment credentials.
            </li>

            <li>
              A payment confirmation does not guarantee service delivery if
              the service subsequently becomes unavailable or cannot be
              fulfilled.
            </li>
          </ul>
        </div>

        {/* Service Delivery */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Service Delivery
          </h2>

          <p>
            Services will be delivered according to the selected booking
            details, including the applicable service date, time, location,
            and service requirements.
          </p>

          <p className="mt-3">
            Actual service availability and delivery may depend on provider
            availability, customer-provided information, location,
            circumstances at the service location, and other factors beyond
            reasonable control.
          </p>

          <p className="mt-3">
            If a confirmed service cannot be delivered, OurHub Services may
            attempt to arrange an alternative provider or reschedule the
            service. Where applicable, refunds will be handled according to our
            Refund Policy.
          </p>
        </div>

        {/* Provider Responsibility */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Service Provider Responsibility
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              Service providers are expected to provide the booked service
              according to the agreed booking details.
            </li>

            <li>
              Providers are responsible for communicating relevant service
              requirements and availability.
            </li>

            <li>
              Providers should maintain professional and respectful conduct
              while interacting with customers.
            </li>

            <li>
              If a provider is unable to fulfil a confirmed booking, they
              should inform OurHub Services as soon as reasonably possible.
            </li>
          </ul>
        </div>

        {/* Customer Responsibility */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Customer Responsibility
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              Provide accurate personal, contact, booking, and service
              location information.
            </li>

            <li>
              Be available at the agreed service location and time where
              required.
            </li>

            <li>
              Treat service providers respectfully and professionally.
            </li>

            <li>
              Inform OurHub Services as early as possible if booking details
              need to be changed or cancelled.
            </li>

            <li>
              Do not use the platform for fraudulent, unlawful, abusive, or
              misleading activities.
            </li>
          </ul>
        </div>

        {/* Cancellation */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Cancellation
          </h2>

          <p>
            Customers may cancel bookings according to the applicable
            cancellation conditions. Generally, cancellations made 24 hours or
            more before the scheduled service may be eligible for a full
            refund, while cancellations made less than 24 hours before the
            scheduled service may be subject to applicable cancellation
            charges.
          </p>

          <p className="mt-3">
            Provider cancellations and service unavailability will be handled
            according to the applicable service conditions and our Cancellation
            and Refund Policies.
          </p>

          <p className="mt-3">
            Customers should review the cancellation conditions before making a
            payment.
          </p>
        </div>

        {/* Refund */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Refunds
          </h2>

          <p>
            Refunds are handled according to the OurHub Services Refund Policy.
            Where a refund is approved, it will generally be initiated to the
            original payment method used for the transaction.
          </p>

          <p className="mt-3">
            Approved refunds are generally processed within{" "}
            <strong className="text-white">5–10 business days</strong>.
            However, the actual time for the amount to reflect in the
            customer&apos;s account may depend on the payment gateway, bank,
            card issuer, or other financial institution.
          </p>
        </div>

        {/* Prohibited Use */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Acceptable Use
          </h2>

          <p className="mb-4">
            Customers and service providers must not use OurHub Services for:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Fraudulent or deceptive activities.</li>
            <li>Illegal activities or transactions.</li>
            <li>Harassment, abuse, or threats against other users.</li>
            <li>
              Attempting to interfere with or compromise the security of the
              platform.
            </li>
            <li>
              Providing false information or misusing another person&apos;s
              identity or account.
            </li>
          </ul>
        </div>

        {/* Intellectual Property */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Website Content
          </h2>

          <p>
            Unless otherwise stated, the content, branding, logos, design,
            graphics, text, and other materials available on OurHub Services
            are owned by or used with permission by OurHub Services.
          </p>

          <p className="mt-3">
            Users may not reproduce, copy, modify, distribute, or commercially
            exploit website content without prior written permission.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Limitation of Liability
          </h2>

          <p>
            OurHub Services makes reasonable efforts to provide a reliable
            platform and facilitate service bookings. However, we cannot
            guarantee uninterrupted availability or that every service will
            always be available at the requested time.
          </p>

          <p className="mt-3">
            To the extent permitted by applicable law, OurHub Services will not
            be responsible for delays, interruptions, service-provider actions,
            customer actions, technical failures, or circumstances beyond our
            reasonable control.
          </p>
        </div>

        {/* Third Party Services */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Third-Party Services
          </h2>

          <p>
            OurHub Services may use third-party providers such as payment
            gateways, hosting providers, communication services, or other
            technology providers to operate the platform.
          </p>

          <p className="mt-3">
            Third-party services may have their own terms, policies, and
            processing timelines. Customers should review those policies where
            applicable.
          </p>
        </div>

        {/* Dispute Handling */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Dispute Handling
          </h2>

          <p>
            If a customer has a concern regarding a booking, payment, service,
            cancellation, or refund, the customer should first contact the
            OurHub Services support team so that the matter can be reviewed and
            resolved.
          </p>

          <p className="mt-3">
            We will make reasonable efforts to investigate and resolve genuine
            disputes based on the available booking, payment, and service
            information.
          </p>

          <p className="mt-3">
            Nothing in these Terms & Conditions limits any rights or remedies
            available to customers under applicable laws.
          </p>
        </div>

        {/* Privacy */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Privacy
          </h2>

          <p>
            Information collected through the OurHub Services platform is
            handled according to our Privacy Policy. Customers should review
            the Privacy Policy to understand how personal and booking
            information may be collected, used, and protected.
          </p>
        </div>

        {/* Changes */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Changes to These Terms
          </h2>

          <p>
            OurHub Services reserves the right to update or modify these Terms
            & Conditions when necessary. Updated terms will be published on
            this page and will become effective from the date of publication
            unless otherwise stated.
          </p>

          <p className="mt-3">
            Customers are encouraged to review this page periodically for any
            changes.
          </p>
        </div>

        {/* Governing Law */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Governing Law
          </h2>

          <p>
            These Terms & Conditions will be interpreted and applied in
            accordance with the applicable laws of India. Any legal proceedings
            will be subject to the jurisdiction of the appropriate courts,
            subject to applicable law.
          </p>
        </div>

        {/* Contact */}
        <div className="rounded-xl border border-yellow-500/20 bg-slate-800 p-5">
          <h2 className="mb-2 text-lg font-semibold text-yellow-400">
            Contact Us
          </h2>

          <p>
            If you have any questions, concerns, or complaints regarding these
            Terms & Conditions, please contact OurHub Services:
          </p>

          <div className="mt-4">
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
              Monday – Sunday, 9:00 AM – 8:00 PM
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

