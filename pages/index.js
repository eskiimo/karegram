import PostsList from "../components/posts/posts-list";
import { getFeaturedEvents } from "@/dummy-data";

function Home() {
  const posts = getFeaturedEvents();
  return (
    <>
      <PostsList posts={posts} />
    </>
  );
}

export default Home;
