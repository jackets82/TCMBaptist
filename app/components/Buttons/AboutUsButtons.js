import Link from "next/link";

function AboutUsButtons({ link, title }) {
  return (
    <Link href={link} scroll={false}>
      <button className="py-2 w-40 ring-2 hover:shadow-lg hover:bg-gray-300 text-green-600 ring-black transition-all duration-300">
        {title}
      </button>
    </Link>
  );
}

export default AboutUsButtons;
