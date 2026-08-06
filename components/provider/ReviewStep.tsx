"use client";

import {
  User2,
  BriefcaseBusiness,
  Landmark,
  BadgeCheck,
} from "lucide-react";

type FormType = {
  // Basic
  fullName: string;
  displayName: string;
  email: string;
  mobile: string;
  city: string;
  state: string;

  // Professional
  businessName: string;
  experience: string;
  languages: string;
  serviceArea: string;
  specialization: string;
  about: string;
  price: string;

  // Documents
  // Documents
profilePhoto: string | File | null;
aadhaar: string | File | null;
pan: string | File | null;

  // Bank
  accountHolder: string;
  accountNumber: string;
  ifsc: string;
  bankName: string;
  upi: string;
};

interface ReviewStepProps {
  form: {
    displayName: string;
    fullName: string;
    email: string;
    mobile: string;
    city: string;
    state: string;

    businessName: string;
    experience: string;
    languages: string;
    serviceArea: string;
    specialization: string;
    about: string;
    price: string;

    profilePhoto: string | File | null;
    aadhaar: string | File | null;
    pan: string | File | null;

    accountHolder: string;
    accountNumber: string;
    ifsc: string;
    bankName: string;
    upi: string;
  };
}

export default function ReviewStep({
  form,
}: ReviewStepProps) {
  return (
    <div className="mt-8 space-y-6">

      {/* Heading */}

      <div className="text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-black">
          <BadgeCheck size={38} />
        </div>

        <h2 className="mt-5 text-2xl font-bold">
          Review Your Profile
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Please verify all details before submitting.
        </p>

      </div>

      {/* Public Profile Card */}

      <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-5">

        <h3 className="text-lg font-semibold text-green-400">
          Public Profile
        </h3>

        <p className="mt-2 text-sm text-gray-300">
          Customers will only see these details:
        </p>

        <div className="mt-4 space-y-2 text-sm">

          <div className="flex justify-between">
            <span className="text-gray-400">
              Public Name
            </span>

            <span className="font-medium">
              {form.displayName || "-"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">
              Experience
            </span>

            <span>
              {form.experience || "-"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">
              Languages
            </span>

            <span>
              {form.languages || "-"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">
              Specialization
            </span>

            <span>
              {form.specialization || "-"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">
              Starting Price
            </span>

            <span>
              ₹{form.price || "-"}
            </span>
          </div>

        </div>

      </div>

      {/* Basic */}

      <Section
        icon={<User2 size={20} />}
        title="Basic Information"
      >

        <Item
          label="Public Name"
          value={form.displayName}
        />

        <Item
          label="Real Name (Private)"
          value={form.fullName}
        />

        <Item
          label="Email"
          value={form.email}
        />

        <Item
          label="Mobile"
          value={maskMobile(form.mobile)}
        />

        <Item
          label="City"
          value={form.city}
        />

        <Item
          label="State"
          value={form.state}
        />

      </Section>

      {/* Professional */}

      <Section
        icon={<BriefcaseBusiness size={20} />}
        title="Professional Details"
      >

        <Item
          label="Business"
          value={form.businessName}
        />

        <Item
          label="Experience"
          value={form.experience}
        />

        <Item
          label="Languages"
          value={form.languages}
        />

        <Item
          label="Service Area"
          value={form.serviceArea}
        />

        <Item
          label="Specialization"
          value={form.specialization}
        />

        <Item
          label="About"
          value={form.about}
        />

        <Item
          label="Starting Price"
          value={`₹${form.price}`}
        />

      </Section>

      {/* Documents */}

      <Section
        icon={<BadgeCheck size={20} />}
        title="Documents"
      >

        <Status
          label="Profile Photo"
          uploaded={!!form.profilePhoto}
        />

        <Status
          label="Aadhaar"
          uploaded={!!form.aadhaar}
        />

        <Status
          label="PAN"
          uploaded={!!form.pan}
        />

      </Section>
      {/* Bank */}

      <Section
        icon={<Landmark size={20} />}
        title="Bank Details"
      >
        <Item
          label="Account Holder"
          value={form.accountHolder}
        />

        <Item
          label="Account Number"
          value={maskAccount(form.accountNumber)}
        />

        <Item
          label="IFSC"
          value={form.ifsc}
        />

        <Item
          label="Bank Name"
          value={form.bankName}
        />

        <Item
          label="UPI"
          value={maskUpi(form.upi)}
        />
      </Section>

      {/* Terms */}

      <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4">

        <p className="text-sm text-yellow-300 leading-6">
          By clicking <strong>Submit</strong>, you confirm that all
          information provided is correct. Your real name, mobile,
          email, Aadhaar, PAN and bank details will remain private
          and visible only to you and the Admin. Customers will only
          see your public profile information.
        </p>

      </div>

    </div>
  );
}

/* ---------- Section ---------- */

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">

      <div className="mb-4 flex items-center gap-2 font-semibold text-white">
        {icon}
        {title}
      </div>

      <div className="space-y-3">
        {children}
      </div>

    </div>
  );
}

/* ---------- Item ---------- */

function Item({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-start justify-between gap-4">

      <span className="text-sm text-gray-400">
        {label}
      </span>

      <span className="max-w-[60%] break-words text-right text-sm font-medium text-white">
        {value || "-"}
      </span>

    </div>
  );
}

/* ---------- Status ---------- */

function Status({
  label,
  uploaded,
}: {
  label: string;
  uploaded: boolean;
}) {
  return (
    <div className="flex items-center justify-between">

      <span className="text-sm text-gray-300">
        {label}
      </span>

      <span
        className={`text-sm font-semibold ${uploaded
            ? "text-green-400"
            : "text-red-400"
          }`}
      >
        {uploaded ? "Uploaded ✓" : "Missing ✕"}
      </span>

    </div>
  );
}

/* ---------- Helpers ---------- */

function maskMobile(mobile: string) {
  if (!mobile) return "-";

  if (mobile.length < 10) return mobile;

  return `${mobile.slice(0, 5)}*****`;
}

function maskAccount(account: string) {
  if (!account) return "-";

  if (account.length <= 4) return account;

  return `${"*".repeat(account.length - 4)}${account.slice(-4)}`;
}

function maskUpi(upi: string) {
  if (!upi) return "-";

  const index = upi.indexOf("@");

  if (index === -1) return upi;

  return `${upi.slice(0, 3)}****${upi.slice(index)}`;
}