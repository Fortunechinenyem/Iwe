import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />

        <meta name="description" content="Iwe- A learning Management System" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <body className="font-inter bg-gray-100 text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
