import React from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../components/utility/Breadcrumbs';
import Footer from '../components/utility/Footer';
import Header from '../components/utility/Header';
import PageBanner from '../components/utility/PageBanner';

const Doctors = () => {
    const location = useLocation();
    return (
        <div>
            <Header />
            <PageBanner>
                Doctors
            </PageBanner>
            <Breadcrumbs location={location}/>
            <Footer />
        </div>
    );
};

export default Doctors;