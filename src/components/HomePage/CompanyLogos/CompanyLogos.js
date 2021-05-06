import React from 'react';
import { Container } from 'react-bootstrap';
import airbnb from '../../../img/logos/airbnb.png'
import google from '../../../img/logos/google.png'
import netflix from '../../../img/logos/netflix.png'
import slack from '../../../img/logos/slack.png'
import uber from '../../../img/logos/uber.png'
import './CompanyLogos.css'
const CompanyLogos = () => {
    return (
        <Container>
            <div className="company-logo d-flex justify-content-around flex-wrap">
                <img height="40" src={airbnb} alt="airbnb" />
                <img height="40" src={google} alt="google" />
                <img height="40" src={netflix} alt="netflix" />
                <img height="40" src={slack} alt="slack" />
                <img height="40" src={uber} alt="uber" />
            </div>
        </Container>
    );
};

export default CompanyLogos;