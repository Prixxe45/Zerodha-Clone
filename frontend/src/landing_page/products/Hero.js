import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
  <div className='container p-5  border-bottom ' style={{ marginBottom:"8vh", color:"#424242" }}
    >
      <h1 className=' text-center mt-5  p-1 fs-3' >Zerodha Products</h1>
    <p className=' text-center mt-3 fs-5 fst-normal'>Sleek, modern, and intuitive trading platforms</p>
     <p className=' text-center fw-normal '>Check out our <Link style={{color:"#387ED1",fontWeight:"500",textDecoration:"none" }}>investment offerings →</Link></p>
       </div>
  )
}

export default Hero