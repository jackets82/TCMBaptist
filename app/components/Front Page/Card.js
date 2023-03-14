import Image from "next/image";

function Card({ image, title, blurb, buttonText }) {
  return (
    <div className="text-center bg-slate-600 text-white rounded-md shadow-md overflow-hidden relative flex flex-col max-w-sm mx-auto">
      <div className="relative h-44">
        <Image src={image} fill style={{ objectFit: "cover" }} />
      </div>
      <div className=" px-3 py-10">
        <h1 className=" text-2xl">{title}</h1>
        <p className=" pb-10">{blurb}</p>
      </div>

      <button className=" bg-black px-5 py-1 rounded absolute transform -translate-x-1/2 -translate-y-1/2  left-1/2 bottom-2">
        {buttonText}
      </button>
    </div>
  );
}

export default Card;
