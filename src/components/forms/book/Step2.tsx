"use client";

import { useAtom, useAtomValue } from "jotai";
import { bookingAtom, updateBookingAtom } from "@/atoms/booking";
import type { Service } from "@/atoms/booking"; // ✅ import the union

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
    image: "/assets/Form/business-class.png",
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
  const booking = useAtomValue(bookingAtom);
  const [, update] = useAtom(updateBookingAtom);

  const onChange = <K extends keyof typeof booking>(
    key: K,
    val: (typeof booking)[K]
  ) => update({ [key]: val });

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 bg-white text-black">
      {/* Request Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2">
            Request type
          </label>
          <div className="flex gap-4">
            {(["booking", "quotation"] as const).map((t) => (
              <label key={t} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="requestType"
                  value={t}
                  checked={booking.service === t} // ✅ compare to atom
                  onChange={() => onChange("service", t as Service)}
                  className="h-4 w-4 appearance-none rounded-full border-2 border-[#a89447] checked:bg-[#a89447] checked:scale-75 transition-transform focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
                />
                <span className="capitalize">{t}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Payment Type (hidden for quotation) */}
        {booking.service === "booking" && (
          <div>
            <label className="block text-sm font-semibold mb-2">
              Payment type
            </label>
            <select
              className="w-full rounded-md py-2 px-1 bg-white border-gray-300 shadow-sm"
              value={booking.paymentType}
              onChange={(e) => onChange("paymentType", e.target.value)}
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

      {/* Vehicle selection */}
      <div>
        <h3 className="text-lg font-semibold">Type of vehicle</h3>
        <p className="text-sm text-gray-700">Please select a vehicle</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vehicles.map((v) => (
          <label
            key={v.id}
            className={`relative rounded-xl border-2 p-4 cursor-pointer transition
              ${
                booking.vehicleClass === v.name
                  ? "border-[#a89447] ring-2 ring-[#a89447]/20"
                  : "border-gray-500 hover:border-gray-300"
              }`}
          >
            <input
              type="radio"
              name="vehicle"
              value={v.id}
              checked={booking.vehicleClass === v.name}
              onChange={() => {
                onChange("vehicleClass", v.name);
                onChange("amount", v.price); // ← updates immediately when card is focused
              }}
              className="absolute inset-0 w-full h-full opacity-0"
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={v.image}
              alt={v.name}
              className="w-full h-32 object-cover rounded-lg"
            />

            <div className="mt-3 space-y-2">
              <div className="font-semibold text-gray-700">{v.name}</div>
              <ul className="text-sm text-gray-700 space-y-1">
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
