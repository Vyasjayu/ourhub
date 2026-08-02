"use client";

import {
  User2,
  BriefcaseBusiness,
  Landmark,
  BadgeCheck,
} from "lucide-react";

type FormType = {
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

  profilePhoto: File | null;
  aadhaar: File | null;
  pan: File | null;

  accountHolder: string;
  accountNumber: string;
  ifsc: string;
  bankName: string;
  upi: string;
};

interface ReviewStepProps {
  form: FormType;
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

      {/* Basic */}

      <Section
        icon={<User2 size={20} />}
        title="Basic Information"
      >

        <Item label="Name" value={form.fullName} />
        <Item label="Email" value={form.email} />
        <Item label="Mobile" value={form.mobile} />
        <Item label="City" value={form.city} />
        <Item label="State" value={form.state} />

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
          label="Area"
          value={form.serviceArea}
        />

        <Item
          label="Specialization"
          value={form.specialization}
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
          label="Holder"
          value={form.accountHolder}
        />

        <Item
          label="Account"
          value={form.accountNumber}
        />

        <Item
          label="IFSC"
          value={form.ifsc}
        />

        <Item
          label="Bank"
          value={form.bankName}
        />

        <Item
          label="UPI"
          value={form.upi}
        />

      </Section>

      {/* Terms */}

      <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4">

        <p className="text-sm text-yellow-300">
          By clicking Submit, you agree that all
          information provided is correct. OurHub
          verification team may review your profile
          before activating your account.
        </p>

      </div>

    </div>
  );
}

function Section({
  title,
  icon,
  children,
}: any) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">

      <div className="mb-4 flex items-center gap-2 font-semibold">

        {icon}

        {title}

      </div>

      <div className="space-y-3">
        {children}
      </div>

    </div>
  );
}

function Item({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between text-sm">

      <span className="text-gray-400">
        {label}
      </span>

      <span className="font-medium text-white">
        {value || "-"}
      </span>

    </div>
  );
}

function Status({
  label,
  uploaded,
}: {
  label: string;
  uploaded: boolean;
}) {
  return (
    <div className="flex justify-between text-sm">

      <span>{label}</span>

      <span
        className={
          uploaded
            ? "text-green-400"
            : "text-red-400"
        }
      >
        {uploaded ? "Uploaded" : "Missing"}
      </span>

    </div>
  );
}