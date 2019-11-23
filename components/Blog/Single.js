import React from 'react';
import './single.scss';

const Single = (props) => {

    const { image } = props;
    return (
        <div className="b-single-wrapper">
            <div className="image">
                <img src={image} height="100%" />
            </div>
            <div className="details">
                <div className="meta">
                    <span className="author">by <strong>ADRIAN</strong></span>
                    <span className="date">on January 14, 2017</span>
                    <span className="comment">16</span>
                </div>
                <div className="title">
                    DOLORE EU FUGIATNULLA PARIATUR
        FUGIATNULLA
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet conse ctetur adipisicing
     elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
                </div>
            </div>
        </div >
    );
}

export default Single;
