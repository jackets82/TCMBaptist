import Image from "next/image";
import Link from "next/link";

function ExtraStuffTile({ link = "#", title = "OTHER STUFF", image }) {
  return (
    <div className="h-52 w-52 mb-10 relative">
      <Link href={link} scroll={false}>
        <Image src="/bible.jpg" fill className=" rounded-full" />
        <p className="absolute flex flex-col left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-0 bg-slate-300 w-full items-center rounded">
          {title}
        </p>
      </Link>
    </div>
  );
}

export default ExtraStuffTile;
