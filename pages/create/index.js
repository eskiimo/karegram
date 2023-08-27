import ImageUpload from "@/components/UI/imagepicker";
import Spinner from "@/components/UI/spinner";
import { useHttpClient } from "@/hooks/http-hook";
import { headers } from "@/next.config";
import { useEffect, useRef, useState } from "react";

const CreatePost = () => {
  const [token, setToken] = useState("");
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const captionRef = useRef();
  const { sendRequest } = useHttpClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const post = {
      image: file || "",
      caption: captionRef.current.value,
    };
    const formData = new FormData();
    formData.append("caption", captionRef.current.value);
    formData.append("image", file);
    console.log(post, token);
    let res = await fetch(process.env.API + "/api/posts/create", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "bearer" + token,
      },
    });
    if (res) {
      console.log(res);
    }

    // create post request to backend
    //
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

  return (
    <div className="w-full h-[100vh] dark:bg-black bg-slate-100   sm:w-[75vw]  flex justify-center md:items-center ">
      <div className="md:w-50 pb-3 shadow-2xl h-fit rounded-md  m-2 flex flex-col">
        <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
          <div className="w-full h-[50vh]  mx-auto flex aspect-square dark:bg-black border justify-center text-center content-center  items-center ">
            <ImageUpload onInput={handleImage} />
          </div>
          <div className="p-2 flex justify-center">
            <input
              className="w-[90%] p-3 my-3 mx-auto border dark:bg-black dark:text-white"
              type="text"
              ref={captionRef}
              placeholder="write a caption..."
            ></input>
          </div>
          {!isLoading ? (
            <button
              className=" py-2 my-2 mx-auto w-[50%] max-w-[400px]  rounded-lg  bg-blue-500 text-white "
              type="submit"
            >
              POST
            </button>
          ) : (
            <div className="flex justify-center items-center m-auto w-full">
              <Spinner />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
