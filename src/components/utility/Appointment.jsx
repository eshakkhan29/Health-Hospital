import React from 'react';

const Appointment = () => {


    return (
        <div className='shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] bg-[#F4F4F4]'>
            <h1 className='text-[20px] font-bold text-white bg-primary text-center py-[18px]'>Appointment</h1>
            <div className='p-2'>
                <select className='border-r-[20px] border-white outline-none text-base text-[#A7A7A7] py-[22px] px-[26px] w-full mb-[20px]'>
                    <option selected>Select Department</option>
                    <option>Covid-19 Unit</option>
                    <option>Pediatrics</option>
                    <option>Urology</option>
                    <option>Neurology</option>
                    <option>Pulomonology</option>
                    <option>Gynecology</option>
                    <option>Cardiology</option>
                    <option>Ophthalmology</option>
                </select>
                <select className='border-r-[20px] border-white outline-none text-base text-[#A7A7A7] py-[22px] px-[26px] w-full mb-[20px]'>
                    <option selected>Select Doctor</option>
                    <option >Dr. Smith Wech </option>
                    <option >Dr. Valentina Ave</option>
                    <option >Dr. Tony Stark</option>
                    <option >Dr. Alexa Rose</option>
                    <option >Dr. David Warner</option>
                    <option >Dr. Lena Poul</option>
                </select>
                <input className='outline-none text-base text-[#A7A7A7] py-[22px] px-[26px] w-full mb-[20px]' type="text" placeholder='Full Name' />
                <input className='outline-none text-base text-[#A7A7A7] py-[22px] px-[26px] w-full mb-[20px]' type="number" placeholder='Phone Number' />
                <input className='outline-none text-base text-[#A7A7A7] py-[22px] px-[26px] w-full mb-[20px]' type="email" placeholder='Email' />
                <input className='outline-none text-base text-[#A7A7A7] py-[22px] px-[26px] w-full mb-[20px]' type="date" placeholder='mm/dd/yyyy' />
                <div className='text-center mb-2'>
                    <button className='text-base font-medium text-white bg-secondary py-[16px] px-[20px]'>Get Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;