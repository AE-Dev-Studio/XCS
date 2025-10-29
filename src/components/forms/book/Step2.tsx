"use client";

import { useState } from "react";

type Vehicle = {
  id: string;
  name: string;
  passengers: number;
  suitcases: number;
  handLuggage: number;
  price: string;
  image: string;
};

const vehicles: Vehicle[] = [
  {
    id: "business",
    name: "Business Class",
    passengers: 3,
    suitcases: 2,
    handLuggage: 2,
    price: "343.00",
    image: "/assets/Form/business-class.png", // <-- real file or remote URL
  },
  {
    id: "first",
    name: "First Class",
    passengers: 3,
    suitcases: 2,
    handLuggage: 2,
    price: "535.00",
    image: "/assets/Form/first-class.png",
  },
  {
    id: "vclass",
    name: "V Class",
    passengers: 6,
    suitcases: 6,
    handLuggage: 6,
    price: "496.00",
    image: "/assets/Form/v-class.png",
  },
  {
    id: "coach",
    name: "Executive Coach",
    passengers: 16,
    suitcases: 10,
    handLuggage: 10,
    price: "Price on Application",
    image: "/assets/Form/coach.jpg",
  },
];

export default function Step2() {
  const [requestType, setRequestType] = useState<"booking" | "quotation">(
    "booking"
  );
  const [paymentType, setPaymentType] = useState<string>("");
  const [selectedVehicle, setSelectedVehicle] = useState<string>("business");

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 bg-black text-white">
      {/* Request Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2">
            Request type
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="requestType"
                value="booking"
                checked={requestType === "booking"}
                onChange={(e) => setRequestType(e.target.value as any)}
                className="h-4 w-4 appearance-none rounded-full
                border-2 border-[#a89447]
                checked:bg-[#a89447] checked:scale-75
                transition-transform
                focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              />
              Booking
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="requestType"
                value="quotation"
                checked={requestType === "quotation"}
                onChange={(e) => setRequestType(e.target.value as any)}
                className="h-4 w-4 appearance-none rounded-full
                border-2 border-[#a89447]
                checked:bg-[#a89447] checked:scale-75
                transition-transform
                focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              />
              Quotation
            </label>
          </div>
        </div>

        {/* Payment Type (hidden for quotation) */}
        {requestType === "booking" && (
          <div>
            <label className="block text-sm font-semibold mb-2">
              Payment type
            </label>
            <select
              className="w-full rounded-md py-2 px-1 bg-black border-gray-300 shadow-sm"
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
            >
              <option value="" disabled>
                Select a payment type
              </option>
              <option value="cash">Cash</option>
              <option value="account">Account</option>
              <option value="debit">Debit Card</option>
              <option value="credit">Credit Card</option>
              <option value="invoice">Invoice</option>
              <option value="bank">Bank Transfer</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
        )}
      </div>

      {/* Type of Vehicle title */}
      <div>
        <h3 className="text-lg font-semibold">Type of vehicle</h3>
        <p className="text-sm text-white">Please select a vehicle</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vehicles.map((v) => (
          <label
            key={v.id}
            className={`relative rounded-xl border-2 p-4 cursor-pointer transition
        ${
          selectedVehicle === v.id
            ? "border-[#a89447] ring-2 ring-[#a89447]/20"
            : "border-gray-500 hover:border-gray-300"
        }`}
          >
            {/* invisible radio */}
            <input
              type="radio"
              name="vehicle"
              value={v.id}
              checked={selectedVehicle === v.id}
              onChange={() => setSelectedVehicle(v.id)}
              className="absolute inset-0 w-full h-full opacity-0"
            />

            {/* ---------- IMAGE ---------- */}
            <img
              src={v.image}
              alt={v.name}
              className="w-full h-32 object-cover rounded-lg"
            />

            {/* ---------- EVERYTHING UNDER THE IMAGE ---------- */}
            <div className="mt-3 space-y-2">
              <div className="font-semibold text-white">{v.name}</div>

              <ul className="text-sm text-white space-y-1">
                <li>Max passengers: {v.passengers}</li>
                <li>Max suitcases: {v.suitcases}</li>
                <li>Max hand luggage: {v.handLuggage}</li>
              </ul>

              <div className="flex items-center justify-between pt-2">
                <span className="text-sm font-bold text-[#a89447]">
                  £{v.price}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedVehicle(v.id)}
                  className="rounded-md bg-[#a89447] px-4 py-2 text-sm text-white hover:bg-[#a89447]/90"
                >
                  Proceed
                </button>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
