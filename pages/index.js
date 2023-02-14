import PostsList from "../components/posts/posts-list";
import { getAllEvents } from "@/dummy-data";

function Home() {
  const posts = getAllEvents();
  return (
    <div className="flex flex-row min-w-[600px] xs:h-[100%] sm:h-[100vh]">
      <div className="nav bg-black d-none sm:d-flex  sm:w-[150px] md:w-[350px] h-screen border-r border-1 border-gray-700"></div>
      <div className="d-flex fixed sm:hidden  h-[60px] bottom-0 w-full bg-black border-1 border-t border-gray-700 p-2 text-white">
        nav
      </div>
      <div className="h-[100%] w-full bg-black flex justify-center mx-auto overflow-y-scroll">
        <PostsList posts={posts} />
      </div>
    </div>
  );
}

export default Home;
