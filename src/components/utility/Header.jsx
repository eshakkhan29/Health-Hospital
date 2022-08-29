import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';

const Header = () => {
    return (
        <div className='bg-white py-3 sticky top-0 z-50 shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)]'>
            <div className='lg:w-7/12 mx-auto lg:px-0 px-2'>
                <div class="navbar">
                    <div class="navbar-start justify-between w-full">
                        <Link to='/'>
                            <img src="/img/logos/hospital-logo.png" alt="logo" />
                        </Link>
                        <div class="dropdown ml-auto relative">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-[0px_0px_0px_10px] absolute -right-4 w-52">
                            <NavLink className={({ isActive }) => (isActive ? "border-b border-secondary text-secondary text-lg mr-6 font-medium" : "text-lg font-medium mr-6 hover:text-secondary duration-100 hover:border-b border-secondary")} to='/'>Home</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "border-b border-secondary text-secondary text-lg mr-6 font-medium" : "text-lg font-medium mr-6 hover:text-secondary duration-100 hover:border-b border-secondary")} to='/departments'>Departments</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "border-b border-secondary text-secondary text-lg mr-6 font-medium" : "text-lg font-medium mr-6 hover:text-secondary duration-100 hover:border-b border-secondary")} to='/about'>About</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "border-b border-secondary text-secondary text-lg mr-6 font-medium" : "text-lg font-medium mr-6 hover:text-secondary duration-100 hover:border-b border-secondary")} to='/doctors'>Doctors</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "border-b border-secondary text-secondary text-lg mr-6 font-medium" : "text-lg font-medium mr-6 hover:text-secondary duration-100 hover:border-b border-secondary")} to='/contact'>Contact</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "border-b border-secondary text-secondary text-lg mr-6 font-medium" : "text-lg font-medium mr-6 hover:text-secondary duration-100 hover:border-b border-secondary")} to='/blogs'>Blogs</NavLink>
                            </ul>
                        </div>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            <NavLink className={({ isActive }) => (isActive ? "border-b border-secondary text-secondary text-lg mr-6 font-medium" : "text-lg font-medium mr-6 hover:text-secondary duration-100 hover:border-b border-secondary")} to='/'>Home</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "border-b border-secondary text-secondary text-lg mr-6 font-medium" : "text-lg font-medium mr-6 hover:text-secondary duration-100 hover:border-b border-secondary")} to='/departments'>Departments<FiChevronDown className='inline' /></NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "border-b border-secondary text-secondary text-lg mr-6 font-medium" : "text-lg font-medium mr-6 hover:text-secondary duration-100 hover:border-b border-secondary")} to='/about'>About</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "border-b border-secondary text-secondary text-lg mr-6 font-medium" : "text-lg font-medium mr-6 hover:text-secondary duration-100 hover:border-b border-secondary")} to='/doctors'>Doctors</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "border-b border-secondary text-secondary text-lg mr-6 font-medium" : "text-lg font-medium mr-6 hover:text-secondary duration-100 hover:border-b border-secondary")} to='/contact'>Contact</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "border-b border-secondary text-secondary text-lg mr-6 font-medium" : "text-lg font-medium mr-6 hover:text-secondary duration-100 hover:border-b border-secondary")} to='/blogs'>Blogs</NavLink>
                        </ul>
                    </div>
                    <div class="navbar-end hidden lg:flex">
                        <button className='bg-secondary text-white font-medium py-4 px-5'>Get Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;