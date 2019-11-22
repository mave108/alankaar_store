import App from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { getHeadData, getPosts } from '../components/common/Head/Ducks/Actions';
import { getTestimonials } from '../components/Testimonials/ducks/actions';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const { reduxStore } = ctx;
    let appProps;
    if (typeof Component.getInitialProps === 'function') {
      appProps = await Component.getInitialProps(ctx);
    }
    await reduxStore.dispatch(getHeadData(true));
    // await reduxStore.dispatch(getTestimonials());
    return { ...appProps };
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withReduxStore(MyApp);
