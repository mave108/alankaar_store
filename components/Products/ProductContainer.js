import React from 'react';
import './Productcontainer.scss';

const ProductContainer = ({ children }) => {
    console.log("child count", React.Children.count(children));
    const [filter, products] = React.Children.toArray(children);
    return (
        <section>
            <div className="home-section-heading container pp-section">
                <div className="content">
                    {React.Children.count(children) > 1 && <div className="left-wrapper">
                        {filter}
                    </div>}
                    <div className="right-wrapper">
                        {products}
                    </div>
                </div>
            </div>
        </section >

    );
}

export default ProductContainer;