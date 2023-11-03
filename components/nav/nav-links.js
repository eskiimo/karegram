import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LinkItem from "./LinkItem";

function NavLinks() {
  const [darkMood, setDarkMood] = useState(false);
  const [profile, setProfile] = useState("");

  const router = useRouter();
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMood((prev) => !prev);
  };

  const getLocalUser = async () => {
    let storedUser = await JSON.parse(localStorage.getItem("userData"));
    if (storedUser && storedUser.userId) {
      setProfile(storedUser.userId);
    } else {
      router.push("/register");
    }
  };
  // const seeStored = async () => {
  //   let storedUser = await JSON.parse(localStorage.getItem("userData"));

  //   console.log(storedUser);
  // };
  useEffect(() => {
    getLocalUser();
  }, []);

  return (
    // <div className="flex flex-row sm:hidden h-[7vh] w-[100vw] bg-white dark:bg-black	 dark:text-white fixed top-0 justify-start items-center border-b-[1px]  z-50">

    <div className="flex  flex-row justify-between  fixed sm:relative bottom-0 w-full sm:w-auto py-3 px-5 border-t sm:border-r  border-black dark:border-white  sm:h-full sm:justify-center sm:flex-col  bg-slate-600 z-[-1]">
      <LinkItem name="Home" route="/">
        <i className="fa-solid  text-[1.5em] dark:text-white fa-house"></i>{" "}
      </LinkItem>

      {/* <div className="flex   w-[20vw] sm:my-4 sm:pl-5 items-center	">
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
      </div> */}

      <LinkItem route="/search" name="Search">
        <i className="fa-solid  text-[1.5em] dark:text-white fa-magnifying-glass"></i>{" "}
      </LinkItem>

      <LinkItem route="/messeges" name="Messages">
        <i class="fa-brands text-[1.5em] dark:text-white fa-facebook-messenger"></i>
      </LinkItem>

      <LinkItem route="/notifications" name="Notifications">
        <i className="fa-solid  text-[1.5em] dark:text-white fa-bell"></i>
      </LinkItem>

      <LinkItem route="/create" name="Create">
        <i className="fa-solid  text-[1.5em] dark:text-white fa-square-plus"></i>{" "}
      </LinkItem>

      <LinkItem route={`/profile/${profile}`} name="Profile">
        <i className="fa-solid text-[1.5em] dark:text-white fa-user"></i>
      </LinkItem>
    </div>
  );
}

export default NavLinks;
