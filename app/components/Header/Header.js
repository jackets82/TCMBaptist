import Image from "next/image";

function Header() {
  return (
    <div className=" bg-transparent py-3 top-0 z-10 absolute w-full">
      <div className=" max-w-6xl mx-auto flex justify-between items-center px-10 xl:px-0">
        <div className=" flex">
          <div className=" w-44">
            <Image src="/mainLogo.png" width={500} height={500} />
          </div>

          {/* <p className=" text-sm text-gray-100">
            Where everyone is someone and Jesus Christ is Lord
          </p> */}
        </div>
        <div className=" text-white">
          <ul className=" flex gap-5">
            <li>Home</li>
            <li>About Us</li>
            <li>Get Involved</li>
            <li>Resources</li>
            <li>Contact Us</li>
            <li>Donate</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
