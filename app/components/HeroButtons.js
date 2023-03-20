import Link from "next/link";

function HeroButtons({ text, link }) {
  return (
    <Link
      href={link}
      className="ring-white ring-offset-2 ring-1 px-5 py-2 text-lg w-48
     hover:bg-black hover:bg-opacity-5 hover:shadow
      transition-all duration-150
    "
    >
      {text}
    </Link>
  );
}

export default HeroButtons;
