import React, { useState } from "react";
import {
  Phone,
  Smartphone,
  Mail,
  Search,
  Plane,
  Plus,
  Minus,
} from "lucide-react";

/* ---------- tiny reusable atoms ---------- */
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
      className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none"
      placeholder={placeholder}
      {...rest}
    />
    {icon && (
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
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
      className="rounded p-1 hover:bg-gray-100"
      aria-label="Decrement"
    >
      <Minus className="h-4 w-4" />
    </button>
    <span className="w-8 text-center text-sm">{value}</span>
    <button
      type="button"
      onClick={() => onChange(Math.min(max, value + 1))}
      className="rounded p-1 hover:bg-gray-100"
      aria-label="Increment"
    >
      <Plus className="h-4 w-4" />
    </button>
  </div>
);

/* ---------- main component ---------- */
const Step3: React.FC = () => {
  /* ---- local state ---- */
  const [passengers, setPassengers] = useState(1);
  const [childSeats, setChildSeats] = useState(0);
  const [boosterSeats, setBoosterSeats] = useState(0);
  const [suitcases, setSuitcases] = useState("");
  const [handLuggage, setHandLuggage] = useState("");

  const [bookingElse, setBookingElse] = useState(false);
  const [moreFlight, setMoreFlight] = useState(false);
  const [moreCruise, setMoreCruise] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const [passengerName, setPassengerName] = useState("");
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <Row label="Name">
        <input
          type="text"
          value={passengerName}
          onChange={(e) => setPassengerName(e.target.value)}
          placeholder="Type passenger name"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none"
        />
      </Row>

      <Row label="Telephone">
        <InputGroup
          type="tel"
          icon={<Phone className="h-4 w-4" />}
          placeholder=""
        />
      </Row>

      <Row label="Mobile">
        <InputGroup
          type="tel"
          icon={<Smartphone className="h-4 w-4" />}
          placeholder=""
        />
      </Row>

      <Row label="Email">
        <InputGroup
          type="email"
          icon={<Mail className="h-4 w-4" />}
          placeholder="ex: myname@example.com"
        />
      </Row>

      <hr className="my-6" />

      {/* ---------- numbers ---------- */}
      <Row label="No. of passengers">
        <NumberSpinner
          value={passengers}
          min={1}
          max={20}
          onChange={setPassengers}
        />
      </Row>

      <Row label="Child seats">
        <NumberSpinner
          value={childSeats}
          min={0}
          max={5}
          onChange={setChildSeats}
        />
      </Row>

      <Row label="Booster seats">
        <NumberSpinner
          value={boosterSeats}
          min={0}
          max={5}
          onChange={setBoosterSeats}
        />
      </Row>

      <Row label="Suitcases">
        <div className="flex gap-2">
          <InputGroup
            type="text"
            placeholder="ex: 2"
            value={suitcases}
            onChange={(e) => setSuitcases(e.target.value)}
            className="max-w-[6rem]"
          />
          <span className="self-center text-sm text-gray-600">case(s)</span>
        </div>
      </Row>

      <Row label="Hand luggage">
        <div className="flex gap-2">
          <InputGroup
            type="text"
            placeholder="ex: 2"
            value={handLuggage}
            onChange={(e) => setHandLuggage(e.target.value)}
            className="max-w-[6rem]"
          />
          <span className="self-center text-sm text-gray-600">
            hand luggage(s)
          </span>
        </div>
      </Row>

      {/* ---------- booking for someone else ---------- */}
      <div className="mb-4 flex items-center gap-2">
        <input
          id="booking-else"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
            <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none">
              <option>Select or type your name</option>
            </select>
          </Row>

          <Row label="Booker mobile">
            <InputGroup type="tel" icon={<Smartphone className="h-4 w-4" />} />
          </Row>

          <Row label="Booker email">
            <InputGroup
              type="email"
              icon={<Mail className="h-4 w-4" />}
              placeholder="ex: myname@example.com"
            />
          </Row>
        </>
      )}

      {/* ---------- flight ---------- */}
      <hr className="my-6" />

      <Row label="Flight/tail number">
        <div className="flex gap-2">
          <InputGroup
            type="text"
            placeholder="ex: BA 123"
            className="uppercase"
          />
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm hover:bg-gray-50"
          >
            <Search className="h-4 w-4" />
          </button>
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
            <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none">
              <option>Emirates</option>
              <option>British Airways</option>
              <option>Easyjet</option>
            </select>
          </Row>

          <Row label="Arrival time">
            <InputGroup
              type="text"
              icon={<Plane className="h-4 w-4" />}
              placeholder=""
            />
          </Row>

          <Row label="Arriving into">
            <InputGroup type="text" placeholder="" />
          </Row>

          <Row label="Flying from">
            <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none">
              <option>Paris Charles de Gaulle Airport</option>
              <option>London Heathrow Airport</option>
            </select>
          </Row>

          <Row label="Meeting point">
            <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none">
              <option>Select a meeting point</option>
            </select>
          </Row>

          <div className="col-start-4 col-span-8">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm hover:bg-gray-50"
            >
              <Plane className="h-4 w-4" />
              Check Flight Status …
            </button>
          </div>
        </>
      )}

      {/* ---------- additional booking info ---------- */}
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
            <InputGroup type="text" />
          </Row>

          <Row label="Customer ref">
            <InputGroup type="text" />
          </Row>

          <Row label="Cost centre">
            <InputGroup type="text" />
          </Row>

          <Row label="Instructions">
            <textarea
              rows={3}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none"
              maxLength={500}
            />
            <div className="mt-1 text-right text-xs text-gray-500">0 / 500</div>
          </Row>
        </>
      )}
    </div>
  );
};

export default Step3;
