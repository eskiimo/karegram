import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";

import ProfileList from "@/components/posts/profile-list";
import ModalComp from "@/components/UI/Modal";
import UsersList from "@/components/users-list";
import { useAuthContext } from "@/context/auth.context";
import Head from "next/head";
import Image from "next/image";

const UserPage = (props) => {
  const router = useRouter();

  if (!props) {
    return (
      <div className="w-[100vw] sm:w-[80vw] h-[100vh] flex justify-center items-center dark:bg-black dark:text-white text-7xl">
        404
      </div>
    );
  }

  let identifiedUser = props.user;
  const [isOpen, setIsOpen] = useState(false);
  const [child, setChild] = useState("");
  const [listOfUsers, setListOfUsers] = useState([]);
  const auth = useAuthContext();

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const toggleFollowings = () => {
    setListOfUsers(identifiedUser.followings);
    toggleModal();
    setChild("followings");
  };

  const toggleFollowers = () => {
    setListOfUsers(identifiedUser.followers);
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

  useEffect(() => {
    if (!auth.isLoggedIn || !identifiedUser._id) {
      router.push("/register");
    }
  }, []);

  if (!auth.isLoggedIn) {
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
            content={`karegram user ${identifiedUser.username}`}
          />
        </Head>
        {identifiedUser !== null ? (
          <div className="w-full h-[100vh] sm:w-[75vw]  flex flex-col  dark:bg-black dark:text-white  justify-center overflow-y-scroll">
            <div className="flex flex-row justify-evenly items-center   h-[25vh]">
              <Image
                width={200}
                height={200}
                alt="avatar"
                src={identifiedUser.avatar}
                className="w-[25%] md:w-[150px] aspect-square  rounded-full border-2 border-pink-700"
              />
              <div className="info w-[35%] flex flex-col">
                <div className="flex flex-row justify-start items-center">
                  {" "}
                  <h3 className="mr-10">{identifiedUser.username}</h3>{" "}
                  {/* {identifiedUser.id === "u1" ? ( */}
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
                  {identifiedUser.fullname}
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
              <ModalComp openModal={isOpen} toggle={toggleModal} header={child}>
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
        ) : (
          <div className="flex w-full h-[100vh] justify-center items-center">
            <h1>no user data 404</h1>
          </div>
        )}
      </React.Fragment>
    );
  }
};

export async function getStaticProps(context) {
  const userId = context.params.userId;
  const url =
    "mongodb+srv://kareem:highspeedlowdrag@cluster0.risomee.mongodb.net/karegram?retryWrites=true&w=majority";

  const client = await MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const db = client.db();
  let identifiedUser;
  try {
    identifiedUser = await db
      .collection("users")
      .findOne({ _id: new ObjectId(userId) });
  } catch (e) {
    console.log("e:", e);
  }
  identifiedUser._id = userId;
  return {
    props: {
      user: identifiedUser,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const url =
    "mongodb+srv://kareem:highspeedlowdrag@cluster0.risomee.mongodb.net/karegram?retryWrites=true&w=majority";

  const client = await MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  const db = client.db();
  let users;
  try {
    users = await db.collection("users").find().sort().toArray();
  } catch (e) {
    console.log("e");
  }
  const paths = users.map((u) => ({ params: { userId: u._id.toString() } }));
  return {
    paths: paths,
    // fallback: false,
    fallback: "blocking",
  };
}

export default UserPage;
