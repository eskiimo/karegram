import Image from "next/image";
import { React, useEffect, useState } from "react";

// const posts = JSON.parse(localStorage.getItem("filteredPosts"));
function ProfileList(props) {
  const postToDis = props.posts;

  return (
    <div className="flex flex-wrap justify-start max-w-[1000px]">
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
              {/* <Image
                className="w-full object-cover"
                src={post.imageLink}
                alt={post.caption || "failed to load caption"}
                height={200}
              width={200} 
              /> */}
            </div>
          );
        })
      )}
    </div>
  );
}

export default ProfileList;
