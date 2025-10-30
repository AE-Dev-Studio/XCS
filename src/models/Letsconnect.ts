import mongoose from "mongoose";

const LetsConnectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  details: {
    type: String,
    default: "",
    trim: true,
  },
}, { timestamps: true });

export default mongoose.models.LetsConnect || mongoose.model("LetsConnect", LetsConnectSchema);
