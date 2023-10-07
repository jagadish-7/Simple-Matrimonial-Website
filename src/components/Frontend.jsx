import React from 'react'
import Navbar from './fcomponents/Navbar'
import Hero from './fcomponents/Hero'
import Footer from './fcomponents/Footer'
import Success from './fcomponents/Success'
import About from './fcomponents/About'

const Frontend = () => {
  return (
   <>
   
   <Navbar/>

   <Hero/>
   <main id='main'>
   <About/>
   <Success/>
   </main>
   

   <Footer/>
   
   </>
  )
}

export default Frontend