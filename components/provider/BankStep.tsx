"use client";

import React from "react";
import { Landmark } from "lucide-react";

type FormType = {
  accountHolder: string;
  accountNumber: string;
  ifsc: string;
  bankName: string;
  upi: string;
};

interface BankStepProps {
  form: FormType;
  updateField: (
    key: keyof FormType,
    value: string
  ) => void;
}

export default function BankStep({
  form,
  updateField,
}: BankStepProps) {
  return (
    <div className="mt-8">

      {/* Icon */}

      <div className="flex justify-center">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-black">

          <Landmark size={38} />

        </div>

      </div>

      {/* Heading */}

      <div className="mt-5 text-center">

        <h2 className="text-2xl font-bold">
          Bank Details
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Payments from bookings will be credited here.
        </p>

      </div>

      {/* Form */}

      <div className="mt-8 space-y-5">

        <Input
          label="Account Holder Name *"
          placeholder="Enter account holder name"
          value={form.accountHolder}
          onChange={(e)=>
            updateField("accountHolder",e.target.value)
          }
        />

        <Input
          label="Account Number *"
          placeholder="Enter account number"
          value={form.accountNumber}
          onChange={(e)=>
            updateField("accountNumber",e.target.value)
          }
        />

        <Input
          label="IFSC Code *"
          placeholder="SBIN0001234"
          value={form.ifsc}
          onChange={(e)=>
            updateField("ifsc",e.target.value.toUpperCase())
          }
        />

        <Input
          label="Bank Name"
          placeholder="State Bank of India"
          value={form.bankName}
          onChange={(e)=>
            updateField("bankName",e.target.value)
          }
        />

        <Input
          label="UPI ID (Optional)"
          placeholder="name@upi"
          value={form.upi}
          onChange={(e)=>
            updateField("upi",e.target.value)
          }
        />

      </div>

      {/* Info */}

      <div className="mt-8 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4">

        <p className="text-sm text-yellow-300">

          Payments received from customers will be transferred
          directly to this bank account after successful booking.

        </p>

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