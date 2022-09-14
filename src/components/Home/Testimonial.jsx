import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Testimonial = () => {

    return (
        <div className='lg:w-7/12 mx-auto lg:px-0 px-2'>
            <h1 className='text-center text-5xl font-bold text-[#012A4A] py-14'>Testimonial</h1>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2.4,
                        spaceBetween: 0,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex flex-col items-center h-[458px] w-[445px] border border-gray-200 bg-white p-8'>
                        <div className='w-[145px] h-[145px] rounded-full overflow-hidden border-[2px] border-secondary mt-[65px]'>
                            <img src="/img/user/pexels-pixabay-220453 1.png" alt="" />
                        </div>
                        <h3 className='text-2xl font-black text-primary mt-4'>William Dizel</h3>
                        <h5 className='text-base font-medium'>(Heart patient)</h5>
                        <p className='text-base text-[#7E7E7E] text-center mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center h-[458px] w-[445px] border border-gray-200 bg-white p-8'>
                        <div className='w-[145px] h-[145px] rounded-full overflow-hidden border-[2px] border-secondary mt-[65px]'>
                            <img src="/img/user/cheerful-curly-business-girl-wearing-glasses 1.png" alt="" />
                        </div>
                        <h3 className='text-2xl font-black text-primary mt-4'>Hendre vesel</h3>
                        <h5 className='text-base font-medium'>(Eye patient)</h5>
                        <p className='text-base text-[#7E7E7E] text-center mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center h-[458px] w-[445px] border border-gray-200 bg-white p-8'>
                        <div className='w-[145px] h-[145px] rounded-full overflow-hidden border-[2px] border-secondary mt-[65px]'>
                            <img src="/img/user/pexels-pixabay-220453 1.png" alt="" />
                        </div>
                        <h3 className='text-2xl font-black text-primary mt-4'>William Dizel</h3>
                        <h5 className='text-base font-medium'>(Heart patient)</h5>
                        <p className='text-base text-[#7E7E7E] text-center mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center h-[458px] w-[445px] border border-gray-200 bg-white p-8'>
                        <div className='w-[145px] h-[145px] rounded-full overflow-hidden border-[2px] border-secondary mt-[65px]'>
                            <img src="/img/user/cheerful-curly-business-girl-wearing-glasses 1.png" alt="" />
                        </div>
                        <h3 className='text-2xl font-black text-primary mt-4'>Hendre vesel</h3>
                        <h5 className='text-base font-medium'>(Eye patient)</h5>
                        <p className='text-base text-[#7E7E7E] text-center mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial;