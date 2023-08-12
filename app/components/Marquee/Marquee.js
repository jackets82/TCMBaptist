import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import { items } from "../../../public/items.json";

function Marquee() {
  return (
    <div>
      {items.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </div>
  );
}

export default Marquee;
