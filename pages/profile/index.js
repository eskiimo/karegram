import ProfileList from "@/components/posts/profile-list";
import { getAllEvents, getFeaturedEvents } from "@/dummy-data";

const ProfilePage = () => {
  const posts = getAllEvents();
  return (
    <div className="w-full h-[100vh] sm:w-[75vw]  flex flex-col justify-center">
      <div className="flex flex-row justify-evenly items-center   h-[25vh]">
        <div className="w-[25%] md:w-[150px] aspect-square  rounded-full bg-black border-2 border-pink-700"></div>
        <div className="info w-[35%] flex flex-col">
          <div className="flex flex-row justify-between items-center">
            {" "}
            <h3>@__eskiimo</h3> <i className="fa-solid fa-gear"></i>
          </div>
          <div className="hidden sm:flex sm:flex-row md:m-2 justify-between">
            <h1>250 posts </h1>
            <h1>250 followers </h1>
            <h1>250 followings </h1>
          </div>

          <h1 className="text-md sm:text-2xl font-medium	">Kareem Kamal</h1>
          <h1> All Day I Dream </h1>
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
        <h1>250 posts </h1>
        <h1>250 followers </h1>
        <h1>250 followings </h1>
      </div>
      <div className="flex flex-row sm:hidden px-10 py-2  border-b-2  justify-between">
        {/* link to list of certain users */}
        <i className="text-blue-700 text-lg fa-solid fa-table-cells"></i>
        <i className="text-lg fa-solid fa-table-cells"></i>
        <i className="text-lg fa-solid fa-table-cells"></i>
      </div>
      <div className="h-[70vh] w-[95%] mx-auto">
        <ProfileList posts={posts} />
      </div>
    </div>
  );
};
export default ProfilePage;
