// models/RealBooking.ts
import mongoose, { Schema, Document } from "mongoose";

export type BookingDoc = Document & {
  seq: string;
  service: "airport" | "cruise" | "hourly" | "booking" | "quotation" | "-";
  tripType: "one-way" | "return" | "-";
  pickupAirport: string;
  viaPoints: string[];
  flightType: "arrival" | "departure" | "-";
  flightNumber: string;
  pickupDate?: string; // ISO date string
  pickupTime?: string; // "HH:MM"
  destination?: string;

  name?: string;
  email?: string;
  phone?: string;
  passengers?: number;
  luggage?: number;
  childSeats?: number;
  boosterSeats?: number;
  meetGreet?: boolean;
  notes?: string;

  vehicleClass?: string;
  paymentType?: string;
  amount?: string;
  flightAirport?: string;
  flightAirline?: string;
  flightTime?: string;
  flightFrom?: string;
  flightTerminal?: string;
  meetingPoint?: string;

  bookedBy?: string;
  bookedByEmail?: string;
  bookedByMobile?: string;
  customerName?: string;
  customerRef?: string;
  costCentre?: string;

  status?: "new" | "confirmed" | "cancelled" | "completed" | string;

  createdAt: Date;
  updatedAt: Date;
};

const RealBookingSchema = new Schema<BookingDoc>({
  seq: { type: String, required: true, unique: true, index: true },
  service: { type: String, default: "-" },
  tripType: { type: String, default: "-" },
  pickupAirport: { type: String, default: "" },
  viaPoints: { type: [String], default: [] },
  flightType: { type: String, default: "arrival" },
  flightNumber: { type: String, default: "" },
  pickupDate: { type: String, default: "" },
  pickupTime: { type: String, default: "" },
  destination: { type: String, default: "" },

  name: String,
  email: String,
  phone: String,
  passengers: { type: Number, default: 1 },
  luggage: { type: Number, default: 0 },
  childSeats: { type: Number, default: 0 },
  boosterSeats: { type: Number, default: 0 },
  meetGreet: { type: Boolean, default: true },
  notes: { type: String, default: "" },

  vehicleClass: { type: String, default: "" },
  paymentType: { type: String, default: "" },
  amount: { type: String, default: "0" },
  flightAirport: String,
  flightAirline: String,
  flightTime: String,
  flightFrom: String,
  flightTerminal: String,
  meetingPoint: String,

  bookedBy: String,
  bookedByEmail: String,
  bookedByMobile: String,
  customerName: String,
  customerRef: String,
  costCentre: { type: String, default: "-" },

  status: { type: String, default: "new" },
}, { timestamps: true });

// Add indexes that help queries
RealBookingSchema.index({ pickupDate: 1 });
RealBookingSchema.index({ email: 1 });
RealBookingSchema.index({ phone: 1 });

export default mongoose.models.RealBooking ||
  mongoose.model<BookingDoc>("RealBooking", RealBookingSchema, "realBookings");