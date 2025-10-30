import mongoose, { Schema, models } from "mongoose";

const BookingSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    vehicle: {
      type: String,
      enum: [
        "mercedes-e-class",
        "mercedes-s-class",
        "mercedes-v-class",
        "rolls-royce-chullain",
        "rolls-royce-phantom",
        "rolls-royce-mybech",
        "range-rover",
      ],
      required: true,
    },
    date: { type: String, required: true },
    pickUp: { type: String, required: true },
    destination: { type: String },
    otherInfo: { type: String },
  },
  { timestamps: true }
);

const Booking = models.Booking || mongoose.model("Booking", BookingSchema);
export default Booking;
