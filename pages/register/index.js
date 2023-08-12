import { useAuthContext } from "@/context/auth.context";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useHttpClient } from "@/hooks/http-hook";

const RegisterPage = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const auth = useAuthContext();
  const router = useRouter();
  const [islogin, setIsLogin] = useState(true);

  const { isloading, error, sendRequest, clearError } = useHttpClient();

  const switchMode = () => {
    setIsLogin((prev) => !prev);
  };
  const handleReg = (e) => {
    e.preventDefault();
    const user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(user);
    loginRequest(user);
    // auth.login(user);
    // router.push("/");
  };
  ///////////////////////////////////////////////
  const loginRequest = async (input) => {
    // let body = JSON.stringify({
    //   username: input.username,
    //   password: input.password,
    // });
    sendRequest(
      "/api/users",
      "POST",
      JSON.stringify({
        username: input.username,
        password: input.password,
      })
    );
  };

  // const logout = () => {
  //   auth.logout();
  // };
  const getLocalUser = async () => {
    const storedUser = await JSON.parse(localStorage.getItem("userData"));

    console.log("getting local data ", storedUser);
    if (storedUser && storedUser !== null) {
      auth.login(storedUser);
      router.push("/");
    } else {
      return "no user";
    }
  };
  useEffect(() => {
    getLocalUser();
  }, []);
  return (
    <div className="w-full h-[100vh]   flex flex-col justify-evenly dark:bg-black dark:text-white">
      <div className="flex  justify-center">
        {" "}
        <h1 className="text-2xl">INSTAGRAM-CLONE</h1>
      </div>
      <form
        className=" flex flex-col justify-center items-center py-5 m-3"
        onSubmit={handleReg}
      >
        <input
          className="m-2 px-3 py-1 sm:w-5/12 max-w-[400px] rounded-lg border-[1px] border-black w-8/12 dark:border-gray-400"
          placeholder="username"
          id="username"
          ref={usernameRef}
          type="text"
        />

        <input
          className="m-2 px-3 py-1 sm:w-5/12 max-w-[400px] rounded-lg border-[1px] border-black w-8/12 dark:border-gray-400"
          placeholder="password"
          id="password"
          ref={passwordRef}
          type="password"
        />
        <button
          className="px-3 py-1 sm:w-5/12 max-w-[400px] m-5 rounded-lg w-8/12 bg-blue-500 text-white "
          type="submit"
        >
          {" "}
          login
        </button>
      </form>
      <div className="flex justify-center">
        <h1>
          {" "}
          Don't have an account ?{" "}
          <button className="text-blue-500" onClick={switchMode}>
            {" "}
            Register{" "}
          </button>
        </h1>
      </div>
    </div>
  );
};

export default RegisterPage;
