import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';
interface Props{
  Nav:boolean;
  closeNavbar:()=>void
}

const MobileNav = ({Nav,closeNavbar}:Props) => {
const navAnimation = Nav?'translate-x-0':'translate-x-[-100%]';

  return ( 
    <div
     className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000]
      `}>

       <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-blue-950'>
      
   <Link href="/Components/About"><div className='nav-link-mobile'>About</div></Link>
   <Link href="/Components/Services"><div className='nav-link-mobile'>Services</div></Link>
   <Link href="/Components/Skills"><div className='nav-link-mobile'>Educatio & Skills</div></Link>
   
   <Link href="/Components/Footer"><div className='nav-link-mobile'>Contact</div></Link>
      
</div>
<div
 onClick={closeNavbar}
 className='absolute z-[100000000] cursor-pointer top-[4rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-500'>
  <XMarkIcon/>
</div>
       
        </div>
  )
}

export default MobileNav