import mongoose, { Schema, Document } from "mongoose";

export interface IPandit extends Document {
  name: string;
  phone: string;
  charge: number;
  available: boolean;

  image: string;
  experience: number;
  rating: number;
}

const PanditSchema = new Schema<IPandit>(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    charge: {
      type: Number,
      required: true,
    },

    available: {
      type: Boolean,
      default: true,
    },

    image: {
      type: String,
      default: "/astrologers/rahul.png",
    },

    experience: {
      type: Number,
      default: 10,
    },

    rating: {
      type: Number,
      default: 4.9,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Pandit ||
  mongoose.model<IPandit>("Pandit", PanditSchema);