import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProfileList from "@/components/posts/profile-list";
import ModalComp from "@/components/UI/Modal";
import UsersList from "@/components/users-list";
import { useAuthContext } from "@/context/auth.context";
import Image from "next/image";
import { useHttpClient } from "@/hooks/http-hook";
import Spinner from "@/components/UI/spinner";

const UserPage = () => {
  const { isloading, sendRequest } = useHttpClient();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [child, setChild] = useState("");
  const [listOfUsers, setListOfUsers] = useState([]);
  const [myId, setMyId] = useState("");
  const [displayedUser, setDisplayedUser] = useState(null);
  const auth = useAuthContext();

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleFollowings = () => {
    setListOfUsers(displayedUser.followings);
    toggleModal();
    setChild("followings");
  };

  const toggleFollowers = () => {
    setListOfUsers(displayedUser.followers);
    toggleModal();
    setChild("followers");
  };

  const toggleSettings = () => {
    toggleModal();
    setChild("settings");
  };

  const handleFollow = async () => {
    let other = router.query.userId;
    let res = await sendRequest(
      process.env.API + "/api/users/" + other + "/follow",
      "PUT",
      JSON.stringify({
        id: myId,
      })
    );
  };

  const handleLogOut = () => {
    auth.logout();
    router.push("/register");
  };

  const handleSettings = () => {};

  const getLinkUser = async () => {
    let res = await sendRequest(
      process.env.API + `/api/users/${router.query.userId}`,
      "GET"
    );
    setDisplayedUser(res.user);
  };

  const getLocalUser = async () => {
    let storedUser;
    storedUser = await JSON.parse(localStorage.getItem("userData"));
    if (storedUser && storedUser.userId) {
      setMyId(storedUser.userId);
    }
  };

  useEffect(() => {
    getLocalUser();
    getLinkUser();
  }, [myId]);

  if (!displayedUser) {
    return (
      <div className="w-[100vw] sm:w-[80vw] h-[100vh] flex justify-center items-center dark:bg-black dark:text-white text-7xl">
        404 | No User Found
      </div>
    );
  } else {
    return (
      <React.Fragment>
        {!isloading ? (
          <div className="w-full  sm:w-[75vw] py-[7vh]  flex flex-col  dark:bg-black dark:text-white  justify-center ">
            <div className=" my-5 flex flex-row justify-evenly items-center   ">
              <img
                alt="avatar"
                src={displayedUser.imageLink}
                className="w-[25%] md:w-[150px] aspect-square  rounded-full border-2 border-pink-700"
              />
              {/* <Image
                alt="avatar"
                width={200}
                height={200}
                src={displayedUser.imageLink || "/images/avatar-male.png"}
                className="w-[25%] md:w-[150px] aspect-square  rounded-full border-2 border-pink-700"
              /> */}
              <div className="info w-[35%] flex flex-col">
                <div className="flex flex-row justify-start items-center">
                  {" "}
                  <h3 className="mr-10">{displayedUser.username}</h3>{" "}
                  {myId === displayedUser.id ? (
                    <button onClick={toggleSettings}>
                      <i className="fa-solid fa-gear"></i>{" "}
                    </button>
                  ) : (
                    <button
                      onClick={handleFollow}
                      className="flex bg-blue-500 py-1 px-3 rounded-md text-justify items-center text-white"
                    >
                      Follow
                    </button>
                  )}
                </div>
                <div className="hidden sm:flex sm:flex-row md:m-2 mb-2 justify-between">
                  <h1>{displayedUser.posts.length} posts </h1>
                  <button onClick={toggleFollowers}>
                    {displayedUser.followers.length} followers{" "}
                  </button>
                  <button onClick={toggleFollowings}>
                    {displayedUser.followings.length} followings{" "}
                  </button>
                </div>

                <h1 className="text-md sm:text-2xl mt-2 font-medium	">
                  {displayedUser.fullname}
                </h1>
                <h1> {displayedUser.bio}</h1>
                <a
                  className="font-medium text-blue-800"
                  href="https:eskiimo.netlify.app"
                  target="_blank"
                >
                  eskiimo.netlify.app{" "}
                </a>
              </div>
            </div>
            <div className="flex flex-row sm:hidden px-8 py-3 border-t-[1px] border-b-[1px]  justify-between">
              {/* link to list of certain users */}
              <h1>{displayedUser.posts.length} posts </h1>
              <button onClick={toggleFollowers}>
                {" "}
                {displayedUser.followers.length} followers{" "}
              </button>
              <button onClick={toggleFollowings}>
                {displayedUser.followings.length} followings{" "}
              </button>
            </div>

            <div className=" w-full justify-center md:w-[90%] mx-auto ">
              <ProfileList posts={displayedUser.posts} />
            </div>
          </div>
        ) : (
          <div className="flex w-full h-[100vh] justify-center items-center">
            <Spinner />
          </div>
        )}

        {/* ////////////////////////// MODAL  //////////////////////////////////////////////////// */}

        <ModalComp openModal={isOpen} toggle={toggleModal} header={child}>
          {child !== "settings" ? (
            <UsersList list={listOfUsers} />
          ) : (
            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-full border-b-[1px] flex justify-center">
                <button className="m-3 p-3 " onClick={handleSettings}>
                  SETTINGS
                </button>
              </div>
              <div className="w-full border-b-[1px] flex justify-center">
                <button className="m-3 p-3 " onClick={handleLogOut}>
                  LOG OUT
                </button>
              </div>
            </div>
          )}
        </ModalComp>
      </React.Fragment>
    );
  }
};

export default UserPage;
