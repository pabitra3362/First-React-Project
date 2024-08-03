import React from 'react'
import {menu_list} from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu flex flex-col gap-8'>
      <h1 className='text-5xl font-semibold w-fit m-auto text-center'>Explore our menu</h1>
      <p className='font-semibold w-3/4 m-auto text-lg'>Choose from a diverse menu featuring a deletctable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="explore-menu-list flex justify-between items-center gap-10 text-center mt-5  overflow-x-scroll">
        {menu_list.map((item,index)=>{
            return(
                <div key={index}>
                    <img className='cursor-pointer min-w-max' src={item.menu_image} alt=""/>
                    <p className='text-center font-semibold'>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <div className='border-2 border-gray-300 my-3 '></div>
    </div>
  )
}

export default ExploreMenu
