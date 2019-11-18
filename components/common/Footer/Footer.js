import React from 'react';
import './style.scss';
import Subscribe from '../Subscribe/Subscribe';

const Footer = (props) => {

    return (
        <footer>
            <div className="main-footer">
                <div className="container">
                    <div>
                        <h3 className="f-heading">BE IN TOUCH WITH US</h3>
                        <Subscribe />
                        <div className="socail-icons">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="f-heading">USEFUL LINKS </h3>
                        <div className="useful-links">
                            <ul>
                                <li>Track Order</li>
                                <li>Men</li>
                                <li>Women</li>
                                <li>Blog</li>
                                <li>Testimonials</li>
                                <li>Store</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="f-heading">CONTACTS</h3>
                        <div className="contact-info">
                            <p>Address: 2548 Broaddus Maple Court</p>
                            <p> Avenue, Madisonville KY 4783,</p>
                            <p>United States of America</p>
                            <p>&nbsp;</p>
                            <p>Phone: +777 2345 7885; +777 2345 7886</p>
                            <p>Hours: 7 Days a week from 10 am to 6 pm</p>
                            <p> E-mail: info@mydomain.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="small-footer">
                <div className="container">
                    <div>© Alankaar 2019. All Rights Reserved</div>
                    <div><img src="/static/images/payments.png" /></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;