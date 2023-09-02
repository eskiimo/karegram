import ImageUpload from "@/components/UI/imagepicker";
import Spinner from "@/components/UI/spinner";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const CreatePost = () => {
  const [token, setToken] = useState("");
  const [file, setFile] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const captionRef = useRef();
  const router = useRouter();
  // const { error, isLoading, clearError, sendRequest } = useHttpClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(typeof token);
    setIsLoading(true);
    setError(null);

    var formData = new FormData();
    formData.append("caption", captionRef.current.value);
    formData.append("image", file);

    var requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
      redirect: "follow",
    };
    await fetch(`${process.env.API}/api/posts/newpost`, requestOptions)
      .then((response) => {
        response.json();
        console.log(response);
        if (response.status === 201) {
          console.log("posted successfuly");
          router.push("/");
        }
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error.message);
      });

    setIsLoading(false);
  };
  const handleImage = (file) => {
    setFile(file);
  };

  const getLocalUser = async () => {
    let storedUser = await JSON.parse(localStorage.getItem("userData"));
    if (storedUser) {
      setToken(storedUser.token);
    } else {
      console.log(storedUser);
    }
  };
  useEffect(() => {
    getLocalUser();
  });

  if (!token) {
    return (
      <div className="w-[100vw] sm:w-[80vw] h-[100vh] flex justify-center items-center dark:bg-black dark:text-white text-7xl">
        You Need To Be Logged In to Post. Dumbass!
      </div>
    );
  }

  return (
    <div className="w-full h-[100vh] py-[7vh] dark:bg-black bg-slate-100   sm:w-[75vw]  flex justify-center md:items-center ">
      <form
        className="w-full md:w-[80%] h-[70%] border-2 flex flex-col "
        onSubmit={handleSubmit}
      >
        <div className="w-full h-full flex flex-col md:flex-row  justify-start  ">
          <ImageUpload shape="square" onInput={handleImage} />
          <div className="flex flex-col justify-end md:mb-[5%] md:w-[50%]">
            <input
              className="w-[80%] p-3 my-3 mx-auto border dark:bg-black dark:text-white"
              type="text"
              ref={captionRef}
              placeholder="write a caption..."
            ></input>
            {!isLoading ? (
              <button
                className=" py-2 my-2 mx-auto w-[80%] max-w-[400px]  rounded-lg  bg-blue-500 text-white "
                type="submit"
              >
                POST
              </button>
            ) : (
              <div className="flex justify-center items-center m-auto w-full">
                <Spinner />
              </div>
            )}
            <p className="text-[#c03d3d] font-semibold">{error}</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
