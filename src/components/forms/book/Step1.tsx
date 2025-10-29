"use client";

import { useAtom } from "jotai";
import { bookingAtom, updateBookingAtom } from "@/atoms/booking";
import type { BookingAtom } from "@/atoms/booking";
import { useRouter } from "next/navigation";

export interface AirportOption {
  label: string;
  value: string;
}

export const airports: AirportOption[] = [
  {
    label: "Aberdeen (ABZ)",
    value:
      "airport|Aberdeen Airport|Dyce||Aberdeen||AB21 7DU||-2.20351243019104|57.20049285888672|6|0|Aberdeen (ABZ)|",
  },
  {
    label: "Anglesey (VLY)",
    value:
      "airport|Anglesey Airport|Llanfair-Yn-Neubwll||Holyhead|Anglesey|LL65 3NX||-4.535094261169434|53.25489044189453|7|0|Anglesey (VLY)|",
  },
  {
    label: "Belfast City (BHD)",
    value:
      "airport|Belfast City Airport|Airport Road||Belfast|Antrim|BT3 9JH||-5.871830463409424|54.61761474609375|8|0|Belfast City (BHD)|",
  },
  {
    label: "Belfast International (BFS)",
    value:
      "airport|Belfast International Airport|4 Ballysessy Close|Glenavy|Crumlin|Antrim|BT29 4AB||-6.21480131149292|54.65922927856445|9|0|Belfast International (BFS)|",
  },
  {
    label: "Birmingham International (BHX)",
    value:
      "airport|Birmingham International Airport|Coventry Road||Birmingham||B26 3QJ||-1.7860490083694458|52.4527702331543|10|0|Birmingham International (BHX)|",
  },
  {
    label: "Bournemouth International (BOH)",
    value:
      "airport|Bournemouth International Airport|Parley Lane||Christchurch|Dorset|BH23 6SE||-1.840987205505371|50.78104019165039|11|0|Bournemouth International (BOH)|",
  },
  {
    label: "Bristol International (BRS)",
    value:
      "airport|Bristol International Airport|||Bristol||BS48 3DY||-2.712956666946411|51.385860443115234|12|0|Bristol International (BRS)|",
  },
  {
    label: "Cambridge International (CBG)",
    value:
      "airport|Cambridge International Airport|Newmarket Road||Cambridge||CB5 8RX||0.19196739792823792|52.21137237548828|13|0|Cambridge International (CBG)|",
  },
  {
    label: "Cardiff International (CWL)",
    value:
      "airport|Cardiff International Airport|Rhoose||Barry|South Glamorgan|CF62 3BD||-3.339676856994629|51.39851760864258|14|0|Cardiff International (CWL)|",
  },
  {
    label: "Doncaster Sheffield (DSA)",
    value:
      "airport|Doncaster Sheffield Airport|First Avenue|Finningley|Doncaster|South Yorkshire|DN9 3RH||-1.0054726600646973|53.477821350097656|15|0|Doncaster Sheffield (DSA)|",
  },
  {
    label: "Durham Tees Valley (MME)",
    value:
      "airport|Durham Tees Valley Airport|||Darlington|County Durham|DL2 1LU||-1.4335863590240479|54.511810302734375|16|0|Durham Tees Valley (MME)|",
  },
  {
    label: "East Midlands (EMA)",
    value:
      "airport|East Midlands Airport|Castle Donington||Derby|Derbyshire|DE74 2SA||-1.3321340084075928|52.82937240600586|17|0|East Midlands (EMA)|",
  },
  {
    label: "Edinburgh (EDI)",
    value:
      "airport|Edinburgh Airport|Almond Road|Newbridge|Edinburgh||EH12 9DN||-3.3691399097442627|55.94566345214844|18|0|Edinburgh (EDI)|",
  },
  {
    label: "Exeter (EXT)",
    value:
      "airport|Exeter Airport|Clyst Honiton||Exeter|Devon|EX5 2BD||-3.415330171585083|50.735042572021484|19|0|Exeter (EXT)|",
  },
  {
    label: "Farnborough (FAB)",
    value:
      "airport|The Business Aviation Centre|Farnborough Airport||Farnborough|Hampshire|GU14 6XA||-0.7773069739341736|51.28303909301758|20|0|Farnborough (FAB)|",
  },
  {
    label: "Glasgow (GLA)",
    value:
      "airport|Glasgow Airport|Paisley||Glasgow||PA3 2SW||-4.435052871704102|55.869075775146484|21|0|Glasgow (GLA)|",
  },
  {
    label: "Glasgow Prestwick (PIK)",
    value:
      "airport|Glasgow Prestwick Airport|||Prestwick||KA9 2PL||-4.610511302947998|55.509273529052734|22|0|Glasgow Prestwick (PIK)|",
  },
  {
    label: "Harrods - London Luton Airport",
    value:
      "airport|Harrods Aviation Ltd|President Way||Luton||LU2 9NW||-0.3756594955921173|51.88379669189453|23|0|Harrods - London Luton Airport|",
  },
  {
    label: "Harrods - London Stanstead Airport",
    value:
      "airport|Harrods Aviation Ltd|First Avenue||Stansted|Essex|CM24 1QQ||0.22447149455547333|51.88389587402344|24|0|Harrods - London Stanstead Airport|",
  },
  {
    label: "Hawarden Aviation Park",
    value:
      "airport|Aviation Park|Flint Road||Chester|Cheshire|CH4 0GZ||-2.9756977558135986|53.18686294555664|25|0|Hawarden Aviation Park|",
  },
  {
    label: "Humberside International (HUY)",
    value:
      "airport|Humberside International Airport|Kirmington||Ulceby|South Humberside|DN39 6YH||-0.34960880875587463|53.576045989990234|26|0|Humberside International (HUY)|",
  },
  {
    label: "Inverness (INV)",
    value:
      "airport|Inverness Airport|Dalcross||Inverness|Inverness-shire|IV2 7JB||-4.048703193664551|57.54327392578125|27|0|Inverness (INV)|",
  },
  {
    label: "Leeds Bradford (LBA)",
    value:
      "airport|Leeds Bradford Airport|White House Lane|Yeadon|Leeds|West Yorkshire|LS19 7TU||-1.661530613899231|53.867942810058594|28|0|Leeds Bradford (LBA)|",
  },
  {
    label: "Liverpool John Lennon (LPL)",
    value:
      "airport|Liverpool John Lennon Airport|Hale Rd||Liverpool|Merseyside|L24 1YD||-2.8523459434509277|53.33511734008789|29|0|Liverpool John Lennon (LPL)|",
  },
  {
    label: "London City (LCY)",
    value:
      "airport|London City Airport|Hartmann Road|Royal Docks|London||E16 2PX||0.049518000334501266|51.504844665527344|30|0|London City (LCY)|",
  },
  {
    label: "London Gatwick (LGW) - North terminal",
    value:
      "airport|North Terminal|London Gatwick Airport||Gatwick|West Sussex|RH6 0NP||-0.17785820364952087|51.16047286987305|31|9|London Gatwick (LGW)|North terminal",
  },
  {
    label: "London Gatwick (LGW) - South Terminal",
    value:
      "airport|South Terminal|London Gatwick Airport||Gatwick|West Sussex|RH6 0NP||-0.16300000250339508|51.1561164855957|31|10|London Gatwick (LGW)|South Terminal",
  },
  {
    label: "London Heathrow (LHR) - T1",
    value:
      "airport|Terminal 1|London Heathrow Airport||Hayes|Middlesex|TW6 1AP||-0.4509736895561218|51.472373962402344|3|1|London Heathrow (LHR)|T1",
  },
  {
    label: "London Heathrow (LHR) - T2",
    value:
      "airport|Terminal 2|London Heathrow Airport||Hayes|Middlesex|TW6 1EW||-0.4496071934700012|51.469573974609375|3|2|London Heathrow (LHR)|T2",
  },
  {
    label: "London Heathrow (LHR) - T3",
    value:
      "airport|Terminal 3|London Heathrow Airport||Hayes|Middlesex|TW6 1QG||-0.4592907130718231|51.47043228149414|3|3|London Heathrow (LHR)|T3",
  },
  {
    label: "London Heathrow (LHR) - T4",
    value:
      "airport|Terminal 4|London Heathrow Airport||Hayes|Middlesex|TW6 3XA||-0.4473622143268585|51.45969772338867|3|4|London Heathrow (LHR)|T4",
  },
  {
    label: "London Heathrow (LHR) - T5",
    value:
      "airport|Terminal 5|London Heathrow Airport||Hayes|Middlesex|TW6 2GA||-0.49168339371681213|51.473419189453125|3|5|London Heathrow (LHR)|T5",
  },
  {
    label: "London Luton (LTN)",
    value:
      "airport|London Luton Airport|Airport Way||Luton||LU2 9LY||-0.37174710631370544|51.87626647949219|35|0|London Luton (LTN)|",
  },
  {
    label: "London Southend (SEN)",
    value:
      "airport|London Southend Airport|||Southend-on-Sea|Essex|SS2 6YF||0.6924774050712585|51.570194244384766|33|0|London Southend (SEN)|",
  },
  {
    label: "London Stansted (STN)",
    value:
      "airport|London Stansted Airport|Bassingbourn Road||Stansted|Essex|CM24 1QW||0.25251150131225586|51.88389205932617|34|0|London Stansted (STN)|",
  },
  {
    label: "Manchester (MAN) - T1",
    value:
      "airport|Terminal 1|Manchester Airport|Outwood Lane|Manchester|Lancashire|M90 1QX||-2.274675130844116|53.36146926879883|5|6|Manchester (MAN)|T1",
  },
  {
    label: "Manchester (MAN) - T2",
    value:
      "airport|Terminal 2|Manchester Airport|Outwood Lane|Manchester|Lancashire|M90 1QX||-2.279411554336548|53.36629104614258|5|7|Manchester (MAN)|T2",
  },
  {
    label: "Manchester (MAN) - T3",
    value:
      "airport|Terminal 3|Manchester Airport|Outwood Lane|Manchester|Lancashire|M90 1QX||-2.2696056365966797|53.36067581176758|5|8|Manchester (MAN)|T3",
  },
  {
    label: "Newcastle International (NCL)",
    value:
      "airport|Newcastle International Airport|Woolsington||Newcastle upon Tyne|Tyne and Wear|NE13 8BZ||-1.693128228187561|55.039344787597656|37|0|Newcastle International (NCL)|",
  },
  {
    label: "Newquay (NQY)",
    value:
      "airport|Newquay Airport|Carloggas|St. Mawgan|Newquay|Cornwall|TR8 4RQ||-4.9999589920043945|50.44609832763672|38|0|Newquay (NQY)|",
  },
  {
    label: "Norwich (NWI)",
    value:
      "airport|Norwich Airport|Amsterdam Way||Norwich|Norfolk|NR6 6JA||1.2772856950759888|52.66962432861328|39|0|Norwich (NWI)|",
  },
  {
    label: "Signature Edinburgh (EDI)",
    value:
      "airport|Signature Flight Support - Edinburgh Airport|The Business Aviation Centre|Edinburgh Airport|Edinburgh||EH12 9DN||-3.347813844680786|55.95087814331055|47|0|Signature Edinburgh (EDI)|",
  },
  {
    label: "Signature Glasgow (GLA)",
    value:
      "airport|Signature Flight Support - Glasgow Airport|The Business Aviation Centre|Glasgow Airport|Glasgow||PA3 2RY||-4.425485134124756|55.86920166015625|48|0|Signature Glasgow (GLA)|",
  },
  {
    label: "Signature London Biggin Hill (BQH)",
    value:
      "airport|Signature Flight Support BQH - London Biggin Hill Airport|510 Churchill Way|Biggin Hill|Westerham|Greater London|TN16 3BN||0.02983980067074299|51.32182312011719|41|0|Signature London Biggin Hill (BQH)|",
  },
  {
    label: "Signature London Gatwick (LGW)",
    value:
      "airport|Signature Flight Support - London Gatwick Airport|Sussex Suite|Queens Gate Road|Gatwick|West Sussex|RH6 0NP||-0.1643880009651184|51.15788650512695|42|0|Signature London Gatwick (LGW)|",
  },
  {
    label: "Signature London Heathrow (LHR)",
    value:
      "airport|Signature Flight Support - London Heathrow Airport|Aviation House|Southern Perimeter Road|Hounslow|Middlesex|TW6 3AE||-0.4389190971851349|51.4604606628418|43|0|Signature London Heathrow (LHR)|",
  },
  {
    label: "Signature London Luton (LTN)",
    value:
      "airport|Signature Flight Support - London Luton Airport|Percival Way||Luton||LU2 9PA||-0.3816649913787842|51.87798309326172|44|0|Signature London Luton (LTN)|",
  },
  {
    label: "Signature Manchester (MAN)",
    value:
      "airport|Signature Flight Support - Manchester Airport|Business Aviation Centre|Fairey's Way|Manchester||M90 5NE||-2.28192400932312|53.35611343383789|45|0|Signature Manchester (MAN)|",
  },
  {
    label: "Signature Southampton (SOU)",
    value:
      "airport|Signature Flight Support - Southampton Airport|Hangar 2|Mitchell Way|Southampton|Hampshire|SO18 2HG||-1.3592108488082886|50.953678131103516|46|0|Signature Southampton (SOU)|",
  },
  {
    label: "Southampton (SOU)",
    value:
      "airport|Southampton International Airport|Wide Lane||Southampton|Hants|SO18 2NL||-1.365071177482605|50.948448181152344|40|0|Southampton (SOU)|",
  },
  {
    label: "XLR Liverpool (XLR)",
    value:
      "airport|XLR Executive Jet Centre|Liverpool John Lennon Airport|Hale Rd|Liverpool|Merseyside|L24 1YD||-2.8613672256469727|53.33711242675781|49|0|XLR Liverpool (XLR)|",
  },
];

