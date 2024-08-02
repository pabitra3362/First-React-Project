import React from 'react'
import { useState } from 'react'
import { assets } from '../../assets/assets'
const Navbar = () => {
    const [active,setActive]=useState("Home")
    return (
        <div className='flex p-3 justify-around items-center pt-6'>
            <div className='tomato-logo'>
                <img src={assets.logo} alt="" />
            </div>
            <div className='ul-section'>
                <ul className='flex gap-8 justify-center items-center'>
                    <li className='cursor-pointer hover:border-b-2 border-b-blue-900 text-blue-900 font-semibold'>Home</li>
                    <li className='cursor-pointer text-blue-900 font-semibold'>Menu</li>
                    <li className='cursor-pointer text-blue-900 font-semibold'>Mobile app</li>
                    <li className='cursor-pointer text-blue-900 font-semibold'>Contact us</li>
                </ul>
            </div>
            <div className='navbar-right flex justify-center gap-7 items-center'>
                <div><img src={assets.search_icon} alt="" /></div>
                <div className='relative'>
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot bg-red-500 w-3 h-3 rounded-full absolute -top-2 left-6"></div>
                </div>
                <div><button className='btn bg-transparent px-5 py-1 border-blue-900 text-blue-900 border-2 rounded-3xl hover:bg-orange-200 font-semibold'>Sign in</button></div>
            </div>
        </div>
    )
}

export default Navbar
