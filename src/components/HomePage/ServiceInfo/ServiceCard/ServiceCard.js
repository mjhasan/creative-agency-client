import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceCard.css'
const ServiceCard = ({ info, orderHandler }) => {
    return (
        <Col md={4}>

            <Link onClick={() => orderHandler({ title: info.title, logo: info.img, description: info.description })} to="/customer-dashboard" className="link-style">
                <div className="service-card">
                    <img width={55} src={`https://gentle-fjord-52823.herokuapp.com/${info.img}`} alt={`${info.title}`} />
                    <h4>{info.title}</h4>
                    <p>{info.description}</p>
                </div>
            </Link>
        </Col>
    );
};

export default ServiceCard;