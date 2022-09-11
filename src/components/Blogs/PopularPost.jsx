import React from 'react';

const PopularPost = () => {
    return (
        <div className='shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] bg-[#E2E2E2]'>
            <div className='w-full cursor-pointer bg-primary'>
                <h4 className='text-[20px] py-[23px] text-center font-bold text-white'>Popular Post</h4>
            </div>
            <div className='bg-white mt-[3px] px-[21px] py-[24px]'>
                <div className='flex items-center justify-between'>
                    <h3 className='font-medium text-base text-[#929292]'>All News</h3>
                    <p className='text-[#929292] text-base'>(23)</p>
                </div>
            </div>
            <div className='bg-white mt-[3px] px-[21px] py-[24px]'>
                <div className='flex items-center justify-between'>
                    <h3 className='font-medium text-base text-[#929292]'>Cardiology</h3>
                    <p className='text-[#929292] text-base'>(33)</p>
                </div>
            </div>
            <div className='bg-white mt-[3px] px-[21px] py-[24px]'>
                <div className='flex items-center justify-between'>
                    <h3 className='font-medium text-base text-[#929292]'>Medical Research</h3>
                    <p className='text-[#929292] text-base'>(15)</p>
                </div>
            </div>
            <div className='bg-white mt-[3px] px-[21px] py-[24px]'>
                <div className='flex items-center justify-between'>
                    <h3 className='font-medium text-base text-[#929292]'>Health Tips</h3>
                    <p className='text-[#929292] text-base'>(20)</p>
                </div>
            </div>
            <div className='bg-white mt-[3px] px-[21px] py-[24px]'>
                <div className='flex items-center justify-between'>
                    <h3 className='font-medium text-base text-[#929292]'>Medical Report</h3>
                    <p className='text-[#929292] text-base'>(11)</p>
                </div>
            </div>
        </div>
    );
};

export default PopularPost;