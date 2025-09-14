import React from 'react'

const Hero = () => {
  return (
    <div className='container ' style={{color:"#434343" , lineHeight:"1.8"}}>
      <div className='row p-5 mt-5 text-center ' >
        <h1>Charges</h1>
        <p className='text-muted fs-5 p-4' >List of all charges and taxes</p>
         <div className='row  mt-5  align-items-center ' >
<div className='col-4 p-5'>
<img  src='media/images/pricing-eq.svg'/>
<h1 className='fs-3 mb-3'>Free equity delivery</h1>
<p  className='text-muted mt-4' >All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
</div>
<div className='col-4 p-4'>
<img className=''  src='media/images/other-trades.svg'/>
<h1 className='fs-3 mb-3'>Intraday and F&O trades</h1>
<p  className='text-muted mt-4' >Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
</div>
<div className='col-4 p-5'>
<img src='media/images/pricing-eq.svg'/>
<h1 className='fs-3 mb-3'>Free direct MF</h1>
<p className='text-muted mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
</div>
</div>
      </div>
    </div>
  )
}

export default Hero