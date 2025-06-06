import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='Profile Background' className='rounded-full w-32' />
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-semibold text-gray-800'>
        Hi, Im Andhika Firdaus Ramadhan <Image src={assets.hand_icon} alt='' className='w-6' />
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-bold text-gray-900'>
        Front End Developer from Indonesia
      </h1>
      <p className='mx-auto max-w-2xl'>
        I am a Front End Developer with a passion for creating beautiful and functional web applications. I have experience in HTML, CSS, JavaScript, and React.
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href='#contact' className='px-10 py-3 border bg-black text-white rounded-full flex items-center gap-3'>
          Contact <Image src={assets.right_arrow_white} alt='Contact Icon' className='w-3'/>
        </a>

        <a href='/sample-resume.pdf' download className='px-10 py-3 border border-gray-500 rounded-full flex items-center gap-3'>
          My Resume <Image src={assets.download_icon} alt='Contact Icon' className='w-3'/>
        </a>
      </div>
    </div>
  )
}

export default Header 