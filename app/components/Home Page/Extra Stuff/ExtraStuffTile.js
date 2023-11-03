import Image from "next/image";
import Link from "next/link";

function ExtraStuffTile({ link, title, image, id }) {
  return (
    <div className=" w-full h-[350px] relative">
      <Link href={link} scroll={false}>
        <Image src={`${image}`} fill className="" />
        <h1 className="absolute flex flex-col left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-0 bg-slate-300 w-full items-center">
          {title}
        </h1>
      </Link>
    </div>
  );
}

export default ExtraStuffTile;
