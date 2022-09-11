
import React from 'react';
import Comments from './Comments';

const BlogsDetails = () => {
    return (
        <div className='mb-[77px]'>
            <img className='w-full' src="/img/blogs.png" alt="" />
            <h1 className='text-[40px] font-bold text-[#012A4A] mt-[47px]'>World Best Operation Theatre In Here</h1>
            <p className='mt-[30px] text-base text-[#838383]'>Quis aenean, a cursus ut ultrices felis mauris metus, nascetur erat, vulputate sed luctus vevamusharum vitae. Auctor etiam magna. Leo orci lorem posuere. Pede ligula vitae placerat vestibulumsollicitudin facilisis, nec euismod faucibus viverra ctus pulvinar lacus et mi in interdum, volutpa vitae lorem viverra, in et ad ipsum habitasse orci quisque. Odio augue ut felis netus ratione. Dignissim cursus, velit metus, porta ad nec magna volutpat molestie ligula, lorem et cubilia cras sapien nunc. Quam vestibulum integer, curabitur in in. Magna dignissim diam nibh, sed sed urna cras lectus amet tellus, <br /> aliquam porttitor lacinia velit blandit, orci odio justo, vel enim sed sed. Donec erat in libero. Nunc fusce laoreet lectus nam nam, et aut neque fusce, non libero sed luctus aptent. Fusce vitae integer vestibulum nisl mauris sit, integer donec, posuere vel, lobortis dictum. Eros aenean a. Tempor at feugiat arcu, pretium pharetra et sociis. Curabitur urna odio cumrutrum
            </p>
            <h2 className='text-[40px] font-bold text-[#012A4A] mt-[63px]'>Your doctor Is About To Stop Being Relevant
            </h2>
            <p className='mt-[22px] text-base text-[#838383]'> Aliquam eleifend ante, accumsan condimentum. Maecenas constetuer in in nec id, vestibulum in nibh nec, quam condimentum odio vitae, turpis mus porttitor, convallis est nulla. Tellus justlacus cras id ac fringilla, nunc justo mauris eget sagittis, pellentesque quis ornare mauris pellentesque accumsan vel. Wisi non sodales vulputate laoreet massa mollis, in in sed fringilla, justo vestibulum mi, eget eu vero urna justo. Leo justo parturient lorem, eleifend metus nulla
            </p>
            <p className='mt-[22px] text-base text-[#838383]'>maecenas auctor, dui diam lacinia risus, condimentum maecenas a. Id nulla sollicitudin quis, pellentesque placerat scelerisque suspendisse proin eget, suspendisse nulla maecenas eget consectetuer a. Integer pede semper posuere nonummy volutpat, aenean id pellentesque nonummy lectus nulla donec sem, lacinia euismod amet in risus. Diam error molestie consequat suscipit, amet vivamus ad gravida nibh euismod, congue interdum ut erat. Aliquam sed in, quisque elit non, et ligula in accumsan scelerisque consectetuer</p>

            <hr className='border-2 border-primary my-[50px]' />
            <Comments />
            <div>
                <h3 className='text-[20px] font-bold mb-[42px]'>Leave a comment</h3>
                <form>
                    <div className='flex items-center justify-between gap-[100px] mb-[30px]'>
                        <input type="text" placeholder='Name' className='placeholder:text-[#A7A7A7] py-[19px] px-[25px] bg-white shadow-[0px_0px_4px_2px_rgba(0,0,0,0.25)] w-full outline-none' />
                        <input type="email" placeholder='Email' className='placeholder:text-[#A7A7A7] py-[19px] px-[25px] bg-white shadow-[0px_0px_4px_2px_rgba(0,0,0,0.25)] w-full outline-none' />
                    </div>
                    <textarea className='placeholder:text-[#A7A7A7] py-[35px] px-[25px] bg-white shadow-[0px_0px_4px_2px_rgba(0,0,0,0.25)] w-full outline-none' placeholder='Write Message'></textarea>
                    <button className='text-white bg-primary py-[22px] px-[38px] text-base font-medium mt-[30px]'>Post Comment</button>
                </form>
            </div>
        </div>
    );
};

export default BlogsDetails;