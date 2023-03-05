function ProfileList(props) {
  return (
    <div className="flex flex-wrap justify-start">
      {props.posts.length === 0 ? (
        <div className="w-full flex justify-center">
          <h1>no posts yet</h1>
        </div>
      ) : (
        props.posts.map((post, index) => {
          return (
            <div key={index} className="flex  w-[31%]  aspect-square m-1	">
              <img
                className="object-cover"
                src={"/" + post.image}
                alt={post.title}
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default ProfileList;
