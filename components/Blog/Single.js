import React from 'react';
import './single.scss';

const Single = (props) => {

    const { image, title, author, description } = props;
    return (
        <div className="b-single-wrapper">
            <div className="image">
                <img src={image} height="100%" />
            </div>
            <div className="details">
                <div className="meta">
                    <span className="author">by <strong>{author}</strong></span>
                    <span className="date">on January 14, 2017</span>
                    <span className="comment">16</span>
                </div>
                <div className="title">{title}</div>
                <div className="description">{description}</div>
            </div>
        </div >
    );
}

export default Single;
