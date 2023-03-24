import Image from "next/image";
import Link from "next/link";
import SubpageHeader from "../../SubpageHeader";
import BeliefsCard from "./BeliefsCard";

function page() {
  return (
    <div className=" flex-grow">
      <SubpageHeader title="What we believe" />
      <div>
        {/* <div className="h-96 relative w-full">
          <Image
            className=" grayscale "
            src="/clouds.jpg"
            fill
            style={{ objectFit: "cover", objectPosition: "" }}
          />
        </div> */}
        <div className=" max-w-6xl mx-auto px-10 xl:px-0 flex flex-col gap-5 pb-10 mt-20">
          <p>
            TCM is a member of the Fellowship of Independent Evangelical
            Churches (
            <span className=" italic underline text-blue-700 hover:text-black transition duration-150">
              <Link href="https://fiec.org.uk/" target="_blank">
                FIEC
              </Link>
            </span>
            )and along with all the other churches in the FIEC we are committed
            to the following truths of historic, biblical Christianity:
          </p>
          <div className=" grid grid-cols-3 gap-10">
            <div>
              <BeliefsCard
                title="God"
                text="There is one God, who exists eternally in three distinct but equal persons: the Father, the Son, and the Holy Spirit. God is unchangeable in his holiness, justice, wisdom and love. He is the almighty Creator, Saviour and Judge who sustains and governs all things according to his sovereign will for his own glory."
              />
            </div>
            <div>
              <BeliefsCard
                title="God"
                text="There is one God, who exists eternally in three distinct but equal persons: the Father, the Son, and the Holy Spirit. God is unchangeable in his holiness, justice, wisdom and love. He is the almighty Creator, Saviour and Judge who sustains and governs all things according to his sovereign will for his own glory."
              />
            </div>
            <div>
              <BeliefsCard
                title="God"
                text="There is one God, who exists eternally in three distinct but equal persons: the Father, the Son, and the Holy Spirit. God is unchangeable in his holiness, justice, wisdom and love. He is the almighty Creator, Saviour and Judge who sustains and governs all things according to his sovereign will for his own glory."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
