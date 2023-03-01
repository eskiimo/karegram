import PostsList from "../components/posts/posts-list";
import { getAllEvents } from "@/dummy-data";

function Home() {
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };
  const posts = getAllEvents();
  return (
    <div className="h-[100vh] sm:w-[80vw]   flex dark:bg-black justify-end border-l-[1px] dark:border-l-[1px] dark:border-l-gray-400	mr-0 min-w-[300px] overflow-y-scroll z-0">
      <div className="  dark:bg-black dark:text-white justify-self-end pt-5 ">
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
