import ImageUpload from "@/components/UI/imagepicker";
import Spinner from "@/components/UI/spinner";
import { useAuthContext } from "@/context/auth.context";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const CreatePost = () => {
  const [token, setToken] = useState("");
  const [file, setFile] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const captionRef = useRef();
  const router = useRouter();
  const auth = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    var formData = new FormData();
    formData.append("caption", captionRef.current.value);
    formData.append("image", file);
    console.log(auth.token);
    var requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth.token.toString()}`,
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

  return (
    <div className="w-full h-[100vh] mb-[7vh] py-[7vh] dark:bg-black bg-slate-100   sm:w-[75vw]  flex justify-center md:items-center  overflow-scroll">
      <form
        className="w-full md:w-[80%] h-[70%] flex flex-col "
        onSubmit={handleSubmit}
      >
        <div className="w-full h-full flex flex-col   justify-start  ">
          <ImageUpload shape="square" onInput={handleImage} />
          <div className="flex flex-row items-center justify-center px-1 md:mb-[5%]  w-full">
            <input
              className=" w-4/6 p-3 my-3 ml-0 border-[1px] rounded-md dark:bg-black dark:text-white"
              type="text"
              ref={captionRef}
              placeholder="write a caption..."
            ></input>
            {!isLoading ? (
              <button
                className=" w-2/6 py-3 m-3 px-5 mx-1 float-right rounded-lg  bg-blue-500 text-white "
                type="submit"
              >
                Upload
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
