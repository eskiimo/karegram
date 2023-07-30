import Link from "next/link";
import { useState, useEffect } from "react";

function NavBar() {
  const [darkMood, setDarkMood] = useState(false);
  const [profile, setProfile] = useState("");
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMood((prev) => !prev);
  };

  const getLocalUser = async () => {
    let storedUser = await JSON.parse(localStorage.getItem("userData"));
    setProfile(storedUser.id);
    console.log("idddddddddd:", profile);
  };
  useEffect(() => {
    getLocalUser();
  }, []);

  return (
    <>
      <div className="flex flex-row sm:hidden w-[100vw] bg-white dark:bg-black	 dark:text-white fixed top-0 justify-start border-b-[1px]  z-50">
        <h1 className="text-2xl font-sigmar  my-2 mx-4">KareGram</h1>
      </div>
      <div className="flex flex-row sm:hidden w-[100vw] bg-white dark:bg-black	 dark:text-white fixed bottom-0 justify-evenly  py-3  z-50">
        <div className="flex sm:my-3 items-center	 ">
          <Link href="/" className="text-xl active:font-bold">
            <div className="flex rounded-full p-1  flex-row items-center">
              <i className="fa-solid  sm:text-xl md:text-2xl dark:text-white fa-house"></i>{" "}
            </div>
          </Link>
        </div>

        <div className="flex  rounded-full p-1  sm:my-3 items-center	">
          <button onClick={toggleDarkMode} className="text-xl active:font-bold">
            <div className="flex flex-row items-center">
              {darkMood ? (
                <i className="fa-solid sm:text-xl md:text-2xl dark:text-white fa-lightbulb"></i>
              ) : (
                <i className="fa-solid sm:text-xl md:text-2xl dark:text-white fa-moon"></i>
              )}
            </div>
          </button>
        </div>

        <div className="flex  rounded-full p-1  sm:my-3 items-center	 ">
          <Link href="/search" className="text-xl active:font-bold">
            <div className="flex flex-row items-center">
              <i className="fa-solid  sm:text-xl md:text-2xl dark:text-white fa-magnifying-glass"></i>{" "}
            </div>
          </Link>
        </div>

        <div className="flex  rounded-full p-1  sm:my-3 items-center	 ">
          <Link href="/create" className="text-xl active:font-bold">
            <div className="flex flex-row items-center">
              <i className="fa-solid  sm:text-xl md:text-2xl dark:text-white fa-square-plus"></i>{" "}
            </div>
          </Link>
        </div>

        <div className="flex  rounded-full p-1  sm:my-3 items-center	 ">
          <Link href="/notifications" className="text-xl active:font-bold">
            <div className="flex flex-row items-center">
              <i className="fa-solid  sm:text-xl md:text-2xl dark:text-white fa-bell"></i>
            </div>
          </Link>
        </div>

        <div className="flex  rounded-full p-1  sm:my-3 items-center	 ">
          <Link
            href={`/profile/${profile}`}
            className="text-xl active:font-bold"
          >
            <div className="flex flex-row items-center">
              <i className="fa-solid sm:text-xl md:text-2xl dark:text-white fa-user"></i>
              {/* <img
              alt="avatar"
              src={identifiedUser.avatar}
              className="w-[25%] md:w-[150px] aspect-square  rounded-full border-2 border-pink-700"
            /> */}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
