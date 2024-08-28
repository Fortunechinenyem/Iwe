import Layout from "@/app/components/Layout";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function Iwe({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default Iwe;
