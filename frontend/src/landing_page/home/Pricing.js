import React from 'react'

const Pricing = () => {
  return (
    <div className='container p-5 ' >
    <div className='row align-items-center'>
      {/* Left Section */}

    <div className='col-4 px-4'>
      <h1 className='mb-5 fs-3'>Unbeatable pricing</h1>
      <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
      <a href='#' style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
    </div>
   
    {/* Right Section */}
    <div className='col-8 px-5'>
     
    
<div className="row text-center mt-4">

  <div className="col-4 d-flex align-items-center justify-content-center">
    <img 
      src="media/images/pricing-eq (1).svg" 
      style={{ width: "120px", height: "120px", marginRight: "" }} 
    />
    <p style={{ fontSize: "10px", textAlign:"start" }} className="mb-0 text-muted mt-3">
      Free account <br/> opening
    </p>
  </div>

  <div className="col-4 d-flex align-items-center justify-content-center">
    <img 
      src="media/images/pricing-eq (1).svg" 
      style={{ width: "120px", height: "120px", marginRight: "10px" }} 
    />
    <p style={{ fontSize: "10px" , textAlign:"start" }} className="mb-0 text-muted mt-3">
      Free equity delivery <br /> and direct mutual funds
    </p>
  </div>

  <div className="col-4 d-flex align-items-center justify-content-center">
    <img 
      src="media/images/other-trades.svg" 
      style={{ width: "120px", height: "120px", marginRight: "10px" }} 
    />
    <p style={{ fontSize: "10px" ,textAlign:"start" }} className="mb-0 text-muted mt-3">
      Intraday and  <br />F&O
    </p>
 

</div>




        </div>
      
      </div>
    </div>

    </div>

    
  )
}

export default Pricing