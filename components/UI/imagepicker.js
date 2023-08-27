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
    <div className="h-full w-full aspect-square">
      <div className="h-[50px] flex justify-end rounded-t-md border-[1px]">
        <button onClick={clearFile} className="">
          <i className="text-xl m-3 fa-regular fa-circle-xmark"></i>
        </button>
      </div>
      <input
        type="file"
        ref={filePickerRef}
        id={props.id}
        style={{ display: "none" }}
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className="h-full">
        {file ? (
          <>
            <div className="max-h-[50vh] flex justify-center">
              {previewUrl && (
                <img
                  className="object-scale-down"
                  src={previewUrl}
                  alt="preview"
                />
              )}
              {!previewUrl && <p>please pick an image</p>}
            </div>
          </>
        ) : (
          <div className="h-[100%] flex justify-center items-center">
            <button onClick={pickImageHandler}>
              <i className="text-5xl fa-solid fa-image"></i>
            </button>
          </div>
        )}
        {!isValid && <p>{props.errorText}</p>}
      </div>
    </div>
  );
};

export default ImageUpload;
