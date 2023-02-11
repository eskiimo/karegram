import Link from "next/link";

const PostItem = (props) => {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatedAddress = location.replace(", ", "\n");

  return (
    <div>
      <li>
        <img src={"/" + image} alt={title} />
        <div>
          <h2>{title}</h2>
          <div>
            <h3>{humanReadableDate}</h3>
          </div>

          <div>
            <h3>{formatedAddress}</h3>
          </div>
        </div>
        <div>
          <Link href={`/${id}`}> explore</Link>
        </div>
      </li>
      <h1>khara</h1>
    </div>
  );
};
export default PostItem;
