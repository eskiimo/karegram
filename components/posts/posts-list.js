import Image from "next/image";
import Link from "next/link";

function PostsList(props) {
  console.log(props);
  return (
    <div className=" pt-5 pb-[8vh]">
      {props.posts.map((post) => {
        return (
          <div
            key={post.id}
            className="flex flex-col sm:ml-[15%] w-[100vw]  sm:w-[55%] md:w-[50%] mb-5  aspect-square	"
          >
            <div className="flex flex-row m-2 ml-3 justify-start items-center	">
              <div className="w-[12%] max-w-[50px] aspect-square mr-2 rounded-full bg-black border-2 border-pink-700"></div>
              <div className="flex flex-col">
                <h3 className="font-bold dark:text-white">{post.title}</h3>
                <p className="text-gray-300 text-sm ">sss</p>
              </div>
            </div>
            <Image
              className="w-[100vw]"
              src={process.env.API + "/" + post.image}
              alt={post.title}
              width={400}
              height={400}
            />

            <div className="flex flex-row justify-start mx-2">
              <i className="text-xl mt-3 mr-5 ml-1 fa-regular fa-heart"></i>
              <i className="text-xl mt-3 mr-5 fa-regular fa-comment"></i>
              <i className="text-xl mt-3 mr-5 fa-regular fa-paper-plane"></i>
            </div>
            <div className="mx-3">
              <h3 className="dark:text-white my-1">ssss</h3>
              <h1 className=" text-gray-500  ">Add a comment...</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PostsList;
