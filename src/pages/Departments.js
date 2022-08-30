import React from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../components/utility/Breadcrumbs';
import Footer from '../components/utility/Footer';
import Header from '../components/utility/Header';
import PageBanner from '../components/utility/PageBanner';
import PageLayout from '../pageLayout/PageLayout';
import DepartmentsList from '../components/Department/DepartmentsList';
import DepartmentDetails from '../components/Department/DepartmentDetails';
import Appointment from '../components/utility/Appointment';

const Departments = () => {
    const location = useLocation();
    return (
        <div>
            <Header />
            <PageBanner>
                Departments
            </PageBanner>
            <Breadcrumbs location={location} />
            <PageLayout left1={<DepartmentsList />} left2={<Appointment/>} right={<DepartmentDetails />} />
            <Footer />
        </div>
    );
};

export default Departments;