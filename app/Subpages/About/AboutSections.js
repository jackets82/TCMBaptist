import Link from "next/link";

function AboutSections({ title, children, link }) {
  return (
    <div className=" py-40">
      <div className=" max-w-5xl mx-auto flex flex-col gap-5">
        <h1 className=" text-5xl">{title}</h1>
        <p className="">{children}</p>
        <div>
          <Link
            href={link}
            class="relative inline-flex items-center py-3 pr-12 text-white transition-all duration-150 ease-in-out hover:pr-6 group bgblack"
          >
            <span class="absolute left-28 pr4 duration-200 ease-out group-hover:translate-x-2">
              <svg
                class="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>

            <span class="relative w-full text-left transition-colors duration-200 ease-in-out ">
              Find out more
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutSections;
