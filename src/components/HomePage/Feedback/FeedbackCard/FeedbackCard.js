import React from 'react';
import './FeedbackCard.css'
import { Col } from 'react-bootstrap';

const FeedbackCard = ({ info }) => {
    return (
        <Col md={4}>
            <div className="user">
                <div className="d-flex">
                    <img src={info.img} width={60} height={60} alt="" />
                    <div className="user-name">
                        <h5><b>{info.name}</b></h5>
                        <h6>{info.company}</h6>
                    </div>
                </div>
                <p>{info.description}</p>
            </div>
        </Col>
    );
};

export default FeedbackCard;