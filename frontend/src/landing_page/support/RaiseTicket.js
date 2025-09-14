import React, { useState } from 'react';


const RaiseTicket = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    // Close if clicked again, otherwise open the clicked one
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

const accordionData = [
  {
    title: "Account Opening",
    logo : <i class="fa fa-plus-circle" aria-hidden="true"></i>,
    content: (
      <ul>
        <li>Resident Individual</li>
        <li>Minor</li>
        <li>Non Resident Indian (NRI)</li>
        <li>Company, Partnership, HUF and LLP</li>
        <li>Glossary</li>
      </ul>
    )
  },
  {
    title: "Your Zerodha Account",
    logo :<i class="fa fa-user" aria-hidden="true"></i>,
    content: (
      <ul>
        <li>Your Profile</li>
        <li>Account modification</li>
        <li>Client Master Report (CMR) and Depository Participant (DP)</li>
        <li>Nomination</li>
        <li>Transfer and conversion of securities</li>
      </ul>
    )
  },
  {
    title: "Kite",
    logo : <i class="fa fa-sitemap" aria-hidden="true"></i>,
    content: (
      <ul>
        <li>IPO</li>
        <li>Trading FAQs</li>
        <li>Margin Trading Facility (MTF) and Margins</li>
        <li>Charts and orders</li>
        <li>Alerts and Nudges</li>
        <li>General</li>
      </ul>
    )
  },
  {
    title: "Funds",
    logo:<i class="fa fa-inr" aria-hidden="true"></i>,
    content: (
      <ul>
        <li>Add money</li>
        <li>Withdraw money</li>
        <li>Add bank accounts</li>
        <li>eMandates</li>
      </ul>
    )
  },
  {
    title: "Console",
    logo:<i class="fa fa-superpowers" aria-hidden="true"></i>,
    content: (
      <ul>
        <li>Portfolio</li>
        <li>Corporate actions</li>
        <li>Funds statement</li>
        <li>Reports</li>
        <li>Profile</li>
        <li>Segments</li>
      </ul>
    )
  },
  {
    title: "Coin",
    logo:<i class="fa fa-ravelry" aria-hidden="true"></i>,
    content: (
      <ul>
        <li>Mutual funds</li>
        <li>National Pension Scheme (NPS)</li>
        <li>Fixed Deposit (FD)</li>
        <li>Features on Coin</li>
        <li>Payments and Orders</li>
        <li>General</li>
      </ul>
    )
  }
];



  return (
    <div className="container mt-5 mb-5 p-5">
      <div className='row '>
       {accordionData.map((item,index)=>(
        
        <div className='col-7 d-flex  my-2 align-items-center' style={{ border:"0.2vh solid #F6F6F6"}}>
          <p className='fs-3 ' style={{color:"#387ED1", width:"3vh",}}>{item.logo}</p>
          <h1 className='fs-5 p-2'>{item.title}</h1>
        </div>
      
       ))} 
<div className='col-5 ' style={{width:"15%",marginLeft:"4vh",backgroundColor:"#FFF4E6",position:"absolute",left:"60rem", top:"22rem",borderLeft:"1rem solid #FF9100", color:"#387ED1"}}>
  <div className=''>
    <p>Right Entitlement listiing in september 2025</p>
<p>Current Takeovers and Delisting September 2025</p>
  </div>

      </div>
      </div>
      
    </div>
    
  );
};

export default RaiseTicket;