export default function Step1() {
  const removeViaPoint = (idx: number) =>
    update({ viaPoints: booking.viaPoints.filter((_, i) => i !== idx) });
  const [booking] = useAtom(bookingAtom);
  const [, update] = useAtom(updateBookingAtom);
  const router = useRouter();

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
    router.push("/confirmation");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto max-w-3xl space-y-6 rounded-2xl bg-black text-white p-6 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-white">Journey Details</h2>

      {/* Service type */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {(["airport", "cruise", "hourly"] as const).map((s) => (
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
        <label className="block text-sm font-medium text-white">
          Pick-up location
        </label>
        <select
          className="mt-1 w-full rounded-md py-2 px-1 bg-black border-black shadow-sm"
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

      {/* Via points */}
      <div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-white">Via points</label>
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
              className="shrink-0 text-white hover:text-white"
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
              <label className="block text-sm font-medium text-gray-700">
                Flight type
              </label>
              <select
                className="mt-1 w-full rounded-md py-1 px-1 bg-black border-gray-300 shadow-sm"
                value={booking.flightType}
                onChange={(e) => onChange("flightType", e.target.value as any)}
              >
                <option value="arrival">Arrival</option>
                <option value="departure">Departure</option>
              </select>
            </div>
            <div>
              <label className="block text-sm  font-medium text-gray-700">
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
          <label className="block text-sm font-medium text-gray-700">
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
          <label className="block text-sm font-medium text-gray-700">
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
              <label className="block text-sm font-medium text-gray-700">
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
