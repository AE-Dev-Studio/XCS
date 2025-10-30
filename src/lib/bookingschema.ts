// lib/bookingSchema.ts
import { z } from "zod";

export const bookingSchema = z.object({
  service: z.enum(["airport","cruise","hourly","booking","quotation","-"]).default("airport"),
  tripType: z.enum(["one-way","return","-"]).default("-"),
  pickupAirport: z.string().optional(),
  viaPoints: z.array(z.string()).optional(),
  flightType: z.enum(["arrival","departure","-"]).default("arrival"),
  flightNumber: z.string().optional(),
  pickupDate: z.string().optional(),
  pickupTime: z.string().optional(),
  destination: z.string().optional(),

  name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  passengers: z.number().optional(),
  luggage: z.number().optional(),
  childSeats: z.number().optional(),
  boosterSeats: z.number().optional(),
  meetGreet: z.boolean().optional(),
  notes: z.string().optional(),

  vehicleClass: z.string().optional(),
  paymentType: z.string().optional(),
  amount: z.string().optional(),
  flightAirport: z.string().optional(),
  flightAirline: z.string().optional(),
  flightTime: z.string().optional(),
  flightFrom: z.string().optional(),
  flightTerminal: z.string().optional(),
  meetingPoint: z.string().optional(),

  bookedBy: z.string().optional(),
  bookedByEmail: z.string().optional(),
  bookedByMobile: z.string().optional(),
  customerName: z.string().optional(),
  customerRef: z.string().optional(),
  costCentre: z.string().optional(),
});
export type BookingInput = z.infer<typeof bookingSchema>;
