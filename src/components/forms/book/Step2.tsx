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
    image: "/images/business-class.jpg", // <-- real file or remote URL
  },
  {
    id: "first",
    name: "First Class",
    passengers: 3,
    suitcases: 2,
    handLuggage: 2,
    price: "535.00",
    image: "/images/first-class.jpg",
  },
  {
    id: "vclass",
    name: "V Class",
    passengers: 6,
    suitcases: 6,
    handLuggage: 6,
    price: "496.00",
    image: "/images/v-class.jpg",
  },
  {
    id: "coach",
    name: "Executive Coach",
    passengers: 16,
    suitcases: 10,
    handLuggage: 10,
    price: "Price on Application",
    image: "/images/coach.jpg",
  },
];

export default function Step2() {
  const [requestType, setRequestType] = useState<"booking" | "quotation">(
    "booking"
  );
  const [paymentType, setPaymentType] = useState<string>("");
  const [selectedVehicle, setSelectedVehicle] = useState<string>("business");

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 text-gray-800">
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
              className="w-full rounded-md border-gray-300 shadow-sm"
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
        <p className="text-sm text-gray-500">Please select a vehicle</p>
      </div>

      {/* Vehicle Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vehicles.map((v) => (
          <label
            key={v.id}
            className={`relative rounded-xl border-2 p-4 cursor-pointer transition
         ${
           selectedVehicle === v.id
             ? "border-indigo-600 ring-2 ring-indigo-100"
             : "border-gray-200 hover:border-gray-300"
         }`}
          >
            <input
              type="radio"
              name="vehicle"
              value={v.id}
              checked={selectedVehicle === v.id}
              onChange={() => setSelectedVehicle(v.id)}
              className="absolute inset-0 w-full h-full opacity-0"
            />

            <div className="flex flex-col sm:flex-row gap-4">
              {/* --- IMAGE --- */}
              <img
                src={v.image}
                alt={v.name}
                className="w-full sm:w-40 h-24 object-cover rounded-lg"
              />

              {/* --- INFO --- */}
              <div className="flex-1">
                <div className="font-semibold text-gray-900">{v.name}</div>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li>Max passengers: {v.passengers}</li>
                  <li>Max suitcases: {v.suitcases}</li>
                  <li>Max hand luggage: {v.handLuggage}</li>
                </ul>
              </div>

              {/* --- PRICE & CTA --- */}
              <div className="text-right shrink-0">
                <div className="text-2xl font-bold text-indigo-600">
                  £{v.price}
                </div>
                <button
                  type="button"
                  className="mt-2 inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700"
                  onClick={() => setSelectedVehicle(v.id)}
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
