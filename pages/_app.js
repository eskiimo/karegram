import LayOut from "@/layouts/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </>
  );
}
