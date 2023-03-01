function ProfileList(props) {
  return (
    <div className="flex flex-wrap justify-start">
      {props.posts.map((post) => {
        return (
          <div className="flex  w-[31%]  aspect-square m-1	">
            <img
              className="object-cover"
              src={"/" + post.image}
              alt={post.title}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProfileList;
