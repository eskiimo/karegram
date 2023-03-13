import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [darkMood, setDarkMood] = useState(false);
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMood((prev) => !prev);
  };
  return (
    <div className="flex flex-row sm:hidden w-[100vw] bg-white dark:bg-black	 dark:text-white fixed bottom-0 justify-evenly  p-3 z-50">
      <div className="flex sm:my-3 items-center	 ">
        <Link href="/" className="text-xl active:font-bold">
          <div className="flex rounded-full p-1  flex-row items-center">
            <i className="fa-solid  sm:text-lg md:text-2xl dark:text-white fa-house"></i>{" "}
          </div>
        </Link>
      </div>

      <div className="flex  rounded-full p-1  sm:my-3 items-center	">
        <button onClick={toggleDarkMode} className="text-xl active:font-bold">
          <div className="flex flex-row items-center">
            {darkMood ? (
              <i className="fa-solid sm:text-lg md:text-2xl dark:text-white fa-lightbulb"></i>
            ) : (
              <i className="fa-solid sm:text-lg md:text-2xl dark:text-white fa-moon"></i>
            )}
          </div>
        </button>
      </div>

      <div className="flex  rounded-full p-1  sm:my-3 items-center	 ">
        <Link href="/search" className="text-xl active:font-bold">
          <div className="flex flex-row items-center">
            <i className="fa-solid  sm:text-lg md:text-2xl dark:text-white fa-magnifying-glass"></i>{" "}
          </div>
        </Link>
      </div>

      <div className="flex  rounded-full p-1  sm:my-3 items-center	 ">
        <Link href="/create" className="text-xl active:font-bold">
          <div className="flex flex-row items-center">
            <i className="fa-solid  sm:text-lg md:text-2xl dark:text-white fa-square-plus"></i>{" "}
          </div>
        </Link>
      </div>

      <div className="flex  rounded-full p-1  sm:my-3 items-center	 ">
        <Link href="/notifications" className="text-xl active:font-bold">
          <div className="flex flex-row items-center">
            <i className="fa-solid  sm:text-lg md:text-2xl dark:text-white fa-bell"></i>
          </div>
        </Link>
      </div>

      <div className="flex  rounded-full p-1  sm:my-3 items-center	 ">
        <Link href="/profile/u1" className="text-xl active:font-bold">
          <div className="flex flex-row items-center">
            <i className="fa-solid text-2xl dark:text-white fa-user"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
