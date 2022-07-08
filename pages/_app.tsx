import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Teste Técnico Frontend - MKPLACE</title>
        <link rel="icon" href="/favicon-mkplace.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
