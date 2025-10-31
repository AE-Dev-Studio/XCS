// // components/QuoteTabs.tsx
// "use client";

// import { useState } from "react";

// type Tab = "self" | "driver";

// /* ---------- Reusable UI helpers ---------- */
// const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
//   <input
//     {...props}
//     className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
//   />
// );

// const Select = ({
//   children,
//   ...props
// }: React.SelectHTMLAttributes<HTMLSelectElement>) => (
//   <div className="relative">
//     <select
//       {...props}
//       className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
//     >
//       {children}
//     </select>
//     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//       <svg className="h-4 w-4" viewBox="0 0 571.4 571.4">
//         <path d="M571 393Q571 407 561 418L311 668Q300 679 286 679T261 668L11 418Q0 407 0 393T11 368 36 357H536Q550 357 561 368T571 393Z" />
//       </svg>
//     </div>
//   </div>
// );

// const TextArea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
//   <textarea
//     {...props}
//     rows={3}
//     className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
//   />
// );

// export default function QuoteForm() {
//   const [tab, setTab] = useState<Tab>("self");

//   const vehicles = [
//     "Select a vehicle",
//     "Mercedes E Class",
//     "Mercedes S Class",
//     "Mercedes V Class",
//     "Rolls Royce Chullain",
//     "Rolls Royce Phantom",
//     "Rolls Royce Mybech",
//     "Range Rover",
//   ];

//   return (
//     <section className="mx-auto max-w-3xl rounded-lg bg-black p-6 my-5 shadow-lg z-10">
//       <h2 className="mb-6 text-center text-2xl font-semibold text-white">
//         Quote Now
//       </h2>

//       {/* Tabs */}
//       <div className="mb-6 flex justify-center gap-2">
//         {(["self", "driver"] as Tab[]).map((t) => (
//           <button
//             key={t}
//             onClick={() => setTab(t)}
//             className={`rounded-md px-6 py-2 text-sm font-medium capitalize transition ${
//               tab === t
//                 ? "bg-[#a89447] text-white shadow"
//                 : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             {t === "self" ? "Self" : "With Driver"}
//           </button>
//         ))}
//       </div>

//       {/* Self-drive form */}
//       {tab === "self" && (
//         <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
//           <Input name="name" placeholder="Name *" required />
//           <Input
//             type="tel"
//             name="phone"
//             placeholder="Phone *"
//             required
//             pattern="[0-9()#&+*-=.]+"
//           />
//           <Input type="email" name="email" placeholder="Email *" required />
//           <Select name="vehicle" required defaultValue="Select a vehicle">
//             {vehicles.map((v) => (
//               <option key={v}>{v}</option>
//             ))}
//           </Select>
//           <Input
//             type="date"
//             name="dateFrom"
//             placeholder="Date From *"
//             required
//           />
//           <Input type="date" name="dateTo" placeholder="Date To *" required />
//           <TextArea
//             name="message"
//             placeholder="Other Information"
//             className="md:col-span-2"
//           />
//           <button
//             type="submit"
//             className="md:col-span-2 w-full rounded-md bg-[#a89447] py-2 text-white hover:bg-[#a89447]"
//           >
//             Send
//           </button>
//         </form>
//       )}

//       {/* With-driver form */}
//       {tab === "driver" && (
//         <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
//           <Input name="name" placeholder="Name *" required />
//           <Input
//             type="tel"
//             name="phone"
//             placeholder="Phone *"
//             required
//             pattern="[0-9()#&+*-=.]+"
//           />
//           <Input type="email" name="email" placeholder="Email *" required />
//           <Select name="vehicle" required defaultValue="Select a vehicle">
//             {vehicles.map((v) => (
//               <option key={v}>{v}</option>
//             ))}
//           </Select>
//           <Input
//             type="date"
//             name="pickupDate"
//             placeholder="Pickup Date *"
//             required
//           />
//           <Input
//             type="time"
//             name="pickupTime"
//             placeholder="Pickup Time *"
//             required
//           />
//           <Input name="pickupAddress" placeholder="Pickup Address *" required />
//           <Input
//             name="dropoffAddress"
//             placeholder="Drop-off Address *"
//             required
//           />
//           <Input
//             type="date"
//             name="dropoffDate"
//             placeholder="Drop-off Date *"
//             required
//           />
//           <Input
//             type="time"
//             name="dropoffTime"
//             placeholder="Drop-off Time *"
//             required
//           />
//           <Input
//             name="occasion"
//             placeholder="Occasion"
//             required
//             className="md:col-span-2"
//           />
//           <TextArea
//             name="message"
//             placeholder="Other Information"
//             className="md:col-span-2"
//           />
//           <button
//             type="submit"
//             className="md:col-span-2 w-full rounded-md bg-[#a89447] py-2 text-white hover:bg-[#a89447]"
//           >
//             Send
//           </button>
//         </form>
//       )}
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { toast } from "sonner"; // ✅ Shadcn toast hook
// import { Toaster } from "@/components/ui/toaster"; // (place Toaster in layout once)

