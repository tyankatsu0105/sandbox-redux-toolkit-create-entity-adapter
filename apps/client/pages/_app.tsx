import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import "minireset.css";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to client!</title>
      </Head>
      <div>
        <header>
          <h1>Welcome to client!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
};

export default CustomApp;
