import MainHeader from "./nav/header";
import { useAuthContext } from "@/context/auth.context";
import { useRouter } from "next/router";

import { NextUIProvider } from "@nextui-org/react";

const LayOut = (props) => {
  const router = useRouter();
  const auth = useAuthContext();
  const redirect = () => {
    router.push("/register");
  };
  return (
    <NextUIProvider>
      <div className="sm:flex sm:flex-row justify-between w-full m-0 p-0">
        {auth.isLoggedIn && <MainHeader />}
        <main className="h-[100vh] w-full overflow-y-scroll dark:bg-black">
          {props.children}
        </main>
      </div>
    </NextUIProvider>
  );
};

export default LayOut;
