import React from 'react';
import Banner from '../components/Home/Banner';
import ChooseUs from '../components/Home/ChooseUs';
import Department from '../components/Home/Department';
import Doctors from '../components/Home/Doctors';
import Footer from '../components/utility/Footer';
import Gallery from '../components/Home/Gallery';
import Header from '../components/utility/Header';
import Map from '../components/Home/Map';
import Testimonial from '../components/Home/Testimonial';

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