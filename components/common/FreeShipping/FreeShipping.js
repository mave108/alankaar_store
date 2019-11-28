import React from 'react';
import './style.scss';
const FreeShipping = (props) => {

    return (
        <section>
            <div className="container">
                <div className="free-shipping">
                    <div>
                        <h3>Free Shipping</h3>
                        <h4>Free shipping on all US order or order above $99</h4>
                    </div>
                    <div>
                        <h3>SUPPORT 24/7</h3>
                        <h4>Contact us 24 hours a day, 7 days a week</h4>
                    </div>
                    <div>
                        <h3>10 DAYS RETURN</h3>
                        <h4>Simply return it within 10 days for an exchange.</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FreeShipping;
