import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Badge } from "@nextui-org/react";
import LinkItem from "./LinkItem";

function NavLinks() {
  const [profile, setProfile] = useState("");

  const router = useRouter();

  const getLocalUser = async () => {
    let storedUser = await JSON.parse(localStorage.getItem("userData"));
    if (storedUser && storedUser.userId) {
      setProfile(storedUser.userId);
    } else {
      router.push("/register");
    }
  };

  useEffect(() => {
    getLocalUser();
  }, []);

  return (
    // <div className="flex flex-row sm:hidden h-[7vh] w-[100vw] bg-white dark:bg-black	 dark:text-white fixed top-0 justify-start items-center border-b-[1px]  z-50">

    <div className="flex  flex-row justify-between  fixed sm:relative bottom-0 w-[100vw] sm:w-auto py-3 px-5    sm:justify-center sm:flex-col  bg-white dark:bg-black z-[99]">
      <LinkItem name="Home" route="/">
        <i className="fa-solid  text-[1.5em] dark:text-white fa-house"></i>{" "}
      </LinkItem>

      <LinkItem route="/search" name="Search">
        <i className="fa-solid  text-[1.5em] dark:text-white fa-magnifying-glass"></i>{" "}
      </LinkItem>

      <LinkItem route="/messeges" name="Messages">
        <Badge content={5} color="danger">
          <i className="fa-brands text-[1.5em] dark:text-white fa-facebook-messenger"></i>
        </Badge>
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
