import Link from "next/link";
import { useState } from "react";

function NavLinks() {
  const [darkMood, setDarkMood] = useState(false);
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMood((prev) => !prev);
  };
  return (
    <div className="flex flex-row h-[100vh] sm:w-[20vw]  mt-5 justify-evenly  sm:flex-col sm:justify-start  p-5">
      <h1 className="text-3xl m-3 mb-10">Instagram</h1>

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
        <button onClick={toggleDarkMode} className="text-xl active:font-bold">
          <div className="flex   rounded-full p-1 w-[20vw] flex-row items-center">
            {darkMood ? (
              <i className="fa-solid sm:text-xl md:text-2xl dark:text-white fa-lightbulb"></i>
            ) : (
              <i className="fa-solid sm:text-xl md:text-2xl dark:text-white fa-moon"></i>
            )}
            <h1 className="dark:text-white hidden lg:flex  md:text-xl   ml-5">
              {darkMood ? "Light" : "Night"}
            </h1>
          </div>
        </button>
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
        <Link href="/notifications" className="text-xl active:font-bold">
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
