import { React, useEffect, useState } from "react";

// const posts = JSON.parse(localStorage.getItem("filteredPosts"));
function ProfileList(props) {
  const [postToDis, setPosts] = useState([]);

  useEffect(() => {
    // const posts = JSON.parse(localStorage.getItem("filteredPosts"));
    setPosts(props.posts);
  });

  return (
    <div className="flex flex-wrap justify-start">
      {postToDis.length === 0 ? (
        <div className="w-full flex justify-center">
          <h1>no posts yet</h1>
        </div>
      ) : (
        postToDis.map((post) => {
          return (
            <div key={post._id} className="flex  w-[31%]  aspect-square m-1	">
              <img
                className="w-full object-cover"
                src={post.imageLink}
                alt={post.caption || "failed to load caption"}
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default ProfileList;
