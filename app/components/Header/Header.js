import Image from "next/image";

function Header() {
  return (
    <div className=" bg-black py-3 sticky top-0 z-10">
      <div className=" max-w-6xl mx-auto flex justify-between items-center">
        <div className=" flex">
          <div className=" w-32">
            <Image src="/mainLogo.png" width={500} height={500} />
          </div>

          {/* <p className=" text-sm text-gray-100">
            Where everyone is someone and Jesus Christ is Lord
          </p> */}
        </div>
        <div className=" text-white">
          <ul className=" flex gap-3">
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
