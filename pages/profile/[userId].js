import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ProfileList from "@/components/posts/profile-list";
import ModalComp from "@/components/UI/Modal";
import UsersList from "@/components/users-list";
import { useAuthContext } from "@/context/auth.context";
import Head from "next/head";
import Image from "next/image";
import { useHttpClient } from "@/hooks/http-hook";
import Spinner from "@/components/UI/spinner";

const UserPage = () => {
  const { sendRequest } = useHttpClient();
  const router = useRouter();

  const [displayedUser, setDisplayedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [child, setChild] = useState("");
  const [listOfUsers, setListOfUsers] = useState([]);
  const [myId, setMyId] = useState("");
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

  const handleLogOut = () => {
    auth.logout();
    router.push("/register");
    console.log("log out button " + auth.isLoggedIn);
  };
  const handleSettings = () => {};

  const getLocalUser = async () => {
    let storedUser = await JSON.parse(localStorage.getItem("userData"));
    setMyId(storedUser.id);
    // console.log("storedUser", storedUser);
  };
  const getUserByQId = async (id) => {
    console.log(id);
    let response = await sendRequest(`/api/users/${id}`);
    if (response) {
      setDisplayedUser(response.user);
      setIsLoading(false);
    } else {
      console.log(response);
    }
  };
  useEffect(() => {
    getUserByQId(router.query.userId);
    getLocalUser();
  }, [router.query.userId]);

  if (!auth.isLoggedIn) {
    return (
      <div className="w-[100vw] sm:w-[80vw] h-[100vh] flex justify-center items-center dark:bg-black dark:text-white text-7xl">
        404
      </div>
    );
  } else if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Spinner />
      </div>
    );
  } else if (!displayedUser) {
    return (
      <div className="w-[100vw] sm:w-[80vw] h-[100vh] flex justify-center items-center dark:bg-black dark:text-white text-7xl">
        404
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <Head>
          <meta
            name="description"
            content={`karegram user ${displayedUser.username}`}
          />
        </Head>
        {isLoading ? (
          <Spinner />
        ) : displayedUser !== null ? (
          <div className="w-full h-[100vh] sm:w-[75vw]  flex flex-col  dark:bg-black dark:text-white  justify-center overflow-y-scroll">
            <div className="flex flex-row justify-evenly items-center   h-[25vh]">
              <Image
                priority={true}
                width={200}
                height={200}
                alt="avatar"
                src={displayedUser.avatar}
                className="w-[25%] md:w-[150px] aspect-square  rounded-full border-2 border-pink-700"
              />
              <div className="info w-[35%] flex flex-col">
                <div className="flex flex-row justify-start items-center">
                  {" "}
                  <h3 className="mr-10">{displayedUser.username}</h3>{" "}
                  {myId === displayedUser._id ? (
                    <button onClick={toggleSettings}>
                      <i className="fa-solid fa-gear"></i>{" "}
                    </button>
                  ) : null}
                </div>
                <div className="hidden sm:flex sm:flex-row md:m-2 justify-between">
                  <h1>{displayedUser.posts.length} posts </h1>
                  <button onClick={toggleFollowers}>
                    {displayedUser.followers.length} followers{" "}
                  </button>
                  <button onClick={toggleFollowings}>
                    {displayedUser.followings.length} followings{" "}
                  </button>
                </div>

                <h1 className="text-md sm:text-2xl font-medium	">
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
            <div className="flex flex-row sm:hidden px-8 py-3 border-t-2 border-b-2  justify-between">
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

            <div className="h-[70vh] w-full justify-center md:w-[90%] mx-auto p-0">
              <ProfileList posts={displayedUser.posts} />
            </div>
            <div className="overflow-y-scroll">
              <ModalComp openModal={isOpen} toggle={toggleModal} header={child}>
                {child === "followings" ? (
                  <UsersList toggle={toggleFollowings} list={listOfUsers} />
                ) : child === "followers" ? (
                  <UsersList toggle={toggleFollowings} list={listOfUsers} />
                ) : child === "settings" ? (
                  <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-full border-b-[1px] flex justify-center">
                      <button className="m-3 p-3 " onClick={handleLogOut}>
                        SETTINGS
                      </button>
                    </div>
                    <div className="w-full border-b-[1px] flex justify-center">
                      <button className="m-3 p-3 " onClick={handleSettings}>
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
        ) : (
          <div className="flex w-full h-[100vh] justify-center items-center">
            <h1>no user data 404</h1>
          </div>
        )}
      </React.Fragment>
    );
  }
};

export default UserPage;
