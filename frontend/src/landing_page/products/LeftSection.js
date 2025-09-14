import React from 'react'

const LeftSection = ({imageURL,productName,productDesription,tryDemo,learnMore,googlePlay,appStore,}) => {
  return (
    <div className='container mt-5 px-5'>
<div className='row px-5' >
  <div className='col-7 p-5 '>
    <img src={imageURL}/>
  </div>
  
  <div className='col-5 p-5 mt-5' ><h1 style={{fontSize:"1.5rem", lineHeight:"1", color:"#424242" }}>{productName}</h1>
  <div  className='mt-3' style={{width:"80%", lineHeight:"2",fontSize:"1rem", fontWeight:"400"}}>
    <p>{productDesription}</p>
<div className='d-flex gap-5 '  >
  <a className=''  style={{ textDecoration:"none", marginRight:"2rem" ,}} href={tryDemo}>Try Demo →</a>
<a  style={{ textDecoration:"none", }} href={learnMore}>Learn More →</a>
</div>
<div className='d-flex gap-3 mt-4' >
  <a   href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
<a href={appStore}><img src='media/images/appstoreBadge.svg'/></a>
</div>
  </div>


</div>

</div>
    </div>
  )
}

export default LeftSection