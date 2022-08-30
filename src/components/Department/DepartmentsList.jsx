import React from 'react';

const DepartmentsList = () => {
    return (
        <div className='shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)]'>
            <div className='flex items-center bg-white shadow px-5 py-3 border border-b-[#C6C6C6]'>
                <div className='w-[45.66px] h-[45.66px] bg-transparent border-2 border-primary p-2 rounded-full flex items-center justify-center'>
                    <img src="/img/icon/coronavirus.png" alt="" />
                </div>
                <p className='mx-auto text-base'>Covid-19 Unit</p>
            </div>
            
            <div className='flex items-center bg-white shadow px-5 py-3 border border-b-[#C6C6C6]'>
                <div className='w-[45.66px] h-[45.66px] bg-transparent border-2 border-primary p-2 rounded-full flex items-center justify-center'>
                    <img src="/img/icon/pediatrician.png" alt="" />
                </div>
                <p className='mx-auto text-base'>Pediatrics</p>
            </div>

            <div className='flex items-center bg-white shadow px-5 py-3 border border-b-[#C6C6C6]'>
                <div className='w-[45.66px] h-[45.66px] bg-transparent border-2 border-primary p-2 rounded-full flex items-center justify-center'>
                    <img src="/img/icon/kidneys.png" alt="" />
                </div>
                <p className='mx-auto text-base'>Urology</p>
            </div>

            <div className='flex items-center bg-white shadow px-5 py-3 border border-b-[#C6C6C6]'>
                <div className='w-[45.66px] h-[45.66px] bg-transparent border-2 border-primary p-2 rounded-full flex items-center justify-center'>
                    <img src="/img/icon/brain.png" alt="" />
                </div>
                <p className='mx-auto text-base'>Neurology</p>
            </div>

            <div className='flex items-center bg-white shadow px-5 py-3 border border-b-[#C6C6C6]'>
                <div className='w-[45.66px] h-[45.66px] bg-transparent border-2 border-primary p-2 rounded-full flex items-center justify-center'>
                    <img src="/img/icon/lungs.png" alt="" />
                </div>
                <p className='mx-auto text-base'>Pulomonology</p>
            </div>

            <div className='flex items-center bg-white shadow px-5 py-3 border border-b-[#C6C6C6]'>
                <div className='w-[45.66px] h-[45.66px] bg-transparent border-2 border-primary p-2 rounded-full flex items-center justify-center'>
                    <img src="/img/icon/gynecology.png" alt="" />
                </div>
                <p className='mx-auto text-base'>Gynecology</p>
            </div>

            <div className='flex items-center bg-primary shadow px-5 py-3 border border-b-[#C6C6C6]'>
                <div className='w-[45.66px] h-[45.66px] bg-white border-2 border-primary p-2 rounded-full flex items-center justify-center'>
                    <img src="/img/icon/heart.png" alt="" />
                </div>
                <p className='mx-auto text-white text-base'>Cardiology</p>
            </div>

            <div className='flex items-center bg-white shadow px-5 py-3 border border-b-[#C6C6C6]'>
                <div className='w-[45.66px] h-[45.66px] bg-transparent border-2 border-primary p-2 rounded-full flex items-center justify-center'>
                    <img src="/img/icon/ophthalmology.png" alt="" />
                </div>
                <p className='mx-auto text-base'>Ophthalmology</p>
            </div>
        </div>
    );
};

export default DepartmentsList;