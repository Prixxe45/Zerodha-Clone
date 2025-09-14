import React from 'react'

const Universe = () => {
  return (
    <div className='container  text-center my-5' style={{color:"#424242",lineHeight:"1.5", fontWeight:"400"}} >
    <div className=''>
      <p  className=' m-5 fs-5 p-4'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <h1 className='mt-5 mb-3 p-2 fs-4' >The Zerodha Universe</h1>
      <p >Extend your trading and investment experience even further with our partner platforms</p>
    </div>
      <div className='row mt-5  align-items-center ' style={{fontSize:"1.125rem",color:"#9B9B9B",lineHeight:"1.5", fontWeight:"400"}} >
        <div className='col-4 '>\
          <img style={{height:"3.5rem"}} className='' src='media/images/zerodhaFundhouse.png'/>
          <p className='mt-3 p-3 px-5'>Our asset management venture is creating simple and transparent index funds to help you save for your goals.</p>
        </div>
        <div className='col-4 '  >
           <img style={{height:"2.5rem"}}  src='media/images/sensibullLogo.svg'/>
             <p className='mt-4 p-3 px-3'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
        </div>
        <div className='col-4' >
           <img style={{height:"3.5rem"}} className='' src='media/images/tijori.svg'/>
             <p className='mt-3 p-3 px-5'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
        </div>
      </div>

        <div className='row mt-5 mb-5 align-items-center' style={{fontSize:"1.125rem",color:"#9B9B9B", fontWeight:"400"}}>
        <div className='col-4' >
           <img style={{height:"3.5rem"}} src='media/images/streakLogo.png'/>
             <p className='mt-3 p-3 px-5'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
        </div>
        <div className='col-4'  style={{width:"33%"}}>
           <img style={{height:"3.5rem"}} src='media/images/smallcaseLogo.png'/>
             <p className='mt-3 p-3 px-5' >Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
        </div>
        <div className='col-4'   style={{width:"33%"}}>
           <img style={{height:"3.5rem"}} src='media/images/dittoLogo.png'/>
             <p className='mt-3 p-3 px-5'>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
        </div>
      </div>
      
       <button className='p-2 btn  fs-5 m-5' style={{width:"20%" , margin: "0 auto", backgroundColor:"#387ED1", color:"white"}}>Sign up for free</button>
      
    </div>
  )
}

export default Universe