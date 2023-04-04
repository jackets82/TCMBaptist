import { Inter } from "next/font/google";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marquee/Marquee";
import Sundays from "./components/Sundays/Sundays";
import Welcome from "./components/Welcome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" bg-red-600 flex-grow">
      <Hero />
      <Marquee />
      <Welcome />
      <Sundays />
    </main>
  );
}
