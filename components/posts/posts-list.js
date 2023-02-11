import PostItem from "./post_item";

function PostsList(props) {
  return (
    <div>
      {props.posts.map((post) => {
        return (
          <PostItem
            id={post.id}
            title={post.title}
            image={post.image}
            date={post.date}
            location={post.location}
          />
        );
      })}
    </div>
  );
}

export default PostsList;
