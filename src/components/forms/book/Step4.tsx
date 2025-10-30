"use client";
import { useAtomValue } from "jotai";
import { bookingAtom } from "@/atoms/booking"; // <-- path to the atom file you posted
import { MapPinCheckInside, Car, User } from "lucide-react";
import React from "react";

const extractAirportName = (raw: string) => {
  if (!raw) return "—";
  // last segment after the final '|'
  const parts = raw.split("|");
  return parts[parts.length - 2] || "—"; // e.g. "Durham Tees Valley (MME)"
};
/* ---------- Re-usable widget (Lucide version) ---------- */
const Widget = ({
  icon,
  bg,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  bg: string;
  title: string;
  subtitle: string;
}) => (
  <div className="bg-white shadow rounded overflow-hidden">
    <div className="flex">
      <div
        className={`${bg} text-white w-1/3 flex items-center justify-center py-6`}
      >
        {React.cloneElement(icon as React.ReactElement, {
          className: "w-8 h-8 text-white",
        })}
      </div>
      <div className="w-2/3 p-4 flex flex-col items-center justify-center">
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  </div>
);

export default function ConfirmationPage() {
  const booking = useAtomValue(bookingAtom);

  const journey = {
    type: booking.tripType,
    pickup: extractAirportName(booking.pickupAirport),
    destination: booking.destination,
    dateTime: `${booking.pickupDate} ${booking.pickupTime}`,
  };

  const passenger = {
    name: booking.name,
    phone: booking.phone,
    //mobile: booking.mobile,
    email: booking.email,
    passengers: booking.passengers,
    childSeats: booking.childSeats,
    boosterSeats: booking.boosterSeats,
    suitcases: booking.luggage,
    handLuggage: 0,
  };

  const flight = {
    type: booking.flightType === "arrival" ? "Arrival" : "Departure",
    airport: booking.flightAirport,
  };

  const payment = {
    type: booking.paymentType,
    amount: `£ ${booking.amount}`,
    bookedBy: booking.name,
    bookedByMobile: booking.phone,
    bookedByEmail: booking.email,
  };

  return (
    <main className="max-w-7xl mx-auto p-6">
      <fieldset className="border border-gray-300 rounded p-4">
        <legend className="text-lg font-semibold text-gray-700 flex items-center gap-2 px-2">
          <User className="w-5 h-5" />
          Confirmation
        </legend>

        <section className="mt-4">
          <p className="text-sm text-gray-700 mb-6">
            A summary of your booking is shown below. Kindly review and confirm
            whether you wish to proceed with this transaction.
          </p>

          {/* ---------- 3 WIDGETS ---------- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Widget
              icon={<MapPinCheckInside />}
              bg="bg-green-500"
              title={journey.type}
              subtitle="Journey"
            />
            <Widget
              icon={<Car />}
              bg="bg-gray-800"
              title={booking.vehicleClass}
              subtitle="Vehicle"
            />
            <Widget
              icon={<User />}
              bg="bg-purple-600"
              title={passenger.name}
              subtitle="Passenger"
            />
          </div>

          {/* Journey & Passenger panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Panel title="Journey details">
              <Row label="Type" value={journey.type} />
              <Row label="Time" value={journey.dateTime} />
              <Row label="Pickup" value={journey.pickup} />
              <Row label="Destination" value={journey.destination} />
            </Panel>

            <Panel title="Passenger details">
              <Row label="Name" value={passenger.name} />
              <Row label="Phone" value={passenger.phone} />
              <Row label="Email" value={passenger.email} />
              <Row label="No. of passengers" value={passenger.passengers} />
              <Row label="Child seats" value={passenger.childSeats} />
              <Row label="Booster seats" value={passenger.boosterSeats} />
              <Row label="Suitcases" value={passenger.suitcases} />
              <Row label="Hand luggage" value={passenger.handLuggage} />
            </Panel>
          </div>

          {/* Flight details */}
          <div className="mt-6">
            <Panel title="Flight details" centerTitle>
              <SectionLabel>Outward journey</SectionLabel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Row label="Type" value={flight.type} />
                  <Row label="Airport" value={flight.airport} />
                  <Row label="Time" value={booking.flightTime || "—"} />
                  <Row label="Airline" value={booking.flightAirline || "—"} />
                </div>
                <div className="space-y-2">
                  <Row label="Flight no." value={booking.flightNumber || "—"} />
                  <Row
                    label="Arriving into"
                    value={booking.flightTerminal || "—"}
                  />
                  <Row label="Flying from" value={booking.flightFrom || "—"} />
                  <Row
                    label="Meeting point"
                    value={booking.meetingPoint || "—"}
                  />
                </div>
              </div>
            </Panel>
          </div>

          {/* Additional info */}
          <div className="mt-6">
            <Panel title="Additional Info" centerTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                <Row label="Payment type" value={payment.type} />
                <Row label="Amount" value={payment.amount} />
                <Row label="Booked by" value={booking.bookedBy} />
                <Row label="Booker mobile" value={booking.bookedByMobile} />
                <Row label="Booker email" value={booking.bookedByEmail} />
                <Row label="Customer name" value={booking.customerName} />
                <Row label="Customer ref" value={booking.customerRef} />
                <Row label="Cost centre" value={booking.costCentre} />
                <Row
                  label="Instructions"
                  value={booking.notes || "—"}
                  fullWidth
                />
              </div>
            </Panel>
          </div>

          {/* Via points (hidden by default) */}
          <ViaPanel id="ViaPanel" title="Via Points" />
          <ViaPanel id="ViaPanelReturn" title="Via Points - Return Journey" />
        </section>
      </fieldset>
    </main>
  );
}

/* ---------- Atomic helpers (unchanged) ---------- */
const Panel = ({ title, children, centerTitle = false }: any) => (
  <div className="border border-gray-300 rounded">
    <div
      className={`${
        centerTitle ? "text-center" : ""
      } bg-blue-600 text-white px-4 py-2 font-semibold`}
    >
      {title}
    </div>
    <div className="p-3 text-xs text-gray-800 space-y-2">{children}</div>
  </div>
);

const Row = ({ label, value, fullWidth = false }: any) => (
  <div className={`flex ${fullWidth ? "md:col-span-2" : ""}`}>
    <div className="w-1/3 font-medium text-gray-700">{label}</div>
    <div className="w-2/3 text-gray-900">{value}</div>
  </div>
);

const SectionLabel = ({ children }: any) => (
  <div className="text-center font-semibold text-gray-700 mb-2">{children}</div>
);

const ViaPanel = ({ id, title }: any) => (
  <div id={id} className="mt-6 hidden">
    <Panel title={title}>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Via</th>
              <th className="text-left p-2">Reason</th>
              <th className="text-left p-2">Time</th>
              <th className="text-left p-2">No. of passengers</th>
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Phone</th>
              <th className="text-left p-2">Address</th>
            </tr>
          </thead>
          <tbody>{/* Populate dynamically */}</tbody>
        </table>
      </div>
    </Panel>
  </div>
);
