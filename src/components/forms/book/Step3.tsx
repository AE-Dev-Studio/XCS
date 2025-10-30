"use client";

import { useAtom, useAtomValue } from "jotai";
import { bookingAtom, updateBookingAtom } from "@/atoms/booking";
import { Phone, Smartphone, Mail, Plane, Plus, Minus } from "lucide-react";
import { useState } from "react";
const Row: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div className="grid grid-cols-12 gap-4 items-center mb-4">
    <label className="col-span-12 md:col-span-3 text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="col-span-12 md:col-span-9">{children}</div>
  </div>
);

const InputGroup: React.FC<
  {
    icon?: React.ReactNode;
    placeholder?: string;
  } & React.InputHTMLAttributes<HTMLInputElement>
> = ({ icon, placeholder, ...rest }) => (
  <div className="relative">
    <input
      className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm placeholder-gray-400 focus:border-[#a89447] focus:outline-none"
      placeholder={placeholder}
      {...rest}
    />
    {icon && (
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
        {icon}
      </div>
    )}
  </div>
);

const NumberSpinner: React.FC<{
  value: number;
  min?: number;
  max?: number;
  onChange: (v: number) => void;
}> = ({ value, min = 0, max = 99, onChange }) => (
  <div className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-2 py-1">
    <button
      type="button"
      onClick={() => onChange(Math.max(min, value - 1))}
      className="rounded p-1 hover:bg-gray-200"
      aria-label="Decrement"
    >
      <Minus className="h-4 w-4" />
    </button>
    <span className="w-8 text-center text-sm">{value}</span>
    <button
      type="button"
      onClick={() => onChange(Math.min(max, value + 1))}
      className="rounded p-1 hover:bg-gray-200"
      aria-label="Increment"
    >
      <Plus className="h-4 w-4" />
    </button>
  </div>
);

/* ---------- main component ---------- */
export default function Step3() {
  const booking = useAtomValue(bookingAtom);
  const [, update] = useAtom(updateBookingAtom);

  /* local UI flags */
  const [bookingElse, setBookingElse] = useState(false);
  const [moreFlight, setMoreFlight] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);

  /* helper to update atom */
  const set = <K extends keyof typeof booking>(
    key: K,
    val: (typeof booking)[K]
  ) => update({ [key]: val });

  return (
    <div className="rounded-lg bg-white text-gray-700 p-6 shadow">
      {/* ---------- core passenger fields ---------- */}
      <Row label="Name">
        <InputGroup
          type="text"
          placeholder="Type passenger name"
          value={booking.name}
          onChange={(e) => set("name", e.target.value)}
        />
      </Row>

      <Row label="Telephone">
        <InputGroup
          type="tel"
          icon={<Phone className="h-4 w-4" />}
          placeholder=""
          value={booking.phone}
          onChange={(e) => set("phone", e.target.value)}
        />
      </Row>

      <Row label="Mobile">
        <InputGroup
          type="tel"
          icon={<Smartphone className="h-4 w-4" />}
          placeholder=""
          value={booking.phone} // fallback
          onChange={(e) => set("mobile", e.target.value)}
        />
      </Row>

      <Row label="Email">
        <InputGroup
          type="email"
          icon={<Mail className="h-4 w-4" />}
          placeholder="ex: myname@example.com"
          value={booking.email}
          onChange={(e) => set("email", e.target.value)}
        />
      </Row>

      {/* ---------- passenger counts ---------- */}
      <Row label="Passengers">
        <NumberSpinner
          value={booking.passengers}
          onChange={(v) => set("passengers", v)}
        />
      </Row>

      <Row label="Suitcases">
        <NumberSpinner
          value={booking.luggage}
          onChange={(v) => set("luggage", v)}
        />
      </Row>

      <Row label="Child seats">
        <NumberSpinner
          value={booking.childSeats}
          onChange={(v) => set("childSeats", v)}
        />
      </Row>

      <Row label="Booster seats">
        <NumberSpinner
          value={booking.boosterSeats}
          onChange={(v) => set("boosterSeats", v)}
        />
      </Row>

      <hr className="my-6" />

      {/* ---------- booking for someone else ---------- */}
      <div className="mb-4 flex items-center gap-2">
        <input
          id="booking-else"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-[#a89447] focus:ring-[#a89447]"
          checked={bookingElse}
          onChange={(e) => setBookingElse(e.target.checked)}
        />
        <label
          htmlFor="booking-else"
          className="text-sm font-medium text-gray-700"
        >
          Booking for someone else?
        </label>
      </div>

      {bookingElse && (
        <>
          <Row label="Booked by">
            <InputGroup
              placeholder=""
              value={booking.bookedBy || ""}
              onChange={(e) => set("bookedBy", e.target.value)}
            />
          </Row>

          <Row label="Booker mobile">
            <InputGroup
              type="tel"
              icon={<Smartphone className="h-4 w-4" />}
              value={booking.bookedByMobile}
              onChange={(e) => set("bookedByMobile", e.target.value)}
            />
          </Row>

          <Row label="Booker email">
            <InputGroup
              type="email"
              icon={<Mail className="h-4 w-4" />}
              placeholder="ex: myname@example.com"
              value={booking.bookedByEmail}
              onChange={(e) => set("bookedByEmail", e.target.value)}
            />
          </Row>
        </>
      )}

      {/* ---------- flight details ---------- */}
      <hr className="my-6" />

      <Row label="Flight/tail number">
        <div className="flex gap-2">
          <InputGroup
            type="text"
            placeholder="ex: BA 123"
            className="uppercase"
            value={booking.flightNumber}
            onChange={(e) => set("flightNumber", e.target.value.toUpperCase())}
          />
          <div className="flex items-center gap-2">
            <input
              id="more-flight"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              checked={moreFlight}
              onChange={(e) => setMoreFlight(e.target.checked)}
            />
            <label
              htmlFor="more-flight"
              className="text-sm font-medium text-gray-700"
            >
              More info
            </label>
          </div>
        </div>
      </Row>

      {moreFlight && (
        <>
          <Row label="Airline">
            <select
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#a89447] focus:outline-none"
              value={booking.flightAirline}
              onChange={(e) => set("flightAirline", e.target.value)}
            >
              <option value="">Select airline</option>
              <option>Emirates</option>
              <option>British Airways</option>
              <option>Easyjet</option>
            </select>
          </Row>

          <Row label="Arrival time">
            <InputGroup
              type="time"
              icon={<Plane className="h-4 w-4" />}
              value={booking.flightTime}
              onChange={(e) => set("flightTime", e.target.value)}
            />
          </Row>

          <Row label="Arriving into">
            <InputGroup
              type="text"
              value={booking.flightTerminal}
              onChange={(e) => set("flightTerminal", e.target.value)}
            />
          </Row>

          <Row label="Flying from">
            <select
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#a89447] focus:outline-none"
              value={booking.flightFrom}
              onChange={(e) => set("flightFrom", e.target.value)}
            >
              <option value="">Select airport</option>
              <option>Paris Charles de Gaulle Airport</option>
              <option>London Heathrow Airport</option>
            </select>
          </Row>

          <Row label="Meeting point">
            <InputGroup
              value={booking.meetingPoint}
              onChange={(e) => set("meetingPoint", e.target.value)}
            />
          </Row>
        </>
      )}

      {/* ---------- additional info ---------- */}
      <hr className="my-6" />

      <div className="mb-4 flex items-center gap-2">
        <input
          id="more-info"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          checked={moreInfo}
          onChange={(e) => setMoreInfo(e.target.checked)}
        />
        <label
          htmlFor="more-info"
          className="text-sm font-medium text-gray-700"
        >
          Additional booking info
        </label>
      </div>

      {moreInfo && (
        <>
          <Row label="Customer name">
            <InputGroup
              value={booking.customerName}
              onChange={(e) => set("customerName", e.target.value)}
            />
          </Row>

          <Row label="Customer ref">
            <InputGroup
              value={booking.customerRef}
              onChange={(e) => set("customerRef", e.target.value)}
            />
          </Row>

          <Row label="Cost centre">
            <InputGroup
              value={booking.costCentre}
              onChange={(e) => set("costCentre", e.target.value)}
            />
          </Row>

          <Row label="Instructions">
            <textarea
              rows={3}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-[#a89447] focus:outline-none"
              maxLength={500}
              value={booking.notes}
              onChange={(e) => set("notes", e.target.value)}
            />
            <div className="mt-1 text-right text-xs text-gray-500">
              {booking.notes.length} / 500
            </div>
          </Row>
        </>
      )}
    </div>
  );
}
