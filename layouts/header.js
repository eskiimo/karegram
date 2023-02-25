import NavBar from "@/components/nav/nav-bar";
import NavLinks from "@/components/nav/nav-links";

const MainHeader = () => {
  return (
    <>
      <header>
        <div className="nav fixed dark:bg-black dark:text-white hidden sm:flex h-screen border-r border-1 border-gray-700">
          {" "}
          <NavLinks />
        </div>
        <div className="flex justify-center align-middle  fixed sm:hidden  h-[7%] bottom-0  border-1 border-t border-gray-700 p-2 dark:text-white">
          <NavBar />
        </div>
      </header>
    </>
  );
};
export default MainHeader;
