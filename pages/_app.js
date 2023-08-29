import Head from "next/head";
import { AppWrapper, useAuthContext } from "@/context/auth.context";
import LayOut from "@/layouts/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const auth = useAuthContext();
  return (
    <>
      <AppWrapper>
        <LayOut>
          <Head>
            <title>KareGram</title>
            <meta
              name="description"
              content="instagram clone mady by @__eskiimo"
            />
            <meta name="author" content="Kareem Kamal Nagy"></meta>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <div
            className={`flex ${
              auth.isLoggedIn ? "justify-end" : ""
            } dark:bg-black dark:text-white`}
          >
            <Component {...pageProps} />
          </div>
        </LayOut>
      </AppWrapper>
    </>
  );
}
