import UsersList from "@/components/users-list";
// import { getAllUsers, getFilteredUsers } from "@/dummy-data";
import { useEffect, useRef, useState } from "react";

const CreatePost = () => {
  const nameRef = useRef();
  const [found, setFound] = useState([]);
  const [result, setResult] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    const searchBy = nameRef.current.value;
    setResult(filterby(searchBy));
  };
  const filterby = (key) => {
    let result = found.filter((user) => user.username.includes(key));
    return result;
  };

  const getAllUsers = async () => {
    await fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        setFound(
          data.users.map((u) => {
            return {
              id: u._id,
              username: u.username,
              fullname: u.fullname,
              avatar: u.avatar,
            };
          })
        );
      });
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="w-full h-[100vh] sm:w-[75vw] pt-[35px]  flex flex-col items-center">
      <h1 className="text-[50px]  w-full pl-5">Search</h1>
      <form className="m-5 w-8/12 flex justify-center" onSubmit={handleSearch}>
        <div className="w-full flex flex-row">
          <label htmlFor="name"></label>
          <input
            id="year"
            ref={nameRef}
            type="text"
            placeholder="search"
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

export default CreatePost;
