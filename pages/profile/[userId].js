import React, { useEffect, useState } from "react";
import {
  getAllEvents,
  getUserById,
  getAllUsers,
  getFollowings,
} from "@/dummy-data";
import { useRouter } from "next/router";

import ProfileList from "@/components/posts/profile-list";
import ModalComp from "@/components/UI/Modal";
import UsersList from "@/components/users-list";
import { useAuthContext } from "@/context/auth.context";

const UserPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [identifiedUser, setIdentifiedUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [child, setChild] = useState("");
  const [listOfUsers, setListOfUsers] = useState([]);
  const auth = useAuthContext();
  const toggleFollowings = () => {
    setListOfUsers(getFollowings());
    setChild("followings");
    setIsOpen((prev) => !prev);
  };

  const toggleFollowers = () => {
    setListOfUsers(getAllUsers());
    setChild("followers");
    setIsOpen((prev) => !prev);
  };
  const toggleSettings = () => {
    setChild("settings");
    setIsOpen((prev) => !prev);
  };

  const getData = async () => {
    let user = await getUserById(router.query.userId);
    if (user.length === 1) {
      setIdentifiedUser(user[0]);
    } else {
      setIdentifiedUser(null);
    }

    let postsList = await getAllEvents();
    setPosts(postsList);
    setIsLoading(false);
  };
  const handleLogOut = () => {
    auth.logout();
    router.push("/register");
    console.log("log out button " + auth.isLoggedIn);
  };
  useEffect(() => {
    if (!auth.isLoggedIn) {
      router.push("/register");
    }
    getData();
  }, [router.query.userId, identifiedUser]);

  return (
    <React.Fragment>
      {!isLoading && identifiedUser !== null ? (
        <div className="w-full h-[100vh] sm:w-[75vw]  flex flex-col  dark:bg-black dark:text-white  justify-center overflow-y-scroll">
          <div className="flex flex-row justify-evenly items-center   h-[25vh]">
            <img
              alt="avatar"
              src={identifiedUser.avatar}
              className="w-[25%] md:w-[150px] aspect-square  rounded-full border-2 border-pink-700"
            />
            <div className="info w-[35%] flex flex-col">
              <div className="flex flex-row justify-start items-center">
                {" "}
                <h3 className="mr-10">{identifiedUser.username}</h3>{" "}
                <button onClick={toggleSettings}>
                  <i className="fa-solid fa-gear"></i>{" "}
                </button>
              </div>
              <div className="hidden sm:flex sm:flex-row md:m-2 justify-between">
                <h1>{identifiedUser.posts.length} posts </h1>
                <button onClick={toggleFollowers}>
                  {identifiedUser.followers.length} followers{" "}
                </button>
                <button onClick={toggleFollowings}>
                  {identifiedUser.followings.length} followings{" "}
                </button>
              </div>

              <h1 className="text-md sm:text-2xl font-medium	">
                {identifiedUser.name}
              </h1>
              <h1> {identifiedUser.bio}</h1>
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
            <h1>{identifiedUser.posts.length} posts </h1>
            <button onClick={toggleFollowers}>
              {" "}
              {identifiedUser.followers.length} followers{" "}
            </button>
            <button onClick={toggleFollowings}>
              {identifiedUser.followings.length} followings{" "}
            </button>
          </div>

          <div className="h-[70vh] w-full justify-center md:w-[90%] mx-auto p-0">
            <ProfileList posts={identifiedUser.posts} />
          </div>
          <div className="overflow-y-scroll">
            <ModalComp
              openModal={isOpen}
              toggle={toggleFollowings}
              header={child}
            >
              {child === "followings" ? (
                <UsersList toggle={toggleFollowings} list={listOfUsers} />
              ) : child === "followers" ? (
                <UsersList toggle={toggleFollowings} list={listOfUsers} />
              ) : child === "settings" ? (
                <div className="w-full flex flex-col justify-center items-center">
                  <div className="w-full border-b-[1px] flex justify-center">
                    <button className="m-3 p-3 " onClick={handleLogOut}>
                      LOG OUT
                    </button>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </ModalComp>
          </div>
        </div>
      ) : identifiedUser === null ? (
        <div className="flex w-full h-[100vh] justify-center items-center">
          <h1>no user data 404</h1>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </React.Fragment>
  );
};
export default UserPage;
