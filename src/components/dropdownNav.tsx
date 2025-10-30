"use client";
import { Fragment, useState, useRef, useEffect } from "react";
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
      {/* Top-level label */}
      <Menu.Button
        as={Link}
        href={items[0]?.href.replace(/\/[^/]+$/, "")} // e.g. /services
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
          className="gpu-layer absolute left-0 mt-2 w-56 origin-top-right bg-black/90 backdrop-blur rounded-md shadow-lg ring-1 ring-[#a89447] ring-opacity-5 focus:outline-none z-50"
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

const NestedItem = ({
  item,
  closeRoot,
}: {
  item: Item;
  closeRoot: () => void;
}) => {
  const [show, setShow] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect viewport size
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const enter = () => {
    if (!isDesktop) return;
    if (timer.current) clearTimeout(timer.current);
    setShow(true);
  };

  const leave = () => {
    if (!isDesktop) return;
    timer.current = setTimeout(() => setShow(false), 60);
  };

  // Toggle dropdown for mobile when clicking the Chevron only
  const handleChevronClick = (e: React.MouseEvent) => {
    if (isDesktop) return;
    e.preventDefault();
    e.stopPropagation();
    setShow((prev) => !prev);
  };

  return (
    <Menu.Item
      as="div"
      onMouseEnter={enter}
      onMouseLeave={leave}
      className="relative"
    >
      {({ active }) => (
        <>
          <div
            className={`flex items-center justify-between px-4 py-2 text-sm text-white ${
              active ? "bg-black/20" : ""
            }`}
          >
            {/* Clicking the label navigates normally */}
            <Link href={item.href} className="flex-1" onClick={closeRoot}>
              {item.label}
            </Link>

            {/* Clicking Chevron toggles submenu on mobile */}
            <button
              onClick={handleChevronClick}
              className="ml-2 flex-shrink-0 focus:outline-none md:hidden"
            >
              <ChevronDownIcon
                className={`w-3 h-3 transition-transform ${
                  show ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>

            {/* Desktop Chevron (not clickable, only visual) */}
            <ChevronDownIcon
              className={`hidden md:block w-3 h-3 transition-transform ${
                show ? "rotate-0" : "-rotate-90"
              }`}
            />
          </div>

          {/* Submenu */}
          <div
            className={`gpu-layer md:absolute md:left-full md:top-0 md:ml-0 md:w-60 md:h-80 bg-black/90 backdrop-blur rounded-md shadow-lg ring-1 ring-[#a89447] ring-opacity-5 transition-all duration-200 overflow-hidden ${
              show
                ? "max-h-screen opacity-100 pointer-events-auto"
                : "max-h-0 opacity-0 pointer-events-none"
            } ${!isDesktop ? "relative ml-4 mt-1 w-[90%]" : ""}`}
            onMouseEnter={enter}
            onMouseLeave={leave}
          >
            {item.children!.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                className="block px-4 py-1 text-sm text-white hover:bg-black/20"
                onClick={closeRoot}
              >
                {sub.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </Menu.Item>
  );
};
