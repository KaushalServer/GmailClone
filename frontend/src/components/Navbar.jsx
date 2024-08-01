import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import Avatar from 'react-avatar';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-3 h-16 p-2 m-2'>
        <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-200 cursor-pointer'>
                    <RxHamburgerMenu size={'24px'} />
                </div>

                <img className='w-8' src='https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png' alt='Image' />
                <h1 className='text-2xl text-gray-600 font-medium'>Inbux</h1>
            </div>
        </div>
        <div className='md:block hidden w-[50%] mr-60 md:mr-10'>
            <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
                <IoIosSearch size='24px' className='text-gray-600'/>
                <input 
                type="text"
                placeholder='Search mail'
                className='rounded-full w-full bg-transparent outline-none px-1'
                />
            </div>
        </div>
        <div className='md:block hidden'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-200 cursor-pointer' >
                    <FaRegQuestionCircle size={"24px"} />
                </div>
                <div className='p-3 rounded-full hover:bg-gray-200 cursor-pointer' >
                    <IoSettingsOutline size={"24px"} />
                </div>
                <div className='p-3 rounded-full hover:bg-gray-200 cursor-pointer' >
                    <PiDotsNineBold size={"24px"} />
                </div>
                <div className='relative cursor-pointer'>
                    <Avatar src='https://avatar.iran.liara.run/public/job/police/male' size='40' round={true}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar