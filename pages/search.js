import UsersList from "@/components/users-list";
import { sendreq } from "@/hooks/static-https";
import { useRef, useState } from "react";

const CreatePost = (props) => {
  let { users } = props;
  const nameRef = useRef();
  const [result, setResult] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchBy = nameRef.current.value;
    console.log(searchBy);
    setResult(filterby(searchBy));
  };

  const filterby = (key) => {
    if (key === "") {
      return [];
    } else {
      return users.filter((user) => user.username.includes(key));
    }
  };

  return (
    <div className="w-full h-[100vh] sm:w-[75vw] pt-[50px]  flex flex-col items-center">
      <form
        className="m-5 w-10/12 flex justify-center border-2 rounded-lg"
        onSubmit={handleSearch}
      >
        <div className="w-full flex flex-row">
          <label htmlFor="name"></label>
          <input
            id="year"
            ref={nameRef}
            type="text"
            placeholder="Search"
            className="text-black px-3 py-1 w-full"
            onChange={handleSearch}
            autoComplete="false"
            autoFocus={true}
          ></input>
          <button type="submit" className="py-2 px-5 border-white border-[1px]">
            <i className="text-2xl fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
      <div className="w-8/12">
        <UsersList list={result} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  let users = [];

  let res = await sendreq(process.env.API + "/api/users");

  console.log(res);
  users = res.users;
  return {
    props: {
      users: users,
    },
    revalidate: 30,
  };
}

export default CreatePost;
