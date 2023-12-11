import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProfileList from "@/components/posts/profile-list";
import ModalComp from "@/components/UI/Modal";
import UsersList from "@/components/users-list";
import { useAuthContext } from "@/context/auth.context";
import Image from "next/image";
import { useHttpClient } from "@/hooks/fetch-hook";
import Spinner from "@/components/UI/spinner";
import { sendreq } from "@/hooks/static-https";

const UserPage = (props) => {
  const { user } = props;
  const { isloading, sendRequest } = useHttpClient();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [child, setChild] = useState("");
  const [listOfUsers, setListOfUsers] = useState([]);
  const [myId, setMyId] = useState("");
  const auth = useAuthContext();

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleFollowings = async () => {
    await getListByIds(user.followings);
    toggleModal();
    setChild("followings");
  };

  const toggleFollowers = async () => {
    await getListByIds(user.followers);
    toggleModal();
    setChild("followers");
  };

  const getListByIds = async (list) => {
    let body = JSON.stringify({
      list,
    });
    await sendRequest(`${process.env.API}/api/users/multi`, "POST", body, {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    }).then((res) => setListOfUsers(res.users));
  };

  const toggleSettings = () => {
    toggleModal();
    setChild("settings");
  };

  const handleFollow = async () => {
    let followed = router.query.userId;
    let body = JSON.stringify({
      id: myId,
    });
    await sendRequest(
      process.env.API + "/api/users/" + followed + "/follow",
      "POST",
      body,
      {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      }
    ).then((result) => console.log(result));
  };

  const handleLogOut = () => {
    auth.logout();
    router.push("/register");
  };

  const handleSettings = () => {};

  useEffect(() => {
    (async () => {
      let storedUser;
      storedUser = await JSON.parse(localStorage.getItem("userData"));
      if (storedUser && storedUser.userId) {
        setMyId(storedUser.userId);
      }
    })();
  }, [myId]);

  return (
    <React.Fragment>
      {!isloading && user ? (
        <div className="w-full  sm:w-[75vw] py-[7vh]  flex flex-col  dark:bg-black dark:text-white  justify-center ">
          <div className=" my-5 flex flex-row justify-evenly items-center   ">
            {/* <img
              alt="avatar"
              src={process.env.API + user.imageLink}
              className="w-[25%] md:w-[150px] aspect-square  rounded-full border-2 border-pink-700"
            /> */}
            <Image
              alt="avatar"
              width={200}
              height={200}
              src={
                `${process.env.API}/${user.imageLink}` ||
                "/images/avatar-male.png"
              }
              className="w-[25%] md:w-[150px] aspect-square  rounded-full border-2 border-pink-700"
            />
            <div className="info w-[35%] flex flex-col">
              <div className="flex flex-row justify-start items-center">
                {" "}
                <h3 className="mr-10">{user.username}</h3>{" "}
                {myId === user._id ? (
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
                <h1>{user.posts.length} posts </h1>
                <button onClick={toggleFollowers}>
                  {user.followers.length} followers{" "}
                </button>
                <button onClick={toggleFollowings}>
                  {user.followings.length} followings{" "}
                </button>
              </div>

              <h1 className="text-md sm:text-2xl mt-2 font-medium	">
                {user.fullname}
              </h1>
              <h1> {user.bio}</h1>
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
            <h1>{user.posts.length} posts </h1>
            <button onClick={toggleFollowers}>
              {" "}
              {user.followers.length} followers{" "}
            </button>
            <button onClick={toggleFollowings}>
              {user.followings.length} followings{" "}
            </button>
          </div>

          <div className=" w-full justify-center md:w-[90%] mx-auto ">
            <ProfileList posts={user.posts} />
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
};
const options = {
  rejectUnauthorized: false,
};

export async function getStaticProps(context) {
  const { params } = context;
  const userId = params.userId;
  let res = await sendreq(`${process.env.API}/api/users/${userId}`);

  console.log("user fetched is :", res.user);
  let user = res.user;
  return {
    props: {
      user,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const res = await sendreq(`${process.env.API}/api/users`);

  console.log("users fetched :", res.users.length);

  let ids = res.users.map((user) => user.id);

  let params = ids.map((u) => ({ params: { userId: u } }));

  return {
    paths: params,
    fallback: "blocking",
  };
}

export default UserPage;
