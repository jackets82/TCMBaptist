import { Inter } from "next/font/google";
import Cards from "./components/Front Page/Cards";
import Hero from "./components/Hero";
import SundayDeets from "./components/SundayDeets";
import Welcome from "./components/Welcome";
import WhatsOn from "./components/Front Page/whatson/WhatsOn";
import WhyICome from "./components/Front Page/whyICome/WhyICome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" bg-red-600 flex-grow">
      <Hero />
      <Welcome />
      <WhyICome />
      <WhatsOn />
      <Cards />
    </main>
  );
}
