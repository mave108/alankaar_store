import React from 'react';
import './style.scss';

const Popover = ({ children }) => {
    return (
        <div className="popover">
            <div className="body">
                {children}
            </div>
        </div>
    );
}

export default Popover;
