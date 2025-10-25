"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CustomButton from "../custombutton";

interface FormData {
    name: string;
    phone: string;
    email: string;
    address: string
    message: string
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

        if (!formData.address.trim()) {
            newErrors.address = "Address is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
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
                    address: "",
                    message: ""
                });
                setSubmitted(false);
            }, 3000);
        }
    };

    return (
        <div className="rounded-none bg-gray-100 ">
            {submitted ? (
                <div className="space-y-4 text-center py-8">
                    <div className="text-4xl">✓</div>
                    <h3 className="text-xl font-semibold text-gray-900">
                        Message Sent
                    </h3>
                    <p className="text-gray-600">
                        Thank you! We'll contact you shortly.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-3">

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
                                className={`bg-white border-none rounded-sm ${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""
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
                        <div className="space-y-2 w-full">
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={`  bg-white border-none rounded-sm ${errors.phone
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
                        <div className="space-y-1 w-full">
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`  bg-white border-none rounded-sm  ${errors.email
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
                        <div className="space-y-1 w-full">
                            <Input
                                id="address"
                                name="address"
                                type="text"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className={` bg-white border-none rounded-sm ${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""
                                    }`}
                                aria-invalid={!!errors.address}
                                aria-describedby={errors.address ? "address-error" : undefined}
                            />
                            {errors.address && (
                                <p id="name-error" className="text-xs text-red-500">
                                    {errors.address}
                                </p>
                            )}
                        </div>

                    </div>



                    {/* Message */}
                    <div className="space-y-2 w-full">
     
                        <Textarea
                            id="otherInfo"
                            name="otherInfo"
                            placeholder="Any additional details (optional)"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="resize-none  bg-white border-none rounded-sm "
                            rows={3}
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full  bg-black text-white hover:none rounded-full  text-sm transition-colors duration-200"
                    >
                        Submit
                    </Button>

            =
                </form>
            )}
        </div>
    );
}
