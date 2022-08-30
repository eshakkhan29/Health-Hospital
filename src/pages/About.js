import React from 'react';
import { useLocation } from 'react-router-dom';
import AboutAside from '../components/About/AboutAside';
import AboutDetails from '../components/About/AboutDetails';
import Mission from '../components/About/Mission';
import ChooseUs from '../components/Home/ChooseUs';
import Appointment from '../components/utility/Appointment';
import Breadcrumbs from '../components/utility/Breadcrumbs';
import Footer from '../components/utility/Footer';
import Header from '../components/utility/Header';
import PageBanner from '../components/utility/PageBanner';
import PageLayout from '../pageLayout/PageLayout';

const About = () => {
    const location = useLocation();
    return (
        <div>
            <Header />
            <PageBanner>
                About
            </PageBanner>
            <Breadcrumbs location={location} />
            <PageLayout left1={<Appointment />} right={<AboutDetails />} />
            <ChooseUs />
            <PageLayout left1={<AboutAside/>}  right={<Mission />} />
            <Footer />
        </div>
    );
};

export default About;