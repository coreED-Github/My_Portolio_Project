import React from 'react'
interface Props {
  title: string;
  year:string
}

const SkillsItem = ({title, year}:Props) => {
  return <div className='mb-[4rem] md:mb-[4rem]'>
    <span className='px-[2rem] text-sky-900 py-[0.9rem] font-bold text-[18px] border-[2px] border-blue-800'>
      {year}</span>
     <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-blue-800'>
      {title}
     </h1>
<p className='text-blue-700 font-normal w-[80%] text-[17px] opacity-80'>

</p>


  </div>
  
}
export default SkillsItem