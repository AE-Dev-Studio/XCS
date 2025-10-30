export type FormValues = {
    service: "airport" | "cruise" | "hourly";
    tripType: "one-way" | "return";
    flightType: "arrival" | "departure";
    pickupAirport: string;
    viaPoints: string[];
    flightNumber: string;
    pickupDate: string;
    pickupTime: string;
    passengers: number;
    luggage: number;
    childSeats: number;
    boosterSeats: number;
    meetGreet: boolean;
    notes: string;
  };