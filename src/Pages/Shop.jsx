import React from 'react'
import Hero from '../component/Hero/Hero'
import Popular from '../component/Popular/Popular'
import Offers from '../component/Offers/Offers'
import { Routes } from 'react-router-dom'


function Shop() {
  return (
    <div>
      
       
        <Hero/>
        <Popular/>
        <Offers/>
    </div>
  )
}

export default Shop