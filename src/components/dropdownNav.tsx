"use client";
import { Fragment, useState, useRef } from "react";
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

  const close = () => setOpen(false);

  return (
    <Menu as="div" className="relative">
      {/* Top-level label – real link */}
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
          className="absolute left-0 mt-2 w-56 origin-top-right bg-black/90 backdrop-blur rounded-md shadow-lg ring-1 ring-[#a89447] ring-opacity-5 focus:outline-none z-50"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="py-1">
            {items.map((item) =>
              item.children ? (
                <NestedItem key={item.label} item={item} closeRoot={close} />
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
    </Menu>
  );
}

/* ---------- sub-menu component ---------- */
function NestedItem({
  item,
  closeRoot,
}: {
  item: Item;
  closeRoot: () => void;
}) {
  const [show, setShow] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    setShow(true);
  };
  const leave = () => {
    timer.current = setTimeout(() => setShow(false), 60); // small debounce
  };

  return (
    <Menu.Item>
      {({ active }) => (
        <div onMouseEnter={enter} onMouseLeave={leave} className="relative">
          <Link
            href={item.href}
            className={`${
              active ? "bg-black/20" : ""
            } flex items-center justify-between px-4 py-2 text-sm text-white`}
            onClick={closeRoot}
          >
            {item.label}
            <ChevronDownIcon className="w-3 h-3 -rotate-90" />
          </Link>

          {/* sub panel – flush against parent item */}
          <div
            className={`absolute left-full top-0 ml-0 w-56 bg-black/90 backdrop-blur rounded-md shadow-lg ring-1 ring-[#a89447] ring-opacity-5 transition-opacity ${
              show
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onMouseEnter={enter} // treat sub-panel as part of the item
            onMouseLeave={leave}
          >
            {item.children!.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                className="block px-4 py-2 text-sm text-white hover:bg-black/20"
                onClick={closeRoot}
              >
                {sub.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </Menu.Item>
  );
}
