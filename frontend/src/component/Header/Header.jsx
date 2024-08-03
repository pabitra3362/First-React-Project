import React from 'react'
import './Header.css'
import {assets} from '../../assets/assets'
const Header = () => {
  return (
    <div>
      <div className='header' >
        <div className=' headerjr w-3/4 px-36 pt-36'>
        <h1 className='text-7xl text-white font-semibold'>Order your favourite food here</h1>
        <p className='text-white text-lg mt-5'>Choose from a diverse menu featuring a deletctable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button className='px-10 py-4 bg-white rounded-full mt-5 font-semibold'>View Menu</button>
        </div>
      </div>
    </div>
  )
}

export default Header
