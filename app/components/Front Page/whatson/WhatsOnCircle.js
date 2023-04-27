import Image from "next/image";
import Link from "next/link";

function WhatsOnCircle({ title, image }) {
  return (
    <>
      <Link href="#" className=" flex flex-col items-center gap-2">
        <img
          src={image}
          alt=""
          className=" sm:rounded-full overflow-hidden md:h-32 sm:w-auto w-screen h-auto"
        />
        <p className="md:text-base text-2xl">{title}</p>
      </Link>
    </>
  );
}

export default WhatsOnCircle;
