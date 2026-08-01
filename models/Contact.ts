import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
    },

    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Contact ||
  mongoose.model<IContact>("Contact", ContactSchema);