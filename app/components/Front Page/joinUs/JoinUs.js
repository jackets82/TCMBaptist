import Image from "next/image";

function JoinUs() {
  return (
    <div className=" relative h-96 w-full rounded-lg overflow-hidden">
      <Image src="/bible.jpg" style={{ objectFit: "cover" }} fill />
      <div className=" absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
      <h1>This is the join us bit</h1>
    </div>
  );
}

export default JoinUs;
