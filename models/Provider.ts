import mongoose, { Schema, model, models } from "mongoose";

const ProviderSchema = new Schema(
  {
    // Account Details
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    // Basic Details
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      default: "",
      trim: true,
      lowercase: true,
    },

    category: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      default: "",
    },

    dob: {
      type: String,
      default: "",
    },

    city: {
      type: String,
      default: "",
    },

    state: {
      type: String,
      default: "",
    },

    // Professional Details
    businessName: {
      type: String,
      default: "",
    },

    experience: {
      type: String,
      default: "",
    },

    languages: {
      type: String,
      default: "",
    },

    serviceArea: {
      type: String,
      default: "",
    },

    price: {
      type: String,
      default: "",
    },

    specialization: {
      type: String,
      default: "",
    },

    about: {
      type: String,
      default: "",
    },

    // Documents
    profilePhoto: {
      type: String,
      default: "",
    },

    aadhaar: {
      type: String,
      default: "",
    },

    pan: {
      type: String,
      default: "",
    },

    // Bank Details
    accountHolder: {
      type: String,
      default: "",
    },

    accountNumber: {
      type: String,
      default: "",
    },

    ifsc: {
      type: String,
      default: "",
    },

    bankName: {
      type: String,
      default: "",
    },

    upi: {
      type: String,
      default: "",
    },

    // Status
    isVerified: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Provider || model("Provider", ProviderSchema);