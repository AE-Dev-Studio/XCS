"use client";
// components/Navbar.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "./dropdownNav";

const SERVICES: { label: string; href: string }[] = [
  {
    label: "Airport Chauffeur Manchester",
    href: "/services/airport-chauffeur-manchester",
  },
  { label: "Corporate Services", href: "/services/corporate-services" },
  { label: "Event Services", href: "/services/event-services" },
  { label: "Close Protection", href: "/services/close-protection" },
  { label: "Wedding Service", href: "/services/wedding-service" },
];

const LUXURY_RENT: { label: string; href: string }[] = [
  {
    label: "Ferrari Purosangue",
    href: "/services/luxury-car-rent/ferrari-purosangue",
  },
  {
    label: "Lamborghini Huracán EVO",
    href: "/services/luxury-car-rent/lamborghini-huracan-evo",
  },
  {
    label: "Lamborghini Urus Performante",
    href: "/services/luxury-car-rent/lamborghini-urus-performante",
  },
  {
    label: "Lamborghini Aventador SVJ Roadster",
    href: "/services/luxury-car-rent/lamborghini-aventador-svj-roadster",
  },
  {
    label: "Mercedes-Benz S-Class",
    href: "/services/luxury-car-rent/mercedes-benz-s-class",
  },
  {
    label: "Rolls-Royce Phantom",
    href: "/services/luxury-car-rent/rolls-royce-phantom",
  },
  {
    label: "Rolls-Royce Ghost EWB",
    href: "/services/luxury-car-rent/rolls-royce-ghost-ewb",
  },
  {
    label: "Rolls-Royce Phantom VIII",
    href: "/services/luxury-car-rent/rolls-royce-phantom-viii",
  },
  {
    label: "Rolls-Royce Cullinan Black Badge",
    href: "/services/luxury-car-rent/rolls-royce-cullinan-black-badge",
  },
];

const FLEET: { label: string; href: string }[] = [
  { label: "Mercedes S Class", href: "/fleet/mercedes-s-class" },
  { label: "Mercedes V Class", href: "/fleet/mercedes-v-class" },
  { label: "Mercedes E Class", href: "/fleet/mercedes-e-class" },
  { label: "Range Rover Vogue", href: "/fleet/range-rover-vogue" },
  { label: "Rolls Royce Phantom", href: "/fleet/rolls-royce-phantom" },
  { label: "Rolls Royce Ghost", href: "/fleet/rolls-royce-ghost" },
];

export default function Navbar() {
  const router = usePathname();
  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "About Us", href: "/about-us" },
    {
      label: "Services",
      href: "/services",
      children: [
        ...SERVICES,
        {
          label: "Luxury car rent",
          href: "/services/luxury-car-rent",
          children: LUXURY_RENT,
        },
      ],
    },
    {
      label: "Fleet",
      href: "/fleet",
      children: FLEET,
    },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ'S", href: "/faqs" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const isActive = (href: string) => router === href;

  return (
    <nav className="max-w-screen-6xl mx-auto px-4">
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white text-sm md:text-base">
        {navLinks.map((link) =>
          link.children ? (
            <li key={link.label}>
              <Dropdown
                label={link.label}
                items={link.children.map((c: any) =>
                  c.children
                    ? { label: c.label, href: c.href } // parent of nested
                    : c
                )}
              />
            </li>
          ) : (
            <li key={link.label}>
              <Link
                href={link.href}
                className={
                  isActive(link.href)
                    ? "text-[#a89447]"
                    : "text-white hover:text-[#a89447]"
                }
              >
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
