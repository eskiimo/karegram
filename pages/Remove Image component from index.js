//import Image from "next/image";
import { message, Popconfirm } from "antd";

function Home(props) {
  const confirm = (e) => {
    console.log(e);
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  return (
    <div
      id="homepage"
      className=" w-[100vw] sm:w-[75vw]  py-[7vh] md:pt-2   flex flex-col items-center justify-center dark:bg-black dark:text-white z-0"
    >
      {props.posts.map((post) => {
        return (
          <div
            key={post.id}
            className="flex flex-col  w-[100%]  md:w-[50%]  mb-5  aspect-square	"
          >
            <div className="flex flex-row m-2 ml-3 justify-start items-center	">
              <div className="w-[12%] max-w-[50px] aspect-square mr-2 rounded-full bg-black border-2 border-pink-700"></div>
              <div className="flex flex-col">
                <h2 className="font-bold dark:text-white">{post.creator}</h2>
              </div>
            </div>
            <img
              className="w-[100vw]"
              src={process.env.API + "/" + post.image}
              alt={post.caption || "failed to load alt text ig .."}
              
              
            />

            <div className="flex flex-row justify-start mx-2">
              <i className="text-xl mt-3 mr-5 ml-1 fa-regular fa-heart"></i>
              <i className="text-xl mt-3 mr-5 fa-regular fa-comment"></i>
              <i className="text-xl mt-3 mr-5 fa-regular fa-paper-plane"></i>
              <div className="">
                <Popconfirm
                  title="Delete the Post"
                  description="Are you sure to delete this post?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <i className=" text-xl mt-3 mr-5 fa-solid fa-trash-can"></i>
                </Popconfirm>
              </div>
            </div>
            <div className="mx-3">
              <h1 className="dark:text-white text-[18px] font-semibold my-1">
                {post.caption}
              </h1>
              <h1 className=" text-gray-500  ">Add a comment...</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
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
