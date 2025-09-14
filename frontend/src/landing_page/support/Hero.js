import React from 'react'

const Hero = () => {
  return (
    <div style={{backgroundColor:"#F6F6F6", marginTop:"3.5vh",marginBottom:"-1.3vh"}}>
    <div className='container p-5' >
      <div className=' d-flex align-items-center justify-content-between' >
         <h1>Support Portal</h1>
         <button style={{backgroundColor:"#387ED1",color:"white"}} className='btn '>My tickets</button>
      </div>
     
<input className='mt-4 p-4' style={{width:"100%",height:"3.5vh", border:"none", borderRadius:"0.3vh", outline:"none"}} placeholder='Eg.How do I open my account, how to i activates F&O...'/>
    </div>
    </div>
  )
}

export default Hero