import Image from "next/image";
import Link from "next/link";

function JoinUsCards({ title, link, image = "/cross.jpg" }) {
  return (
    <button className=" rounded-2xl w-full h-52 relative overflow-hidden hover:cursor-pointer">
      <Link href={link} scroll={false}>
        <Image src={image} fill style={{ objectFit: "cover" }} />{" "}
        <div className="w-full h-5 absolute bottom-5 text-center">
          <p className=" text-xl font-bold tracking-wider text-white">
            {title}
          </p>
        </div>
      </Link>
    </button>
  );
}

export default JoinUsCards;
