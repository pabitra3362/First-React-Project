import React from 'react'
import { useState } from 'react'
import { assets } from '../../assets/assets'
const Navbar = () => {
    const [active,setActive]=useState("Home")
    let activeExpression='cursor-pointer border-b-2 border-b-blue-900 text-blue-900 font-semibold'
    let notActiveExpression='cursor-pointer text-blue-900 font-semibold'
    return (
        <div className='flex p-3 justify-between items-center pt-6'>
            <div className='tomato-logo md:w-[20%]'>
                <img className='md:w-[80%]' src={assets.logo} alt="" />
            </div>
            <div className='ul-section'>
                <ul className='flex lg:gap-8 justify-center items-center md:gap-3'>
                    <li onClick={()=>setActive("Home")} className={active==="Home"?activeExpression:notActiveExpression}>Home</li>
                    <li onClick={()=>setActive("Menu")} className={active==="Menu"?activeExpression:notActiveExpression}>Menu</li>
                    <li onClick={()=>setActive("Mobile-app")} className={active==="Mobile-app"?activeExpression:notActiveExpression}>Mobile app</li>
                    <li onClick={()=>setActive("Contact-us")} className={active==="Contact-us"?activeExpression:notActiveExpression}>Contact us</li>
                </ul>
            </div>
            <div className='navbar-right flex justify-center lg:gap-7 items-center md:gap-4'>
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
