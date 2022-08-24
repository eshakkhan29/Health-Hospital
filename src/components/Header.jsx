import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';

const Header = () => {
    return (
        <div className='bg-white py-3'>
            <div className='lg:w-7/12 mx-auto lg:px-0 px-2'>
                <div class="navbar">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <Link className='text-lg font-medium mr-6' to='/'>Home</Link>
                                <Link className='text-lg font-medium mr-6' to='/departments'>Departments</Link>
                                <Link className='text-lg font-medium mr-6' to='/about'>About</Link>
                                <Link className='text-lg font-medium mr-6' to='/doctors'>Doctors</Link>
                                <Link className='text-lg font-medium mr-6' to='/contact'>Contact</Link>
                                <Link className='text-lg font-medium mr-6' to='/blogs'>Blogs</Link>
                            </ul>
                        </div>
                        <Link to='/'>
                            <img src="../../public/images/logos/hospital-logo.png" alt="logo" />
                        </Link>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            <Link className='text-lg font-medium mr-6' to='/'>Home</Link>
                            <Link className='text-lg font-medium mr-6' to='/departments'>Departments</Link>
                            <Link className='text-lg font-medium mr-6' to='/about'>About</Link>
                            <Link className='text-lg font-medium mr-6' to='/doctors'>Doctors</Link>
                            <Link className='text-lg font-medium mr-6' to='/contact'>Contact</Link>
                            <Link className='text-lg font-medium mr-6' to='/blogs'>Blogs</Link>
                            <p className='text-2xl cursor-pointer px-1 border border-gray-800'><BiSearchAlt/></p>
                        </ul>
                    </div>
                    <div class="navbar-end">
                        <button className='bg-secondary text-white font-medium py-4 px-5'>Get Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;