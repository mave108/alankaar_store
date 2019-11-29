import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import './Style.scss';
import Popover from '../common/Popover/Popover';
import dynamic from 'next/dynamic';


const MiniCart = dynamic(() => import('../Cart/Minicart'),
    { loading: () => <p>loading...</p>, ssr: false }
);

class Nav extends Component {
    constructor(props) {
        super(props);
        this.navRef = React.createRef();
        this.state = {
            displaySmallCart: false,
        }
        this.toggleMiniCart = this.toggleMiniCart.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 0) {
                if (this.navRef.current != null) {
                    this.navRef.current.classList.add("sticky");
                    this.navRef.current.style.transform = "translateY(0)";
                    this.navRef.current.style.position = "fixed";
                    this.setState({ displaySmallCart: false });
                }
            } else {
                if (this.navRef.current != null) {
                    this.navRef.current.classList.remove("sticky");
                    this.navRef.current.style = " ";
                }
            }
        })

    }
    toggleMiniCart() {
        this.setState({ displaySmallCart: true });
    }
    render() {
        const { cart: { item_ids = [], items } = {} } = this.props;
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
                            <div className="nav-img search"></div>
                            <div className="nav-img cart" style={{ position: 'relative' }} onClick={this.toggleMiniCart}>
                                {item_ids.length > 0 && <sup className="count">{item_ids.length}</sup>}
                                <Popover show={this.state.displaySmallCart} close={() => { this.setState({ displaySmallCart: false }) }}>
                                    {this.state.displaySmallCart && <MiniCart data={items} ids={item_ids} />}
                                </Popover>
                            </div>
                            <div className="nav-img user"></div>
                            {/* <div className="contact-up">Contact Us - <span>1800 258 5970</span></div> */}
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
function mapStateToProps(state) {
    const { cart } = state;
    return {
        cart,
    }
}

export default connect(mapStateToProps, null)(Nav);