import PostsList from "../components/posts/posts-list";
import { getAllEvents } from "@/dummy-data";

function Home() {
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };
  const posts = getAllEvents();
  return (
    <div className="flex flex-row dark:bg-black justify-end min-w-[300px] sm:h-[100vh] overflow-y-hidden">
      <div className="h-[100vh] sm:w-[75vw] md:w-[80%]   dark:bg-black dark:text-white flex-end    p-0 overflow-y-scroll">
        <PostsList posts={posts} />
      </div>
      <button
        className="toggle-dark rounded-full  fixed top-6 right-10 dark:text-white"
        onClick={toggleDark}
      >
        <i className="fa-solid fa-moon text-2xl dark:text-white"></i>
      </button>
    </div>
  );
}

export default Home;
