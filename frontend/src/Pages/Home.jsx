import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import NavBar from '../Components/Home/NavBar'
import HeroSection from '../Components/Home/HeroSection'
import FeaturesSection from '../Components/Home/FeaturesSection'
import ShowcaseSection from '../Components/Home/ShowcaseSection'
import TestimonialsSection from '../Components/Home/TestimonialsSection '
import CtaSection from '../Components/Home/CtaSection '
import Footer from '../Components/Home/Footer'
import ArtifyLoader from '../Components/Home/ArtifyLoader'
import ExploreGallery from '../Components/Home/ExploreGallery'
// Make sure this path is correct

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time (3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <ArtifyLoader/>
  }

  return (
    <div className='relative overflow-x-hidden overflow-y-scroll w-screen h-screen bg-black'>
      <NavBar/>
      <HeroSection/>
      <FeaturesSection/>
      <ExploreGallery/>
      <ShowcaseSection/>
      <TestimonialsSection/>
      <CtaSection/>
      <Footer/>
    </div>
  )
}

export default Home