import React from 'react';
import * as ReactRedux from 'react-redux';

import { AppProps } from 'next/app';
import Head from 'next/head';

import 'minireset.css';

import { createStore } from '~client/store';

const store = createStore();

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ReactRedux.Provider store={store}>
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
    </ReactRedux.Provider>
  );
};

export default CustomApp;
