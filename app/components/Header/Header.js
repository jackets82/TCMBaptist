import Image from "next/image";
import Link from "next/link";
import HeaderDropDown from "./HeaderDropDown";

function Header() {
  return (
    <div className=" bg-black py-3 top-0 z-10 absolute w-full">
      <div className=" max-w-6xl mx-auto flex justify-between items-center md:px-10 px-2 xl:px-0">
        <div className=" flex">
          <div className=" w-44">
            <Link href="/#">
              <Image src="/mainLogo.png" width={500} height={500} alt="" />
            </Link>
          </div>
        </div>

        <div className=" text-white">
          <div className=" md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className=" hidden md:inline">
            <ul className=" flex gap-5">
              <Link href="/#">
                <li>Home</li>
              </Link>

              <HeaderDropDown
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
    </div>
  );
}

export default Header;
