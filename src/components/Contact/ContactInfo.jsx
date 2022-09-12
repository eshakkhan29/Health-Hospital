import React from 'react';
import { FaMailBulk, FaPhoneAlt } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
import { GiAmbulance } from 'react-icons/gi';

const ContactInfo = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-[30px] gap-y-[30px] lg:gap-y-[80px]'>
            <div className='shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] bg-white p-[25px] flex flex-col items-center'>
                <span className='w-10 h-10 text-2xl text-primary bg-white rounded-full border border-primary flex items-center justify-center'><FaPhoneAlt /></span>
                <div className='mt-[19px] text-center'>
                    <h4 className='text-xl font-bold'>Contact Number</h4>
                    <p className='text-[#A1A1A1] text-base mt-[30px]'>+455 336 12312</p>
                    <p className='text-[#A1A1A1] text-base'>+313 775 24663</p>
                </div>
            </div>
            <div className='shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] bg-white p-[25px] flex flex-col items-center'>
                <span className='w-10 h-10 text-2xl text-primary bg-white rounded-full border border-primary flex items-center justify-center'><FaMailBulk /></span>
                <div className='mt-[19px] text-center'>
                    <h4 className='text-xl font-bold'>Email</h4>
                    <p className='text-[#A1A1A1] text-base mt-[30px]'>healthhospital@gmail.com  </p>
                </div>
            </div>
            <div className='shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] bg-white p-[25px] flex flex-col items-center'>
                <span className='w-10 h-10 text-2xl text-primary bg-white rounded-full border border-primary flex items-center justify-center'><MdLocationOn /></span>
                <div className='mt-[19px] text-center'>
                    <h4 className='text-xl font-bold'>Location</h4>
                    <p className='text-[#A1A1A1] text-base mt-[30px]'>Sesame Street <br /> London, United Kingdom</p>
                </div>
            </div>
            <div className='shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] bg-white p-[25px] flex flex-col items-center'>
                <div className='flex items-center gap-x-[11px]'>
                    <span className='w-10 h-10 text-2xl text-primary bg-white rounded-full border border-primary flex items-center justify-center'><FiPhoneCall /></span>
                    <span className='text-[36px] text-primary'>+</span>
                    <span className='w-10 h-10 text-2xl text-primary bg-white rounded-full border border-primary flex items-center justify-center'><GiAmbulance /></span>
                </div>
                <div className='mt-[19px] text-center'>
                    <h4 className='text-xl font-bold'>Emergency/Ambulance Service</h4>
                    <p className='text-[#A1A1A1] text-base mt-[30px]'>+265 196 79537</p>
                    <p className='text-[#A1A1A1] text-base'>+123 838 35777</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;