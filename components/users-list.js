// import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// import { useEffect } from "react";

const UsersList = (props) => {
  const { list, toggle } = props;
  const router = useRouter();
  // useEffect(() => {
  //   console.log(props);
  // });
  return (
    <div className=" m-5 mr-0">
      {list.map((user, index) => {
        return (
          <div key={index} className="flex flex-row justify-start my-3">
            <div className="bg-black border-red-500 border-[1px] w-[50px] aspect-square rounded-full mr-3">
              <Image
                width={100}
                height={100}
                alt="avatar"
                src={user.avatar}
                className=" border-red-500 border-[1px] w-[50px] aspect-square rounded-full mr-3"
              />
            </div>

            <div className="flex flex-col">
              <button
                onClick={() => {
                  // toggle();
                  router.push(`/profile/${user.id}`);
                }}
                className="text-md"
              >
                {user.username}
              </button>
              <h1 className="text-lg">{user.fullname}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default UsersList;
