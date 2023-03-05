import Link from "next/link";

function NavLinks() {
  return (
    <div className="flex flex-row h-[100vh] sm:w-[20vw]  mt-5 justify-evenly  sm:flex-col sm:justify-start  p-5">
      <div className="flex sm:my-4 sm:pl-5 items-center	 ">
        <Link href="/" className="text-xl active:font-bold">
          <div className="flex   rounded-full p-1 w-[20vw] flex-row items-center">
            <i className="fa-solid  text-2xl dark:text-white fa-house"></i>{" "}
            <h1 className="dark:text-white hidden lg:flex  md:text-xl   ml-5">
              {" "}
              Home{" "}
            </h1>
          </div>
        </Link>
      </div>

      <div className="flex   w-[20vw] sm:my-4 sm:pl-5 items-center	">
        <Link href="/messeges" className="text-xl active:font-bold">
          <div className="flex   rounded-full p-1 w-[20vw] flex-row items-center">
            <i className="fa-solid text-2xl dark:text-white fa-envelope"></i>
            <h1 className="dark:text-white hidden lg:flex  md:text-xl   ml-5">
              {" "}
              Messages{" "}
            </h1>
          </div>
        </Link>
      </div>
      <div className="flex   rounded-full p-1 w-[20vw] sm:my-4 sm:pl-5 items-center	 ">
        <Link href="/search" className="text-xl active:font-bold">
          <div className="flex   rounded-full p-1 w-[20vw] flex-row items-center">
            <i className="fa-solid  text-2xl dark:text-white fa-magnifying-glass"></i>{" "}
            <h1 className="dark:text-white hidden lg:flex  md:text-xl   ml-5">
              {" "}
              Search{" "}
            </h1>
          </div>
        </Link>
      </div>

      <div className="flex   rounded-full p-1 w-[20vw] sm:my-4 sm:pl-5 items-center	 ">
        <Link href="/create" className="text-xl active:font-bold">
          <div className="flex   rounded-full p-1 w-[20vw] flex-row items-center">
            <i className="fa-solid  text-2xl dark:text-white fa-square-plus"></i>{" "}
            <h1 className="dark:text-white hidden lg:flex  md:text-xl   ml-5">
              {" "}
              Create{" "}
            </h1>
          </div>
        </Link>
      </div>

      <div className="flex   rounded-full p-1 w-[20vw] sm:my-4 sm:pl-5 items-center	 ">
        <Link href="/profile/u2" className="text-xl active:font-bold">
          <div className="flex   rounded-full p-1 w-[20vw] flex-row items-center">
            <i className="fa-solid  text-2xl dark:text-white fa-bell"></i>
            <h1 className="dark:text-white hidden lg:flex  md:text-xl   ml-5">
              {" "}
              Notifications{" "}
            </h1>
          </div>
        </Link>
      </div>

      <div className="flex   rounded-full p-1 w-[20vw] sm:my-4 sm:pl-5 items-center	 ">
        <Link href="/profile/u1" className="text-xl active:font-bold">
          <div className="flex   rounded-full p-1 w-[20vw] flex-row items-center">
            <i className="fa-solid text-2xl dark:text-white fa-user"></i>
            <h1 className="dark:text-white hidden lg:flex  md:text-xl   ml-5">
              {" "}
              Profile{" "}
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavLinks;
