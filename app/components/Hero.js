import Image from "next/image";

function Hero() {
  return (
    <div className="relative h-screen block">
      <Image
        src="/church.jpg"
        style={{ objectFit: "cover", objectPosition: "50% 50%" }}
        fill
      />
      <p className=" text-white text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 text-center">
        Welcome to TCM Lincoln
      </p>
    </div>
  );
}

export default Hero;
