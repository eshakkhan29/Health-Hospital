import React from 'react';

const Department = () => {
    return (
        <div className='lg:w-7/12 mx-auto lg:px-0 px-2'>
            <h1 className='text-center text-5xl font-bold text-[#012A4A] py-14'>Department</h1>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-8 lg:gap-x-[30px] lg:gap-y-[65px]'>

                <div className='bg-primary flex flex-col items-center h-[267px]'>
                    <h3 className='text-center text-white text-[20px] font-bold mt-[24px]'>Physical Medicine</h3>
                    <div className='bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center mt-[41px] border-[2px] border-primary'>
                        <img className='-rotate-[45deg]' src="/img/icon/coronavirus.png" alt="corona" />
                    </div>
                </div>

                <div className='bg-white shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] flex flex-col items-center h-[267px]'>
                    <h3 className='text-center text-[20px] font-bold mt-[24px]'>Pediatrics</h3>
                    <div className='bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center mt-[41px] border-[2px] border-primary'>
                        <img className='-rotate-[45deg]' src="/img/icon/pediatrician.png" alt="corona" />
                    </div>
                </div>
                <div className='bg-white shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] flex flex-col items-center h-[267px]'>
                    <h3 className='text-center text-[20px] font-bold mt-[24px]'>Gynecology</h3>
                    <div className='bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center mt-[41px] border-[2px] border-primary'>
                        <img className='-rotate-[45deg]' src="/img/icon/gynecology.png" alt="corona" />
                    </div>
                </div>
                <div className='bg-white shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] flex flex-col items-center h-[267px]'>
                    <h3 className='text-center text-[20px] font-bold mt-[24px]'>Cardiology</h3>
                    <div className='bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center mt-[41px] border-[2px] border-primary'>
                        <img className='-rotate-[45deg]' src="/img/icon/heart.png" alt="corona" />
                    </div>
                </div>
                <div className='bg-white shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] flex flex-col items-center h-[267px]'>
                    <h3 className='text-center text-[20px] font-bold mt-[24px]'>Urology</h3>
                    <div className='bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center mt-[41px] border-[2px] border-primary'>
                        <img className='-rotate-[45deg]' src="/img/icon/kidneys.png" alt="corona" />
                    </div>
                </div>
                <div className='bg-white shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] flex flex-col items-center h-[267px]'>
                    <h3 className='text-center text-[20px] font-bold mt-[24px]'>Neurology</h3>
                    <div className='bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center mt-[41px] border-[2px] border-primary'>
                        <img className='-rotate-[45deg]' src="/img/icon/brain.png" alt="corona" />
                    </div>
                </div>
                <div className='bg-white shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] flex flex-col items-center h-[267px]'>
                    <h3 className='text-center text-[20px] font-bold mt-[24px]'>Pulomonology</h3>
                    <div className='bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center mt-[41px] border-[2px] border-primary'>
                        <img className='-rotate-[45deg]' src="/img/icon/lungs.png" alt="corona" />
                    </div>
                </div>
                <div className='bg-white shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] flex flex-col items-center h-[267px]'>
                    <h3 className='text-center text-[20px] font-bold mt-[24px]'>Ophthalmology</h3>
                    <div className='bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center mt-[41px] border-[2px] border-primary'>
                        <img className='-rotate-[45deg]' src="/img/icon/ophthalmology.png" alt="corona" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Department;