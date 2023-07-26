import PostsList from "../components/posts/posts-list";
import { getAllEvents } from "@/dummy-data";
import { useAuthContext } from "@/context/auth.context";
import { useEffect } from "react";
import { useRouter } from "next/router";
import SpinnerScreen from "@/components/UI/spinnerScreen";

function Home(props) {
  // const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const auth = useAuthContext();
  let isLog = auth.isLoggedIn;

  useEffect(() => {
    console.log("index pdage , is logged in :", isLog);
    if (!isLog) {
      router.push("/register");
    }
  }, [isLog]);

  return (
    <>
      {!auth.isLoggedIn ? (
        <SpinnerScreen />
      ) : (
        <div className="h-[100vh] w-[100vw] sm:w-[80vw]  pt-5 justify-self-end flex dark:bg-black dark:text-white justify-end md:border-l-[1px]  dark:border-l-gray-400	mr-0 min-w-[300px] overflow-y-scroll z-0">
          <PostsList posts={props.posts} />
        </div>
      )}
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllEvents();
  return {
    props: {
      posts: posts,
    },
    revalidate: 60,
  };
}

export default Home;
