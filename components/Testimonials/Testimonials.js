import React from 'react';
import Head from 'next/head';
import './Testimonials.scss';
import SingleTestimonial from './Single';
import Slider from "react-slick";

const Testimonial = ({ data = [] }) => {
    var settings = {
        infinite: true,
        dots: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    arrows: false,
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <section>
            <Head>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <div className="home-section-heading container tsection">
                <h3>Testimonials</h3>
                <h4>What our customers are saying...</h4>
                <div className="tcontent">
                    <div className="tpos">
                        <Slider {...settings}>
                            {data.length > 0 &&
                                data.map(({ city, description, name }, index) => <SingleTestimonial key="index" city={city} description={description} name={name} />)}
                        </Slider>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Testimonial;