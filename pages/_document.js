import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark:bg-black">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Sigmar+One&display=swap"
          rel="stylesheet"
        />

        <script
          src="https://kit.fontawesome.com/14646abff4.js"
          crossOrigin="anonymous"
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <div id="overlays" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
