import Link from "next/link";

const UsersList = (props) => {
  const { list, toggle } = props;
  return (
    <div className=" m-5 mr-0">
      {list.map((user, index) => {
        return (
          <div key={index} className="flex flex-row justify-start my-3">
            <div className="bg-black border-red-500 border-[1px] w-[50px] aspect-square rounded-full mr-3">
              <img
                alt="avatar"
                src={user.avatar}
                className=" border-red-500 border-[1px] w-[50px] aspect-square rounded-full mr-3"
              />
            </div>

            <div className="flex flex-col">
              <Link
                href={`profile/${user.id}`}
                onClick={toggle}
                className="text-md"
              >
                {user.username}
              </Link>
              <h1 className="text-lg">{user.name}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default UsersList;
