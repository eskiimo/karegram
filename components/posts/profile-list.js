import Image from "next/image";

function ProfileList(props) {
  console.log(props.posts);
  return (
    <div className="flex flex-wrap justify-start">
      {props.posts.length === 0 ? (
        <div className="w-full flex justify-center">
          <h1>no posts yet</h1>
        </div>
      ) : (
        props.posts.map((post) => {
          return (
            <div key={post._id} className="flex  w-[31%]  aspect-square m-1	">
              <Image
                className="w-full object-cover"
                src={process.env.API + "/" + post.image}
                alt={post.caption || "failed to load caption"}
                width={200}
                height={200}
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default ProfileList;
