"use client";

import React from "react";
import { User2 } from "lucide-react";

type FormType = {
  fullName: string;
  email: string;
  mobile: string;
  gender: string;
  dob: string;
  city: string;
  state: string;
};

interface BasicStepProps {
  form: FormType;
  updateField: (
    key: keyof FormType,
    value: string
  ) => void;
}

export default function BasicStep({
  form,
  updateField,
}: BasicStepProps) {
  return (
    <div className="mt-8">

      {/* Avatar */}

      <div className="flex justify-center">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-black">

          <User2 size={38} />

        </div>

      </div>

      {/* Heading */}

      <div className="mt-5 text-center">

        <h2 className="text-xl font-bold text-white">
          Basic Information
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Fill your personal details
        </p>

      </div>

      {/* Form */}

      <div className="mt-8 space-y-5">

        <Input
          label="Full Name *"
          placeholder="Enter full name"
          value={form.fullName}
          onChange={(e) =>
            updateField("fullName", e.target.value)
          }
        />

        <Input
          label="Email"
          placeholder="Enter email"
          value={form.email}
          onChange={(e) =>
            updateField("email", e.target.value)
          }
        />

        <Input
          label="Mobile Number *"
          placeholder="9876543210"
          value={form.mobile}
          onChange={(e) =>
            updateField("mobile", e.target.value)
          }
        />

        <div>

          <label className="mb-2 block text-sm">
            Gender
          </label>

          <select
            value={form.gender}
            onChange={(e) =>
              updateField("gender", e.target.value)
            }
            className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:border-yellow-400"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

        </div>

        <Input
          type="date"
          label="Date of Birth"
          value={form.dob}
          onChange={(e) =>
            updateField("dob", e.target.value)
          }
        />

        <Input
          label="City *"
          placeholder="Enter city"
          value={form.city}
          onChange={(e) =>
            updateField("city", e.target.value)
          }
        />

        <Input
          label="State *"
          placeholder="Enter state"
          value={form.state}
          onChange={(e) =>
            updateField("state", e.target.value)
          }
        />

      </div>

    </div>
  );
}

type InputProps = {
  label: string;
  placeholder?: string;
  value: string;
  type?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: InputProps) {
  return (
    <div>

      <label className="mb-2 block text-sm text-gray-300">
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none transition focus:border-yellow-400"
      />

    </div>
  );
}