import React from 'react';
import { useLocation } from 'react-router-dom';
import DoctorCategory from '../components/Doctors/DoctorCategory';
import DoctorDetails from '../components/Doctors/DoctorDetails';
import Appointment from '../components/utility/Appointment';
import Breadcrumbs from '../components/utility/Breadcrumbs';
import Footer from '../components/utility/Footer';
import Header from '../components/utility/Header';
import PageBanner from '../components/utility/PageBanner';
import PageLayout from '../pageLayout/PageLayout';

const Doctors = () => {
    const location = useLocation();
    return (
        <div>
            <Header />
            <PageBanner>
                Doctors
            </PageBanner>
            <Breadcrumbs location={location}/>
            <PageLayout left1={<DoctorCategory/>} left2={<Appointment/>} right={<DoctorDetails/>}/>
            <Footer />
        </div>
    );
};

export default Doctors;