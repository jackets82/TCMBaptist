"use client";

import { Inter } from "next/font/google";
import Cards from "./components/Front Page/Cards";
import Hero from "./components/Hero/Hero";
import Welcome from "./components/Welcome";
import WhatsOn from "./components/Front Page/whatson/WhatsOn";
import WhyICome from "./components/Front Page/whyICome/WhyICome";
import JoinUsMain from "./components/Front Page/joinUs/JoinUsMain";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    // window.addEventListener("scroll", () => {
    //   document.documentElement.dataset.scroll = window.scrollY;
    // });
    console.log("Hello");
  }, []);

  return (
    <main className="flex-grow">
      <Hero />
      <Welcome />
      <WhyICome />
      <JoinUsMain />
      <WhatsOn />
      <Cards />
    </main>
  );
}
