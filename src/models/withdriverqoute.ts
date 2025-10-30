import mongoose, { Schema, Document, models } from "mongoose";

export interface IWithDriverQuote extends Document {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  pickupDate: Date;
  pickupTime: string;
  pickupAddress: string;
  dropoffAddress: string;
  dropoffDate: Date;
  dropoffTime: string;
  occasion?: string;
  message?: string;
  createdAt?: Date;
}

const WithDriverQuoteSchema = new Schema<IWithDriverQuote>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    vehicle: { type: String, required: true },
    pickupDate: { type: Date, required: true },
    pickupTime: { type: String, required: true },
    pickupAddress: { type: String, required: true },
    dropoffAddress: { type: String, required: true },
    dropoffDate: { type: Date, required: true },
    dropoffTime: { type: String, required: true },
    occasion: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

const WithDriverQuote =
  models.WithDriverQuote ||
  mongoose.model<IWithDriverQuote>("WithDriverQuote", WithDriverQuoteSchema);

export default WithDriverQuote;
