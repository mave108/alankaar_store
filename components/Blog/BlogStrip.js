import React from 'react';
import './blogStrip.scss';
import SinglePost from './Single';

const BlogStrip = ({ data = [] }) => {

    return (
        <section>
            <div className="home-section-heading blog-section container">
                <h3>Latest From Blog</h3>
                <h4>The freshest and most exciting blog</h4>
                <div className="bstrip">
                    {data.length > 0 && data.map((post) => <SinglePost {...post} />)}
                </div>
            </div>
        </section>
    );
}

export default BlogStrip;
