import App from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { parseCookies, setCookie } from 'nookies'
const uniqid = require('uniqid');
import { getHeadData } from '../components/common/Head/Ducks/Actions';
import { getCart } from '../components/Cart/ducks/actions';


class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const { reduxStore } = ctx;
    const { user_token } = parseCookies(ctx)

    //set user token cookie if not
    if (!user_token) {
      setCookie(ctx, 'user_token', uniqid(), {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
    let appProps;
    if (typeof Component.getInitialProps === 'function') {
      appProps = await Component.getInitialProps(ctx);
    }

    await reduxStore.dispatch(getHeadData(true));
    if (user_token) {
      await reduxStore.dispatch(getCart(user_token));
    }
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
