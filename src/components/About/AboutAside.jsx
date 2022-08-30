import React from 'react';

const AboutAside = () => {
    return (
        <div className='shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] bg-[#F7F7F7]'>
            <div className='w-full cursor-pointer mb-[2px] bg-white'>
                <h4 className='text-[20px] py-[24px] text-center text-primary'>Mission and Vision</h4>
            </div>
            <div className='w-full cursor-pointer mb-[2px] bg-white'>
                <h4 className='text-[20px] py-[24px] text-center'>Doctors</h4>
            </div>
            <div className='w-full cursor-pointer mb-[2px] bg-white'>
                <h4 className='text-[20px] py-[24px] text-center'>Testmonial</h4>
            </div>
            <div className='w-full cursor-pointer mb-[2px] bg-white'>
                <h4 className='text-[20px] py-[24px] text-center'>FAQs</h4>
            </div>
            <div className='w-full cursor-pointer mb-[2px] bg-white'>
                <h4 className='text-[20px] py-[24px] text-center'>Photo Gallery</h4>
            </div>
            <div className='w-full cursor-pointer mb-[2px] bg-white'>
                <h4 className='text-[20px] py-[24px] text-center'>Award and recognition</h4>
            </div>
        </div>
    );
};

export default AboutAside;