"use client";
import { useHttpClient } from "@/hooks/http-hook";
import Image from "next/image";
import { React, useEffect, useState } from "react";

function ProfileList({ posts }) {
  const [postToDis, setPoststoDis] = useState([]);
  const { isloading, error, clearError, sendRequest } = useHttpClient();

  useEffect(() => {
    (async () => {
      const response = await sendRequest(
        `${process.env.API}/api/posts/postlist`,
        "POST",
        JSON.stringify({
          list: posts,
        }),
        {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        }
      );
      if (response) {
        setPoststoDis(response.images);
        console.log(response);
      }
    })();
  }, []);

  return (
    <div className="flex flex-wrap justify-start max-w-[1000px]">
      {posts.length === 0 ? (
        <div className="w-full flex justify-center">
          <h1>no posts yet</h1>
        </div>
      ) : isloading ? (
        <p>loading</p>
      ) : (
        postToDis.map((post) => {
          return (
            <div key={post._id} className="flex  w-[31%]  aspect-square m-1	">
              {/* <img
                className="w-full object-cover"
                src={process.env.API + post.image}
                alt={post.caption || "failed to load caption"}
              /> */}
              <Image
                className="w-full object-cover"
                src={`${process.env.API}/${post.image}`}
                alt={post.caption || "failed to load caption"}
                height={400}
                width={400}
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default ProfileList;
