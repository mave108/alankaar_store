import React from 'react';
import './Style.scss';

const SuccessBlock = (props) => {
    return (
        <section>
            <div className="sb-section">
                <div className="container">
                    <div className="sb-content">
                        <div>
                            <div className="icon"></div>
                            <div className="title">Order Delivered</div>
                            <div className="count">35,000</div>
                        </div>
                        <div>
                            <div className="icon"></div>
                            <div className="title">Order Delivered</div>
                            <div className="count">35,000</div>
                        </div>
                        <div>
                            <div className="icon"></div>
                            <div className="title">Order Delivered</div>
                            <div className="count">35,000</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuccessBlock;
