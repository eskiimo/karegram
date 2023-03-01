import LayOut from "@/layouts/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <LayOut>
        <div className="flex justify-end dark:bg-black dark:text-white">
          <Component {...pageProps} />
        </div>
      </LayOut>
    </>
  );
}
