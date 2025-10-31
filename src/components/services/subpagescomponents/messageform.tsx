"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  date: string;
  pickUp: string;
  destination: string;
  otherInfo: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function MessageForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    date: "",
    pickUp: "",
    destination: "",
    otherInfo: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ added loading state

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-+$$$$]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.vehicle) {
      newErrors.vehicle = "Please select a vehicle";
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    if (!formData.pickUp.trim()) {
      newErrors.pickUp = "Pick-up location is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      vehicle: value,
    }));
    if (errors.vehicle) {
      setErrors((prev) => ({
        ...prev,
        vehicle: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return; // ✅ prevent multiple submissions
    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send booking");

      const result = await res.json();
      console.log("✅ Booking saved:", result);

      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          vehicle: "",
          date: "",
          pickUp: "",
          destination: "",
          otherInfo: "",
        });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // ✅ reset loading
    }
  };

  return (
    <div className="rounded-sm bg-white backdrop-blur-sm pb-7 px-8 shadow-2xl">
      {submitted ? (
        <div className="space-y-4 text-center py-8">
          <div className="text-4xl">✓</div>
          <h3 className="text-xl font-semibold text-gray-900">
            Message Recieved
          </h3>
          <p className="text-gray-600">
            Thank you! We'll contact you shortly to confirm your booking.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-row justify-center gap-2">
            <p className="text-3xl font-extrabold font-sans text-black mt-5 uppercase tracking-wide text-center">
              Send us a Message
            </p>
          </div>

          {/* Name */}
          <div className="flex flex-row gap-2">
            <div className="space-y-1 w-full">
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={loading} // ✅ disable while loading
                className={`${
                  errors.name ? "border-red-500 focus-visible:ring-red-500" : ""
                }`}
              />
              {errors.name && (
                <p id="name-error" className="text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2 w-full">
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={loading}
                className={`${
                  errors.phone
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
              />
              {errors.phone && (
                <p id="phone-error" className="text-xs text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Email + Vehicle */}
          <div className="flex flex-row gap-2">
            <div className="space-y-1 w-full">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={loading}
                className={`${
                  errors.email
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2 w-full">
              <Select
                value={formData.vehicle}
                onValueChange={handleSelectChange}
                disabled={loading}
              >
                <SelectTrigger
                  id="vehicle"
                  className={`${
                    errors.vehicle
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                >
                  <SelectValue placeholder="Select a vehicle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mercedes-e-class">
                    Mercedes E Class
                  </SelectItem>
                  <SelectItem value="mercedes-s-class">
                    Mercedes S Class
                  </SelectItem>
                  <SelectItem value="mercedes-v-class">
                    Mercedes V Class
                  </SelectItem>
                  <SelectItem value="rolls-royce-chullain">
                    Rolls Royce Chullain
                  </SelectItem>
                  <SelectItem value="rolls-royce-phantom">
                    Rolls Royce Phantom
                  </SelectItem>
                  <SelectItem value="rolls-royce-mybech">
                    Rolls Royce Mybech
                  </SelectItem>
                  <SelectItem value="range-rover">Range Rover</SelectItem>
                </SelectContent>
              </Select>
              {errors.vehicle && (
                <p id="vehicle-error" className="text-xs text-red-500">
                  {errors.vehicle}
                </p>
              )}
            </div>
          </div>

          {/* Date */}
          <div className="space-y-2 w-full">
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
              disabled={loading}
              className={`${
                errors.date ? "border-red-500 focus-visible:ring-red-500" : ""
              }`}
            />
            {errors.date && (
              <p id="date-error" className="text-xs text-red-500">
                {errors.date}
              </p>
            )}
          </div>

          {/* Pick Up + Destination */}
          <div className="flex flex-row gap-2">
            <div className="space-y-2 w-full">
              <Input
                id="pickUp"
                name="pickUp"
                type="text"
                placeholder="Pick-up"
                value={formData.pickUp}
                onChange={handleInputChange}
                disabled={loading}
                className={`${
                  errors.pickUp
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
              />
              {errors.pickUp && (
                <p id="pickUp-error" className="text-xs text-red-500">
                  {errors.pickUp}
                </p>
              )}
            </div>

            <div className="space-y-2 w-full">
              <Input
                id="destination"
                name="destination"
                type="text"
                placeholder="Destination"
                value={formData.destination}
                onChange={handleInputChange}
                disabled={loading}
              />
            </div>
          </div>

          {/* Other Info */}
          <div className="space-y-2 w-full">
            <Textarea
              id="otherInfo"
              name="otherInfo"
              placeholder="Any additional details (optional)"
              value={formData.otherInfo}
              onChange={handleInputChange}
              disabled={loading}
              className="resize-none"
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className={`w-full pb-4 bg-[#a89447] text-white cursor-pointer rounded-none font-semibold py-6 text-base transition-colors duration-200 ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#a89447]"
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </form>
      )}
    </div>
  );
}
