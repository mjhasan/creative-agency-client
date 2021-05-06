import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ContactForm.css'
const ContactForm = () => {
    return (
        <div className="contact-main">
            <Container>
                <Row>
                    <Col md={6} className="contact-info">
                        <h3>Let us handle your project professionally!</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quisquam ex repellat autem nesciunt error accusantium possimus sapiente. </p>
                    </Col>
                    <Col md={6} className="form">
                        <form>
                            <input type="email" name="email" placeholder="Your Email" id="" />
                            <br />
                            <input type="text" name="name" placeholder="Your Name / Company" id="" />
                            <br />
                            <textarea name="message" placeholder="Your Message" id="" cols="30" rows="10"></textarea>
                            <br />
                            <button className="black-btn">Sned</button>
                        </form>
                    </Col>
                </Row>
                <p className="text-center pt-5">Copyright Orange Lab 2021</p>
            </Container>
        </div>
    );
};

export default ContactForm;