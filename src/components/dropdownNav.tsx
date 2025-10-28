"use client";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";

export type Item = {
  label: string;
  href: string;
  children?: Item[];
};

export default function Dropdown({
  label,
  items,
}: {
  label: string;
  items: Item[];
}) {
  const [open, setOpen] = useState(false);

  /* close when any inner link is clicked */
  const close = () => setOpen(false);

  return (
    <Menu as="div" className="relative">
      {({ open: menuOpen }) => (
        <>
          {/* Label is a real link – click stops propagation so menu does not reopen */}
          <Menu.Button
            as={Link}
            href={items[0]?.href.replace(/\/[^/]+$/, "")} // /services
            className="flex items-center gap-1 outline-none text-white hover:text-[#a89447]"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            {label}
            <ChevronDownIcon className="w-4 h-4" />
          </Menu.Button>

          <Transition
            as={Fragment}
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className="absolute left-0 mt-2 w-56 origin-top-right bg-black/90 backdrop-blur rounded-md shadow-lg ring-1 ring-[#a89447] ring-opacity-5 focus:outline-none will-change-transform backface-hidden z-50"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <div className="py-1">
                {items.map((item) =>
                  item.children ? (
                    /* nested block */
                    <div key={item.label} className="relative group">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href={item.href}
                            className={`${
                              active ? "bg-black/20" : ""
                            } group flex w-full items-center justify-between px-4 py-2 text-sm text-white`}
                            onClick={close}
                          >
                            {item.label}
                            <ChevronDownIcon className="w-3 h-3 rotate-[-90deg]" />
                          </Link>
                        )}
                      </Menu.Item>
                      {/* sub panel – appears on hover of parent item */}
                      <div className="hidden group-hover:block absolute left-full top-0 mt-0 ml-2 w-56 bg-black/90 backdrop-blur rounded-md shadow-lg ring-1 ring-[#a89447] ring-opacity-5">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-white hover:bg-black/20"
                            onClick={close}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Menu.Item key={item.href}>
                      {({ active }) => (
                        <Link
                          href={item.href}
                          className={`${
                            active ? "bg-black/20" : ""
                          } block px-4 py-2 text-sm text-white`}
                          onClick={close}
                        >
                          {item.label}
                        </Link>
                      )}
                    </Menu.Item>
                  )
                )}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
