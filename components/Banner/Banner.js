import React from 'react';
import './Style.scss';

const Banner = (props) => {
    return (
        <section>
            <div className="banner">
                <div className="container">
                    <div className="slide1">
                        <div className="left"></div>
                        <div className="content">
                            <p>For Ethnics</p>
                            <p>It is always difficult to select </p>
                            <p>among various styles.</p>
                            <p>We solve it for you.</p>
                            <button className="btn">Shop Now</button>
                        </div>
                        <div className="right"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;