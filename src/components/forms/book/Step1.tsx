"use client";

import { useAtom } from "jotai";
import { bookingAtom, updateBookingAtom } from "@/atoms/booking";
import type { BookingAtom } from "@/atoms/booking";

export interface AirportOption {
  label: string;
  value: string;
}

export const airports: AirportOption[] = [
  { label: "Aberdeen (ABZ)", value: "ABZ" },
  { label: "Anglesey (VLY)", value: "VLY" },
  { label: "Belfast City (BHD)", value: "BHD" },
  { label: "Belfast International (BFS)", value: "BFS" },
  { label: "Birmingham International (BHX)", value: "BHX" },
  { label: "Bournemouth International (BOH)", value: "BOH" },
  { label: "Bristol International (BRS)", value: "BRS" },
  { label: "Cambridge International (CBG)", value: "CBG" },
  { label: "Cardiff International (CWL)", value: "CWL" },
  { label: "Doncaster Sheffield (DSA)", value: "DSA" },
  { label: "Durham Tees Valley (MME)", value: "MME" },
  { label: "East Midlands (EMA)", value: "EMA" },
  { label: "Edinburgh (EDI)", value: "EDI" },
  { label: "Exeter (EXT)", value: "EXT" },
  { label: "Farnborough (FAB)", value: "FAB" },
  { label: "Glasgow (GLA)", value: "GLA" },
  { label: "Glasgow Prestwick (PIK)", value: "PIK" },
  { label: "Harrods - London Luton Airport", value: "LTN" },
  { label: "Harrods - London Stanstead Airport", value: "STN" },
  { label: "Hawarden Aviation Park", value: "CEG" },
  { label: "Humberside International (HUY)", value: "HUY" },
  { label: "Inverness (INV)", value: "INV" },
  { label: "Leeds Bradford (LBA)", value: "LBA" },
  { label: "Liverpool John Lennon (LPL)", value: "LPL" },
  { label: "London City (LCY)", value: "LCY" },
  { label: "London Gatwick (LGW) - North terminal", value: "LGW-N" },
  { label: "London Gatwick (LGW) - South Terminal", value: "LGW-S" },
  { label: "London Heathrow (LHR) - T1", value: "LHR-T1" },
  { label: "London Heathrow (LHR) - T2", value: "LHR-T2" },
  { label: "London Heathrow (LHR) - T3", value: "LHR-T3" },
  { label: "London Heathrow (LHR) - T4", value: "LHR-T4" },
  { label: "London Heathrow (LHR) - T5", value: "LHR-T5" },
  { label: "London Luton (LTN)", value: "LTN" },
  { label: "London Southend (SEN)", value: "SEN" },
  { label: "London Stansted (STN)", value: "STN" },
  { label: "Manchester (MAN) - T1", value: "MAN-T1" },
  { label: "Manchester (MAN) - T2", value: "MAN-T2" },
  { label: "Manchester (MAN) - T3", value: "MAN-T3" },
  { label: "Newcastle International (NCL)", value: "NCL" },
  { label: "Newquay (NQY)", value: "NQY" },
  { label: "Norwich (NWI)", value: "NWI" },
  { label: "Signature Edinburgh (EDI)", value: "EDI-SIG" },
  { label: "Signature Glasgow (GLA)", value: "GLA-SIG" },
  { label: "Signature London Biggin Hill (BQH)", value: "BQH" },
  { label: "Signature London Gatwick (LGW)", value: "LGW-SIG" },
  { label: "Signature London Heathrow (LHR)", value: "LHR-SIG" },
  { label: "Signature London Luton (LTN)", value: "LTN-SIG" },
  { label: "Signature Manchester (MAN)", value: "MAN-SIG" },
  { label: "Signature Southampton (SOU)", value: "SOU-SIG" },
  { label: "Southampton (SOU)", value: "SOU" },
  { label: "XLR Liverpool (XLR)", value: "LPL-XLR" },
];

