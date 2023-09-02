import NavBar from "@/components/nav/nav-bar";
import NavLinks from "@/components/nav/nav-links";
import { useEffect, useState } from "react";

const MainHeader = () => {
  const [sw, setSw] = useState(1900);
  const lol = () => {
    setSw(window.innerWidth);
  };
  useEffect(() => {
    lol();
    window.addEventListener("resize", lol);
  });

  return (
    <>
      <header>
        {sw >= 640 ? (
          <div className="nav fixed dark:bg-black dark:text-white  sm:flex h-screen border-r-2 border-b-slate-700 dark:border-b-slate-300">
            {" "}
            <NavLinks />
          </div>
        ) : (
          <div className="flex justify-center align-middle fixed  w-full h-[7%] bottom-0 dark:text-white border-1 border-t border-gray-700 p-2  z-50 ">
            <NavBar />
          </div>
        )}
      </header>
    </>
  );
};
export default MainHeader;
