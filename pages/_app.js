import App from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { parseCookies, setCookie } from 'nookies'
import { getHeadData } from '../components/common/Head/Ducks/Actions';
import { getCart } from '../components/Cart/ducks/actions';
import { PageTransition } from 'next-page-transitions'
import { createToast, toaster } from '../utils/ui';


const uniqid = require('uniqid');
createToast();


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
    const { Component, pageProps, reduxStore, router } = this.props

    return (
      <Provider store={reduxStore}>
        <PageTransition
          timeout={300}
          classNames="page-transition"
          loadingTimeout={{
            enter: 400,
            exit: 0,
          }}
          loadingClassNames="loading-indicator"
        >
          <Component {...pageProps} key={router.route} />

        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity 300ms, transform 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </Provider>
    )
  }
}

export default withReduxStore(MyApp);
