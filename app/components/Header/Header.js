"use client";
import Image from "next/image";
import Link from "next/link";
import HeaderDropDown from "./HeaderDropDown";
import { useEffect, useState } from "react";
import BurgerDropDown from "./BurgerDropDown";

function Header() {
  return (
    <div
      className={`bg-white text-black font-bold py-3 top-0 z-20 w-full transition-all duration-300 `}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-10 xl:px-0">
        <div className=" flex">
          <div className=" w-44">
            <Link href="/#" scroll={false}>
              <Image src="/mainLogoBlack.png" width={500} height={500} alt="" />
            </Link>
          </div>
        </div>
        <div className="hidden lg:inline">
          <ul className=" flex gap-5">
            <Link href="/#" scroll={false}>
              <li>Home</li>
            </Link>
            <HeaderDropDown
              headerLink="/Subpages/About"
              title="About Us"
              links={[
                { href: "/Subpages/About/Beliefs", label: "What we believe" },
                { href: "/Subpages/About/Baptism", label: "Baptism" },
                { href: "/Subpages/About/Membership", label: "Membership" },
                { href: "/Subpages/About/WhoWeAre", label: "Who we are" },
                { href: "/#", label: "Mission partners" },
                { href: "/#", label: "Our history" },
                { href: "/#", label: "FAQs" },
              ]}
            />
            <HeaderDropDown
              headerLink="#"
              title="Get Involved"
              links={[
                { href: "/", label: "Services" },
                { href: "/#", label: "Extra time" },
                { href: "/#", label: "Sunday school" },
                { href: "/#", label: "Young adults" },
                {
                  href: "/Subpages/Get_Involved/House_Groups",
                  label: "Housegroups",
                },
                { href: "/#", label: "Children's and youth groups" },
                { href: "/#", label: "Christianity explored" },
                { href: "/#", label: "Hope explored" },
                { href: "/#", label: "Men/women" },
                { href: "/#", label: "Music ministry team application" },
              ]}
            />
            <HeaderDropDown
              headerLink="#"
              title="Resources"
              links={[
                { href: "/", label: "Sermons" },
                { href: "/#", label: "Sunday school videos" },
                { href: "/#", label: "FAQs about christianity" },
                { href: "/#", label: "Recommendations" },
                { href: "/", label: "Useful links" },
                { href: "/#", label: "Members" },
                { href: "/#", label: "Bookstall and resources center" },
                { href: "/#", label: "Media archive" },
              ]}
            />
            <HeaderDropDown
              headerLink="#"
              title="Contact us"
              links={[{ href: "/", label: "Find us" }]}
            />
            <Link href="/#" className=" " scroll={false}>
              <li>Donate</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
