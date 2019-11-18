import React from 'react';
import './Style.scss';

const InstaPosts = (props) => {
    return (
        <section>
            <div className="home-section-heading insta-section">
                <h3><span className="primary-text-color">@ FOLLOW</span> us on</h3>
                <h4>Lorem Ipsum has been the industry's standard dummy text ever</h4>
                <div className="insta-content">
                    <img src="/static/images/in1.png" />
                    <img src="/static/images/in2.png" />
                    <img src="/static/images/in3.png" />
                    <img src="/static/images/in4.png" />
                    <img src="/static/images/in5.png" />
                </div>
            </div>
        </section>
    );
}

export default InstaPosts;