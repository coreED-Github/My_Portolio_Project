import React, { useState } from 'react'
import Navbar from './[components]/Navbar'
import MobileNav from './[components]/MobileNav'
import HeroSection from './[components]/HeroSection'
import About from './[components]/About'
import Services from './[components]/Services'
import Skills from './[components]/Skills'
import Footer from './[components]/Footer'
 
const Home = () => {
  const [Nav, setNav] = useState(false)
  const openNavbar = ()=> setNav(true)
  const closeNavbar = ()=> setNav(false)

  return(
     <div className='overflow-x-hidden'>
      <div>
        <MobileNav Nav={Nav} closeNavbar={closeNavbar}/>
          <Navbar openNavbar={openNavbar} />

          <HeroSection/>
          <div className='relative z-[30]'>
           <About />
<Services/>
<Skills/>
<Footer/>
        </div>
        </div>
       
       </div>
  )
  }
export default Home;