import React from 'react';
import { useLocation } from 'react-router-dom';
import ContactInfo from '../components/Contact/ContactInfo';
import Appointment from '../components/utility/Appointment';
import Breadcrumbs from '../components/utility/Breadcrumbs';
import Footer from '../components/utility/Footer';
import Header from '../components/utility/Header';
import PageBanner from '../components/utility/PageBanner';
import PageLayout from '../pageLayout/PageLayout';

const Contact = () => {
    const location = useLocation();
    return (
        <div>
            <Header />
            <PageBanner>
                Contact
            </PageBanner>
            <Breadcrumbs location={location} />
            <PageLayout left1={<Appointment />} right={<ContactInfo/>} />
            <Footer />
        </div>
    );
};

export default Contact;