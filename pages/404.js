import { Button, Result } from "antd";
const NotFoundPage = () => {
  return (
    <div className="w-[100vw] sm:w-[75vw] h-[100vh] flex justify-center items-center dark:bg-black dark:text-white text-7xl">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  );
};
export default NotFoundPage;
