import mongoose, { Schema, models } from "mongoose";

const FooterFormSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

const FooterForm = models.Callback || mongoose.model("Callback", FooterFormSchema);
export default FooterForm;
