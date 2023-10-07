import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>


  <section id="hero" class="d-flex align-items-center">

    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1>Find Your Perfect Match for a Lifetime of Happiness</h1>
          <h2>Are you ready to take the next step towards finding your life partner?</h2>
          <div>
            <Link to="/signup" class="btn-get-started scrollto">Register today</Link>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img">
          <img src="" class="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>

  </section>
    
    
    
    </>
  )
}

export default Hero