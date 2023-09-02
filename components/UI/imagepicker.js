import React, { useRef, useState, useEffect } from "react";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPrewiew] = useState();
  const [isValid, setIsValid] = useState(false);
  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPrewiew(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickImageHandler = () => {
    filePickerRef.current.click();
    console.log(previewUrl);
  };
  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid;
    if (event.target.files || event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);

      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    console.log(pickedFile);
    props.onInput(pickedFile);
  };
  const clearFile = () => {
    setFile(null);
    setPrewiew(null);
    setIsValid(false);
  };
  return (
    <div className=" flex flex-col  items-center ">
      <input
        type="file"
        ref={filePickerRef}
        id={props.id}
        style={{ display: "none" }}
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />

      {file ? (
        <div className="flex flex-col items-center relative justify-center">
          {previewUrl && (
            <img
              className="object-contain w-[95%] "
              src={previewUrl}
              alt="preview"
            />
          )}
          {!previewUrl && <p>please pick an image</p>}

          <button
            onClick={clearFile}
            type="button"
            className=" absolute hover:bg-red-300 hover:bg-opacity-25	 py-3 px-4 rounded-full aspect-square"
          >
            <i className="fa-solid fa-trash-can text-red-500 text-lg"></i>
          </button>
        </div>
      ) : (
        <div className="w-full aspect-video  border-[1px] flex justify-center items-center">
          <button onClick={pickImageHandler} type="button">
            <i className="text-5xl fa-solid fa-image"></i>
          </button>
        </div>
      )}
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;
