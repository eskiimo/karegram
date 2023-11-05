import Link from "next/link";
import Image from "next/image";
import { useHttpClient } from "@/hooks/http-hook";
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
            <div key={index} className="flex flex-row justify-start my-3">
              <div className="bg-black border-red-500 border-[1px] w-[50px] aspect-square rounded-full mr-3">
                <Image
                  alt="avatar"
                  width={100}
                  height={100}
                  src={user.imageLink || "/images/avatar-male.png"}
                  className=" w-[50px] aspect-square rounded-full mr-3"
                />
              </div>

              <div className="flex flex-col">
                <Link
                  href={`/profile/${user._id}`}
                  className="text-md text-start font-semibold"
                >
                  {user.username}
                </Link>
                <h1 className="text-lg">{user.fullname}</h1>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default UsersList;
