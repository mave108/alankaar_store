import React from 'react';
import Radio from '../../../common/FormElements/Radio/Radio';

const Single = ({ items = [], heading }) => {
    return (
        <div className="sort">
            <h3 className="heading">{heading}</h3>
            {items.length > 0 && (
                <ul className="inputs">
                    {items.map((item) => <li><Radio {...item} /></li>)}
                </ul>)}
        </div>
    );
}

export default Single;