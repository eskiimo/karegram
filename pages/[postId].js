import { useRouter } from "next/router";

const PostDetails = () => {
  const router = useRouter();
  const pid = router.query.postId;

  if (!pid) {
    return (
      <div className="w-[100vw] sm:w-[80vw] h-[100vh] flex justify-center items-center dark:bg-black dark:text-white text-7xl">
        404
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col md:flex-row justify-start h-[70%] dark:bg-black dark:text-white w-5/12 mx-auto">
        <div className="m-5  md:w-[60%]">
          {/* <img src="/images/pic1.jpg" alt="pic" /> */}
        </div>
        <div className="flex flex-col items-start m-5">
          <div>
            <h1 className="dark:text-white my-1">{pid}</h1>
          </div>

          {/* <div>
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.description}</p>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default PostDetails;
