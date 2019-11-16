import React from 'react';
import Link from 'next/link'
import './Style.scss';

const Nav = (props) => {
    return (
        <nav className="sticky">
            <div className="user-nav">
                <div className="inner container">
                    <div className="nav-img search">Search</div>
                    <div className="nav-img cart">Cart</div>
                    <div className="nav-img user">user</div>
                    <div className="contact-up">Contact Us - <span>1800 258 5970</span></div>
                </div>
            </div>
            <div className="main-nav container">
                <div className="logo">
                    <img src="/static/images/logo@3x.png" width="185" />
                </div>
                <div className="menu">
                    <ul>
                        <li className="active"><Link className="active">Home</Link></li>
                        <li><Link>Men</Link></li>
                        <li><Link>Women</Link></li>
                        <li><Link>New</Link></li>
                        <li><Link>Trending</Link></li>
                        <li><Link>Sale</Link></li>
                        <li><Link>Testimonials</Link></li>
                        <li><Link>Blog</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;