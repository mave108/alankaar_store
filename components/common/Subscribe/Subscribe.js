import React from 'react';
import './style.scss';

const Subscribe = (props) => {
    return (
        <div className="subs-wrapper">
            <input className="input subscribe" placeholder="Enter your e-mail" />
            <button className="btn subscribe">SUBSCRIBE</button>
        </div>

    )
}

export default Subscribe;