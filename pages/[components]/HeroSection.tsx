import React from 'react'
import Partical from './Partical'
import TextEfact from './TextEfact';
import Image from 'next/image';
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/16/solid';

const HeroSection = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center bg-blue-200">
      <Partical />
      <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
        <div>
          <h1 className='text-[35px] md:text-[50px] text-sky-600 font-bold'>
            HI, I'M
            <span className='text-yellow-600 '> SAIRA!</span>
          </h1>
          <TextEfact />
          <p className='mt[1.5rem] text-[18px] text-blue-800'>
            proficient in typeScript, JavaScript
            Strong understanding of type system, objects-oriented programming, functional programming,
            Passionate Web Developer with hands-on experience in creating responsive and high-performance websites
            using Next.js.
          </p>
          <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
            <button className='px-[2rem] hover:bg-sky-600 transition-all duration-200 py-[1rem]
 text-[18px] font-bold uppercase bg-sky-900 text-white flex items-center space-x-2 rounded-2xl '>
              <p>Download CV</p>
              <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-white' />
            </button>
            <button className='flex items-center space-x-2 '>
              <PlayCircleIcon className='w-[3rem] h-[3rem] hover:text-sky-600 transition-all duration-200
     text-sky-800'/>
              <p className='text [20rem] font-semibold text-sky-900'>
                Watch the Vidio</p>
            </button>

          </div>


        </div>

        <div className="w-[500px] hidden bg-sky-200 relative lg:flex items-center rounded-full  h-[500px]">
          <Image src="/sairaG.jpg" alt="user" layout='fill' className="object-cover rounded-full " />
        </div>
      </div>
    </div>
  )
}

export default HeroSection;