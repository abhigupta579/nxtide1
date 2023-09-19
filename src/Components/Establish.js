import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState } from 'react'
import  './Establish.css';

import React from 'react'
import Link from 'next/link';

export default function Establish() {

  // const[show,setShow] = useState(false);
  // const[color,setColor]=useState(false);

  // function colorChange(){
  //   setColor(!color);
  // }

  // function dataShow(){
  //   setShow(!show);
  // }

  return (
    <div className='section establish'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-6 EstablishText mt-3'>
              <h1>Establishing an entirely new, remote team for the UKs first fully digital bank</h1>
              <p>When Atom Bank contacted NxTide in June 2021, we were extremely excited. We knew this disruptive project aligned with our mission and the clients ambitions. And so it begins…</p>
              <Link href={'/learn'} className='learnBtn'>Learn More</Link>
            </div>

            <div className='col-md-6 image mt-3'>
              <img src='https://nxtide.com/wp-content/uploads/2022/04/Atom-Bank-1.jpg' className='img-fluid'/>
            </div>
            {/* <div>
               <p>hello, lets learn some Next js...</p>
              </div> */}
               {/* <button onClick={dataShow}>show
              {  
                show ? <div>
                <p>hello, lets learn some Next js...</p>
               </div> : ''
              
               }
               </button> */}

               {/* <button onClick={colorChange}>ClkColor
                {
                  color?<div className='colorRed'>
                    <p>Color changed to Red...</p>
                  </div> : 
                  <div className='colorBlue'>
                  <p>Color changed to Blue...</p>
                </div>
                }
               </button> */}
            </div>
      </div>
    </div>
  )
}
