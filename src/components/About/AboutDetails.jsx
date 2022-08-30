import React from 'react';

const AboutDetails = () => {
    return (
        <div className='mb-[77px]'>
            <img className='w-full' src="/img/hospital.png" alt="" />
            <h1 className='text-[40px] font-bold text-[#012A4A] mt-[47px]'>Welcome to Health Hospital
            </h1>
            <p className='mt-[30px] text-base text-[#838383]'>Quis aenean, a cursus ut ultrices felis mauris metus, nascetur erat, vulputat sed luctus vevamus harum vitae. Auctor etiam magna.orci lorem posuere. Pede ligula vitae placerat vestibulumsollicitudin facilisis, nec euismod faucibus viverra ctus pulvinar lacus et mi in interdum, volut pavitae lorem viverra, in et ad ipsum habitasse orci quisque.Odio augue ut felis netus ratione.Dignissim cursus, velitmetus, porta ad nec magna volutpat molestie ligula,orem etcubilia cras sapien nunc. Quam vestibulum
            </p>
            <h2 className='text-[40px] font-bold text-[#012A4A] mt-[63px]'>Wide Range of Facilities and Medical Services
            </h2>
            <p className='mt-[22px] text-base text-[#838383]'> Our Project manager adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu a. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='grid grid-cols-2 mt-[31px] gap-x-[94px] gap-y-[62px]'>
                <div>
                    <h3 className='text-primary text-[20px] font-bold mb-[30px]'>Standards of Treatment</h3>
                    <p className='text-base text-[#A2A2A2]'>We provide standard treatmentand latest medical technology with best facility in our clinic.</p>
                </div>
                <div>
                    <h3 className='text-primary text-[20px] font-bold mb-[30px]'>Well Communication</h3>
                    <p className='text-base text-[#A2A2A2]'>We provide well communication and latest medical technology best facility in our clinic.</p>
                </div>
                <div>
                    <h3 className='text-primary text-[20px] font-bold mb-[30px]'>Infection Prevention</h3>
                    <p className='text-base text-[#A2A2A2]'>We provide infection prevention and latest medical technology with best facility in our clinic.</p>
                </div>
                <div>
                    <h3 className='text-primary text-[20px] font-bold mb-[30px]'>25+ Years Experience</h3>
                    <p className='text-base text-[#A2A2A2]'>We have a 25+ Years Experience and latest medical technology with best facility in our clinic.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutDetails;