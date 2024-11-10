import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Services = () => {
  return (
    <div className="bg-blue-200 pt-[4rem] md:pt-[3rem] pb-[3rem]">
      <p className="heading">
        Visit My <span className='text-yellow-600'>Services</span>
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem]
  mt-[3rem] text-white'>
        <div>
          <div className='bg-orange-500 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
      uppercase font-semibold text-center p-[1rem]'>
            <CodeBracketSquareIcon className='w-[4rem] h-[4rem] mx-auto text-white' />
            <h1 className='text-[20px] md:text-[30px] mt-[1.5px] mb-[1.5rem]'>
              Dynamic Web Design

            </h1>
            <p className='text-[15px] text-white font-normal'>
              Skill: HTML, CSS Flexbox and Grid ,  responsive layouts.

            </p>
          </div>
        </div>
        <div>
          <div className='bg-pink-500 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
      uppercase font-semibold text-center p-[1rem]'>
            <RocketLaunchIcon className='w-[4rem] h-[4rem] mx-auto text-white' />
            <h1 className='text-[20px] md:text-[30px] mt-[1.5px] mb-[1.5rem]'>
              Interactive App Development

            </h1>
            <p className='text-[15px] text-white font-normal'>
              Skill: Component-based architecture, data fetching, API integration.
            </p>
          </div>
        </div>
        <div>
          <div className='bg-green-400 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
      uppercase font-semibold text-center p-[1rem]'>
            <CommandLineIcon className='w-[4rem] h-[4rem] mx-auto text-white' />
            <h1 className='text-[20px] md:text-[30px] mt-[1.5px] mb-[1.5rem]'>
              Custom UI Solutions

            </h1>
            <p className='text-[15px] text-white font-normal'>
              Skill: Tailwind CSS, JavaScript interactivity,  UX optimization

            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services