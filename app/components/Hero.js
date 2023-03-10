import Image from "next/image";

function Hero() {
  return (
    <div className="relative lg:h-[1000px] block h-[800px] 2xl:h-screen">
      <Image
        src="/church.jpg"
        style={{ objectFit: "cover", objectPosition: "50% 50%" }}
        fill
      />
      <p className=" text-white text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 2xl:top-1/3 text-center">
        Welcome to TCM Lincoln
      </p>
    </div>
  );
}

export default Hero;
