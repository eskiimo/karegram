import Link from "next/link";

function NavLinks() {
  return (
    <div className="flex flex-row h-[100vh] w-[25vw] mt-5 justify-evenly  sm:flex-col sm:justify-start  p-5">
      <div className="flex sm:my-4 sm:pl-5 items-center	 ">
        <Link href="/" className="text-xl active:font-bold">
          <div className="flex   rounded-full p-1 w-[25vw] flex-row items-center">
            <i className="fa-solid  sm:text-lg md:text-2xl dark:text-white fa-house"></i>{" "}
            <h1 className="dark:text-white sm:text-lg md:text-2xl hidden sm:flex  ml-5">
              {" "}
              Home{" "}
            </h1>
          </div>
        </Link>
      </div>

      <div className="flex   rounded-full p-1 w-[25vw] sm:my-4 sm:pl-5 items-center	">
        <Link href="/messeges" className="text-xl active:font-bold">
          <div className="flex flex-row items-center">
            <i className="fa-solid sm:text-lg md:text-2xl dark:text-white fa-envelope"></i>
            <h1 className="dark:text-white sm:text-lg md:text-2xl hidden sm:flex  ml-5">
              {" "}
              Messages{" "}
            </h1>
          </div>
        </Link>
      </div>

      <div className="flex   rounded-full p-1 w-[25vw] sm:my-4 sm:pl-5 items-center	 ">
        <Link href="/create" className="text-xl active:font-bold">
          <div className="flex flex-row items-center">
            <i className="fa-solid  sm:text-lg md:text-2xl dark:text-white fa-square-plus"></i>{" "}
            <h1 className="dark:text-white sm:text-lg md:text-2xl hidden sm:flex  ml-5">
              {" "}
              Create{" "}
            </h1>
          </div>
        </Link>
      </div>

      <div className="flex   rounded-full p-1 w-[25vw] sm:my-4 sm:pl-5 items-center	 ">
        <Link href="/notifications" className="text-xl active:font-bold">
          <div className="flex flex-row items-center">
            <i className="fa-solid  sm:text-lg md:text-2xl dark:text-white fa-bell"></i>
            <h1 className="dark:text-white sm:text-lg md:text-2xl hidden sm:flex  ml-5">
              {" "}
              Notifications{" "}
            </h1>
          </div>
        </Link>
      </div>

      <div className="flex   rounded-full p-1 w-[25vw] sm:my-4 sm:pl-5 items-center	 ">
        <Link href="/profile" className="text-xl active:font-bold">
          <div className="flex flex-row items-center">
            <i className="fa-solid text-2xl dark:text-white fa-user"></i>
            <h1 className="dark:text-white hidden sm:flex  ml-5"> Profile </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavLinks;
