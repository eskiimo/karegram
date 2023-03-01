import { useState } from "react";
import ProfileList from "@/components/posts/profile-list";
import ModalComp from "@/components/UI/Modal";
import { getAllEvents } from "@/dummy-data";
import { getAllUsers, getFollowings } from "@/dummy-data";

import Link from "next/link";

import UsersList from "@/components/users-list";

const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [listOfUsers, setListOfUsers] = useState([]);

  const toggleFollowings = () => {
    setListOfUsers(getFollowings());
    setIsOpen((prev) => !prev);
  };

  const toggleFollowers = () => {
    setListOfUsers(getAllUsers());
    setIsOpen((prev) => !prev);
  };
  const posts = getAllEvents();
  return (
    <div className="w-full h-[100vh] sm:w-[75vw]  flex flex-col  dark:bg-black dark:text-white  justify-center overflow-y-scroll">
      <div className="flex flex-row justify-evenly items-center   h-[25vh]">
        <div className="w-[25%] md:w-[150px] aspect-square  rounded-full bg-black border-2 border-pink-700"></div>
        <div className="info w-[35%] flex flex-col">
          <div className="flex flex-row justify-start items-center">
            {" "}
            <h3 className="mr-10">@__eskiimo</h3>{" "}
            <i className="fa-solid fa-gear"></i>
          </div>
          <div className="hidden sm:flex sm:flex-row md:m-2 justify-between">
            <h1>250 posts </h1>
            <button onClick={toggleFollowers}>250 followers </button>
            <button onClick={toggleFollowings}>250 followings </button>
          </div>

          <h1 className="text-md sm:text-2xl font-medium	">Kareem Kamal</h1>
          <h1> All Day I Dream </h1>
          <a
            className="font-medium text-blue-800"
            href="https:eskiimo.netlify.app"
            target="_blank"
          >
            eskiimo.netlify.app{" "}
          </a>
        </div>
      </div>
      <div className="flex flex-row sm:hidden px-8 py-3 border-t-2 border-b-2  justify-between">
        {/* link to list of certain users */}
        <h1>250 posts </h1>
        <button onClick={toggleFollowers}>250 followers </button>
        <button onClick={toggleFollowings}>250 followings </button>
      </div>
      <div className="flex flex-row sm:hidden px-10 py-2  border-b-2  justify-between">
        {/* link to list of certain users */}
        <i className="text-blue-700 text-lg fa-solid fa-table-cells"></i>
        <i className="text-lg fa-solid fa-table-cells"></i>
        <i className="text-lg fa-solid fa-table-cells"></i>
      </div>
      <div className="h-[70vh] w-full justify-center md:w-[90%] mx-auto p-0">
        <ProfileList posts={posts} />
      </div>
      <div>
        <ModalComp openModal={isOpen} toggle={toggleFollowings}>
          <UsersList list={listOfUsers} />
        </ModalComp>
      </div>
    </div>
  );
};
export default ProfilePage;
