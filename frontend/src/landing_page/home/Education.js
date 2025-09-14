import React from 'react'

const Education = () => {
  return (
     <div className='container mt-5 '>
          <div className='row mt-5 align-items-center '>
                <div className='col-6 p-5 '>
                 <img src='media\images\education.svg'  style={{width:"77%"}} />
                 </div>
                  <div className='col-6 p-5 '>
                 <h1 className='fs-3 mb-4 

' style={{color:"#424242"}}>Free and open market education</h1>
          <p className=' '>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading</p>
           <a href='#' className='' style={{textDecoration:"none"}}>Varsity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

          
          <p className='mt-4 '>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
           <a href='#' style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                 </div>
          </div>

    </div>
  )
}

export default Education