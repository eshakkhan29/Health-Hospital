import React from 'react';

const DoctorCategory = () => {
    return (
        <div>
            <span className='bg-primary text-white py-[15px] px-[28px] text-lg font-bold'>Category</span>
            <select className='py-[15px] border-r-[10px] border-white pl-[28px] text-[16px] outline-none shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)]'>
                <option selected>Category</option>
                <option>Physical Medicine</option>
                <option>Pediatrics</option>
                <option>Gynecology</option>
                <option>Cardiology</option>
                <option>Urology</option>
                <option>Neurology</option>
                <option>Pulomonology</option>
                <option>Ophthalmology</option>
            </select>

            <div className='mt-[43px] bg-[#E2DEDE] shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)]'>
                <div className='w-full cursor-pointer mb-[3px] bg-primary'>
                    <h4 className='text-[20px] py-[23px] text-center font-bold text-white'>Doctors</h4>
                </div>
                <div className='w-full cursor-pointer mb-[3px] bg-white'>
                    <h4 className='text-[20px] py-[23px] text-base text-center text-primary '>Dr. Tony Stark</h4>
                </div>
                <div className='w-full cursor-pointer mb-[3px] bg-white'>
                    <h4 className='text-[20px] py-[23px] text-base text-center'>Dr. Cherlse Michel</h4>
                </div>
            </div>
        </div>
    );
};

export default DoctorCategory;