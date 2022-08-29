import React from 'react';
import { FaFacebookF, FaInstagram, FaMailBulk, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='bg-[#012A4A] h-[791px]'>
                <div className='lg:w-7/12 mx-auto lg:px-0 px-2'>
                    <h1 className='text-[40px] font-bold text-white pt-[55px] text-center'>Subscribe Our Newsletter</h1>
                    <p className='text-center text-[#A8A8A8] text-base pt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore</p>
                    <div className='flex items-center justify-center py-[40px]'>
                        <input className='bg-white py-[28px] pl-[40px] w-[422px] outline-none' placeholder='Enter Your Email Address' type="email" />
                        <button className='bg-secondary text-white text-base font-bold py-[28px] px-[36px]'>Subscribe</button>
                    </div>
                    <hr />
                    <div className='pt-[61px] grid grid-cols-12'>
                        <div className='col-span-3'>
                            <img src="/img/logos/hospital-logo-2.png" alt="" />
                            <p className='text-base text-[#A8A8A8] my-[23px]'>Adipiscing elit, sed do eiusmod temporin ut labores et dolore magna aliqua. Ut eni minim veniam, quis nostrud exercitation
                            </p>
                            <button className='py-[10px] px-[15px] bg-[#EBEBEB] text-base'>Read More</button>
                            <div className='flex items-center gap-4 mt-[38px]'>
                                <span className='w-9 h-9 cursor-pointer text-xl duration-200 text-white hover:text-[#00acee] hover:border-[#00acee] bg-transparent rounded-full border border-white flex items-center justify-center'><FaTwitter /></span>
                                <span className='w-9 h-9 cursor-pointer text-xl bg-transparent hover:text-[#4267B2] hover:border-[#4267B2] duration-200 text-white rounded-full border border-white flex items-center justify-center'><FaFacebookF /></span>
                                <span className='w-9 h-9 cursor-pointer text-xl bg-transparent hover:text-[#F77737] hover:border-[#F77737] duration-200 text-white rounded-full border border-white flex items-center justify-center'><FaInstagram /></span>
                                <span className='w-9 h-9 cursor-pointer text-xl bg-transparent hover:text-[#FF0000] hover:border-[#FF0000] duration-200 text-white rounded-full border border-white flex items-center justify-center'><FaYoutube /></span>
                            </div>
                        </div>
                        <div className='col-span-1 flex items-center justify-center'>
                            <div className='h-[350px] w-[1px] bg-white'></div>
                        </div>
                        <div className='col-span-4'>
                            <h2 className='text-2xl font-medium text-white'>Useful link</h2>
                            <div className='flex justify-between mt-4'>
                                <ul className='flex flex-col justify-center gap-y-5'>
                                    <Link className='text-base  text-[#A8A8A8]' to="/">-Physical Medicine  </Link>
                                    <Link className='text-base  text-[#A8A8A8]' to="/">-Gynecology  </Link>
                                    <Link className='text-base  text-[#A8A8A8]' to="/">-Pulomonology  </Link>
                                    <Link className='text-base  text-[#A8A8A8]' to="/">-Pediatrics  </Link>
                                    <Link className='text-base  text-[#A8A8A8]' to="/">-Urology   </Link>
                                    <Link className='text-base  text-[#A8A8A8]' to="/">-Cardiology   </Link>
                                </ul>
                                <ul className='flex flex-col justify-center gap-y-5'>
                                    <Link className='text-base  text-[#A8A8A8]' to="/">-Neurology  </Link>
                                    <Link className='text-base  text-[#A8A8A8]' to="/">-Ophthalmology  </Link>
                                    <Link className='text-base  text-[#A8A8A8]' to="/">-Deparments  </Link>
                                    <Link className='text-base  text-[#A8A8A8]' to="/">-Doctors  </Link>
                                    <Link className='text-base  text-[#A8A8A8]' to="/">-Contact   </Link>
                                    <Link className='text-base  text-[#A8A8A8]' to="/">-Blogs   </Link>
                                </ul>
                            </div>
                        </div>
                        <div className='col-span-1 flex items-center justify-center'>
                            <div className='h-[350px] w-[1px] bg-white'></div>
                        </div>
                        <div className='col-span-3'>
                            <h2 className='text-2xl font-medium text-white'>Contact Us</h2>
                            <div className='mt-4 flex flex-col justify-center gap-y-[50px]'>
                                <div>
                                    <div className='flex items-center'>
                                        <span className='w-9 h-9 cursor-pointer text-xl duration-200 text-white hover:text-[#01fd33] hover:border-[#01fd33] bg-transparent rounded-full border border-white flex items-center justify-center'><FaPhoneAlt /></span>
                                        <p className='ml-3 text-[#A8A8A8] text-base'>+455 336 12312</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center'>
                                        <span className='w-9 h-9 cursor-pointer text-xl duration-200 text-white hover:text-[#ff8000] hover:border-[#ff8000] bg-transparent rounded-full border border-white flex items-center justify-center'><FaMailBulk /></span>
                                        <p className='ml-3 text-[#A8A8A8] text-base'>healthhospital@gmail.com</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center'>
                                        <span className='w-9 h-9 cursor-pointer text-xl duration-200 text-white hover:text-[#ff006f] hover:border-[#ff006f] bg-transparent rounded-full border border-white flex items-center justify-center'><MdLocationOn /></span>
                                        <p className='ml-3 text-[#A8A8A8] text-base'>Sesame Street <br />
                                            London, United Kingdom</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[53px] flex items-center justify-center'>
                <p className='text-secondary text-base text-center'>Copyright &copy; {new Date().getFullYear()} Health hospital. All Right Reserved.</p>
            </div>
        </>
    );
};

export default Footer;