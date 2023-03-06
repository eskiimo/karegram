import MainHeader from "./header";
import { useAuthContext } from "@/context/auth.context";
import { useEffect, useState } from "react";
const LayOut = (props) => {
  const auth = useAuthContext();

  return (
    <>
      {auth.isLoggedIn ? <MainHeader /> : <></>}
      <main>{props.children}</main>
    </>
  );
};

export default LayOut;
