import { Inter } from "next/font/google";
import Hero from "./components/Hero/Hero";
import Welcome from "./components/Welcome";
import WhyICome from "./components/Front Page/whyICome/WhyICome";
import JoinUsMain from "./components/Front Page/joinUs/JoinUsMain";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <Welcome />
      <WhyICome />
      <JoinUsMain />
    </main>
  );
}
