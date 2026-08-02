"use client";

import React from "react";
import { BriefcaseBusiness } from "lucide-react";

type FormType = {
  businessName: string;
  experience: string;
  languages: string;
  serviceArea: string;
  price: string;
  specialization: string;
  about: string;
};

interface ProfessionalStepProps {
  category: string;
  form: FormType;
  updateField: (
    key: keyof FormType,
    value: string
  ) => void;
}

export default function ProfessionalStep({
  category,
  form,
  updateField,
}: ProfessionalStepProps) {
  return (
    <div className="mt-8">

      {/* Icon */}

      <div className="flex justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-black">
          <BriefcaseBusiness size={38} />
        </div>
      </div>

      {/* Heading */}

      <div className="mt-5 text-center">
        <h2 className="text-xl font-bold">
          Professional Details
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Tell us about your services
        </p>
      </div>

      {/* Form */}

      <div className="mt-8 space-y-5">

        <Input
          label="Business / Profile Name *"
          placeholder="Enter Business Name"
          value={form.businessName}
          onChange={(e) =>
            updateField("businessName", e.target.value)
          }
        />

        <Input
          label="Experience *"
          placeholder="5 Years"
          value={form.experience}
          onChange={(e) =>
            updateField("experience", e.target.value)
          }
        />

        <Input
          label="Languages"
          placeholder="Hindi, English"
          value={form.languages}
          onChange={(e) =>
            updateField("languages", e.target.value)
          }
        />

        <Input
          label="Service Area"
          placeholder="Indore, Ujjain"
          value={form.serviceArea}
          onChange={(e) =>
            updateField("serviceArea", e.target.value)
          }
        />

        <Input
          label="Starting Price (₹)"
          placeholder="499"
          value={form.price}
          onChange={(e) =>
            updateField("price", e.target.value)
          }
        />

        {/* Category Wise */}

        {category === "astrology" && (

          <div>

            <label className="mb-2 block text-sm">
              Specialization
            </label>

            <select
              value={form.specialization}
              onChange={(e) =>
                updateField(
                  "specialization",
                  e.target.value
                )
              }
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:border-yellow-400"
            >
              <option value="">Select</option>
              <option>Vedic Astrology</option>
              <option>Kundli</option>
              <option>Tarot Reading</option>
              <option>Numerology</option>
              <option>Palmistry</option>
              <option>Vastu</option>
            </select>

          </div>

        )}

        {category === "home-services" && (

          <div>

            <label className="mb-2 block text-sm">
              Service Type
            </label>

            <select
              value={form.specialization}
              onChange={(e) =>
                updateField(
                  "specialization",
                  e.target.value
                )
              }
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:border-yellow-400"
            >
              <option value="">Select</option>
              <option>Electrician</option>
              <option>Plumber</option>
              <option>Carpenter</option>
              <option>Painter</option>
              <option>Cleaning</option>
            </select>

          </div>

        )}

        <div>

          <label className="mb-2 block text-sm">
            About Yourself
          </label>

          <textarea
            rows={5}
            value={form.about}
            onChange={(e) =>
              updateField("about", e.target.value)
            }
            placeholder="Describe your experience..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-yellow-400"
          />

        </div>

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