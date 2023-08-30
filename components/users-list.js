import Link from "next/link";
import Image from "next/image";

const UsersList = (props) => {
  const { list } = props;

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
                src={process.env.API + "/" + user.image}
                className=" w-[50px] aspect-square rounded-full mr-3"
              />
            </div>

            <div className="flex flex-col">
              <Link
                href={`/profile/${user.id}`}
                className="text-md text-start font-semibold"
              >
                {user.username}
              </Link>
              <h1 className="text-lg">{user.fullname}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default UsersList;
