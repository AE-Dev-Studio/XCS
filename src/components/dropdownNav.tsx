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
          className=" gpu-layer absolute left-0 mt-2 w-56 origin-top-right bg-black/90 backdrop-blur rounded-md shadow-lg ring-1 ring-[#a89447] ring-opacity-5 focus:outline-none z-50"
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

function NestedItem({
  item,
  closeRoot,
}: {
  item: Item;
  closeRoot: () => void;
}) {
  const [show, setShow] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null); // real DOM node

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  /* desktop hover helpers */
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const enter = () => {
    if (!isDesktop) return;
    if (timer.current) clearTimeout(timer.current);
    setShow(true);
  };
  const leave = () => {
    if (!isDesktop) return;
    timer.current = setTimeout(() => setShow(false), 60);
  };

  /* mobile tap toggles */
  const handleParentClick = (e: React.MouseEvent) => {
    if (isDesktop) return;
    if (!show) {
      e.preventDefault();
      setShow(true);
    }
  };

  return (
    <div
      ref={nodeRef}
      onMouseEnter={enter}
      onMouseLeave={leave}
      className="relative"
    >
      {/* Menu.Item is now a pure wrapper – ref is on the outer div */}
      <Menu.Item>
        {({ active }) => (
          <Link
            href={item.href}
            className={`${
              active ? "bg-black/20" : ""
            } flex items-center justify-between px-4 py-2 text-sm text-white`}
            onClick={(e) => {
              if (isDesktop) closeRoot();
              handleParentClick(e);
            }}
          >
            {item.label}
            <ChevronDownIcon
              className={`w-3 h-3 transition-transform ${
                show ? "rotate-0" : "-rotate-90"
              }`}
            />
          </Link>
        )}
      </Menu.Item>

      {/* sub panel – same as before */}
      <div
        className={`gpu-layer md:absolute md:left-full md:top-0 md:ml-0 w-full md:w-56 bg-black/90 backdrop-blur rounded-md shadow-lg ring-1 ring-[#a89447] ring-opacity-5 transition-all duration-200 ${
          show
            ? "max-h-screen opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
        onMouseEnter={enter}
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
  );
}
