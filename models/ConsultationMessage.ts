import mongoose, {
  Schema,
  Document,
  Model,
} from "mongoose";

// ============================================================
// CONSULTATION MESSAGE INTERFACE
// ============================================================

export interface IConsultationMessage
  extends Document {
  consultationId: string;

  senderId: string;

  senderType:
    | "user"
    | "pandit";

  text: string;

  createdAt: Date;

  updatedAt: Date;
}

// ============================================================
// SCHEMA
// ============================================================

const ConsultationMessageSchema =
  new Schema<IConsultationMessage>(
    {
      // ======================================================
      // CONSULTATION ID
      // ======================================================

      consultationId: {
        type: String,

        required: true,

        trim: true,

        index: true,
      },

      // ======================================================
      // SENDER ID
      // ======================================================

      senderId: {
        type: String,

        required: true,

        trim: true,

        index: true,
      },

      // ======================================================
      // SENDER TYPE
      // ======================================================

      senderType: {
        type: String,

        required: true,

        enum: [
          "user",
          "pandit",
        ],

        index: true,
      },

      // ======================================================
      // MESSAGE TEXT
      // ======================================================

      text: {
        type: String,

        required: true,

        trim: true,

        maxlength: 2000,
      },
    },

    // ========================================================
    // TIMESTAMPS
    // ========================================================

    {
      timestamps: true,
    }
  );

// ============================================================
// COMPOUND INDEX
// ============================================================
//
// Isse kisi consultation ke saare messages fast milenge.
//
// consultationId + createdAt
// ============================================================

ConsultationMessageSchema.index({
  consultationId: 1,

  createdAt: 1,
});

// ============================================================
// MODEL
// ============================================================

const ConsultationMessage: Model<IConsultationMessage> =
  mongoose.models.ConsultationMessage ||
  mongoose.model<IConsultationMessage>(
    "ConsultationMessage",
    ConsultationMessageSchema
  );

// ============================================================
// EXPORT
// ============================================================

export default ConsultationMessage;