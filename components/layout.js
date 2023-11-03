import MainHeader from "./nav/header";
import { useAuthContext } from "@/context/auth.context";
import { FloatButton } from "antd";
import { LoginOutlined } from "@ant-design/icons";
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
      {auth.isLoggedIn ? (
        <MainHeader />
      ) : (
        <FloatButton
          icon={<LoginOutlined />}
          onClick={redirect}
          type="primary"
          style={{
            right: "10%",
          }}
        />
      )}
      <main className="h-[100vh] dark:bg-black">{props.children}</main>
    </NextUIProvider>
  );
};

export default LayOut;
