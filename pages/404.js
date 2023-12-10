import Image from "next/image";
const NotFoundPage = () => {
  return (
    <div className="w-[100vw] sm:w-[75vw] h-[100vh] flex justify-center items-center dark:bg-black dark:text-white text-7xl">
      <Image
        className="w-50 object-contain"
        src="/images/404.png"
        alt="Not Found"
        height={400}
        width={400}
        priority={true}
      />
    </div>
  );
};
export default NotFoundPage;
