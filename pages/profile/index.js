import { useAuthContext } from "@/context/auth.context";
import RegisterPage from "../register";
import UserPage from "./[...userId]";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ProfilePage = () => {
  const auth = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!auth.isLoggedIn) {
      router.push("/register");
    }
  });
  return <UserPage />;
};
export default ProfilePage;
