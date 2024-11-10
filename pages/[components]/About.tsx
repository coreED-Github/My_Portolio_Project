import { ArrowDownIcon, ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Image from 'next/image'
const About = () => {
    return (
        <div className='bg-blue-200 pb-[3rem] pt-[4rem] md:pt-[8rem]'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
                <div>
                    <h1 className=' text-[20px] font-bold uppercase text-blue-950 md-[1rem]'>
                        ABOUT ME
                    </h1>
                    <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] 
     capitalize mb-[3rem] font-bold text-sky-900'>
                        Transforming <span className='text-yellow-600'>Version</span>
                    </h2>
                    <div className='mb-[3rem] flex items-center md:space-x-10'>
                        <span className='w-[100px] hidden md:block h-[5px] bg-slate-500 rounded-sm'></span>
                        <p className='text-[19px] text-slate-700 font-semibold'>
                            Senior student in the program of Governor sindh initiative for cloud applied generative AI.
                            proficient in typeScript, JavaScript.
                            Strong understanding of type system, objects-oriented programming, functional programming.
                            Passionate Web Developer with hands-on experience in creating responsive and high-performance
                            websites using Next.js. Skilled in developing engaging and dynamic user interfaces,
                            integrating modern web technologies, and delivering user-focused web solutions.
                            Currently focused on building innovative projects that enhance user experiences.
                        </p>
                    </div>
                    <button className='px-[1rem] hover:bg-sky-600 transition-all duration-200 py-[1rem]
 text-[15px] font-bold uppercase bg-sky-900 text-white flex items-center space-x-2 rounded-2xl '>
   <p>Download CV</p>
<ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-white'/>
</button>
 </div>
                
     <div className='lg:w-[400px] mx-auto md:mx-0 mt-[2rem] lg:h-[400px] w-[300px] h-[300px] relative'>             
    <Image 
    src="/sairaproile.jpg"
     alt="user"
      layout="fill"
      objectFit="contain"
       className="relative z-[11] w-[100%] h-[100%] object-contain "/>

<div className='absolute w-[100%] h-[100%] z-[10] bg-blue-300 bottom-[3rem] right-[-2rem] '>

</div>




</div>

            </div>
        </div>
    )
}

export default About