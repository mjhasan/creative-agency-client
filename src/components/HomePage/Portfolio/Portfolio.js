import React from 'react';
import './Portfolio.css'
import PortfolioCarousel from './PortfolioCarousel/PortfolioCarousel';
import { Container } from 'react-bootstrap';

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio-main">
            <Container>
                <h2 style={{ color: '#fff', textAlign: 'center' }}>Here are some of <span style={{ color: '#7AB259' }}>our work</span></h2>
                <PortfolioCarousel />
            </Container>
        </div>
    );
};

export default Portfolio;