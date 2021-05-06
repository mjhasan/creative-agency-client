import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './HeroArea.css'
import bannerImage from '../../../img/images/frame.png'
const HeroArea = () => {
    return (
        <>
            <div className="hero-area-main">
                <Container>
                    <Row>
                        <Col lg="6" className="d-flex align-items-center">
                            <div>
                                <h1>Let's Grow Your Brand To The Next Level</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cumque corrupti corporis facilis officia aspernatur quod ipsa omnis, voluptatum natus non porro reprehenderit culpa. Dignissimos?</p>
                                <button className="black-btn">Hire Us</button>
                            </div>
                        </Col>
                        <Col lg="6">
                            <img width="100%" src={bannerImage} alt="banner" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FBD062" fillOpacity="1" d="M0,64L1440,0L1440,0L0,0Z"></path></svg>
        </>
    );
};

export default HeroArea;