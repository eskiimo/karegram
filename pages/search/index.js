import UsersList from "@/components/users-list";
// import { getAllUsers, getFilteredUsers } from "@/dummy-data";
import { useEffect, useRef, useState } from "react";

const CreatePost = (props) => {
  let users = props.users;
  const nameRef = useRef();
  // const [found, setFound] = useState([]);
  const [result, setResult] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchBy = nameRef.current.value;
    setResult(filterby(searchBy));
  };

  const filterby = (key) => {
    let result = users.filter((user) => user.username.includes(key));
    return result;
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
            // onChange={handleSearch}
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
  let users;
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  users = await fetch("http://localhost:5000/api/users", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result.users;
    })
    .catch((error) => console.error("error", error));
  return {
    props: {
      users: users,
    },
    revalidate: 30,
  };
}

export default CreatePost;
