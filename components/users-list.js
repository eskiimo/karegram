import Link from "next/link";
import Image from "next/image";
import { useHttpClient } from "@/hooks/fetch-hook";
import {} from "react";

const UsersList = (props) => {
  const { list } = props;

  return (
    <div className=" m-5 mr-0">
      {list.length === 0 ? (
        <div className="flex flex-row justify-start my-3">
          {/* <p> no Users Found</p> */}
        </div>
      ) : (
        list.map((user, index) => {
          return (
            <Link
              href={`/profile/${user._id}`}
              key={index}
              className="flex flex-row justify-start my-3 hover:bg-slate-200"
            >
              <div className="bg-black border-red-500 border-[1px] w-[50px] aspect-square rounded-full mr-3">
                {/* <Image
                  alt="avatar"
                  width={100}
                  height={100}
                  src={
                    `${process.env.API}/${user.imageLink}` ||
                    "/images/avatar-male.png"
                  }
                  className=" w-[50px] aspect-square rounded-full mr-3"
                /> */}
                <img
                  alt="avatar"
                  src={
                    `${process.env.API}/${user.imageLink}` ||
                    "/images/avatar-male.png"
                  }
                  className=" w-[50px] aspect-square rounded-full mr-3"
                />
              </div>

              <div className="flex flex-col">
                <p className="text-md text-start font-semibold">
                  {user.username}
                </p>
                <p className="text-lg">{user.fullname}</p>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};
export default UsersList;
