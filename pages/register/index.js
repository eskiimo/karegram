import { useAuthContext } from "@/context/auth.context";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useHttpClient } from "@/hooks/http-hook";
import { useForm } from "@/hooks/form-hook";
import Spinner from "@/components/UI/spinner";
import Input from "@/components/UI/input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MATCH,
} from "@/hooks/validators";

const RegisterPage = () => {
  const auth = useAuthContext();
  const router = useRouter();
  const [isLogin, setisLogin] = useState(true);

  const { isloading, error, sendRequest, clearError } = useHttpClient();
  const [formState, InputHandler, setFormData] = useForm(
    {
      username: { value: "", isValid: false },
      password: { value: "", isValid: false },
    },
    false
  );

  const switchMode = () => {
    if (!isLogin) {
      setFormData(
        {
          ...formState.inputs,
          fullname: undefined,
        },
        formState.inputs.username.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          fullname: {
            value: "",
            isValid: false,
          },
          repass: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setisLogin((prev) => !prev);
  };
  const handleReg = (e) => {
    if (isLogin) {
      e.preventDefault();

      console.log("isLogin", isLogin, formState.inputs, "logging in");
      loginRequest();
    } else {
      e.preventDefault();

      console.log("isLogin", isLogin, formState.inputs, "sigining up..");
      signupRequest();
    }
  };
  ///////////////////////////////////////////////
  const loginRequest = async () => {
    clearError();

    let user = JSON.stringify({
      username: formState.inputs.username.value,
      password: formState.inputs.password.value,
    });
    const response = await sendRequest("/api/users/login", "POST", user);

    auth.login(response.userId, response.token);
    router.push("/");
  };

  const signupRequest = async () => {
    clearError();
    let user = JSON.stringify({
      fullname: formState.inputs.fullname.value,
      username: formState.inputs.username.value,
      password: formState.inputs.password.value,
      repass: formState.inputs.repass.value,
    });
    const response = await sendRequest("/api/users/signup", "POST", user);
    auth.login(response.userId, response.token);
    router.push("/");
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
        <h1 className="text-4xl font-sigmar ">KareGram</h1>
      </div>
      <form
        className=" flex flex-col justify-center items-center py-5 m-3"
        onSubmit={handleReg}
      >
        {!isLogin ? (
          <Input
            element="input"
            id="fullname"
            placeholder="Full Name"
            type="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="please enter a fullname"
            onInput={InputHandler}
          ></Input>
        ) : null}
        <Input
          id="username"
          placeholder="Username"
          element="input"
          type="text"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="wrong username format."
          onInput={InputHandler}
        />
        <Input
          id="password"
          placeholder="Password"
          element="input"
          type="password"
          validators={[VALIDATOR_MINLENGTH(8)]}
          errorText="Incorrect Password."
          onInput={InputHandler}
        />
        {!isLogin ? (
          <Input
            element="input"
            id="repass"
            placeholder="Re-Enter password"
            type="password"
            validators={[VALIDATOR_MATCH(formState.inputs.password.value)]}
            errorText="Passwords don't match."
            onInput={InputHandler}
          ></Input>
        ) : null}

        {isloading ? (
          <Spinner />
        ) : (
          <button
            className="px-3 py-1 sm:w-5/12 max-w-[400px] m-5 rounded-lg w-8/12 bg-blue-500 text-white disabled:bg-slate-500  "
            disabled={!formState.isValid}
            type="submit"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        )}
      </form>
      <div className="flex justify-center">
        <h1>
          {isLogin ? "Don't have an account ?" : "Already have an account ?"}
          <button className="text-blue-500 " onClick={switchMode}>
            {isLogin ? "Register" : "Login"}
          </button>
        </h1>
      </div>
    </div>
  );
};

export default RegisterPage;
