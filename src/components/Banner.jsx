import React from 'react';

const Banner = () => {
    return (
        <div style={{ backgroundImage: "url(/img/banner.png)" }} className="lg:h-[680px] bg-no-repeat bg-cover bg-center h-[350px] lg:bg-inherit bg-zinc-400 bg-blend-multiply">
            <div className='lg:w-7/12 mx-auto lg:px-0 px-2'>
                <div className='lg:w-6/12 lg:mr-auto lg:mx-0 mx-auto lg:pt-[165px] pt-[50px]'>
                    <h1 className='lg:text-[56px] lg:text-left lg:text-black text-white text-center text-[30px] font-thin'>Get
                        <span className='font-normal'> Better </span>
                        <span className='text-secondary font-bold'>Treatment </span>
                        <br />
                        For
                        <span className='text-secondary font-bold'> Your Health</span>
                    </h1>

                    <p className='lg:text-[#828282] text-white mt-3 leading-5 lg:text-left text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et
                    </p>

                    <div className='lg:mx-0 mx-auto flex items-center justify-between mt-[47px] w-[206px] bg-white shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.25)] p-4'>
                        <img className='cursor-pointer' src="/img/icon/emergency-call.png" alt="" />
                        <img className='cursor-pointer' src="/img/icon/ambulance.png" alt="" />
                        <img className='cursor-pointer' src="/img/icon/location.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;