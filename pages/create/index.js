import ImageUpload from "@/components/UI/imagepicker";
import Spinner from "@/components/UI/spinner";
import { useRef, useState } from "react";

const CreatePost = () => {
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const captionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const post = {
      image: file || "",
      caption: captionRef.current.value,
    };
    console.log(post);
    //
    // create post request to backend
    //
    setIsLoading(false);
  };
  const handleImage = (file) => {
    setFile(file);
  };

  return (
    <div className="w-full dark:bg-black bg-slate-100  min-h-[100vh] mb-[30px] sm:w-[75vw]  flex justify-center">
      <div className="h-fit pb-3 shadow-2xl md:w-7/12 rounded-md  m-10 flex flex-col">
        <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
          <div className="w-full h-[50vh]  mx-auto flex aspect-square dark:bg-black border justify-center text-center content-center  items-center ">
            <ImageUpload onInput={handleImage} />
          </div>
          <input
            className="w-full p-3 my-3 mx-auto border dark:bg-black dark:text-white"
            type="text"
            ref={captionRef}
            placeholder="write a caption..."
          ></input>
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
