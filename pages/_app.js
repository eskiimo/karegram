import { AppWrapper, useAuthContext } from "@/context/auth.context";
import LayOut from "@/layouts/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const auth = useAuthContext();
  return (
    <>
      <AppWrapper>
        <LayOut>
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
