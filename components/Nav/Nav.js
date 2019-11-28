import React, { Component } from 'react';
import Link from 'next/link'
import './Style.scss';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.navRef = React.createRef();
    }
    componentDidMount() {
        let sticky = this.navRef.current.offsetTop;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 0) {
                if (this.navRef.current != null) {
                    this.navRef.current.classList.add("sticky");
                    this.navRef.current.style.transform = "translateY(0)";
                    this.navRef.current.style.position = "fixed";
                }
            } else {
                if (this.navRef.current != null) {
                    this.navRef.current.classList.remove("sticky");
                    this.navRef.current.style = " ";
                }
            }
        })

    }
    render() {
        return (
            <nav ref={this.navRef} className="nav-container">
                {/* <div className="user-nav">
                   
                </div> */}
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
                        </ul>
                    </div>
                    <div className="user-nav">
                        <div className="inner">
                            <div className="nav-img search">Search</div>
                            <div className="nav-img cart">Cart</div>
                            <div className="nav-img user">user</div>
                            {/* <div className="contact-up">Contact Us - <span>1800 258 5970</span></div> */}
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;