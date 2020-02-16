import React from 'react';
import { useDispatch } from 'react-redux'
import './Product.scss';
import { discountedPrice, actualPrice } from '../../utils/price';
import { addToCart } from '../Cart/ducks/actions';
import { getCookie } from '../../utils/cookie';
import { Flipped } from 'react-flip-toolkit'

const Product = (props) => {
    const { name, image, price, discount = 0, nid } = props;
    const dispatch = useDispatch();
    return (
        <Flipped flipId={`product-${nid}`}>
            <div className="product-box">
                <div className="image">
                    <img src={image} />
                </div>
                <div className="title">{name}</div>
                <div className="rating">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
                <div className="price">₹ {discountedPrice(price, discount)}
                    {discount > 0 && (<>&nbsp; <span className="strike-trough">₹ {actualPrice(price)}</span></>)}
                </div>
                <div className="cta">
                    <button className="btn" onClick={() => { dispatch(addToCart(nid, getCookie('user_token'))) }}>Add To Cart</button>
                </div>
            </div >
        </Flipped>
    )
}

export default Product;