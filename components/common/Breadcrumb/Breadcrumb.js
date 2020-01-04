import React, { Component } from 'react';
import './style.scss';

const BreadCrumb = (props) => {

    return (
        <section>
            <div className="breadcrumb-section">
                <div className="container">
                    <ul className="breadcrumb">
                        <li>Home</li>
                        <li>Men</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default BreadCrumb;