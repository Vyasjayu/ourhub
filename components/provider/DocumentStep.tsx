"use client";

import React, { useMemo } from "react";
import {
  Upload,
  CheckCircle2,
  X,
  Image,
  FileText,
} from "lucide-react";

type FormType = {
  profilePhoto: File | null;
  aadhaar: File | null;
  pan: File | null;
};

interface DocumentStepProps {
  form: FormType;
  updateField: (
    key: keyof FormType,
    value: File | null
  ) => void;
}

export default function DocumentStep({
  form,
  updateField,
}: DocumentStepProps) {
  return (
    <div className="mt-8">

      {/* Heading */}

      <div className="text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-black">

          <Upload size={36} />

        </div>

        <h2 className="mt-5 text-2xl font-bold">
          Upload Documents
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Upload required documents for verification.
        </p>

      </div>

      {/* Upload Cards */}

      <div className="mt-8 space-y-6">

        <UploadCard
          title="Profile Photo"
          required
          accept="image/*"
          file={form.profilePhoto}
          onChange={(file) =>
            updateField("profilePhoto", file)
          }
        />

        <UploadCard
          title="Aadhaar Card"
          required
          accept=".jpg,.jpeg,.png,.pdf"
          file={form.aadhaar}
          onChange={(file) =>
            updateField("aadhaar", file)
          }
        />

        <UploadCard
          title="PAN Card"
          accept=".jpg,.jpeg,.png,.pdf"
          file={form.pan}
          onChange={(file) =>
            updateField("pan", file)
          }
        />

      </div>

    </div>
  );
}

interface UploadCardProps {
  title: string;
  required?: boolean;
  accept: string;
  file: File | null;
  onChange: (file: File | null) => void;
}

function UploadCard({
  title,
  required,
  accept,
  file,
  onChange,
}: UploadCardProps) {

  const preview = useMemo(() => {

    if (!file) return "";

    if (file.type.startsWith("image/")) {
      return URL.createObjectURL(file);
    }

    return "";

  }, [file]);

  return (

    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">

      <div className="mb-3 flex items-center justify-between">

        <h3 className="font-semibold">

          {title}

          {required && (
            <span className="text-red-400">
              {" "}*
            </span>
          )}

        </h3>

        {file && (
          <CheckCircle2
            size={20}
            className="text-green-400"
          />
        )}

      </div>

      {!file && (

        <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-yellow-400/40 py-10 transition hover:border-yellow-400 hover:bg-yellow-400/5">

          <Upload
            size={34}
            className="text-yellow-400"
          />

          <span className="mt-3 font-medium">
            Tap to Upload
          </span>

          <span className="mt-1 text-xs text-gray-400">
            JPG • PNG • PDF
          </span>

          <input
            hidden
            type="file"
            accept={accept}
            onChange={(e)=>
              onChange(
                e.target.files?.[0] ?? null
              )
            }
          />

        </label>

      )}

      {file && (

        <div className="mt-4 rounded-2xl bg-green-500/10 p-4">

          <div className="flex gap-4">

            {preview ? (

              <img
                src={preview}
                alt=""
                className="h-20 w-20 rounded-xl object-cover"
              />

            ) : (

              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white/10">

                <FileText
                  size={34}
                  className="text-yellow-400"
                />

              </div>

            )}

            <div className="flex-1">

              <p className="font-medium">

                {file.name}

              </p>

              <p className="mt-1 text-xs text-gray-400">

                {(file.size/1024/1024).toFixed(2)} MB

              </p>

              <div className="mt-4 flex gap-2">

                <label className="cursor-pointer rounded-xl bg-yellow-400 px-3 py-2 text-xs font-semibold text-black">

                  Change

                  <input
                    hidden
                    type="file"
                    accept={accept}
                    onChange={(e)=>
                      onChange(
                        e.target.files?.[0] ?? null
                      )
                    }
                  />

                </label>

                <button
                  type="button"
                  onClick={() => onChange(null)}
                  className="rounded-xl bg-red-500 px-3 py-2 text-xs"
                >

                  Remove

                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}