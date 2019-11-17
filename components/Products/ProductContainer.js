import React from 'react';
import Product from './Product';
import './Productcontainer.scss';

const PopularProducts = (props) => {
    return (
        <section>
            <div className="home-section-heading container pp-section">
                <h3>Popular Products</h3>
                <h4>Lorem Ipsum has been the industry's standard dummy text ever</h4>
                < div className="product-container" >
                    <Product />
                    <Product />
                    <Product />
                    <Product />

                </div>
            </div>
        </section >

    );
}

export default PopularProducts;