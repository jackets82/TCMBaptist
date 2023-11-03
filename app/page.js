import { Inter } from "next/font/google";
import Hero from "./components/Hero/Hero";
import Welcome from "./components/Home Page/Welcome";
import WhyICome from "./components/Home Page/whyICome/WhyICome";
import WhatElseHappens from "./components/Home Page/WhatElseHappens";
import DuringTheWeek from "./components/Home Page/Extra Stuff/DuringTheWeek";
import TicketList from "./components/TicketList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <Welcome />
      <WhyICome />
      <WhatElseHappens />
      <DuringTheWeek />
    </main>
  );
}
