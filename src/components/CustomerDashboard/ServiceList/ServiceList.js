import React, { useContext, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { UserContext } from '../../../App';
import './ServiceList.css'

const ServiceList = () => {
    const user = useContext(UserContext)
    const fakeContext = { email: 'info.ayonahmed@gmail.com' }
    const [myOrder, setMyOrder] = useState([])
    // ?email=' + fakeContext.email
    useEffect(() => {
        fetch('https://gentle-fjord-52823.herokuapp.com/myOrder?email=' + fakeContext.email)
            .then(response => response.json())
            .then(orderList => orderList && setMyOrder(orderList));

    }, [])

    console.log(user);
    return (
        <Row>
            {
                myOrder.map(e => <Col key={e.serviceDetails?.serviceName} md={4}>
                    <div className="service-list-card">
                        <div className="service-card-header">
                            <img width={45} src={`https://gentle-fjord-52823.herokuapp.com/${e.serviceDetails?.serviceImg}`} alt={`${e.serviceDetails?.serviceName}`} />
                            <button style={{ backgroundColor: '#FFE3E3', color: '#FF4545' }}>{e.status}</button>
                        </div>
                        <h5>{e.serviceDetails?.serviceName}</h5>
                        <p>{e.serviceDetails?.serviceDetails}</p>
                    </div>
                </Col>)
            }
        </Row>
    );
};

export default ServiceList;