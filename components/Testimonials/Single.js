import React from 'react';
import './single.scss';

const SingleTestimonial = ({ active, name, city, description }) => {
    return (
        <div className={`tslide ${active ? 'tactive' : ''}`}>
            <div className="text">
                {description}
            </div>
            <div className="user-name">{name}</div>
            <div className="user-city">{city}</div>
        </div>
    );
}

export default SingleTestimonial;