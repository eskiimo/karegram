import NavBar from "@/components/nav/nav-bar";
import NavLinks from "@/components/nav/nav-links";

const MainHeader = () => {
  return (
    <>
      <header>
        <div className="nav fixed dark:bg-black dark:text-white hidden sm:flex h-screen border-r-2 border-b-slate-700 dark:border-b-slate-300">
          {" "}
          <NavLinks />
        </div>
        <div className="flex justify-center align-middle fixed sm:hidden w-full h-[7%] bottom-0 	 dark:text-white border-1 border-t border-gray-700 p-2  z-50 ">
          <NavBar />
        </div>
      </header>
    </>
  );
};
export default MainHeader;
