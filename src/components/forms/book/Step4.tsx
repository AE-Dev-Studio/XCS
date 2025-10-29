// app/confirmation/page.tsx
"use client";

import React from "react";

/* ------------------------------------------------------------------ */
/* Helper: icon                                                                 */
/* ------------------------------------------------------------------ */
const Icon = ({
  className = "",
  name,
}: {
  className?: string;
  name: string;
}) => <i className={`fa ${name} ${className}`} aria-hidden="true" />;

/* ------------------------------------------------------------------ */
/* Re-usable “widget” panel used for Journey, Vehicle, Passenger               */
/* ------------------------------------------------------------------ */
const Widget = ({
  icon,
  bg,
  title,
  subtitle,
}: {
  icon: string;
  bg: string;
  title: string;
  subtitle: string;
}) => (
  <div className="bg-white shadow rounded overflow-hidden">
    <div className="flex">
      <div
        className={`${bg} text-white w-1/3 flex items-center justify-center py-6`}
      >
        <Icon name={icon} className="text-3xl" />
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

/* ------------------------------------------------------------------ */
/* Main page                                                                    */
/* ------------------------------------------------------------------ */
export default function Step4() {
  /* ------------------------------------------------------ */
  /* All hard-coded data mirrors the HTML you supplied       */
  /* Replace with dynamic props / fetch as required          */
  /* ------------------------------------------------------ */
  const journey = {
    type: "Airport Transfer",
    pickup:
      "Inverness (INV) Inverness Airport Dalcross Inverness Inverness-shire IV2 7JB",
    destination: "United Kingdom",
    dateTime: "24-Oct-2025 10:50 AM",
  };

  const passenger = {
    name: "Abdullah",
    phone: "033030303",
    mobile: "030303033",
    email: "tester@gmail.com",
    passengers: 1,
    childSeats: 0,
    boosterSeats: 0,
    suitcases: 0,
    handLuggage: 0,
  };

  const flight = {
    type: "Arrival",
    airport: "Inverness (INV)",
  };

  const payment = {
    type: "Credit Card",
    amount: "£ 475.00",
    bookedBy: "Abdullah",
    bookedByMobile: "030303033",
    bookedByEmail: "tester@gmail.com",
  };

  return (
    <main className="max-w-7xl mx-auto p-6">
      <fieldset className="border border-gray-300 rounded p-4">
        <legend className="text-lg font-semibold text-gray-700 flex items-center gap-2 px-2">
          <Icon name="fa-check-square-o" />
          Confirmation
        </legend>

        <section className="mt-4">
          <p className="text-sm text-gray-700 mb-6">
            A summary of your booking is shown below. Kindly review and confirm
            whether you wish to proceed with this transaction.
          </p>

          {/* Top row of widgets ------------------------------------ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Widget
              icon="fa-road"
              bg="bg-green-500"
              title={journey.type}
              subtitle="Journey"
            />
            <Widget
              icon="fa-car"
              bg="bg-gray-800"
              title="Business Class"
              subtitle="Vehicle"
            />
            <Widget
              icon="glyphicon-user"
              bg="bg-purple-600"
              title={passenger.name}
              subtitle="Passenger"
            />
          </div>

          {/* Journey & Passenger panels --------------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Journey details */}
            <Panel title="Journey details">
              <Row label="Type" value={journey.type} />
              <Row label="Time" value={journey.dateTime} />
              <Row label="Pickup" value={journey.pickup} />
              <Row
                label="Destination"
                value={
                  <>
                    {journey.destination}
                    <button
                      aria-label="Edit destination"
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      <Icon name="fa-pencil" />
                    </button>
                  </>
                }
              />
            </Panel>

            {/* Passenger details */}
            <Panel title="Passenger details">
              <SectionLabel>Outward journey</SectionLabel>
              <Row label="Name" value={passenger.name} />
              <Row label="Phone" value={passenger.phone} />
              <Row label="Mobile" value={passenger.mobile} />
              <Row label="Email" value={passenger.email} />
              <Row label="No. of passengers" value={passenger.passengers} />
              <Row label="Child seats" value={passenger.childSeats} />
              <Row label="Booster seats" value={passenger.boosterSeats} />
              <Row label="Suitcases" value={passenger.suitcases} />
              <Row label="Hand luggage" value={passenger.handLuggage} />
            </Panel>
          </div>

          {/* Flight details --------------------------------------- */}
          <div className="mt-6">
            <Panel title="Flight details" centerTitle>
              <SectionLabel>Outward journey</SectionLabel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Row label="Type" value={flight.type} />
                  <Row label="Airport" value={flight.airport} />
                  <Row label="Time" value="—" />
                  <Row label="Airline" value="—" />
                </div>
                <div className="space-y-2">
                  <Row label="Flight no." value="—" />
                  <Row label="Arriving into" value="—" />
                  <Row label="Flying from" value="—" />
                  <Row label="Meeting point" value="—" />
                </div>
              </div>
            </Panel>
          </div>

          {/* Additional info -------------------------------------- */}
          <div className="mt-6">
            <Panel title="Additional Info" centerTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                <Row label="Payment type" value={payment.type} />
                <Row label="Amount" value={payment.amount} />
                <Row label="Booked by" value={payment.bookedBy} />
                <Row label="Booker mobile" value={payment.bookedByMobile} />
                <Row label="Booker email" value={payment.bookedByEmail} />
                <Row label="Customer name" value="—" />
                <Row label="Customer ref" value="—" />
                <Row label="Cost centre" value="—" />
                <Row label="Instructions" value="—" fullWidth />
              </div>
            </Panel>
          </div>

          {/* Via points (hidden by default) ----------------------- */}
          <ViaPanel id="ViaPanel" title="Via Points" />
          <ViaPanel id="ViaPanelReturn" title="Via Points - Return Journey" />
        </section>
      </fieldset>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Atomic UI helpers                                                  */
/* ------------------------------------------------------------------ */
const Panel = ({
  title,
  children,
  centerTitle = false,
}: {
  title: string;
  children: React.ReactNode;
  centerTitle?: boolean;
}) => (
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

const Row = ({
  label,
  value,
  fullWidth = false,
}: {
  label: string;
  value: React.ReactNode;
  fullWidth?: boolean;
}) => (
  <div className={`flex ${fullWidth ? "md:col-span-2" : ""}`}>
    <div className="w-1/3 font-medium text-gray-700">{label}</div>
    <div className="w-2/3 text-gray-900">{value}</div>
  </div>
);

const SectionLabel = ({ children }: { children: string }) => (
  <div className="text-center font-semibold text-gray-700 mb-2">{children}</div>
);

const ViaPanel = ({ id, title }: { id: string; title: string }) => (
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
