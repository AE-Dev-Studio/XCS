"use client";
import { Fragment, useState, useRef, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";

export type Item = { label: string; href: string; children?: Item[] };

export default function Dropdown({
  label,
  items,
}: {
  label: string;
  items: Item[];
}) {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const close = () => setOpen(false);

  const handleClick = (e: React.MouseEvent) => {
    if (!isDesktop) {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button
        as={isDesktop ? Link : "button"}
        href={isDesktop ? items[0]?.href.replace(/\/[^/]+$/, "") : undefined}
        className="flex items-center gap-1 outline-none text-white hover:text-[#a89447]"
        onClick={handleClick}
        onMouseEnter={() => isDesktop && setOpen(true)}
        onMouseLeave={() => isDesktop && setOpen(false)}
      >
        {label}
        <ChevronDownIcon
          className={`w-4 h-4 transition-transform ${
            open ? "rotate-0" : "-rotate-90"
          }`}
        />
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
          className={`gpu-layer absolute z-50 mt-2 bg-black/90 backdrop-blur rounded-md shadow-lg ring-1 ring-[#a89447] ring-opacity-5 focus:outline-none
            ${
              isDesktop
                ? "left-0 w-56 origin-top-right"
                : "fixed left-0 right-0 top-auto mt-1 w-[40%] px-4"
            }`}
          onMouseEnter={() => isDesktop && setOpen(true)}
          onMouseLeave={() => isDesktop && setOpen(false)}
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
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const enter = () => {
    if (isDesktop) setShow(true);
  };
  const leave = () => {
    if (isDesktop) setTimeout(() => setShow(false), 60);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!isDesktop) {
      e.preventDefault();
      e.stopPropagation();
      setShow((prev) => !prev);
    }
  };

  return (
    <Menu.Item>
      {({ active }) => (
        <div
          className={`relative ${
            !isDesktop ? "w-full flex flex-col gap-1" : ""
          }`}
          onMouseEnter={enter}
          onMouseLeave={leave}
        >
          <button
            onClick={handleClick}
            className={`flex w-full items-center justify-between px-4 py-2 text-sm text-white rounded-md ${
              active ? "bg-black/20" : ""
            }`}
          >
            <span>{item.label}</span>
            <ChevronDownIcon
              className={`w-3 h-3 transition-transform ${
                show ? "rotate-0" : "-rotate-90"
              }`}
            />
          </button>

          <div
            className={`gpu-layer md:absolute md:left-full md:top-0 md:w-60 bg-black/90 backdrop-blur rounded-md shadow-lg ring-1 ring-[#a89447] ring-opacity-5 transition-all duration-200 overflow-hidden
              ${
                show
                  ? "max-h-screen opacity-100 pointer-events-auto"
                  : "max-h-0 opacity-0 pointer-events-none"
              }
              ${
                isDesktop
                  ? "absolute"
                  : "relative ml-4 w-[calc(100%-1rem)] mt-1 flex flex-col gap-1"
              }`}
          >
            {item.children!.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                className="block px-4 py-2 text-sm text-white hover:bg-black/20 rounded-md"
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
