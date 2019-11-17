import React from 'react';
import './single.scss';

const SingleTestimonial = ({ active }) => {
    return (
        <div className={`tslide ${active ? 'tactive' : ''}`}>
            <div className="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </div>
            <div className="user-name">Nikitha Reddy</div>
            <div className="user-city">Bangalore</div>
        </div>
    );
}

export default SingleTestimonial;