export default function Step1() {
  const removeViaPoint = (idx: number) =>
    update({ viaPoints: booking.viaPoints.filter((_, i) => i !== idx) });
  const [booking] = useAtom(bookingAtom);
  const [, update] = useAtom(updateBookingAtom);

  /* keep local state for controlled inputs -------------------- */
  const onChange = <K extends keyof BookingAtom>(key: K, val: BookingAtom[K]) =>
    update({ [key]: val });

  const addViaPoint = () => update({ viaPoints: [...booking.viaPoints, ""] });

  const updateViaPoint = (idx: number, val: string) => {
    const copy = [...booking.viaPoints];
    copy[idx] = val;
    update({ viaPoints: copy });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto max-w-3xl space-y-6 rounded-2xl bg-white text-black p-6 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-black">Journey Details</h2>

      {/* Service type */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {(["airport", "hourly"] as const).map((s) => (
          <label key={s} className="flex items-center gap-2">
            <input
              type="radio"
              value={s}
              checked={booking.service === s}
              onChange={() => onChange("service", s)}
              className="h-4 w-4 appearance-none rounded-full
              border-2 border-[#a89447]
              checked:bg-[#a89447] checked:scale-75
              transition-transform
              focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
            />
            <span className="capitalize">{s}</span>
          </label>
        ))}
      </div>

      {/* Trip type */}
      {booking.service === "airport" && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {(["one-way", "return"] as const).map((t) => (
            <label key={t} className="flex items-center gap-2">
              <input
                type="radio"
                value={t}
                checked={booking.tripType === t}
                onChange={() => onChange("tripType", t)}
                className="h-4 w-4 appearance-none rounded-full
                border-2 border-[#a89447]
                checked:bg-[#a89447] checked:scale-75
                transition-transform
                focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              />
              <span className="capitalize">{t}</span>
            </label>
          ))}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-black">
          Pick-up location
        </label>
        <select
          className="mt-1 w-full rounded-md py-2 px-1 bg-white border-black shadow-sm"
          value={booking.pickupAirport}
          onChange={(e) => onChange("pickupAirport", e.target.value)}
        >
          <option value="">Select an airport</option>
          {airports.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-black">
          Destination address <span className="text-red-500">*</span>
        </label>
        <input
          required
          type="text"
          placeholder="e.g. 10 Downing St, London"
          value={booking.destination}
          onChange={(e) => onChange("destination", e.target.value)}
          className="mt-1 w-full rounded-md py-2 px-1 bg-white border-black shadow-sm"
        />
      </div>

      {/* Via points */}
      <div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-black">Via points</label>
          <button
            type="button"
            onClick={addViaPoint}
            className="text-sm text-[#9c8733] hover:underline"
          >
            + Add via point
          </button>
        </div>

        {booking.viaPoints.map((p, idx) => (
          <div key={idx} className="mt-2 flex items-center gap-2">
            <input
              placeholder="Enter address"
              value={p}
              onChange={(e) => updateViaPoint(idx, e.target.value)}
              className="w-full rounded-md py-1 px-2 border-gray-300 shadow-sm"
            />
            <button
              type="button"
              onClick={() => removeViaPoint(idx)}
              className="shrink-0 text-black hover:text-black"
              aria-label="Remove this via point"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Flight info (only airport) */}
      {booking.service === "airport" && (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-black">
                Flight type
              </label>
              <select
                className="mt-1 w-full rounded-md py-1 px-1 bg-white border-gray-300 shadow-sm"
                value={booking.flightType}
                onChange={(e) => onChange("flightType", e.target.value as any)}
              >
                <option value="arrival">Arrival</option>
                <option value="departure">Departure</option>
              </select>
            </div>
            <div>
              <label className="block text-sm  font-medium text-black">
                Flight number
              </label>
              <input
                value={booking.flightNumber}
                onChange={(e) => onChange("flightNumber", e.target.value)}
                placeholder="ex BA 0156"
                className="mt-1 w-full  py-1 px-1 rounded-md border-gray-300 shadow-sm"
              />
            </div>
          </div>
        </>
      )}

      {/* Date & Time */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-black">
            Pick-up date
          </label>
          <input
            type="date"
            value={booking.pickupDate}
            onChange={(e) => onChange("pickupDate", e.target.value)}
            className="mt-1 py-1 px-1 w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">
            Pick-up time
          </label>
          <input
            type="time"
            value={booking.pickupTime}
            onChange={(e) => onChange("pickupTime", e.target.value)}
            className="mt-1 py-1 px-1 w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {(["passengers", "luggage", "childSeats", "boosterSeats"] as const).map(
          (key) => (
            <div key={key}>
              <label className="block text-sm font-medium text-black">
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="number"
                min="0"
                value={booking[key]}
                onChange={(e) => onChange(key, Number(e.target.value))}
                className="mt-1 w-full py-1 px-1 rounded-md border-gray-300 shadow-sm"
              />
            </div>
          )
        )}
      </div>
    </form>
  );
}
