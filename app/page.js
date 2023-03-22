import { Inter } from "next/font/google";
import Cards from "./components/Front Page/Cards";
import Hero from "./components/Hero";
import Ministries from "./components/Ministries";
import SundayDeets from "./components/Sundays/SundayDeets";
import Sundays from "./components/Sundays/Sundays";
import Welcome from "./components/Welcome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" bg-red-600 flex-grow">
      <Hero />
      <Welcome />
      <Sundays />
    </main>
  );
}
