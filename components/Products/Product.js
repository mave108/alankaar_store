import React from 'react';
import './Product.scss';

const Product = (props) => {
    return (
        <div className="product-box">
            <div className="image">
                <img src="./static/images/product.png" />
            </div>
            <div className="title">Nehru Jacket</div>
            <div className="rating">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
            <div className="price">₹ 3156.00 &nbsp;
            <span className="strike-trough">₹ 4300.00</span>
            </div>
            <div className="cta">
                <button className="btn">Add To Cart</button>
            </div>
        </div >
    )
}

export default Product;