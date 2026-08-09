
"use client";

import PageLayout from "@/components/PageLayout";

export default function PrivacyPolicyPage() {
  return (
    <PageLayout title="Privacy Policy">
      <div className="space-y-8 text-sm leading-7 text-slate-300">
        {/* Introduction */}
        <p>
          At <strong className="text-white">OurHub Services</strong>, we
          respect your privacy and are committed to protecting your personal
          information. This Privacy Policy explains what information we
          collect, how we use it, how we protect it, and the choices available
          to you when you use our website and services.
        </p>

        {/* Information We Collect */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Information We Collect
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              Name, mobile number, and email address provided during account
              creation, booking, or communication.
            </li>
            <li>
              Service booking details, selected services, preferences,
              appointment information, and other information required to
              fulfill your booking.
            </li>
            <li>
              Address, city, landmark, or other location details when required
              to provide an offline or location-based service.
            </li>
            <li>
              Payment-related information necessary to identify and process
              transactions, such as payment status, transaction reference,
              order details, and payment method.
            </li>
            <li>
              Device, browser, IP address, and basic technical information
              that may be collected to maintain website security, improve
              performance, and troubleshoot technical issues.
            </li>
          </ul>
        </div>

        {/* Payment Information */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Payment Information
          </h2>

          <p>
            Payments for services may be processed through authorized
            third-party payment gateways or payment service providers. When
            you make a payment, sensitive payment credentials such as your
            full card number, card security code, UPI PIN, OTP, or banking
            credentials are not stored by OurHub Services unless explicitly
            required and permitted by applicable law.
          </p>

          <p className="mt-3">
            Payment processing may be handled directly by the selected payment
            gateway. We may receive limited transaction information such as
            payment status, transaction ID, order ID, payment method, and
            refund status for the purpose of confirming and managing your
            booking.
          </p>

          <p className="mt-3">
            Payment transactions are subject to the terms and privacy policies
            of the applicable payment service provider.
          </p>
        </div>

        {/* How We Use Information */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            How We Use Your Information
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>To create and manage your account.</li>
            <li>To process and manage service bookings.</li>
            <li>
              To coordinate with service professionals when necessary to
              fulfill your booking.
            </li>
            <li>To process and verify payments and refunds.</li>
            <li>
              To send booking confirmations, updates, and service-related
              communications.
            </li>
            <li>To provide customer support and resolve service issues.</li>
            <li>
              To improve our website, services, security, and overall customer
              experience.
            </li>
            <li>
              To detect, prevent, and investigate fraudulent, unauthorized, or
              unlawful activities.
            </li>
            <li>
              To comply with applicable legal, regulatory, and governmental
              requirements.
            </li>
          </ul>
        </div>

        {/* Sharing of Information */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Sharing of Information
          </h2>

          <p>
            We do not sell or rent your personal information to third parties.
            We may share limited information when necessary to provide the
            requested service or operate our platform.
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              With verified or assigned service professionals when required to
              fulfill your booking.
            </li>
            <li>
              With payment gateways or service providers for processing and
              verifying transactions.
            </li>
            <li>
              With technology, hosting, security, or support providers that
              help us operate and maintain our platform.
            </li>
            <li>
              When required by applicable law, court order, government
              authority, or legal process.
            </li>
          </ul>
        </div>

        {/* Data Security */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Data Security
          </h2>

          <p>
            We use reasonable technical and organizational security measures
            designed to protect your personal information from unauthorized
            access, misuse, alteration, loss, or disclosure.
          </p>

          <p className="mt-3">
            However, no internet-based service can guarantee absolute security.
            We continuously work to improve the security and reliability of
            our platform.
          </p>
        </div>

        {/* Data Retention */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Data Retention
          </h2>

          <p>
            We retain personal and booking information only for as long as
            reasonably necessary to provide our services, maintain business
            records, resolve disputes, prevent fraud, and comply with
            applicable legal and regulatory requirements.
          </p>
        </div>

        {/* Cookies */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Cookies and Similar Technologies
          </h2>

          <p>
            Our website may use cookies and similar technologies to maintain
            functionality, remember preferences, understand website usage,
            improve performance, and enhance your browsing experience.
          </p>

          <p className="mt-3">
            You may be able to manage or disable cookies through your browser
            settings. Some website features may not function properly if
            certain cookies are disabled.
          </p>
        </div>

        {/* User Rights */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Your Privacy Choices
          </h2>

          <p>
            Depending on applicable law, you may request access to, correction
            of, or deletion of certain personal information associated with
            your account. You may also contact us if you have questions about
            how your information is being used.
          </p>
        </div>

        {/* Third Party Services */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Third-Party Services and Links
          </h2>

          <p>
            Our website may contain links or integrations to third-party
            services, including payment and communication providers. We are
            not responsible for the privacy practices of third-party websites
            or services. We recommend reviewing their respective privacy
            policies before providing information.
          </p>
        </div>

        {/* Policy Updates */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Policy Updates
          </h2>

          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our services, technology, legal requirements, or
            business practices. Updated versions will be published on this
            page with the revised effective date where appropriate.
          </p>
        </div>

        {/* Contact */}
        <div className="rounded-xl border border-yellow-500/20 bg-slate-800 p-5">
          <h2 className="mb-2 text-lg font-semibold text-yellow-400">
            Contact Us
          </h2>

          <p>
            If you have questions, concerns, or requests regarding this
            Privacy Policy or your personal information, please contact us at{" "}
            <strong className="text-white">
              support@ourhubservices.com
            </strong>
            .
          </p>
        </div>

        {/* Last Updated */}
        <p className="border-t border-slate-700 pt-5 text-xs text-slate-500">
          Last Updated: August 2026
        </p>
      </div>
    </PageLayout>
  );
}

