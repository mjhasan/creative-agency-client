import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import './ServiceInfo.css'
import ServiceCard from './ServiceCard/ServiceCard';
import { UserContext } from '../../../App';
import { useState } from 'react';
import { useEffect } from 'react';

const ServiceInfo = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('https://gentle-fjord-52823.herokuapp.com/allService')
            .then(response => response.json())
            .then(data => data && setService(data));
    }, [])

    const [user, updateUser] = useContext(UserContext);

    const orderHandler = (orderInfo) => {
        const newUserInfo = { ...user, orderInfo: orderInfo }
        updateUser(newUserInfo);
    }
    console.log(user);
    return (
        <Container className="service-main">
            <h2 className="text-center">Provide awesome <span style={{ color: '#7AB259' }}>services</span></h2>
            <Row style={{ marginTop: '70px' }}>
                {service.map(s => <ServiceCard key={s.img} info={s} orderHandler={orderHandler} />)}
            </Row>
        </Container>

    );
};

export default ServiceInfo;