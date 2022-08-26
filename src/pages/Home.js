import React from 'react';
import Banner from '../components/Banner';
import ChooseUs from '../components/ChooseUs';
import Department from '../components/Department';
import Doctors from '../components/Doctors';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner/>
            <Department/>
            <Doctors/>
            <ChooseUs/>
        </div>
    );
};

export default Home;