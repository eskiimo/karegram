import NavLinks from "@/components/nav/nav-links";
import { useState } from "react";
import { Switch } from "@nextui-org/react";

const MainHeader = () => {
  const [darkMood, setDarkMood] = useState(false);
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMood((prev) => !prev);
  };

  return (
    <>
      <header className="sm:w-fit sm:p-10">
        {/* <div className="sm:h-[100vh] fixed top-0 pl-5 pr-10 w-fit  sm:flex sm:flex-col sm:justify-between left-0 right-0  border-b sm:border-r border-black dark:border-white z-[99]"> */}
        <h1 className="text-[2em] sm:mb-10 sm:text-[2em] text-black bg-white dark:bg-black dark:text-white font-sigmar p-3 ">
          KareGram
        </h1>

        <NavLinks />

        <div className="fixed sm:h-1/4 sm:flex sm:flex-col justify-end sm:p-5 align-bottom top-0 right-5 sm:static sm:mb-0">
          <h1 className="hidden sm:block">See More </h1>
          <div className="my-5">
            <Switch
              onChange={toggleDarkMode}
              // defaultSelected={true}
              size="lg"
              // color="success"
              thumbIcon={({ isSelected }) =>
                darkMood ? (
                  <i className="fa-solid text-black fa-moon"></i>
                ) : (
                  <i className="fa-solid text-black fa-sun"></i>
                )
              }
            />
          </div>
        </div>
        {/* </div> */}
      </header>
    </>
  );
};
export default MainHeader;
