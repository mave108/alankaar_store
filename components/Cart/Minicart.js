import React from 'react';
import Link from 'next/link'
import './minicart.scss';
import { discountedPrice } from '../utils/price';



const MiniCart = (props) => {

    const { data = [], ids = [] } = props;
    let total = 0;
    return (
        <div className="small-cart">
            <div className="vertical-scroll">
                {data.length > 0 && data.map(({ image, name, price, discount, nid }) => {
                    let qty = ids.filter(c => c === nid).length;
                    let unitPrice = discountedPrice(price, discount);
                    total += qty * unitPrice;
                    return (<div className="item" key={nid}>
                        <div className="image"><img src={image} /></div>
                        <div className="description">
                            <h3>{name}</h3>
                            <ul>
                                <li>Yellow, Material 2, Size 58,</li>
                                <li>Vendor: Addidas</li>
                            </ul>
                            <div>
                                <div className="qty">{qty} X </div>
                                <div className="price"> {unitPrice}</div>
                            </div>
                        </div>
                        <div className="action">
                            <button className="trash"></button>
                        </div>
                    </div>);
                })}
            </div>
            <div className="cart-total-row">
                <div className="title">SUBTOTAL:</div>
                <div className="cart-total-price">Rs {total}</div>
            </div>
            <div className="cart-button-row">
                <div className="checkout-action">
                    <button className="btn">Poceed to checkout</button>
                </div>
                <div className="view-cart-action">
                    <Link to="/cart">View Cart</Link>
                </div>
            </div>
        </div>
    )
}

export default MiniCart;