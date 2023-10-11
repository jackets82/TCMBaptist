import Image from "next/image";
import Link from "next/link";

function WhatElseCard({ image, text }) {
  return (
    <>
      <div className=" h-96 w-full rounded-md bg-white relative overflow-hidden hover:shadow-lg hover:-translate-y-[1px] transition-all duration-150">
        <Link href="#">
          <Image
            src={image}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className=" absolute flex flex-col left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-0 bg-orange-600 w-full items-center">
            <div>
              <p className=" text-white font-bold text-3xl">{text}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default WhatElseCard;
