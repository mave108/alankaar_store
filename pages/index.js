import React from 'react'
import { connect } from 'react-redux'
// import { startClock, serverRenderClock } from '../store'
import Examples from '../components/examples'
import BaseLayout from '../components/common/layout/BaseLayout';
import Banner from '../components/Banner/Banner';
import AdBox from '../components/AdBox/AdBox';
import ProductContainer from '../components/Products/ProductContainer';
import HowWeWork from '../components/HowWeWork/HowWeWork';
import SuccessBlock from '../components/SuccessBlock/SuccessBlock';
import Testimonials from '../components/Testimonials/Testimonials';
import InstaPosts from '../components/InstaPosts/InstaPosts';
import { getHeadData, getPosts } from '../components/common/Head/Ducks/Actions';
import { getTestimonials } from '../components/Testimonials/ducks/actions';

class Index extends React.Component {
  static async getInitialProps({ reduxStore, req }) {
    const isServer = !!req
    console.log('index page');
    await reduxStore.dispatch(getTestimonials());
    return {}
  }

  componentDidMount() {
    const { dispatch } = this.props
    // this.timer = startClock(dispatch)
  }

  componentWillUnmount() {
    // clearInterval(this.timer)
  }

  render() {
    return (
      <BaseLayout>
        <Banner />
        <AdBox />
        <ProductContainer />
        <HowWeWork />
        <SuccessBlock />
        <Testimonials />
        <InstaPosts />
      </BaseLayout>
    );
  }
}

export default connect()(Index)
