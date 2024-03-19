import React from 'react'
import { GoHome } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";


const mobNav = () => {
  return (
    <div className='text-white h-24 w-full flex bg-red-200 fixed items-center justify-center  z-10'>
        <ul className='flex items h-full rounded-3xl w-[70%] bg-blue-100 items'>
            <GoHome/>
            <HiOutlineShoppingCart/>
            <RiAccountCircleLine/>
            <IoIosHeartEmpty/>

        </ul>

    </div>
  )
}

export default mobNav