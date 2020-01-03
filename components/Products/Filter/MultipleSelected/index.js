import React from 'react';
import Checkbox from '../../../common/FormElements/Checkbox/Checkbox';

const Multiple = ({ items = [], heading }) => {
    return (
        <div className="sort">
            <h3 className="heading">{heading}</h3>
            {items.length > 0 && (
                <ul className="inputs">
                    {items.map((item) => <li><Checkbox {...item} /></li>)}
                </ul>)}
        </div>
    );
}

export default Multiple;