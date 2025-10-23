"use client";
import { Fragment, use } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Item = { label: string; href: string };

export default function Dropdown({
  label,
  items,
}: {
  label: string;
  items: Item[];
}) {
  const pathname = usePathname();
  const isOpen = items.some((i) => pathname.startsWith(i.href));

  return (
    <Menu as="div" className="relative">
      <Menu.Button
        className={`flex items-center gap-1 outline-none ${
          isOpen ? "text-[#a89447]" : "text-white"
        } hover:text-[#a89447]`}
      >
        {label}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y bg-black shadow-lg ring-1 ring-[#a89447] ring-opacity-5 focus:outline-none">
          {items.map((item) => (
            <Menu.Item key={item.href}>
              {({ active }) => (
                <Link
                  href={item.href}
                  className={`${
                    active ? "bg-black" : ""
                  } group flex w-full items-center px-4 py-2 text-sm text-white`}
                >
                  {item.label}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
