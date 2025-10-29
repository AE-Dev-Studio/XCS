"use client"; // ← Next.js App Router (remove if Pages Router)

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  service: "airport" | "cruise" | "hourly";
  tripType: "one-way" | "return";
  flightType: "arrival" | "departure";
  pickupAirport: string;
  viaPoints: string[];
  flightNumber: string;
  pickupDate: string;
  pickupTime: string;
  passengers: number;
  name: string;
  email: string;
  phone: string;
  luggage: number;
  childSeats: number;
  boosterSeats: number;
  meetGreet: boolean;
  notes: string;
};

export default function Step1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      service: "airport",
      tripType: "one-way",
      flightType: "arrival",
      viaPoints: [],
      passengers: 1,
      luggage: 0,
      childSeats: 0,
      boosterSeats: 0,
      meetGreet: true,
    },
  });

  const [viaPoints, setViaPoints] = useState<string[]>([]);

  const service = watch("service");

  const onSubmit = (data: FormValues) => {
    console.log("BOOKING DATA", data);
    // TODO: send to /api/booking
  };

  const addViaPoint = () => setViaPoints([...viaPoints, ""]);
  const updateViaPoint = (idx: number, val: string) => {
    const copy = [...viaPoints];
    copy[idx] = val;
    setViaPoints(copy);
    setValue("viaPoints", copy);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-3xl space-y-6 rounded-2xl bg-white p-6 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-800">Journey Details</h2>

      {/* Service type */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {(["airport", "cruise", "hourly"] as const).map((s) => (
          <label key={s} className="flex items-center gap-2">
            <input type="radio" value={s} {...register("service")} />
            <span className="capitalize">{s.replace("-", " ")}</span>
          </label>
        ))}
      </div>

      {/* Trip type */}
      {service === "airport" && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex items-center gap-2">
            <input type="radio" value="one-way" {...register("tripType")} />
            <span>One-way</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" value="return" {...register("tripType")} />
            <span>Return</span>
          </label>
        </div>
      )}

      {/* Airport / Cruise selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Pick-up location
        </label>
        <select
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          {...register("pickupAirport", { required: true })}
        >
          <option value="">Select an airport</option>
          <option>Heathrow (LHR)</option>
          <option>Gatwick (LGW)</option>
          <option>Stansted (STN)</option>
          <option>Luton (LTN)</option>
          <option>London City (LCY)</option>
        </select>
        {errors.pickupAirport && (
          <p className="text-xs text-red-600">Required</p>
        )}
      </div>

      {/* Via points */}
      <div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">
            Via points
          </label>
          <button
            type="button"
            onClick={addViaPoint}
            className="text-sm text-indigo-600 hover:underline"
          >
            + Add via point
          </button>
        </div>
        {viaPoints.map((p, idx) => (
          <input
            key={idx}
            placeholder="Enter address"
            value={p}
            onChange={(e) => updateViaPoint(idx, e.target.value)}
            className="mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        ))}
      </div>

      {/* Flight info (only airport) */}
      {service === "airport" && (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Flight type
              </label>
              <select
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
                {...register("flightType")}
              >
                <option value="arrival">Arrival</option>
                <option value="departure">Departure</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Flight number
              </label>
              <input
                {...register("flightNumber")}
                placeholder="BA 0156"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
          </div>
        </>
      )}

      {/* Date & Time */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pick-up date
          </label>
          <input
            type="date"
            {...register("pickupDate", { required: true })}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pick-up time
          </label>
          <input
            type="time"
            {...register("pickupTime", { required: true })}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
      </div>

      {/* Passengers & luggage */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {(["passengers", "luggage", "childSeats", "boosterSeats"] as const).map(
          (key) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700">
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="number"
                min="0"
                {...register(key, { valueAsNumber: true })}
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
          )
        )}
      </div>

      {/* Meet & Greet */}
      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("meetGreet")} />
        <span className="text-sm text-gray-700">Meet & Greet service</span>
      </label>
    </form>
  );
}
