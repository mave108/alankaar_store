import React, { useState, useEffect } from 'react';
import './style.scss';

const noop = () => { }

const Popover = ({ children, show, close = noop }) => {

    const stopBubling = (e) => {
        e.stopPropagation();
    }
    return (
        <div onClick={stopBubling}>
            <div className={`popover ${show ? 'show' : 'hide'}`} >
                <div className="body">
                    {children}
                </div>
            </div>
            {show && <div className="backdrop" onClick={close}></div>}
        </div>
    );
}

export default Popover;
