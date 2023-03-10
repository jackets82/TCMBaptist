import { Inter } from "next/font/google";
import Connect from "./components/Connect";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" bg-red-600 flex-grow">
      <Hero />
      <Welcome />
      <Connect />
    </main>
  );
}

{
  /* <main className=" bg-red-600 flex-grow">
      <div className="relative lg:h-[1000px] block h-[800px] 2xl:h-screen">
        <Image
          src="/cross.jpg"
          style={{ objectFit: "cover", objectPosition: "50% 0%" }}
          fill
        />
        <p className=" text-white text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 2xl:top-1/3 text-center">
          Welcome to TCM Lincoln
        </p>
      </div>
    </main> */
}
