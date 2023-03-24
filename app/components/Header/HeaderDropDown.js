"use client";

import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

function HeaderDropDown({ links, title }) {
  return (
    <Menu className=" relative" as="div">
      <Menu.Button
        className=" inline-flex w-full justify-center  
    focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
      "
      >
        {title}
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
        <Menu.Items
          className=" absolute right-0 origin-top-right mt-4 w-56 divide-y divide-gray-100
        bg-white shadowlg ring-1 ring-black ring-opacity-5 focus:outline-none
        "
        >
          {links.map((link) => (
            <div className=" p1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${
                      active ? " bg-gray-500" : "text-gray-900"
                    } group flex  p-1 items-center text`}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default HeaderDropDown;
