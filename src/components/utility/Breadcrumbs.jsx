import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const Breadcrumbs = ({ location }) => {
    const { pathname } = location;
    const patch = pathname.split('/')[1];
    return (
        <div className='h-[56px] bg-white flex items-center justify-center'>
            <Link className='text-base font-bold' to="/">Home</Link>
            <p className='flex items-center text-lg font-bold text-primary'><IoIosArrowForward /><IoIosArrowForward className='ml-[-12px]' /></p>
            <p className='text-base font-bold cursor-pointer' >{patch}</p>
        </div>
    );
};

export default Breadcrumbs;