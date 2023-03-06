import { useAuthContext } from "@/context/auth.context";

import UserPage from "./[userId]";

const ProfilePage = () => {
  const auth = useAuthContext();
  if (!auth.isLoggedIn) {
    return <RegisterPage />;
  }
  return <UserPage />;
};
export default ProfilePage;
