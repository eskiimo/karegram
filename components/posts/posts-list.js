import Link from "next/link";

function PostsList(props) {
  return (
    <div>
      {props.posts.map((post) => {
        return (
          <div className="flex flex-col mx-auto w-11/12 sm:w-[40%] aspect-square	">
            <div>
              <div className="flex flex-row my-2 justify-start items-center	">
                <div className="w-[12%] aspect-square mr-2 rounded-full bg-black border-2 border-pink-700"></div>
                <div className="flex flex-col">
                  <h3 className="font-bold dark:text-white">{post.title}</h3>
                  <p className="text-gray-300 text-sm ">
                    {post.location.replace(", ", "\n")}
                  </p>
                </div>
              </div>
              <img src={"/" + post.image} alt={post.title} />
              <div>
                <h3 className="dark:text-white my-1">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </h3>
              </div>

              <div></div>
            </div>
            <div>
              <Link href={`/${post.id}`}>
                {" "}
                <h1 className=" text-gray-500  ">Add a comment...</h1>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PostsList;
