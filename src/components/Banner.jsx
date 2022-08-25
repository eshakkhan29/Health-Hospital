import React from 'react';

const Banner = () => {
    return (
        <div style={{ backgroundImage: "url(/img/banner.png)" }} className="h-[680px] bg-no-repeat bg-cover">
            <div className='lg:w-7/12 mx-auto lg:px-0 px-2'>
                <div className='w-6/12 mr-auto pt-[165px]'>
                    <h1 className='text-[56px] font-thin'>Get
                        <span className='font-normal'>Better</span>
                        <span className='text-secondary font-bold'>Treatment</span>
                        <br />
                        For
                        <span className='text-secondary font-bold'>Your Health</span>
                    </h1>

                    <p className='text-[#828282] leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        <br />sed do eiusmod tempor incididunt ut labore et
                    </p>

                    <div className='flex items-center justify-between mt-[47px] w-[206px] bg-white shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.25)] p-4'>
                        <img src="/img/icon/emergency-call.png" alt="" />
                        <img src="/img/icon/ambulance.png" alt="" />
                        <img src="/img/icon/location.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;