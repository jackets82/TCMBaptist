import Image from "next/image";

function Hero() {
  return (
    <div className="relative h-screen block">
      {/* <video
        src="/hd0983.mov"
        muted
        autoPlay
        loop
        className="absolute w-screen min-h-full"
        style={{ objectFit: "cover" }}
      ></video> */}
      <Image
        src="/church.jpg"
        style={{ objectFit: "cover", objectPosition: "50% 50%" }}
        fill
      />
      <p className=" text-white text-6xl absolute top-1/3 left-1/2 -translate-x-1/2 text-center">
        Serving the people of Lincoln with the love of Christ
      </p>
    </div>
  );
}

export default Hero;
