import { Inter } from "next/font/google";
import Hero from "./components/Hero/Hero";
import Welcome from "./components/Home Page/Welcome";
import WhyICome from "./components/Home Page/whyICome/WhyICome";
import JoinUsMain from "./components/Home Page/joinUs/JoinUsMain";
import Map from "./components/Home Page/Map";
import WhatElseHappens from "./components/Home Page/WhatElseHappens";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <Welcome />
      <WhyICome />
      {/* <JoinUsMain /> */}
      <Map />
      <WhatElseHappens />
    </main>
  );
}
