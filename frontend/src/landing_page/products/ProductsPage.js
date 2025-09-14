import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

const ProductsPage = () => {
  return (
    <>
    <Hero/>
    <LeftSection imageURL="/media/images/kite.png"
    productName="Kite" 
    productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
     tryDemo={true}
      learnMore={true}
       googlePlay=""
       appStore=""/>

<RightSection  imageURL="/media/images/console.png"
    productName="Console" 
    productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
     tryDemo=""
      learnMore=""
      />

        <LeftSection imageURL="/media/images/coin.png"
    productName="Coin" 
    productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
     tryDemo=""
      learnMore=""
       googlePlay=""
       appStore=""/>

       <RightSection  imageURL="/media/images/kiteconnect.png"
    productName="Kite Connect API" 
    productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
     tryDemo=""
      learnMore=""
    />
   
    <LeftSection imageURL="/media/images/varsity.png"
    productName="Varsity mobile" 
    productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
     tryDemo=""
      learnMore=""
       googlePlay=""
       appStore=""/>

<Universe/>
    </>
  )
}

export default ProductsPage