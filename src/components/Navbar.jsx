import React from 'react'
import Container from './Container'
import Logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div>
        <Container>
           <div className="flex items-center mt-0">
            <div className="w-1/4">
            <img src={Logo} alt="" />
            </div>
            <div className="w-2/4 flex justify-center">
            <ul className='flex items-center gap-x-11 text-[16px] font-pop font-normal text-comon'>
                <li className=''>Home</li>
                <li>Tours</li>
                <li>Booking</li>
                <li>Pages</li>
                <li>Features</li>
                <li>Blog</li>
            </ul>
            </div>
            <div className="w-1/4 flex justify-end">
                <button className='py-4 text-white px-9 bg-[#007F5F] text-[16px] font-semibold font-pop cursor-pointer'>Book Now</button>
            </div>
           </div>
        </Container>
    </div>
  )
}

export default Navbar