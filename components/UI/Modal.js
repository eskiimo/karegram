const ModalComp = (props) => {
  const { header, openModal, toggle } = props;

  const closeModal = () => {
    toggle();
  };

  return (
    <div
      className={`${
        openModal ? "fixed" : "hidden"
      } top-[20%] left-[10%] md:left-[40%] w-9/12 md:w-[400px] h-[60vh] rounded-md bg-white dark:bg-neutral-800  border-[1px] `}
    >
      <div className="relative top-0 w-full border-b-[1px] h-[60px]">
        <div className="flex flex-row h-full items-center justify-between mx-5">
          <h1 className="text-2xl font-medium text-black dark:text-white">
            {header}
          </h1>
          <button onClick={closeModal}>
            <i className="text-2xl fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <div>{props.children} </div>
    </div>
  );
};
export default ModalComp;
