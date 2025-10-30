"use client";

import { atom } from "jotai";

/* ---------- enums / types ---------- */
export type Service = "airport" | "cruise" | "hourly" | "booking" | "quotation" | "-";
export type TripType = "one-way" | "return" | "-";
export type FlightType = "arrival" | "departure" | "-";

export interface BookingAtom {
  /* journey */
  service: Service;
  tripType: TripType;
  pickupAirport: string;
  viaPoints: string[];
  flightType: FlightType;
  flightNumber: string;
  pickupDate: string;
  pickupTime: string;

  /* passenger */
  name: string;
  email: string;
  phone: string;
  passengers: number;
  luggage: number;
  childSeats: number;
  boosterSeats: number;
  meetGreet: boolean;
  bookedByMobile: string; //ref booker
  
  notes: string;
  destination:string;
  seq: string;
  /* extras (set later or calculated) */
  vehicleClass: string;
  paymentType: string; 
  amount: string; // £475.00 etc
  flightAirport: string;
  flightAirline: string;
  flightTime: string;
  flightFrom: string;
  flightTerminal: string;
  meetingPoint: string;
  bookedBy : string;
  bookedByEmail: string;
  customerName: string;
  customerRef: string;
  costCentre:string;
}

/* ---------- default state ---------- */
const initialBooking: BookingAtom = {
  costCentre: "-",
  customerRef: "-",
  customerName: "-",
  bookedBy: "-",
  bookedByEmail: "-",
  bookedByMobile: "-",
  seq: "-",
  service: "-",
  tripType: "-",
  pickupAirport: "",
  viaPoints: [],
  flightType: "arrival",
  flightNumber: "",
  pickupDate: "",
  pickupTime: "",
  destination:"",

  name: "",
  email: "",
  phone: "",
  passengers: 1,
  luggage: 0,
  childSeats: 0,
  boosterSeats: 0,
  meetGreet: true,
  notes: "",

  vehicleClass: "",
  amount: "0",
  paymentType: "",
  flightAirport: "",
  flightAirline: "",
  flightTime: "",
  flightFrom: "",
  flightTerminal: "",
  meetingPoint: "",
};

export const bookingAtom = atom<BookingAtom>(initialBooking);

export const updateBookingAtom = atom(
  null,
  (_get, set, partial: Partial<BookingAtom>) =>
    set(bookingAtom, (prev) => ({ ...prev, ...partial }))
);