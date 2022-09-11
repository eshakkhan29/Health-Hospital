import React from 'react';

const NewsTags = () => {
    return (
        <div className='shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)]'>
            <div className='w-full cursor-pointer bg-primary'>
                <h4 className='text-[20px] py-[23px] text-center font-bold text-white'>News Tags</h4>
            </div>
            <div className='py-[25px] px-[21px] bg-white'>
                <div className='grid grid-cols-2 gap-x-[28px] gap-y-[13px]'>
                    <div className='bg-white border border-primary py-[18px] text-center'>
                        <span className='text-[#929292] text-base'>Cardiology</span>
                    </div>
                    <div className='bg-white border border-primary py-[18px] text-center'>
                        <span className='text-[#929292] text-base'>Medical</span>
                    </div>
                    <div className='bg-white border border-primary py-[18px] text-center'>
                        <span className='text-[#929292] text-base'>Doctors</span>
                    </div>
                    <div className='bg-white border border-primary py-[18px] text-center'>
                        <span className='text-[#929292] text-base'>Live Support</span>
                    </div>
                    <div className='bg-white border border-primary py-[18px] text-center'>
                        <span className='text-[#929292] text-base'>Patients</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsTags;