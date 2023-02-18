import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";

const PostDetails = () => {
  const router = useRouter();
  const pid = router.query.postId;
  const post = getEventById(pid);
  if (!post) {
    return <>404</>;
  }
  return (
    <>
      <div className="flex flex-col md:flex-row justify-start h-[70%] dark:bg-black dark:text-white w-11/12 mx-auto">
        <div className="m-5  md:w-[60%]">
          <img src="/images/pic1.jpg" alt="pic" />
        </div>
        <div className="flex flex-col items-start m-5">
          <div>
            <h3 className="dark:text-white my-1">
              {new Date(post.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h3>
          </div>

          <div>
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.description}</p>
            {/* <Link href={`/${post.id}`}>
              {" "}
              <h1 className=" text-gray-500  ">Add a comment...</h1>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetails;
