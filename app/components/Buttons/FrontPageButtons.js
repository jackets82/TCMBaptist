import Link from "next/link";

function FrontPageButtons({ link, title }) {
  return (
    <button className="py-2 w-40 ring-2 hover:shadow-lg hover:bg-gray-300 text-black ring-black transition-all duration-300">
      <Link href={link}>{title}</Link>
    </button>
  );
}

export default FrontPageButtons;
