import React from 'react';
import './PortfolioCarousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Col, Row } from 'react-bootstrap';
import img1 from '../../../../img/images/carousel-1.png'
import img2 from '../../../../img/images/carousel-2.png'
import img3 from '../../../../img/images/carousel-4.png'
import img4 from '../../../../img/images/carousel-5.png'
const PortfolioCarousel = () => {
    const flickityOptions = {
        initialIndex: 2
    }
    return (
        <div className="carousel-main">
            <Carousel showThumbs={false}>
                <div className="d-flex">
                    <div className="carousel-content"><img src={img1} width="100%" alt="" /></div>
                    <div className="carousel-content"><img src={img2} width="100%" alt="" /></div>
                </div>
                <div className="d-flex">
                    <div className="carousel-content"><img src={img3} width="100%" alt="" /></div>
                    <div className="carousel-content"><img src={img4} width="100%" alt="" /></div>
                </div>

            </Carousel>
        </div>
    );
};

export default PortfolioCarousel;