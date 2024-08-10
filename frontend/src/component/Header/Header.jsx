import React from 'react'
import './Header.css'
import {assets} from '../../assets/assets'
const Header = () => {
  return (
    <div>
      <div className='header' >
        <div className='absolute w-[50%] top-[22%] left-[8%]' >
        <h1 className='text-[5vw] leading-tight w-[110%]  text-white font-semibold'>Order your favourite food here</h1>
        </div>
        <div className='absolute w-[70%] top-[58%] left-[8%]'>
        <p className='text-white text-[1.5vw]'>Choose from a diverse menu featuring a deletctable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        </div>
        <div className='absolute bottom-[10%] left-[8%]'><button className='px-10 lg:py-4 lg:w-[150px] lg:text-lg bg-white rounded-full font-semibold md:px-1 md:w-[90px] md:text-xs md:py-2'>View Menu</button></div>
        
      </div>
    </div>
  )
}

export default Header
