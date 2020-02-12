import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import './Style.scss';
import Popover from '../common/Popover/Popover';
import dynamic from 'next/dynamic';
import { encrypt } from '../../utils/crypt';
import Input from '../common/FormElements/Input';


const MiniCart = dynamic(() => import('../Cart/Minicart'),
    { loading: () => <p>loading...</p>, ssr: false }
);

class Nav extends Component {
    constructor(props) {
        super(props);
        this.navRef = React.createRef();
        this.state = {
            displaySmallCart: false,
            displaySearch: false
        }
        this.toggleMiniCart = this.toggleMiniCart.bind(this);
    }
    componentDidMount() {

    }
    toggleMiniCart() {
        this.setState({ displaySmallCart: true });
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps, prevState);
    }
    render() {
        const { cart: { item_ids = [], items } = {} } = this.props;
        return (
            <nav ref={this.navRef} className="nav-container">

                <div className='search-form'>
                    <div className={`inner ${this.state.displaySearch ? 'slide-down' : 'slide-up'}`}>
                        <Input type="text" placeholder="Search Here" className="main-search" />
                    </div>
                </div>
                <div className="main-nav container">
                    <div className="logo">
                        <img src="/static/images/logo@3x.png" width="185" />
                    </div>
                    <div className="menu">
                        <ul>
                            <li className="active"><Link href="/">Home</Link></li>
                            <li><Link href={{ pathname: '/styles', query: { category: 'men', filter: encrypt({ Subcategories: ['men'] }) } }} > Men</Link></li>
                            <li><Link href={{ pathname: '/styles', query: { category: 'women', filter: encrypt({ Subcategories: ['women'] }) } }}>Women</Link></li>
                            <li><Link href={{ pathname: '/styles', query: { category: 'new', filter: encrypt({ Subcategories: ['new'] }) } }}>New</Link></li>
                            <li><Link href={{ pathname: '/styles', query: { category: 'trending', filter: encrypt({ Subcategories: ['trending'] }) } }}>Trending</Link></li>
                            <li><Link href={{ pathname: '/styles', query: { category: 'sale', filter: encrypt({ Subcategories: ['sale'] }) } }}>Sale</Link></li>
                        </ul>
                    </div>
                    <div className="user-nav">
                        <div className="inner">
                            <div className="nav-img search" onClick={() => this.setState({ displaySearch: !this.state.displaySearch })}></div>

                            {item_ids.length > 0 && <sup className="count">{item_ids.length}</sup>}
                            <Popover content={<MiniCart data={items} ids={item_ids} />}>
                                <div className="nav-img cart"></div>
                            </Popover>
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