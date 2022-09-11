import React from 'react';
import { useLocation } from 'react-router-dom';
import BlogsDetails from '../components/Blogs/BlogsDetails';
import NewsCategories from '../components/Blogs/NewsCategories';
import NewsTags from '../components/Blogs/NewsTags';
import PopularPost from '../components/Blogs/PopularPost';
import Appointment from '../components/utility/Appointment';
import Breadcrumbs from '../components/utility/Breadcrumbs';
import Footer from '../components/utility/Footer';
import Header from '../components/utility/Header';
import PageBanner from '../components/utility/PageBanner';
import PageLayout from '../pageLayout/PageLayout';

const Blogs = () => {
    const location = useLocation();
    return (
        <div>
            <Header />
            <PageBanner>
                Blogs
            </PageBanner>
            <Breadcrumbs location={location} />
            <PageLayout left1={<NewsCategories/>} left2={<PopularPost/>} left3={<NewsTags/>} left4={<Appointment />} right={<BlogsDetails/>} />
            <Footer />
        </div>
    );
};

export default Blogs;