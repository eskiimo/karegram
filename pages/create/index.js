import ImageUpload from "@/components/UI/imagepicker";
import Spinner from "@/components/UI/spinner";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const CreatePost = () => {
  const [token, setToken] = useState("");
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const captionRef = useRef();
  const router = useRouter();
  // const { isLoading, sendRequest } = useHttpClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = {
      image: file || "",
      caption: captionRef.current.value,
    };
    // const formData = new FormData();
    // formData.append("caption", captionRef.current.value);
    // formData.append("image", file);
    // console.log(post);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formData = new FormData();
    formData.append("caption", captionRef.current.value);
    formData.append("image", file);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    };

    fetch("http://localhost:5000/api/posts/newpost", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    // let res = await fetch(process.env.API + "/api/posts/newpost", {
    //   method: "POST",
    //   body: formData,
    //   headers: {
    //     Authorization: "bearer" + token,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(result);
    //     // router.push("/");
    //   });

    // create post request to backend
    //
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
