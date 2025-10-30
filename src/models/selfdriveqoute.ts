import mongoose, { Schema, Document, models } from "mongoose";

export interface ISelfDriveQuote extends Document {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  pickupDate: Date;
  dropoffDate: Date;
  message?: string;
  createdAt?: Date;
}

const SelfDriveQuoteSchema = new Schema<ISelfDriveQuote>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    vehicle: { type: String, required: true },
    pickupDate: { type: Date, required: true },
    dropoffDate: { type: Date, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

const SelfDriveQuote =
  models.SelfDriveQuote ||
  mongoose.model<ISelfDriveQuote>("SelfDriveQuote", SelfDriveQuoteSchema);

export default SelfDriveQuote;
