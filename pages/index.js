import PostsList from "../components/posts/posts-list";
import NavLinks from "@/components/nav/nav-links";
import { getAllEvents } from "@/dummy-data";

function Home() {
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };
  const posts = getAllEvents();
  return (
    <div className="flex flex-row justify-end min-w-[600px] xs:h-[100%] sm:h-[100vh]">
      <div className="sm:h-[100vh] md:w-[80vw]   dark:bg-black dark:text-white flex-end   mr-0 overflow-y-scroll">
        <PostsList posts={posts} />
      </div>
      <button
        className="toggle-dark rounded-full  fixed top-10 right-10 dark:text-white"
        onClick={toggleDark}
      >
        <i className="fa-solid fa-moon text-2xl dark:text-white"></i>
      </button>
    </div>
  );
}

export default Home;
