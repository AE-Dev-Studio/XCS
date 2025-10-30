
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner"; // ✅ import toast

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function LetsConnectForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-+]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const res = await fetch("/api/letsconnect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          details: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Something went wrong");
        return;
      }

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Server error — please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-none bg-gray-100">
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name + Phone */}
        <div className="flex flex-row gap-2">
          <div className="space-y-1 w-full">
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className={`bg-white border-none rounded-sm ${
                errors.name ? "border-red-500 focus-visible:ring-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="space-y-1 w-full">
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`bg-white border-none rounded-sm ${
                errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Email + Address */}
        <div className="flex flex-row gap-2">
          <div className="space-y-1 w-full">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className={`bg-white border-none rounded-sm ${
                errors.email ? "border-red-500 focus-visible:ring-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="space-y-1 w-full">
            <Input
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className={`bg-white border-none rounded-sm ${
                errors.address ? "border-red-500 focus-visible:ring-red-500" : ""
              }`}
            />
            {errors.address && (
              <p className="text-xs text-red-500">{errors.address}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2 w-full">
          <Textarea
            id="message"
            name="message"
            placeholder="Any additional details (optional)"
            value={formData.message}
            onChange={handleInputChange}
            className="resize-none bg-white border-none rounded-sm"
            rows={3}
          />
          {errors.message && (
            <p className="text-xs text-red-500">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white rounded-full text-sm transition-colors duration-200"
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}
