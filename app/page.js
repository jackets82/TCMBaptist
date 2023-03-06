import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" bg-red-600 flex-grow">
      <p className=" bg-blue-600">This is the main part!</p>
    </main>
  );
}
