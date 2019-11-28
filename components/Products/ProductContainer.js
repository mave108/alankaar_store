import React from 'react';
import Product from './Product';
import './Productcontainer.scss';

const PopularProducts = ({ data = [] }) => {
    return (
        <section>
            <div className="home-section-heading container pp-section">
                <h3>Popular Products</h3>
                <h4>Lorem Ipsum has been the industry's standard dummy text ever</h4>
                < div className="product-container" >
                    {data.length > 0 && data.map((product) => <Product {...product} />)}
                </div>
            </div>
        </section >

    );
}

export default PopularProducts;