type Tab = "self" | "driver";

/* ---------- Reusable UI helpers ---------- */
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
  />
);

const Select = ({
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <div className="relative">
    <select
      {...props}
      className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
    >
      {children}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="h-4 w-4" viewBox="0 0 571.4 571.4">
        <path d="M571 393Q571 407 561 418L311 668Q300 679 286 679T261 668L11 418Q0 407 0 393T11 368 36 357H536Q550 357 561 368T571 393Z" />
      </svg>
    </div>
  </div>
);

const TextArea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...props}
    rows={3}
    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
  />
);

export default function QuoteForm() {
  const [tab, setTab] = useState<Tab>("self");
  const [loading, setLoading] = useState(false);

  const vehicles = [
    "Select a vehicle",
    "Mercedes E Class",
    "Mercedes S Class",
    "Mercedes V Class",
    "Rolls Royce Chullain",
    "Rolls Royce Phantom",
    "Rolls Royce Mybech",
    "Range Rover",
  ];

  /* ---------- handleSubmit shared between both forms ---------- */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return; // ✅ Prevent multiple clicks
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const endpoint = tab === "self" ? "/api/quote/self" : "/api/quote/driver";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast(
          tab === "self"
            ? "Your self-drive quote has been submitted!"
            : "Your driver quote has been submitted!"
        );
        form.reset();
      } else {
        toast.error("Something went wrong while submitting the form.");
      }
    } catch {
      toast.error("Network error or invalid response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto my-5 max-w-3xl rounded-lg bg-black p-6 shadow-lg z-10">
      <h2 className="mb-6 text-center text-2xl font-semibold text-white">
        Quote Now
      </h2>

      {/* Tabs */}
      <div className="mb-6 flex justify-center gap-2">
        {(["self", "driver"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => !loading && setTab(t)} // ✅ Disable tab switch while loading
            disabled={loading}
            className={`rounded-md px-6 py-2 text-sm font-medium capitalize transition ${
              tab === t
                ? "bg-[#a89447] text-white shadow"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            } ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {t === "self" ? "Self" : "With Driver"}
          </button>
        ))}
      </div>

      {/* Self-drive form */}
      {tab === "self" && (
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <Input name="name" placeholder="Name *" required disabled={loading} />
          <Input
            type="tel"
            name="phone"
            placeholder="Phone *"
            required
            disabled={loading}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email *"
            required
            disabled={loading}
          />
          <Select
            name="vehicle"
            required
            defaultValue="Select a vehicle"
            disabled={loading}
          >
            {vehicles.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </Select>
          <Input type="date" name="dateFrom" required disabled={loading} />
          <Input type="date" name="dateTo" required disabled={loading} />
          <TextArea
            name="message"
            placeholder="Other Information"
            disabled={loading}
            className="md:col-span-2"
          />
          <button
            disabled={loading}
            type="submit"
            className="md:col-span-2 w-full rounded-md bg-[#a89447] py-2 text-white hover:bg-[#8e7d3f] disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      )}

      {/* With-driver form */}
      {tab === "driver" && (
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <Input name="name" placeholder="Name *" required disabled={loading} />
          <Input
            type="tel"
            name="phone"
            placeholder="Phone *"
            required
            disabled={loading}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email *"
            required
            disabled={loading}
          />
          <Select
            name="vehicle"
            required
            defaultValue="Select a vehicle"
            disabled={loading}
          >
            {vehicles.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </Select>
          <Input type="date" name="pickupDate" required disabled={loading} />
          <Input type="time" name="pickupTime" required disabled={loading} />
          <Input
            name="pickupAddress"
            placeholder="Pickup Address *"
            required
            disabled={loading}
          />
          <Input
            name="dropoffAddress"
            placeholder="Drop-off Address *"
            required
            disabled={loading}
          />
          <Input type="date" name="dropoffDate" required disabled={loading} />
          <Input type="time" name="dropoffTime" required disabled={loading} />
          <Input
            name="occasion"
            placeholder="Occasion"
            disabled={loading}
            className="md:col-span-2"
          />
          <TextArea
            name="message"
            placeholder="Other Information"
            disabled={loading}
            className="md:col-span-2"
          />
          <button
            disabled={loading}
            type="submit"
            className="md:col-span-2 w-full rounded-md bg-[#a89447] py-2 text-white hover:bg-[#8e7d3f] disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      )}
    </section>
  );
}
