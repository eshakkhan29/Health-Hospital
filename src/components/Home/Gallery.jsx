import React from 'react';

const Gallery = () => {
    return (
        <div className='lg:w-7/12 mx-auto lg:px-0 px-2'>
            <h1 className='text-center text-5xl font-bold text-[#012A4A] pt-20 pb-16'>Gallery</h1>

            <div className='grid lg:grid-rows-2 lg:grid-flow-col grid-cols-2 gap-x-[36px] gap-y-[17px]'>
                <div className='row-span-2'>
                    <img src="/img/gallery/pexels-mart-production-7088841 1.png" alt="" />
                </div>
                <div>
                    <img src="/img/gallery/pexels-pixabay-236380 1.png" alt="" />
                </div>
                <div>
                    <img src="/img/gallery/pexels-pixabay-247786 1.png" alt="" />
                </div>
                <div className='row-span-2'>
                    <img src="/img/gallery/pexels-anna-shvets-3844581 1.png" alt="" />
                </div>
                <div className='row-span-2'>
                    <img src="/img/gallery/pexels-thirdman-7659876 1.png" alt="" />
                </div>

            </div>
            <div className='py-[62px] text-center'>
                <button className='text-base py-[14px] px-[36px] shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] bg-white'>View All</button>
            </div>
        </div>
    );
};

export default Gallery;