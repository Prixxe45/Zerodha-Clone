import React from 'react'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='container p-5 mb-5'>
   <div className='row text-center' > 
    <div className='col ' style={{  margin: "auto" }}>
    <h1 className='mt-5'>404 Not Found</h1>
    <h1>Chintu couldn’t find that page</h1>
    <p className='pt-3'>We couldn’t find the page you were looking for. Visit <Link to="/" className='text-decoration-none fs-5 fw-semibold' style={{color:"#387ED1"}}> Zerodha’s home page</Link></p>
    
    </div>
     <div className='col mt-5'>
       <img style={{ width: "50vh", height: "65vh", marginTop: "auto" , borderRadius:"5vh"  }}  src='media/images/cintu.jpg' alt='Hero Image' className='mt-5' />
     </div>
   
   </div>
   </div>
  )
}

export default NotFound