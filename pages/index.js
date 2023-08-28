import PostsList from "../components/posts/posts-list";
import { getAllEvents } from "@/dummy-data";
import { useAuthContext } from "@/context/auth.context";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SpinnerScreen from "@/components/UI/spinnerScreen";

function Home(props) {
  // const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const auth = useAuthContext();
  let isLog = auth.isLoggedIn;

  useEffect(() => {
    console.log("index pdage , is logged in :", isLog);
    if (!isLog) router.push("/register");
  }, [isLog]);

  return (
    <>
      {!auth.isLoggedIn ? (
        <SpinnerScreen />
      ) : (
        <div
          id="homepage"
          className="h-[100vh] w-[100vw] sm:w-[75vw]  pt-[35px] justify-self-end flex dark:bg-black dark:text-white justify-end md:border-l-[1px]  dark:border-l-gray-400	mr-0 min-w-[300px] overflow-y-scroll z-0"
        >
          <PostsList posts={props.posts} />
        </div>
      )}
    </>
  );
}

export async function getStaticProps() {
  // const posts = await getAllEvents();
  let posts;
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  posts = await fetch(process.env.API + "/api/posts", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result.posts;
    })
    .catch((error) => console.error("error", error));
  return {
    props: {
      posts: posts,
    },
    revalidate: 60,
  };
}

export default Home;
