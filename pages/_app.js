import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function Iwe({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default Iwe;
