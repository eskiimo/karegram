import ImageUpload from "@/components/UI/imagepicker";
import Spinner from "@/components/UI/spinner";
import { useAuthContext } from "@/context/auth.context";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const CreatePost = () => {
  const [file, setFile] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const captionRef = useRef();
  const router = useRouter();
  const auth = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    // if (!auth.token) {
    console.log("token :", auth.token);
    //   return;
    // }
    setError(null);

    var formData = new FormData();
    formData.append("caption", captionRef.current.value);
    formData.append("image", file);

    var requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
      body: formData,
      redirect: "follow",
    };
    await fetch(`${process.env.API}/api/posts/newpost`, requestOptions)
      .then((response) => {
        response.json();
        console.log(response.status);

        if (response.status === 201) {
          // console.log();
          auth.notify("Success", response.message || "Posted successfuly");

          router.push("/");
        } else if (response.status === 500) {
          console.log("session expired", response.message);

          auth.notify(
            "Error",
            response.message || "Something went wrong, Please Login again"
          );
        }
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
    <div className="w-full  mb-[7vh] py-[7vh] dark:bg-black    sm:w-[75vw]  flex justify-center md:items-center ">
      <form
        className="w-full md:w-[60%] border-2 shadow-md  flex flex-col items-between"
        onSubmit={handleSubmit}
      >
        <div className="w-full h-full flex flex-col  justify-start  ">
          <ImageUpload shape="square" onInput={handleImage} />
          <div className="flex flex-row  h-[7vh] mb-[7vh] md:mb-1  items-center justify-center px-1   w-full">
            <input
              className=" w-4/6 px-3 py-2 my-3 ml-0 border-2 rounded-md dark:bg-black dark:text-white"
              type="text"
              ref={captionRef}
              placeholder="write a caption..."
            ></input>
            {!isLoading ? (
              <button
                className=" w-2/6 px-3 py-2  mx-1 float-right rounded-lg  bg-blue-500 text-white "
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
