function ProfileList(props) {
  return (
    <div className="flex flex-wrap">
      {props.posts.map((post) => {
        return (
          <div className="flex  w-[31%]  aspect-square m-1	">
            {/* <div className="flex flex-row m-2 justify-start items-center	">
              <div className="w-[12%] max-w-[50px] aspect-square mr-2 rounded-full bg-black border-2 border-pink-700"></div>
              <div className="flex flex-col">
                <h3 className="font-bold dark:text-white">{post.title}</h3>
                <p className="text-gray-300 text-sm ">
                  {post.location.replace(", ", "\n")}
                </p>
              </div>
            </div> */}
            <img
              className="object-cover"
              src={"/" + post.image}
              alt={post.title}
            />
            {/* <div className="m-2">
              <h3 className="dark:text-white my-1">
                {new Date(post.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </h3>
              <h1 className=" text-gray-500  ">Add a comment...</h1>
            </div> */}
          </div>
        );
      })}
    </div>
  );
}

export default ProfileList;
