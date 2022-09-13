import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const DoctorDetails = () => {
    return (
        <div>
            <div className=' shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] bg-white flex flex-col lg:flex-row'>
                <div className='lg:w-4/12'>
                    <img className='w-full h-full' src="/img/doctors/tony.png" alt="" />
                </div>
                <div className='lg:w-8/12 pl-[60px] pr-[20px] py-[30px]'>
                    <h3 className='text-[#012A4A] text-2xl font-bold'>Dr. Tony Stark</h3>
                    <h4 className='text-[#929292] text-[20px] text-base mt-5 mb-3'>Gastroenterology , MBBS</h4>
                    <p className='text-[#929292] text-base'>Diam cum eu urna, nunc duis pulvinafusce elit mollisnulla soluta aliquam adipisicing vehicula ac. Turpis ipsum dolor</p>
                </div>
            </div>
            <div className='mt-[33px] shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] bg-white lg:overflow-x-hidden overflow-x-scroll'>
                <table className='border-collapse'>
                    <tbody>
                        <tr>
                            <td className='border-[2px] border-[#DCDCDC] w-3/12 text-center text-[20px]'>About me</td>
                            <td className='border-[2px] border-[#DCDCDC] p-[37px] text-[#929292] text-base'>Contrary to popular belief, Lorem Ipsum is n sxhas roots in a piece of classical Latin literature from 4making it over 2000 years old.</td>
                        </tr>
                        <tr>
                            <td className='border-[2px] border-[#DCDCDC] w-3/12 text-center text-[20px]'>Age</td>
                            <td className='border-[2px] border-[#DCDCDC] p-[37px] text-[#929292] text-base'>28 Years</td>
                        </tr>
                        <tr>
                            <td className='border-[2px] border-[#DCDCDC] w-3/12 text-center text-[20px]'>Work Experience</td>
                            <td className='border-[2px] border-[#DCDCDC] p-[37px] text-[#929292] text-base'>There are many variations of passages of Lorem available, but the majority Finibus onorum et alorum" by icero classical lite rature, discovered Various versions have evolved over the years so mes by accident, sometimes on purpose
                            </td>
                        </tr>
                        <tr>
                            <td className='border-[2px] border-[#DCDCDC] w-3/12 text-center text-[20px]'>Education</td>
                            <td className='border-[2px] border-[#DCDCDC] p-[37px] text-[#929292] text-base'>MBBS , FCES in Gastoroenterology <br /> PHD in Medicine</td>
                        </tr>
                        <tr>
                            <td className='border-[2px] border-[#DCDCDC] w-3/12 text-center text-[20px]'>Additional Information</td>
                            <td className='border-[2px] border-[#DCDCDC] p-[37px] text-[#929292] text-base'>Games , Movies Try to Make New Thinks</td>
                        </tr>
                        <tr>
                            <td className='border-[2px] border-[#DCDCDC] w-3/12 text-center text-[20px]'>Social Media</td>
                            <td className='border-[2px] border-[#DCDCDC] p-[37px]'>
                                <div className='flex items-center justify-start gap-10'>
                                    <span className='w-9 h-9 cursor-pointer text-lg duration-200 hover:text-[#00acee] hover:border-[#00acee] bg-white rounded-full border border-black flex items-center justify-center'><FaTwitter /></span>
                                    <span className='w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#4267B2] hover:border-[#4267B2] duration-200 rounded-full border border-black flex items-center justify-center'><FaFacebookF /></span>
                                    <span className='w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#F77737] hover:border-[#F77737] duration-200 rounded-full border border-black flex items-center justify-center'><FaInstagram /></span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DoctorDetails;