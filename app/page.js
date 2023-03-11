import { Inter } from "next/font/google";
import Connect from "./components/Connect";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" bg-red-600 flex-grow">
      {/* <Hero />
      <Welcome /> */}
    </main>
  );
}
