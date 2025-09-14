import React from 'react'
import { useState } from 'react'


  const Members =()=>{
    const [openIndex,setOpenIndex] = useState(null);
  

  const team = [
  {
    name: "Nikhil Kamath",
    role: "Co-founder & CFO",
    img: "media/images/Nikhil.jpg",
    bio: "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess."
  },
  {
    name: "Dr. Kailash Nadh",
    role: "CTO",
    img: "media/images/Kailash.jpg" ,
    bio: "Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day."
  },
  {
    name: "Venu Madhav",
    role: "COO",
    img: "media/images/Venu.jpg",
    bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha."
  },
  {
    name: "Hanan Delvi",
    role: "CCO",
    img: "media/images/Hanan.jpg",
    bio: "We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time."
  },
  {
    name: "Seema Patil",
    role: "Director",
    img: "media/images/Seema.jpg",
    bio: "Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast."
  },
  {
    name: "Karthik Rangappa",
    role: "Chief of Education",
    img: "media/images/Karthik.jpg",
    bio: "Karthik “Guru” Rangappa single handedly wrote Varsity, Zerodha’s massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography."
  },
  {
    name: "Austin Prakesh",
    role: "Director Strategy",
    img: "media/images/Austin.jpg",
    bio: "Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches."
  },
   {
    name: "Prince Tripathi",
    role:  "Lead Developer & Secret Keeper",
    img: "media/images/Prince.jpg",
   bio: (
      <>
        <p>
          👋 Hey there, curious mind! You've just unlocked a hidden corner of this team.
          I'm the wizard behind the code, weaving magic one line at a time.
        </p>
        <p>
          🚀 When I'm not breaking things to make them better, I'm crafting secrets
          meant only for the worthy few who dare to look closer.
            PS: Highlight this text to reveal the truth 😉
        </p>
        <p style={{ color: "transparent", userSelect: "text", fontWeight: "bold" }}>
          🔐 Here's your secret: &nbsp;
          <br />
          <em>
            “The only limit is the one you don’t dare to break. Keep pushing. Keep dreaming. Keep coding.”
          </em>
          <br />
          <br />
        
        </p>
      </>
    ),
  },
];

  
  return (
    <div className='container '>
      <div className='row m-5 p-5 '>
        {team.map((member,index) => (
           <div className='text-center col-4' key={index}>
<img src={member.img} alt={member.name} className='rounded-pill m-5' style={{height:"14.44rem" , }} />
<h2 className='mt-3' style={{fontSize:"1.225rem",lineHeight:"1.9",fontWeight:"400",color:"#424242" }}>{member.name}</h2>
<h3  style={{fontSize:"0.9rem",lineHeight:"1",fontWeight:"400",color:"#424242" }}>{member.role}</h3>

{/* Bio Button */}
<div >
<button className='btn btn-link p-0'style={{fontSize:"1rem",lineHeight:"1",fontWeight:"500",textDecoration:"none",color:"#666666" }} onClick={()=>setOpenIndex(openIndex === index ? null : index )}>
bio
</button>
</div>
{openIndex === index && (
  <p className='mt-2 p-5 m-4 text-start' style={{fontSize:"0.9rem",color:"#555"}}>
    {member.bio}
  </p>
)}
 </div>
        ))}
       
        </div>
    </div>
  )
}

export default Members