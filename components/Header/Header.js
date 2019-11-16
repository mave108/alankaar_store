import React from 'react';
import './Style.scss';

const Header = ({ children }) => {
    return (
        <header>
            <div className="header_container">
                {children}
            </div>

        </header>
    );
}

export default Header;