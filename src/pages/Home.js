import React from 'react';
import Banner from '../components/Banner';
import ChooseUs from '../components/ChooseUs';
import Department from '../components/Department';
import Doctors from '../components/Doctors';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Map from '../components/Map';
import Testimonial from '../components/Testimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner/>
            <Department/>
            <Doctors/>
            <ChooseUs/>
            <Testimonial/>
            <Gallery/>
            <Map/>
        </div>
    );
};

export default Home;