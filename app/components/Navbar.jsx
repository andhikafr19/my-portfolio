import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'

function Navbar() {

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(0)';
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }
  return (
    <div>
      <div>
        <Image src={assets.header_bg_color} alt='Navbar Background' className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]' />  
      </div>  
      <nav className='flex justify-between items-center py-4 px-5 lg:px-8 xl:px-[8%] shadow-md z-50'>
        {/* Logo */}
        <a href="">
          <Image src={assets.logo} alt='Main Logo' className='w-28 cursor-pointer mr-14' />
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm opacity-50'>
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.moon_icon} alt='Dark Mode Icon' className='w-6' />
          </button>

          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact <Image src={assets.arrow_icon} alt='Contact Icon' className='w-3'/></a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='Menu Icon' className='w-6' />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-10 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
          
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='Main Logo' className='w-5 cursor-pointer' />
          </div>

          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar