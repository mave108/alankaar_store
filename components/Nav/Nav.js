import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Style.scss';
import Popover from '../common/Popover/Popover';
import dynamic from 'next/dynamic';
import Input from '../common/FormElements/Input';
import MenuItems from './MenuItems';


const MiniCart = dynamic(() => import('../Cart/Minicart'),
    { loading: () => <p>loading...</p>, ssr: false }
);

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySmallCart: false,
            displaySearch: false,
            activeMenu: 1,
        }
    }

    render() {
        const { cart: { item_ids = [], items } = {} } = this.props;
        return (
            <nav className="nav-container">
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
                        <MenuItems />
                    </div>
                    <div className="user-nav">
                        <div className="inner">
                            <div className="nav-img search" onClick={() => this.setState({ displaySearch: !this.state.displaySearch })}></div>

                            {item_ids.length > 0 && <sup className="count">{item_ids.length}</sup>}
                            {item_ids.length > 0 ? (<Popover content={<MiniCart data={items} ids={item_ids} />}>
                                <div className="nav-img cart"></div>
                            </Popover>
                            ) : <div className="nav-img cart"></div>}
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