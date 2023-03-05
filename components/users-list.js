import Link from "next/link";

const UsersList = (props) => {
  const { list } = props;
  return (
    <div className=" m-5 mr-0">
      {list.map((user, index) => {
        return (
          <div key={index} className="flex flex-row justify-start my-3">
            <div className="bg-black border-red-500 border-[1px] w-[50px] aspect-square rounded-full mr-3">
              {/* <img src={user.pp} /> */}
            </div>

            <div className="flex flex-col">
              <h1 className="text-md">{user.username}</h1>
              <h1 className="text-lg">{user.name}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default UsersList;
