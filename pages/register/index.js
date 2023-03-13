import { useAuthContext } from "@/context/auth.context";
import { useRef } from "react";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const auth = useAuthContext();
  const router = useRouter();

  const switchMode = () => {
    console.log("switch");
  };
  const handleReg = (e) => {
    e.preventDefault();
    const user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(user);
    auth.login(user);
    router.push("/");
  };
  const logout = () => {
    auth.logout();
  };
  const getdata = () => {
    console.log(JSON.parse(localStorage.getItem("userData")));
  };
  return (
    <div className="w-full h-[100vh] sm:w-[75vw]  flex flex-col justify-evenly dark:bg-black dark:text-white">
      <div className="flex justify-center">
        {" "}
        <h1 className="text-2xl">INSTAGRAM-CLONE</h1>
      </div>
      <form
        className=" flex flex-col justify-center items-center py-5 m-3"
        onSubmit={handleReg}
      >
        <input
          className="m-2 px-3 py-1 rounded-lg border-[1px] border-black w-10/12 dark:border-gray-400"
          placeholder="username"
          id="username"
          ref={usernameRef}
          type="text"
        />

        <input
          className="m-2 px-3 py-1 rounded-lg border-[1px] border-black w-10/12 dark:border-gray-400"
          placeholder="password"
          id="password"
          ref={passwordRef}
          type="text"
        />
        <button
          className="px-3 py-1 m-5 rounded-lg w-10/12 bg-blue-500 text-white "
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
      {/* <button onClick={logout}>logout</button>
      <button onClick={getdata}>show data</button> */}
    </div>
  );
};

export default RegisterPage;
