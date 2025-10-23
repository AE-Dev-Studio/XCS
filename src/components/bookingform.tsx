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
import Image from "next/image";

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

export default function BookingForm() {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", JSON.stringify(formData, null, 2));
      setSubmitted(true);
      // Reset form after 3 seconds
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
    }
  };

  return (
    <div className="rounded-sm bg-white backdrop-blur-sm pb-7 px-8  shadow-2xl">
      {submitted ? (
        <div className="space-y-4 text-center py-8">
          <div className="text-4xl">✓</div>
          <h3 className="text-xl font-semibold text-gray-900">
            Booking Request Received
          </h3>
          <p className="text-gray-600">
            Thank you! We'll contact you shortly to confirm your booking.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-row gap-2">
            <Image
              src="/assets/logo.jpg"
              alt="App Logo"
              className="w-20 h-20 text-center"
              height={80}
              width={80}
            />
            <p className="text-3xl font-bold font-sans text-black mt-5 uppercase tracking-wide  text-center ">
              Booking Details
            </p>
          </div>

          {/* Name */}
          <div className="flex flex-row gap-2">
            <div className="space-y-1">
              {/* <Label htmlFor="name" className="text-sm font-medium text-gray-900">
              Name <span className="text-red-500">*</span>
            </Label> */}
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className={`${
                  errors.name ? "border-red-500 focus-visible:ring-red-500" : ""
                }`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              {/* <Label htmlFor="phone" className="text-sm font-medium text-gray-900">
              Phone <span className="text-red-500">*</span>
            </Label> */}
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`${
                  errors.phone
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="text-xs text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-row gap-2">
            <div className="">
              {/* <Label htmlFor="email" className="text-sm font-medium text-gray-900">
              Email <span className="text-red-500">*</span>
            </Label> */}
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className={`${
                  errors.email
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Vehicle Select */}
            <div className="">
              {/* <Label htmlFor="vehicle" className="text-sm font-medium text-gray-900">
              Vehicle Requested <span className="text-red-500">*</span>
            </Label> */}
              <Select
                value={formData.vehicle}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger
                  id="vehicle"
                  className={`${
                    errors.vehicle
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                  aria-invalid={!!errors.vehicle}
                  aria-describedby={
                    errors.vehicle ? "vehicle-error" : undefined
                  }
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
          <div className="space-y-2">
            {/* <Label htmlFor="date" className="text-sm font-medium text-gray-900">
              Date <span className="text-red-500">*</span>
            </Label> */}
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
              className={`${
                errors.date ? "border-red-500 focus-visible:ring-red-500" : ""
              }`}
              aria-invalid={!!errors.date}
              aria-describedby={errors.date ? "date-error" : undefined}
            />
            {errors.date && (
              <p id="date-error" className="text-xs text-red-500">
                {errors.date}
              </p>
            )}
          </div>

          {/* Pick Up */}
          <div className="flex flex-row gap-2">
            <div className="space-y-2">
              {/* <Label htmlFor="pickUp" className="text-sm font-medium text-gray-900">
              Pick Up <span className="text-red-500">*</span>
            </Label> */}
              <Input
                id="pickUp"
                name="pickUp"
                type="text"
                placeholder="Pick-up"
                value={formData.pickUp}
                onChange={handleInputChange}
                className={`${
                  errors.pickUp
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
                aria-invalid={!!errors.pickUp}
                aria-describedby={errors.pickUp ? "pickUp-error" : undefined}
              />
              {errors.pickUp && (
                <p id="pickUp-error" className="text-xs text-red-500">
                  {errors.pickUp}
                </p>
              )}
            </div>

            {/* Destination */}
            <div className="space-y-2">
              {/* <Label htmlFor="destination" className="text-sm font-medium text-gray-900">
              Destination
            </Label> */}
              <Input
                id="destination"
                name="destination"
                type="text"
                placeholder="Destination"
                value={formData.destination}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* Other Information */}
          <div className="space-y-2">
            {/* <Label htmlFor="otherInfo" className="text-sm font-medium text-gray-900">
              Other Information
            </Label> */}
            <Textarea
              id="otherInfo"
              name="otherInfo"
              placeholder="Any additional details (optional)"
              value={formData.otherInfo}
              onChange={handleInputChange}
              className="resize-none"
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full pb-4 bg-[#a89447] text-white hover:none hover:bg-[#a89447] rounded-none font-semibold py-6 text-base transition-colors duration-200"
          >
            Send
          </Button>
        </form>
      )}
    </div>
  );
}
