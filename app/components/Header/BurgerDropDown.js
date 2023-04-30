"use client";

import { Menu } from "@headlessui/react";

function BurgerDropDown({ button }) {
  return (
    <Menu as="div" className="relative inline-flex justify-center">
      <Menu.Button>{button}</Menu.Button>
      <Menu.Items className="absolute bg-red-600 origin-left -right-2 top-[55px] w-screen px-2">
        <Menu.Item as="div">Menu stuff</Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default BurgerDropDown;
