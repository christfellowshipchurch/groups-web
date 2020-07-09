import React from 'react';
import App from 'next/app';

import Providers from '../Providers';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Providers>
        <Component {...pageProps} />
      </Providers>
    );
  }
}

export default MyApp;
