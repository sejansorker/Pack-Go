import React from 'react'
import Container from './Container'
import { CiLocationOn } from 'react-icons/ci'
import { IoIosSearch } from 'react-icons/io'

const Banner = () => {
    return (
        <div className='pt-44 relative '>
            <Container>
                <div className="pb-25 relative z-10">
                    <div className="w-1/2">
                        <h2 className='text-[65px] font-semibold font-pop text-main'>Start Exploring to Find Inner Peace
                            by Traveling</h2>
                        <p className=' font-pop text-[16px] text-comon font-normal pt-5 pb-10'>Lost yourself with Vacation and Travel into the place that you never visit before. We have thousand places in our database for you.</p>
                        <button className='py-4 text-white px-9 bg-[#007F5F] text-[16px] font-semibold font-pop cursor-pointer mb-15'>Discover Now</button>
                    </div>
                    <div className="w-8/12">
                        <div className="flex gap-x-18 items-center py-8.5 bg-white shadow-lg pl-5">
                            <div className="">
                                <div className="flex gap-x-[11px] items-center cursor-pointer">
                                    <CiLocationOn className='text-[#007F5F]' />
                                    <select name="" id="" className='outline-0 w-25 text-[16px] font-pop text-main cursor-pointer'>
                                        <option value="" className='cursor-pointer text-[16px] font-pop text-main'> Location</option>
                                        <option value="" className='cursor-pointer text-[16px] font-pop text-main'>Dhaka</option>
                                        <option value="" className='cursor-pointer text-[16px] font-pop text-main'>Rangpur</option>
                                    </select>
                                </div>
                                <p className='pl-8 pt-2.5 text-[14px] font-pop text-comon'>Enter your location</p>
                            </div>
                            <div className="">
                                <div className="flex gap-x-[11px] items-center cursor-pointer">
                                    <CiLocationOn className='text-[#007F5F]' />
                                    <select name="" id="" className='outline-0 w-25 text-[16px] font-pop text-main cursor-pointer'>
                                        <option value="" className='cursor-pointer text-[16px] font-pop text-main'> Date</option>
                                        <option value="" className='cursor-pointer text-[16px] font-pop text-main'>12-12-2025</option>
                                        <option value="" className='cursor-pointer text-[16px] font-pop text-main'>12-12-2025</option>
                                    </select>
                                </div>
                                <p className='pl-8 pt-2.5 text-[14px] font-pop text-comon'>When you start?</p>
                            </div>
                            <div className="">
                                <div className="flex gap-x-[11px] items-center cursor-pointer">
                                    <CiLocationOn className='text-[#007F5F]' />
                                    <select name="" id="" className='outline-0 w-25 text-[16px] font-pop text-main cursor-pointer'>
                                        <option value="" className='cursor-pointer text-[16px] font-pop text-main'>People </option>
                                        <option value="" className='cursor-pointer text-[16px] font-pop text-main'>10</option>
                                        <option value="" className='cursor-pointer text-[16px] font-pop text-main'>20</option>
                                    </select>
                                </div>
                                <p className='pl-8 pt-2.5 text-[14px] font-pop text-comon'> How many people</p>
                            </div>
                            <div className="h-20.5 w-20.5 bg-[#007F5F] flex justify-center items-center cursor-pointer">
                                <IoIosSearch className='text-white w-5.5 h-5.5 ' />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="bg-[url(/banner.png)] absolute bottom-0 right-0 w-[1150px] ms-auto h-[654px] bg-cover bg-no-repeat bg-center"></div>
        </div>
    )
}

export default Banner