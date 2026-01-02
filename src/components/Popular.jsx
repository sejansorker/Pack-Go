import React from 'react'
import Container from './Container'
import One1 from "../assets/one1.png"
import One2 from "../assets/one2.png"
import One3 from "../assets/one3.png"
import One4 from "../assets/one4.png"
import One5 from "../assets/one5.png"
// import { CiStar } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'
import Slider from "react-slick";
const Popular = () => {
  const settings = {
    className: "center",
    centerPadding: "16%",
    centerMode: true,
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className='pb-30'>
        <Container>
            <div className="w-1/2 mx-auto text-center pb-25">
                    <h2 className='text-[40px] text-main font-pop font-semibold'>Popular Destination</h2>
                    <p className='text-[16px] text-comon font-pop font-normal pt-5'>We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.</p>
                </div>
        </Container>
        <div id='one' className="">
          <Slider {...settings}>
          <div className="!w-[98%]">
             <div className="px-5 pt-5 pb-10 ">
               <img src={One1} alt="" />
               <div className="flex items-center gap-x-2.5 pt-5">
                <div className="flex items-center gap-x-1.5">
                    <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' />
                </div>
                <p>5 review</p>
               </div>
               <h4 className='text-[25px] text-main font-medium font-pop pb-5'>Paris, France</h4>
               <p className='text-[16px] text-comon font-normal pb-5 font-pop'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam</p>
               <h5 className='text-[25px] text-main font-medium font-pop pb-5'>$150 / <span className='text-[22px] text-comon'>Person</span></h5>
               <button className='bg-[#007F5F] text-[16px] py-2.5 px-8.5 rounded-[20px] text-white font-medium font-pop'>Book Now</button>
             </div>
          </div>
          <div className="!w-[98%]">
             <div className="px-5 pt-5 pb-10 ">
               <img src={One2} alt="" />
               <div className="flex items-center gap-x-2.5 pt-5">
                <div className="flex items-center gap-x-1.5">
                    <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' />
                </div>
                <p>5 review</p>
               </div>
               <h4 className='text-[25px] text-main font-medium font-pop pb-5'>Santorini, Greece</h4>
               <p className='text-[16px] text-comon font-normal pb-5 font-pop'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam</p>
               <h5 className='text-[25px] text-main font-medium font-pop pb-5'>$150 / <span className='text-[22px] text-comon'>Person</span></h5>
               <button className='bg-[#007F5F] text-[16px] py-2.5 px-8.5 rounded-[20px] text-white font-medium font-pop'>Book Now</button>
             </div>
          </div>
          <div className="!w-[98%]">
             <div className="px-5 pt-5 pb-10 ">
               <img src={One3} alt="" />
               <div className="flex items-center gap-x-2.5 pt-5">
                <div className="flex items-center gap-x-1.5">
                    <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' />
                </div>
                <p>5 review</p>
               </div>
               <h4 className='text-[25px] text-main font-medium font-pop pb-5'>Lake Thun, Switzerland</h4>
               <p className='text-[16px] text-comon font-normal pb-5 font-pop'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam</p>
               <h5 className='text-[25px] text-main font-medium font-pop pb-5'>$150 / <span className='text-[22px] text-comon'>Person</span></h5>
               <button className='bg-[#007F5F] text-[16px] py-2.5 px-8.5 rounded-[20px] text-white font-medium font-pop'>Book Now</button>
             </div>
          </div>
          <div className="!w-[98%]">
             <div className="px-5 pt-5 pb-10 ">
               <img src={One4} alt="" />
               <div className="flex items-center gap-x-2.5 pt-5">
                <div className="flex items-center gap-x-1.5">
                    <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' />
                </div>
                <p>5 review</p>
               </div>
               <h4 className='text-[25px] text-main font-medium font-pop pb-5'>Mount Agung, Bali</h4>
               <p className='text-[16px] text-comon font-normal pb-5 font-pop'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam</p>
               <h5 className='text-[25px] text-main font-medium font-pop pb-5'>$150 / <span className='text-[22px] text-comon'>Person</span></h5>
               <button className='bg-[#007F5F] text-[16px] py-2.5 px-8.5 rounded-[20px] text-white font-medium font-pop'>Book Now</button>
             </div>
          </div>
          <div className="!w-[98%]">
             <div className="px-5 pt-5 pb-10 ">
               <img src={One5} alt="" />
               <div className="flex items-center gap-x-2.5 pt-5">
                <div className="flex items-center gap-x-1.5">
                    <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' />
                </div>
                <p>5 review</p>
               </div>
               <h4 className='text-[25px] text-main font-medium font-pop pb-5'>Venice, Italy</h4>
               <p className='text-[16px] text-comon font-normal pb-5 font-pop'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam</p>
               <h5 className='text-[25px] text-main font-medium font-pop pb-5'>$150 / <span className='text-[22px] text-comon'>Person</span></h5>
               <button className='bg-[#007F5F] text-[16px] py-2.5 px-8.5 rounded-[20px] text-white font-medium font-pop'>Book Now</button>
             </div>
          </div>
          <div className="!w-[98%]">
             <div className="px-5 pt-5 pb-10 ">
               <img src={One3} alt="" />
               <div className="flex items-center gap-x-2.5 pt-5">
                <div className="flex items-center gap-x-1.5">
                    <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' />
                </div>
                <p>5 review</p>
               </div>
               <h4 className='text-[25px] text-main font-medium font-pop pb-5'>Paris, France</h4>
               <p className='text-[16px] text-comon font-normal pb-5 font-pop'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam</p>
               <h5 className='text-[25px] text-main font-medium font-pop pb-5'>$150 / <span className='text-[22px] text-comon'>Person</span></h5>
               <button className='bg-[#007F5F] text-[16px] py-2.5 px-8.5 rounded-[20px] text-white font-medium font-pop'>Book Now</button>
             </div>
          </div>
          <div className="!w-[98%]">
             <div className="px-5 pt-5 pb-10 ">
               <img src={One4} alt="" />
               <div className="flex items-center gap-x-2.5 pt-5">
                <div className="flex items-center gap-x-1.5">
                    <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' /> <FaStar  className='text-[#FF8B00]' />
                </div>
                <p>5 review</p>
               </div>
               <h4 className='text-[25px] text-main font-medium font-pop pb-5'>Santorini, Greece</h4>
               <p className='text-[16px] text-comon font-normal pb-5 font-pop'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam</p>
               <h5 className='text-[25px] text-main font-medium font-pop pb-5'>$150 / <span className='text-[22px] text-comon'>Person</span></h5>
               <button className='bg-[#007F5F] text-[16px] py-2.5 px-8.5 rounded-[20px] text-white font-medium font-pop'>Book Now</button>
             </div>
          </div>
         
          </Slider>
        </div>
    </div>
  )
}

export default Popular