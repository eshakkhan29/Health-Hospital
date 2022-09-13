import React from 'react';

const Comments = () => {
    return (
        <div>
            <h2 className='text-[40px] font-bold'>02 Comments</h2>
            <div className='py-[70px]'>
                <div className='py-[24px]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <div className='w-[75px] h-[75px] border-2 border-secondary rounded-full overflow-hidden'>
                                <img src="/img/user/pexels-pixabay-220453 1.png" alt="" />
                            </div>
                            <div className='ml-[18px]'>
                                <h4 className='text-[20px] font-bold text-[#012A4A]'>Raja Miya</h4>
                                <span className='text-[#A1A1A1] text-base mt-[10px]'>10 Hours Ago</span>
                            </div>
                        </div>
                        <button className='bg-white py-[12px] px-[33px] text-base border-2 border-primary'>Reply</button>
                    </div>
                    <p className='text-[#A1A1A1] text-base mt-[30px]'>Lorem ipsum dolor sit amet, lobortis nulla lorem, sed ac facilisis aenean. Puru lectus diam fermentum, orci massa, vulputate non amet lectus non ullamco</p>
                </div>
                <div className='py-[24px]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <div className='w-[75px] h-[75px] border-2 border-secondary rounded-full overflow-hidden'>
                                <img src="/img/user/cheerful-curly-business-girl-wearing-glasses 1.png" alt="" />
                            </div>
                            <div className='ml-[18px]'>
                                <h4 className='text-[20px] font-bold text-[#012A4A]'>Hanif Khan</h4>
                                <span className='text-[#A1A1A1] text-base mt-[10px]'>10 Hours Ago</span>
                            </div>
                        </div>
                        <button className='bg-white py-[12px] px-[33px] text-base border-2 border-primary'>Reply</button>
                    </div>
                    <p className='text-[#A1A1A1] text-base mt-[30px]'>Lorem ipsum dolor sit amet, lobortis nulla lorem, sed ac facilisis aenean. Puru lectus diam fermentum, orci massa, vulputate non amet lectus non ullamco</p>
                </div>
            </div>
        </div>
    );
};

export default Comments;