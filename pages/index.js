import PostsList from "../components/posts/posts-list";
import NavLinks from "@/components/nav/nav-links";
import { getAllEvents } from "@/dummy-data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";

function Home() {
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };
  const posts = getAllEvents();
  return (
    <div className="flex flex-row min-w-[600px] xs:h-[100%] sm:h-[100vh]">
      <div className="nav dark:bg-black dark:text-white hidden sm:flex  sm:w-[150px] md:w-[350px] h-screen border-r border-1 border-gray-700">
        {" "}
        <NavLinks />
      </div>
      <div className="flex justify-center align-middle my-auto fixed sm:hidden  h-[9%] bottom-0 w-full bg-black border-1 border-t border-gray-700 p-2 text-white">
        <NavLinks />
      </div>
      <div className="h-[100%] w-full dark:bg-black dark:text-white flex justify-center  sm:mx-auto overflow-y-scroll">
        <PostsList posts={posts} />
      </div>
      <button
        className="toggle-dark rounded-full  fixed top-10 right-10 dark:text-white"
        onClick={toggleDark}
      >
        <FontAwesomeIcon icon={faSun} size="xl" />
      </button>
    </div>
  );
}

export default Home;
