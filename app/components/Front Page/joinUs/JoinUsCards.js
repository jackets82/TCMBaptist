import Image from "next/image";

function JoinUsCards() {
  return (
    <div className=" rounded-2xl w-full h-52 relative overflow-hidden">
      <Image src="/cross.jpg" fill style={{ objectFit: "cover" }} />
      <div className="w-full h-5 absolute bottom-5 text-center">
        <p className=" text-xl font-bold tracking-wider text-white">
          THIS IS SOME TEXT
        </p>
      </div>
    </div>
  );
}

export default JoinUsCards;
