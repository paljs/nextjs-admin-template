import { AppProps } from 'next/app';
import * as React from 'react';
import { NextPage } from 'next';
import Layout from 'Layouts';

import 'normalize.css';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
