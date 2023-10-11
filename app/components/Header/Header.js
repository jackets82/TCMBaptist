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
            <Link href="/#">
              <Image src="/mainLogoBlack.png" width={500} height={500} alt="" />
            </Link>
          </div>
        </div>
        <div className="hidden lg:inline">
          <ul className=" flex gap-5">
            <Link href="/#">
              <li>Home</li>
            </Link>
            <HeaderDropDown
              headerLink="/Subpages/About"
              title="About Us"
              links={[
                { href: "/Subpages/About/Beliefs", label: "What we believe" },
                { href: "/Subpages/About/Baptism", label: "Baptism" },
                { href: "/Subpages/About/Membership", label: "Membership" },
                { href: "/#", label: "Who we are" },
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
                { href: "/", label: "Housegroups" },
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
            <Link href="/#" className=" ">
              <li>Donate</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

// const top_colour = "bg-none";
// const scroll_colour = "bg-sky-600";
// const top_text = "text-lime-500";
// const scroll_text = "text-white";
// const black_logo = "/mainLogoBlack.png";
// const white_logo = "/mainLogo.png";

// const [backgroundColour, setbackgroundColour] = useState(top_colour);
// const [textColour, settextColour] = useState(top_text);

// useEffect(() => {
//   const handleScroll = () => {
//     if (window.scrollY >= 1) {
//       setbackgroundColour(scroll_colour);
//       settextColour(scroll_text);
//       setLogo(white_logo);
//     } else {
//       setbackgroundColour(top_colour);
//       settextColour(top_text);
//       setLogo(black_logo);
//     }
//   };
//   window.addEventListener("scroll", handleScroll);
// }, []);
