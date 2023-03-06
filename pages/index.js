import PostsList from "../components/posts/posts-list";
import { getAllEvents } from "@/dummy-data";
import { useAuthContext } from "@/context/auth.context";
import { useEffect } from "react";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const auth = useAuthContext();

  const posts = getAllEvents();
  useEffect(() => {
    console.log("index page " + auth.isLoggedIn);
    if (!auth.isLoggedIn) {
      router.push("/register");
    }
  }, []);
  return (
    <div className="h-[100vh] sm:w-[80vw]   flex dark:bg-black justify-end border-l-[1px] dark:border-l-[1px] dark:border-l-gray-400	mr-0 min-w-[300px] overflow-y-scroll z-0">
      <div className="  dark:bg-black dark:text-white justify-self-end pt-5 ">
        <PostsList posts={posts} />
      </div>
    </div>
  );
}

export default Home;
