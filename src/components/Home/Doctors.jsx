import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Doctors = () => {

    return (
        <div className='lg:w-7/12 mx-auto lg:px-0 px-2'>
            <h1 className='text-center text-5xl font-bold text-[#012A4A] pb-14 pt-28'>Doctors</h1>
            <div className='pb-[62px]'>
                <span className='bg-primary text-white py-[15px] px-[28px] text-lg font-bold'>Category</span>
                <select className='py-[15px] px-[28px] text-[16px] outline-none shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)]'>
                    <option>All</option>
                    <option>Physical Medicine</option>
                    <option>Pediatrics</option>
                    <option>Gynecology</option>
                    <option>Cardiology</option>
                    <option>Urology</option>
                    <option>Neurology</option>
                    <option>Pulomonology</option>
                    <option>Ophthalmology</option>
                </select>
            </div>
            <div id="doctor1" className='carousel-item w-full grid lg:grid-cols-3 grid-cols-1 gap-8 lg:gap-x-[30px] lg:gap-y-[65px]'>

                <div className='flex flex-col items-center shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] h-[352px]'>
                    <div className='bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center border-[2px] border-primary mt-[65px] overflow-hidden'>
                        <img className='-rotate-[45deg] w-full h-full scale-125' src="/img/doctors/smiling-handsome-young-black-male-doctor-medicine-concept 1.png" alt="corona" />
                    </div>
                    <h3 className='text-center text-[24px] mt-5 font-bold'>Dr. Smith Wech</h3>

                    <p className='text-[#A8A8A8] text-[15px] mt-1'>Physical Medicine , MBBS</p>

                    <div className='flex items-center justify-center gap-4 mt-5'>
                        <span className='w-9 h-9 cursor-pointer text-lg duration-200 hover:text-[#00acee] hover:border-[#00acee] bg-white rounded-full border border-black flex items-center justify-center'><FaTwitter /></span>
                        <span className='w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#4267B2] hover:border-[#4267B2] duration-200 rounded-full border border-black flex items-center justify-center'><FaFacebookF /></span>
                        <span className='w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#F77737] hover:border-[#F77737] duration-200 rounded-full border border-black flex items-center justify-center'><FaInstagram /></span>
                    </div>
                </div>


                <div className='flex flex-col items-center shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] h-[352px]'>
                    <div className='bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center border-[2px] border-primary mt-[65px] overflow-hidden'>
                        <img className='-rotate-[45deg] w-full h-full scale-125' src="/img/doctors/asian-female-doctor-physician-medical-uniform-with-stethoscope-cross-arms-chest-smiling-looking-like-professional-white-background 1.png" alt="corona" />
                    </div>
                    <h3 className='text-center text-[24px] mt-5 font-bold'>Dr. Smith Wech</h3>

                    <p className='text-[#A8A8A8] text-[15px] mt-1'>Physical Medicine , MBBS</p>

                    <div className='flex items-center justify-center gap-4 mt-5'>
                        <span className='w-9 h-9 cursor-pointer text-lg duration-200 hover:text-[#00acee] hover:border-[#00acee] bg-white rounded-full border border-black flex items-center justify-center'><FaTwitter /></span>
                        <span className='w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#4267B2] hover:border-[#4267B2] duration-200 rounded-full border border-black flex items-center justify-center'><FaFacebookF /></span>
                        <span className='w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#F77737] hover:border-[#F77737] duration-200 rounded-full border border-black flex items-center justify-center'><FaInstagram /></span>
                    </div>
                </div>

                <div className='flex flex-col items-center shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] h-[352px]'>
                    <div className='bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center border-[2px] border-primary mt-[65px] overflow-hidden'>
                        <img className='-rotate-[45deg] w-full h-full scale-125' src="/img/doctors/happy-young-male-doctor-using-tablet-computer 1.png" alt="corona" />
                    </div>
                    <h3 className='text-center text-[24px] mt-5 font-bold'>Dr. Smith Wech</h3>

                    <p className='text-[#A8A8A8] text-[15px] mt-1'>Physical Medicine , MBBS</p>

                    <div className='flex items-center justify-center gap-4 mt-5'>
                        <span className='w-9 h-9 cursor-pointer text-lg duration-200 hover:text-[#00acee] hover:border-[#00acee] bg-white rounded-full border border-black flex items-center justify-center'><FaTwitter /></span>
                        <span className='w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#4267B2] hover:border-[#4267B2] duration-200 rounded-full border border-black flex items-center justify-center'><FaFacebookF /></span>
                        <span className='w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#F77737] hover:border-[#F77737] duration-200 rounded-full border border-black flex items-center justify-center'><FaInstagram /></span>
                    </div>
                </div>

                <div className='flex flex-col items-center shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] h-[352px]'>
                    <div className='bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center border-[2px] border-primary mt-[65px] overflow-hidden'>
                        <img className='-rotate-[45deg] w-full h-full scale-125' src="/img/doctors/young-beautiful-successful-female-doctor-with-stethoscope-portrait 1.png" alt="corona" />
                    </div>
                    <h3 className='text-center text-[24px] mt-5 font-bold'>Dr. Smith Wech</h3>

                    <p className='text-[#A8A8A8] text-[15px] mt-1'>Physical Medicine , MBBS</p>

                    <div className='flex items-center justify-center gap-4 mt-5'>
                        <span className='w-9 h-9 cursor-pointer text-lg duration-200 hover:text-[#00acee] hover:border-[#00acee] bg-white rounded-full border border-black flex items-center justify-center'><FaTwitter /></span>
                        <span className='w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#4267B2] hover:border-[#4267B2] duration-200 rounded-full border border-black flex items-center justify-center'><FaFacebookF /></span>
                        <span className='w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#F77737] hover:border-[#F77737] duration-200 rounded-full border border-black flex items-center justify-center'><FaInstagram /></span>
                    </div>
                </div>

                <div className='flex flex-col items-center shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] h-[352px]'>
                    <div className='bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center border-[2px] border-primary mt-[65px] overflow-hidden'>
                        <img className='-rotate-[45deg] w-full h-full scale-125' src="/img/doctors/portrait-smiling-handsome-male-doctor-man 1.png" alt="corona" />
                    </div>
                    <h3 className='text-center text-[24px] mt-5 font-bold'>Dr. Smith Wech</h3>

                    <p className='text-[#A8A8A8] text-[15px] mt-1'>Physical Medicine , MBBS</p>

                    <div className='flex items-center justify-center gap-4 mt-5'>
                        <span className='w-9 h-9 cursor-pointer text-lg duration-200 hover:text-[#00acee] hover:border-[#00acee] bg-white rounded-full border border-black flex items-center justify-center'><FaTwitter /></span>
                        <span className='w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#4267B2] hover:border-[#4267B2] duration-200 rounded-full border border-black flex items-center justify-center'><FaFacebookF /></span>
                        <span className='w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#F77737] hover:border-[#F77737] duration-200 rounded-full border border-black flex items-center justify-center'><FaInstagram /></span>
                    </div>
                </div>

                <div className='flex flex-col items-center shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] h-[352px]'>
                    <div className='bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center border-[2px] border-primary mt-[65px] overflow-hidden'>
                        <img className='-rotate-[45deg] w-full h-full scale-125' src="/img/doctors/female-doctor-holding-out-hand-isolated-white 1.png" alt="corona" />
                    </div>
                    <h3 className='text-center text-[24px] mt-5 font-bold'>Dr. Smith Wech</h3>

                    <p className='text-[#A8A8A8] text-[15px] mt-1'>Physical Medicine , MBBS</p>

                    <div className='flex items-center justify-center gap-4 mt-5'>
                        <span className='w-9 h-9 cursor-pointer text-lg duration-200 hover:text-[#00acee] hover:border-[#00acee] bg-white rounded-full border border-black flex items-center justify-center'><FaTwitter /></span>
                        <span className='w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#4267B2] hover:border-[#4267B2] duration-200 rounded-full border border-black flex items-center justify-center'><FaFacebookF /></span>
                        <span className='w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#F77737] hover:border-[#F77737] duration-200 rounded-full border border-black flex items-center justify-center'><FaInstagram /></span>
                    </div>
                </div>

            </div>
            <div className='py-14 flex items-center justify-center gap-3'>
                <a className='w-[16px] h-[16px] bg-primary rounded-full cursor-pointer' href="#doctor1"><span></span></a>
                <a className='w-[16px] h-[16px] border border-primary rounded-full cursor-pointer' href="#doctor2"><span></span></a>
            </div>
        </div>
    );
};

export default Doctors;