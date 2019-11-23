import React from 'react';
import './blogStrip.scss';
import SinglePost from './Single';

const BlogStrip = (props) => {

    return (
        <section>
            <div className="home-section-heading blog-section container">
                <h3>Latest From Blog</h3>
                <h4>The freshest and most exciting blog</h4>
                <div className="bstrip">
                    <SinglePost image="/static/images/blog1.png" />
                    <SinglePost image="/static/images/blog2.png" />
                    <SinglePost image="/static/images/blog3.png" />
                </div>
            </div>
        </section>
    );
}

export default BlogStrip;
