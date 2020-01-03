import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'next/router'
import BaseLayout from '../components/common/layout/BaseLayout';
import ProductsContainer from '../components/Products/ProductContainer';
import Products from '../components/Products/Product';
import FreeShipping from '../components/common/FreeShipping/FreeShipping';
import { getProducts, setFilter } from '../components/Products/ducks/actions';
import BreadCrumb from '../components/common/Breadcrumb/Breadcrumb';
import Filter from '../components/Products/Filter/Filter';
import { decrypt } from '../utils/crypt';
// import Popover from '../components/common/Popover/Popover';

class Styles extends React.Component {
    static async getInitialProps({ reduxStore, query, req }) {
        // const isServer = !!req
        await reduxStore.dispatch(setFilter(decrypt(query.filter)));
        await reduxStore.dispatch(getProducts());
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
        const { products = [] } = this.props;
        return (
            <BaseLayout>
                <BreadCrumb />
                <ProductsContainer>
                    <Filter />
                    <>
                        <h1 className="page-heading">Men <span className="item-count">(215 Items)</span></h1>
                        <div style={{ width: "100%", height: "2rem" }}></div>
                        {products.map(product => <Products {...product} />)}
                    </>
                </ProductsContainer>
                <FreeShipping />
            </BaseLayout>
        );
    }
}

function mapStateToProps(state) {
    const { products: { list } = {} } = state;
    return {
        products: list
    }
}

export default connect(mapStateToProps, null)(withRouter(Styles))
