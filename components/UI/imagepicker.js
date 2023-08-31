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
    <div
      className={`ImagePicker flex flex-col  items-center ${
        props.shape === "square" ? "md:w-[50%]" : "h-full  w-full rounded-full"
      } `}
    >
      <input
        type="file"
        ref={filePickerRef}
        id={props.id}
        style={{ display: "none" }}
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />

      {file && props.shape === "square" ? (
        <div className="flex flex-col items-center">
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
            className="h-[40px] w-[200px] flex items-center justify-center m-1 bg-gray-500 rounded-md "
          >
            Cancel
          </button>
        </div>
      ) : file && props.shape === "circle" ? (
        <div className="flex flex-col h-full w-full rounded-full items-center relative">
          {previewUrl && (
            <img
              className="object-fil h-full w-full "
              src={previewUrl}
              alt="preview"
            />
          )}
          {!previewUrl && <p>please pick an image</p>}

          <button
            onClick={clearFile}
            type="button"
            className="absolute bottom-[10%] h-[40px] w-[150px] flex items-center justify-center m-1 bg-gray-500 rounded-md "
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="h-[100%] flex justify-center items-center">
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
