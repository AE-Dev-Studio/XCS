// "use client";

// import { useState } from "react";
// import { useForm, FormProvider } from "react-hook-form";
// import { FormValues } from "./types";

// import Step1 from "./Step1";
// import Step2 from "./Step2";
// import Step3 from "./Step3";
// import Step4 from "./Step4";

// const steps = ["Journey", "Car", "Passenger", "Confirm"];

// export default function BookingForm() {
//   const [current, setCurrent] = useState(0);
//   const methods = useForm<FormValues>({
//     defaultValues: {
//       service: "airport",
//       tripType: "one-way",
//       flightType: "arrival",
//       pickupAirport: "",
//       viaPoints: [],
//       flightNumber: "",
//       pickupDate: "",
//       pickupTime: "",
//       passengers: 1,
//       luggage: 0,
//       childSeats: 0,
//       boosterSeats: 0,
//       meetGreet: true,
//       notes: "",
//     },
//     mode: "onChange",
//   });

//   const next = () => setCurrent((c) => Math.min(steps.length - 1, c + 1));
//   const prev = () => setCurrent((c) => Math.max(0, c - 1));

//   // const onSubmit = (data: FormValues) => {
//   //   console.log("FINAL DATA", data);
//   // };

//   const onSubmit = async (data: FormValues) => {
//   try {
//     const res = await fetch("/api/book", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     const json = await res.json();
//     if (!res.ok) throw new Error(json?.error || "Failed to create booking");
//     console.log("created", json.booking);
//     // you can show confirmation to user and clear atom
//   } catch (err) {
//     console.error(err);
//   }
// };
//   const Components = [Step1, Step2, Step3, Step4];
//   const ActiveStep = Components[current];

//   return (
//     <FormProvider {...methods}>
//       <form
//         onSubmit={methods.handleSubmit(onSubmit)}
//         className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-lg"
//       >
//         <div className="mb-6">
//           <div className="flex items-center justify-between text-sm text-gray-600">
//             {steps.map((label, idx) => (
//               <div key={label} className="flex items-center gap-2">
//                 <span
//                   className={`grid h-7 w-7 place-items-center rounded-full text-xs font-semibold ${
//                     idx <= current
//                       ? "bg-[#a89447] text-white"
//                       : "bg-gray-200 text-gray-600"
//                   }`}
//                 >
//                   {idx + 1}
//                 </span>
//                 <span className={`${idx <= current ? "text-[#a89447]" : ""}`}>
//                   {label}
//                 </span>
//               </div>
//             ))}
//           </div>
//           <div className="mt-2 h-2 w-full rounded bg-gray-200">
//             <div
//               className="h-2 rounded bg-[#a89447] transition-all"
//               style={{ width: `${((current + 1) / steps.length) * 100}%` }}
//             />
//           </div>
//         </div>

//         {/* Active step */}
//         <ActiveStep />

//         {/* Navigation */}
//         <div className="mt-8 flex items-center justify-between">
//           <button
//             type="button"
//             onClick={prev}
//             disabled={current === 0}
//             className={`rounded-md px-4 py-2 text-sm ${
//               current === 0
//                 ? "bg-gray-100 text-gray-400"
//                 : "bg-gray-200 hover:bg-gray-300"
//             }`}
//           >
//             Previous
//           </button>

//           {current === steps.length - 1 ? (
//             <button
//               type="submit"
//               className="rounded-md bg-[#a89447] px-6 py-2 text-sm text-white hover:bg-gray-400"
//             >
//               Request Quote
//             </button>
//           ) : (
//             <button
//               type="button"
//               onClick={next}
//               className="rounded-md bg-[#a89447] px-6 py-2 text-sm text-white hover:bg-gray-400"
//             >
//               Next
//             </button>
//           )}
//         </div>
//       </form>
//     </FormProvider>
//   );
// }

"use client";
import { bookingAtom } from "@/atoms/booking";
import { useAtom } from "jotai";
import { useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const steps = ["Journey", "Car", "Passenger", "Confirm"];

export default function BookingForm() {
  const [current, setCurrent] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [booking] = useAtom(bookingAtom);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(steps.length - 1, c + 1));

  /* ---------- submit ---------- */
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      setMessage(null);
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Failed to create booking");

      setMessage("✅ Booking created successfully!");
      setCurrent(0);
    } catch (err: any) {
      console.error(err);
      setMessage("❌ Failed to create booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const Components = [Step1, Step2, Step3, Step4];
  const ActiveStep = Components[current];

  return (
    <form
      onSubmit={handleFormSubmit}
      className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-lg"
    >
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-gray-600">
          {steps.map((label, idx) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className={`grid h-7 w-7 place-items-center rounded-full text-xs font-semibold ${
                  idx <= current
                    ? "bg-[#a89447] text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {idx + 1}
              </span>
              <span className={`${idx <= current ? "text-[#a89447]" : ""}`}>
                {label}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-2 h-2 w-full rounded bg-gray-200">
          <div
            className="h-2 rounded bg-[#a89447] transition-all"
            style={{ width: `${((current + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Active Step */}
      <ActiveStep />

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={prev}
          disabled={current === 0 || isSubmitting}
          className={`rounded-md px-4 py-2 text-sm ${
            current === 0
              ? "bg-gray-100 text-gray-400"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Previous
        </button>

        {current === steps.length - 1 ? (
          <button
            type="submit"
            disabled={isSubmitting}
            className={`rounded-md px-6 py-2 text-sm text-white ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#a89447] hover:bg-gray-400"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Request Quote"}
          </button>
        ) : (
          <button
            type="button"
            onClick={next}
            disabled={isSubmitting}
            className="rounded-md bg-[#a89447] px-6 py-2 text-sm text-white hover:bg-gray-400"
          >
            Next
          </button>
        )}
      </div>

      {/* Message */}
      {message && (
        <p
          className={`mt-6 text-center font-semibold ${
            message.startsWith("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
