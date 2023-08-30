import MainHeader from "./header";
import { useAuthContext } from "@/context/auth.context";

const LayOut = (props) => {
  const auth = useAuthContext();
  return (
    <>
      {auth.isLoggedIn ? <MainHeader /> : <></>}
      <main className="h-[100vh] dark:bg-black">{props.children}</main>
    </>
  );
};

export default LayOut;
