import React from 'react'

import NavBar from '../Components/Home/NavBar'
import HeroSection from '../Components/Home/HeroSection'
import FeaturesSection from '../Components/Home/FeaturesSection'
import ShowcaseSection from '../Components/Home/ShowcaseSection'
import TestimonialsSection from '../Components/Home/TestimonialsSection '
import CtaSection from '../Components/Home/CtaSection '
import Footer from '../Components/Home/Footer'
const Home = () => {
  return (
    <>
  <div className='relative overflow-x-hidden overflow-y-scroll w-screen h-screen bg-black'>
  <NavBar/>
  <HeroSection/>
  <FeaturesSection/>
  <ShowcaseSection/>
  <TestimonialsSection/>
  <CtaSection/>
  <Footer/>
  </div>
    
    </>
  
  )
}

export default Home
