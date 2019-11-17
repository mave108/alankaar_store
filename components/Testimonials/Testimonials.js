import React from 'react';
import './Testimonials.scss';
import SingleTestimonial from './Single';

const Testimonial = (props) => {

    return (
        <section>
            <div className="home-section-heading container tsection">
                <h3>Testimonials</h3>
                <h4>What our customers are saying...</h4>
                <div className="tcontent">
                    <div className="tpos">
                        <SingleTestimonial />
                        <SingleTestimonial active={true} />
                        <SingleTestimonial />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;