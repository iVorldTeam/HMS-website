import React from 'react'
import { useContextData } from '../context/contextApi'
import Hero from '../userCommon/Hero'
import FeaturedDestination from '../userCommon/FeaturedDestination'
import ExclusiveOffers from '../userCommon/ExclusiveOffers'
import Testimonial from '../userCommon/Testimonial'
import NewsLetter from '../userCommon/NewsLetter'

const Home = () => {
  const {user} = useContextData()
  return (
    <>
      <Hero className='min-h-[70vh]'/>
      <FeaturedDestination/>
      <ExclusiveOffers/>
      <Testimonial/>
      <NewsLetter/>
    </>
  )
}

export default Home