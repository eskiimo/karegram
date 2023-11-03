import NavBar from "@/components/nav/nav-bar";
import NavLinks from "@/components/nav/nav-links";
import { useEffect, useState } from "react";
import { Switch } from "antd";

const MainHeader = () => {
  const [darkMood, setDarkMood] = useState(false);
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMood((prev) => !prev);
  };

  return (
    <>
      <header>
        <h1 className="text-[2em] sm:text-[3em] text-black bg-white dark:bg-black dark:text-white font-sigmar p-3 border-b border-black dark:border-white">
          KareGram
        </h1>

        <NavLinks />

        <div className="fixed top-5 right-5">
          <Switch defaultChecked onChange={toggleDarkMode} />
        </div>
      </header>
    </>
  );
};
export default MainHeader;
