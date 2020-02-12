import React from 'react';
import './Style.scss';
import Headroom from 'react-headroom';

const Header = ({ children }) => {
    return (
        <header>
            <Headroom style={{
                webkitTransition: 'all .5s ease-in-out',
                mozTransition: 'all .5s ease-in-out',
                oTransition: 'all .5s ease-in-out',
                transition: 'all .5s ease-in-out'
            }}>
                <div className="header_container">
                    {children}
                </div>
            </Headroom>
        </header>
    );
}

export default Header;