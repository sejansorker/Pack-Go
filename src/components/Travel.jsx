import React from 'react'
import Container from './Container'
import Onee from "../assets/one.png"
import Two from "../assets/two.png"
import Three from "../assets/three.png"
import Four from "../assets/four.png"
import Five from "../assets/five.png"
import Six from "../assets/Six.png"
const Travel = () => {
    return (
        <div className='py-25'>
            <Container>
                <div className="w-1/2 mx-auto text-center pb-25">
                    <h2 className='text-[40px] text-main font-pop font-semibold'>Travel Benefit For User</h2>
                    <p className='text-[16px] text-comon font-pop font-normal pt-5'>We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.</p>
                </div>
                <div className="flex flex-wrap gap-5">
                    <div className="w-[32%] ">
                        <div className="py-16 px-13.5 bg-white shadow-[0_0_30px_rgba(0,0,0,0.15)]">
                            <img src={Onee} alt="" />
                            <h3 className='text-[25px] pt-9 pb-5 text-main font-pop font-medium'>Cheap than Other</h3>
                            <p className='text-[16px] text-comon font-pop font-normal'>Travelya is cheaper than other
                                travel agency.</p>
                        </div>
                    </div>
                    <div className="w-[32%] ">
                        <div className="py-16 px-13.5 bg-white shadow-[0_0_30px_rgba(0,0,0,0.15)]">
                            <img src={Two} alt="" />
                            <h3 className='text-[25px] pt-9 pb-5 text-main font-pop font-medium'>Secure Payment</h3>
                            <p className='text-[16px] text-comon font-pop font-normal'>You can pay your book without
                                doubt again.</p>
                        </div>
                    </div>
                    <div className="w-[32%] ">
                        <div className="py-16 px-13.5 bg-white shadow-[0_0_30px_rgba(0,0,0,0.15)]">
                            <img src={Three} alt="" />
                            <h3 className='text-[25px] pt-9 pb-5 text-main font-pop font-medium'>Easy To Book</h3>
                            <p className='text-[16px] text-comon font-pop font-normal'>Follow flow, Click, Pay. Wait
                                just wait e-ticket.</p>
                        </div>
                    </div>
                    <div className="w-[32%] ">
                        <div className="py-16 px-13.5 bg-white shadow-[0_0_30px_rgba(0,0,0,0.15)]">
                            <img src={Four} alt="" />
                            <h3 className='text-[25px] pt-9 pb-5 text-main font-pop font-medium'>24/7 Support</h3>
                            <p className='text-[16px] text-comon font-pop font-normal'>We’re ready help you anytime
                                and anywhere you are.</p>
                        </div>
                    </div>
                    <div className="w-[32%] ">
                        <div className="py-16 px-13.5 bg-white shadow-[0_0_30px_rgba(0,0,0,0.15)]">
                            <img src={Five} alt="" />
                            <h3 className='text-[25px] pt-9 pb-5 text-main font-pop font-medium'>Best Offers</h3>
                            <p className='text-[16px] text-comon font-pop font-normal'>Inform you about all best offers
                                for all destination.</p>
                        </div>
                    </div>
                    <div className="w-[32%] ">
                        <div className="py-16 px-13.5 bg-white shadow-[0_0_30px_rgba(0,0,0,0.15)]">
                            <img src={Six} alt="" />
                            <h3 className='text-[25px] pt-9 pb-5 text-main font-pop font-medium'>Fast Refund</h3>
                            <p className='text-[16px] text-comon font-pop font-normal'>If you canceled. We can refund
                                your money 1*12.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Travel