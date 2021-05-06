import React from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import HeroArea from './HeroArea/HeroArea';
import './HomePage.css'
import CompanyLogos from './CompanyLogos/CompanyLogos';
import ServiceInfo from './ServiceInfo/ServiceInfo';
import Portfolio from './Portfolio/Portfolio';
import Feedback from './Feedback/Feedback';
import ContactForm from './ContactForm/ContactForm';
const HomePage = () => {
    return (
        <>
            <HomeHeader />
            <HeroArea/>
            <CompanyLogos/>
            <ServiceInfo/>
            <Portfolio/>
            <Feedback/>
            <ContactForm/>
        </>
    );
};

export default HomePage;