import React from 'react';

const PageLayout = ({ left1, left2, left3, left4, right }) => {
    return (
        <div className='lg:w-7/12 mx-auto lg:px-0 px-2 mt-[63px]'>
            <div className='flex flex-col lg:flex-row gap-x-[30px]'>
                <div className='lg:w-4/12'>
                    <div>{left1}</div>
                    <div className='mt-[60px]'>{left2}</div>
                    <div className='mt-[60px]'>{left3}</div>
                    <div className='mt-[60px]'>{left4}</div>
                </div>
                <div className='lg:w-8/12'>
                    {right}
                </div>
            </div>
        </div>
    );
};

export default PageLayout;