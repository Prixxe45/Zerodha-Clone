import React from 'react'

const Team = () => {
  return (
    <div className='container'>
       <h1 className='text-center fs-2 ' style={{color:"#424242"}}>People</h1>
      <div className=' row p-5 m-5' style={{fontSize:"1rem",lineHeight:"1.9",fontWeight:"400", }}>
        <div className='text-center col-6 ' style={{ }}>
<img src='media\images\nithinKamath.jpg ' className='rounded-pill' style={{height:"18.44rem" , }} />
<h2 className='mt-3' style={{fontSize:"1.225rem",lineHeight:"1.9",fontWeight:"400",color:"#424242" }}>Nithin Kamath</h2>
<h3  style={{fontSize:"0.9rem",lineHeight:"1",fontWeight:"300",color:"#424242" }}>Founder, CEO</h3>
        </div>
        <div className=' col p-4'>
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
        
      </div>
    </div>
  )
}

export default Team