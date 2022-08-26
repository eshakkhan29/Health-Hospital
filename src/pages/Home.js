import React from 'react';
import Banner from '../components/Banner';
import Department from '../components/Department';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner/>
            <Department/>
        </div>
    );
};

export default Home;