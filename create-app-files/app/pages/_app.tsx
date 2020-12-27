import { AppProps } from 'next/app';
import { FunctionComponent } from 'react';

import '../styles/globals.css';

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
