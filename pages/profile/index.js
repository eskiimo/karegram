import { useState } from "react";
import { getAllEvents } from "@/dummy-data";
import { getAllUsers, getFollowings } from "@/dummy-data";

import UserPage from "./[userId]";

const ProfilePage = () => {
  return <UserPage />;
};
export default ProfilePage;
