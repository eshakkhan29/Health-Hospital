import React from 'react';

const ChooseUs = () => {
    return (
        <div className='h-[418px] bg-[#012A4A]'>
            <div className='lg:w-7/12 mx-auto lg:px-0 px-2'>
                <h1 className='text-center text-white pt-[61px] text-[40px] font-light'>Why <span className='font-bold'>Choose</span> Us</h1>
                <p className='text-center text-[16px] text-[#878787] mt-[16px]'>Our Achievement</p>

                <div className='pt-[70px] flex items-center justify-between gap-10'>
                    <div>
                        <h3 className='text-[40px] font-bold text-secondary'>8550+</h3>
                        <p className='text-white text-2xl'>Happy Patients</p>
                        <span className='text-[#B5B5B5] block mt-[17px]'>Over the success critical patients surgery in the clinic</span>
                    </div>
                    <div>
                        <h3 className='text-[40px] font-bold text-secondary'>80+</h3>
                        <p className='text-white text-2xl'>Expert Doctors</p>
                        <span className='text-[#B5B5B5] block mt-[17px]'>The medical professional
                            doctors available in the clinic</span>
                    </div>
                    <div>
                        <h3 className='text-[40px] font-bold text-secondary'>47+</h3>
                        <p className='text-white text-2xl'>Health Deparments</p>
                        <span className='text-[#B5B5B5] block mt-[17px]'>Total health departments available in our medical clinic</span>
                    </div>
                    <div>
                        <h3 className='text-[40px] font-bold text-secondary'>2250+</h3>
                        <p className='text-white text-2xl'>Total Branches</p>
                        <span className='text-[#B5B5B5] block mt-[17px]'>Total medical branches
                            available in over the</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;