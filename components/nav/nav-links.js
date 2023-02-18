import Link from "next/link";

function NavLinks() {
  return (
    <div className="flex flex-row w-full sm:w-[20vw] justify-evenly sm:flex-col sm:justify-start sm:m-5 p-3">
      <div className="flex sm:my-5 items-center	 ">
        <Link href="/profile" className="text-xl active:font-bold">
          <div className="flex flex-row items-center">
            <i className="fa-solid text-2xl dark:text-white fa-house"></i>{" "}
            <h1 className="dark:text-white hidden md:flex  ml-5"> Home </h1>
          </div>
        </Link>
      </div>

      <div className="flex sm:my-5 items-center	">
        <Link href="/profile" className="text-xl active:font-bold">
          <div className="flex flex-row items-center">
            <i className="fa-solid text-2xl dark:text-white fa-envelope"></i>
            <h1 className="dark:text-white hidden md:flex  ml-5"> Messages </h1>
          </div>
        </Link>
      </div>

      <div className="flex sm:my-5 items-center	 ">
        <Link href="/profile" className="text-xl active:font-bold">
          <div className="flex flex-row items-center">
            <i className="fa-solid text-2xl dark:text-white fa-square-plus"></i>{" "}
            <h1 className="dark:text-white hidden md:flex  ml-5"> Create </h1>
          </div>
        </Link>
      </div>

      <div className="flex sm:my-5 items-center	 ">
        <Link href="/profile" className="text-xl active:font-bold">
          <div className="flex flex-row items-center">
            <i className="fa-solid text-2xl dark:text-white fa-bell"></i>
            <h1 className="dark:text-white hidden md:flex  ml-5">
              {" "}
              Notifications{" "}
            </h1>
          </div>
        </Link>
      </div>

      <div className="flex sm:my-5 items-center	 ">
        <Link href="/profile" className="text-xl active:font-bold">
          <div className="flex flex-row items-center">
            <i className="fa-solid text-2xl dark:text-white fa-user"></i>
            <h1 className="dark:text-white hidden md:flex  ml-5"> Profile </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavLinks;
