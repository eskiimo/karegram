import Link from "next/link";
import { useRouter } from "next/router";

const UsersList = (props) => {
  const { list, toggle } = props;
  const router = useRouter();
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
              <button
                onClick={() => {
                  toggle();
                  router.push(`${user.id}`);
                }}
                className="text-md"
              >
                {user.username}
              </button>
              <h1 className="text-lg">{user.name}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default UsersList;
