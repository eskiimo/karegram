import PostsList from "../components/posts/posts-list";
import { getAllEvents } from "@/dummy-data";
import { useAuthContext } from "@/context/auth.context";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SpinnerScreen from "@/components/UI/spinnerScreen";

function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const auth = useAuthContext();
  const posts = getAllEvents();

  useEffect(() => {
    console.log("index pdage , is logged in :", auth.isLoggedIn);
    if (!auth.isLoggedIn) {
      setTimeout(router.push("/register"), 5000);
    }
  });

  useEffect(() => {
    if (!auth.isLoggedIn) {
      const timer = setTimeout(() => {
        router.push("/register");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {!auth.isLoggedIn ? (
        <SpinnerScreen />
      ) : (
        <div className="h-[100vh] w-[100vw] sm:w-[80vw]  pt-5 justify-self-end flex dark:bg-black dark:text-white justify-end md:border-l-[1px]  dark:border-l-gray-400	mr-0 min-w-[300px] overflow-y-scroll z-0">
          <PostsList posts={posts} />
        </div>
      )}
    </>
  );
}

export default Home;
