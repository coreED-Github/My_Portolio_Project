import { Bars3Icon } from '@heroicons/react/16/solid'
import Link from 'next/link';
import React from 'react'

interface Props {
    openNavbar:()=>void;
};


function Navbar({openNavbar}:Props) {
  return(
  <div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-sky-900 shadow-md'>
<div className='flex justify-between items-center w-[80%] mx-auto h-[100%]'>
    <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
       Saira 
    <span className='text-yellow-500'>
        Nasir
    </span>
    </h1>
   
   <Link href="/Components/About"><div className='nav-link'>About</div></Link>
   <Link href="/Components/Services"><div className='nav-link'>Services</div></Link>
   <Link href="/Components/Skills"><div className='nav-link'>Educatio & Skills</div></Link>
   
   <Link href="/Components/Footer"><div className='nav-link'>Contact</div></Link>

<div onClick={openNavbar}>
  <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-500'/> 
</div>

</div>
  </div>
 
  )
 
}

export default Navbar