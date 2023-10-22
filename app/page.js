import { Inter } from "next/font/google";
import Hero from "./components/Hero/Hero";
import Welcome from "./components/Home Page/Welcome";
import WhyICome from "./components/Home Page/whyICome/WhyICome";
import WhatElseHappens from "./components/Home Page/WhatElseHappens";
import JoinUsThisSunday from "./components/Home Page/joinUs/JoinUsThisSunday";
import OtherAspects from "./components/Home Page/OtherAspects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <Welcome />
      <WhyICome />
      <WhatElseHappens />
      <OtherAspects />
    </main>
  );
}
