import React from 'react'
import Hero from '../component/Hero/Hero'
import Popular from '../component/Popular/Popular'
import Offers from '../component/Offers/Offers'
import NewCollections from '../component/NewCollections/NewCollections'
import NewsLetter from '../component/NewsLetter/NewsLetter'
import { Routes } from 'react-router-dom'
import Navbar2 from '../component/Navbar2/Navbar2'
import DescriptionBox from '../component/DescriptionBox/DescriptionBox'
import RelatedProducts from '../component/RelatedProducts/RelatedProducts'


function Shop() {
  return (
    <div>
      
       <Navbar2/>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
        <DescriptionBox/>
        
    </div>
  )
}

export default Shop