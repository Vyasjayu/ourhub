import mongoose, { Schema, model, models } from "mongoose";

const AdminSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      default: "superadmin",
    },

    fullName: {
      type: String,
      default: "Super Admin",
    },
  },
  {
    timestamps: true,
  }
);

export default models.Admin || model("Admin", AdminSchema);