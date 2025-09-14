import React from 'react'

const Hero = () => {
  return (
   <div className='container p-5 mt-5'>
   <div className='row text-center' > 
    <img src='media/images/homeHero.png' alt='Hero Image' className='mt-5' />
    <h1 className='mt-5'>Invest in everything</h1>
    <p className='pt-2'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
    <button className='p-2 btn  fs-5 mb-5 mt-4' style={{width:"20%" , margin: "0 auto", backgroundColor:"#387ED1", color:"white"}}>Sign up for free</button>
   </div>
   </div>
  )
}

export default Hero