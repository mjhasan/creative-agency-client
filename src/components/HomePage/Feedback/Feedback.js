import React from 'react';
import { Row, Container } from 'react-bootstrap';
import customer1 from '../../../img/images/customer-1.png'
import customer2 from '../../../img/images/customer-2.png'
import customer3 from '../../../img/images/customer-3.png'
import FeedbackCard from './FeedbackCard/FeedbackCard';
import './Feedback.css';
import { useState } from 'react';
import { useEffect } from 'react';
const fakeReview = [
    {
        img: customer1,
        name: 'Nash Patrik',
        designation: 'CEO, Manpol'
    },
    {
        img: customer2,
        name: 'Miriam Barron',
        designation: 'CEO, Manpol'
    },
    {
        img: customer3,
        name: 'Bria Malone',
        designation: 'CEO, Manpol'
    }
]
const Feedback = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('https://gentle-fjord-52823.herokuapp.com/allReview')
            .then(response => response.json())
            .then(data => data && setReview(data));
    }, [])

    return (
        <Container className="feedback-main">
            <h2 className="text-center">Provide awesome <span style={{ color: '#7AB259' }}>services</span></h2>
            <Row className="feedback-content">
                {review.map(info => <FeedbackCard key={info.img} info={info} />)}
            </Row>
        </Container>
    );
};

export default Feedback;