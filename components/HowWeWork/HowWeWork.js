import React from 'react';
import './Style.scss';

const HowWeWork = (props) => {
    return (
        <section>
            <div className="home-section-heading container hww-section">
                <h3>How We Craft</h3>
                <h4>Lorem Ipsum has been the industry's standard dummy text ever</h4>
                <div className="clearfix-height"></div>
                <div className="hww-content">
                    <div className="left">
                        <h3 className="heading" counter="1st">Cut Down on Added Sugar</h3>
                        <p className="sub-heading">Look out for foods & drinks with added sugars and try eliminating them entirely from your diet for one whole day.</p>
                    </div>
                    <div className="rod"></div>
                    <div className="right">
                        <h3 className="heading" counter="2nd">Cut Down on Added Sugar</h3>
                        <p className="sub-heading">Look out for foods & drinks with added sugars and try eliminating them entirely from your diet for one whole day.</p>
                    </div>
                </div>
                <div className="hww-content">
                    <div className="left">
                        <h3 className="heading" counter="3rd">Cut Down on Added Sugar</h3>
                        <p className="sub-heading">Look out for foods & drinks with added sugars and try eliminating them entirely from your diet for one whole day.</p>
                    </div>
                    <div className="rod"></div>
                    <div className="right">
                        <h3 className="heading" counter="4th">Cut Down on Added Sugar</h3>
                        <p className="sub-heading">Look out for foods & drinks with added sugars and try eliminating them entirely from your diet for one whole day.</p>
                    </div>
                </div>
                <div className="hww-content">
                    <div className="left">
                        <h3 className="heading" counter="5th">Cut Down on Added Sugar</h3>
                        <p className="sub-heading">Look out for foods & drinks with added sugars and try eliminating them entirely from your diet for one whole day.</p>
                    </div>
                    <div className="rod"></div>
                    <div className="right" style={{ visibility: "hidden" }}>
                        <h3 className="heading">Cut Down on Added Sugar</h3>
                        <p className="sub-heading">Look out for foods & drinks with added sugars and try eliminating them entirely from your diet for one whole day.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWeWork;