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
  };
  return (
    <div className="">
      <input
        type="file"
        ref={filePickerRef}
        id={props.id}
        style={{ display: "none" }}
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className="">
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
            <button onClick={clearFile} className="m-3 p-3 border">
              CANCEL
            </button>
          </>
        ) : (
          <button className="" type="button" onClick={pickImageHandler}>
            PICK IMAGE
          </button>
        )}
        {!isValid && <p>{props.errorText}</p>}
      </div>
    </div>
  );
};

export default ImageUpload;
