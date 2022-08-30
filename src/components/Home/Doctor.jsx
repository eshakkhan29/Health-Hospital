import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Doctor = ({ name, title, img, twitter, facebook, instagram }) => {
    return (
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
    );
};

export default Doctor;