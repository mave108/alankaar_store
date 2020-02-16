import React from 'react';
import './ProductContainer.scss';
import { Flipper } from 'react-flip-toolkit'

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
                        {/* <Flipper flipKey='foo' spring='wobbly'> */}
                        {products}
                        {/* </Flipper> */}
                    </div>
                </div>
            </div>
        </section >

    );
}

export default ProductContainer;