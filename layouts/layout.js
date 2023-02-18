import MainHeader from "./header";

const LayOut = (props) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default LayOut;
