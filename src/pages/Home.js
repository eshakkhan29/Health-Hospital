import React from 'react';
import Banner from '../components/Banner';
import ChooseUs from '../components/ChooseUs';
import Department from '../components/Department';
import Doctors from '../components/Doctors';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Map from '../components/Map';
import Testimonial from '../components/Testimonial';

const Home = () => {
    return (
        <>
            <Header />
            <Banner/>
            <Department/>
            <Doctors/>
            <ChooseUs/>
            <Testimonial/>
            <Gallery/>
            <Map/>
            <Footer/>
        </>
    );
};

export default Home;