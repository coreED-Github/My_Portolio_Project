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
      bg-black`}>

       <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
       <Link href="./"><div className='nav-link'>Home</div></Link>
   <Link href="/Components/About"><div className='nav-link'>About</div></Link>
   <Link href="/Components/Services"><div className='nav-link'>Services</div></Link>
   <Link href="/Components/Skills"><div className='nav-link'>Educatio & Skills</div></Link>
   <Link href="./"><div className='nav-link'>Blogs</div></Link>
   <Link href="/Components/Skills"><div className='nav-link'>Contact</div></Link>
      
</div>
<div
 onClick={closeNavbar}
 className='absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-500'>
  <XMarkIcon/>
</div>
       
        </div>
  )
}

export default MobileNav