import React from 'react';

const Map = () => {
    return (
        <div className='bg-[#FBFAFF] h-[411px] flex items-center justify-center'>
            <div className='h-[280px] lg:w-7/12 mx-auto lg:px-0 px-2 bg-white'>
                <iframe
                className='w-full h-full'
                    title='map'
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?q=chandpur&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
            </div>
        </div>
    );
};

export default Map;