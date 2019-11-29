import React from 'react'
import { connect } from 'react-redux';
// import { startClock, serverRenderClock } from '../store'
import Examples from '../components/examples'
import BaseLayout from '../components/common/layout/BaseLayout';
import Banner from '../components/Banner/Banner';
import AdBox from '../components/AdBox/AdBox';
import PopularProducts from '../components/Products/ProductContainer';
import HowWeWork from '../components/HowWeWork/HowWeWork';
import SuccessBlock from '../components/SuccessBlock/SuccessBlock';
import Testimonials from '../components/Testimonials/Testimonials';
import InstaPosts from '../components/InstaPosts/InstaPosts';
import BlogStrip from '../components/Blog/BlogStrip';
import FreeShipping from '../components/common/FreeShipping/FreeShipping';
import { getHeadData, getPosts } from '../components/common/Head/Ducks/Actions';
import { getTestimonials } from '../components/Testimonials/ducks/actions';
import { getBlogs } from '../components/Blog/ducks/actions';
import { getPopularProducts } from '../components/Products/ducks/actions';
import Popover from '../components/common/Popover/Popover';

class Index extends React.Component {
  static async getInitialProps({ reduxStore, req }) {
    const isServer = !!req
    await reduxStore.dispatch(getTestimonials());
    await reduxStore.dispatch(getBlogs());
    await reduxStore.dispatch(getPopularProducts());
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
    const { testimonials = [], blog = [], popularProducts } = this.props;
    // console.log("index page", popularProducts);
    return (
      <BaseLayout>
        {/* <Popover>
          <p>ddffds dfdf dfdfd dsf</p>
          <p>ddffds dfdf dfdfd dsf</p>
          <p>ddffds dfdf dfdfd dsf</p>
          <p>ddffds dfdf dfdfd dsf</p>
        </Popover> */}
        <Banner />
        <AdBox />
        <PopularProducts data={popularProducts} />
        <HowWeWork />
        <SuccessBlock />
        <Testimonials data={testimonials} />
        <BlogStrip data={blog} />
        <InstaPosts />
        <FreeShipping />
      </BaseLayout>
    );
  }
}

function mapStateToProps(state) {
  const { testimonials, blog, products: { popular } = {} } = state;
  return {
    testimonials,
    blog,
    popularProducts: popular
  }
}

export default connect(mapStateToProps, null)(Index)
