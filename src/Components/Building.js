import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState } from 'react'
import  './Building.css';

import React from 'react'
import Link from 'next/link';

export default function Building() {
  return (
    <div className='section build'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-12 head'>
              <h1>See how we have worked with companies like yours</h1>
              <p>We helped many small, medium, and large companies with their struggle in building successful remote software development teams or the whole IT hubs located in Poland.</p>
            </div>
        </div>
        <div className='row content'>
            <div className='col-md-6 image mt-3'>
              <img src='https://nxtide.com/wp-content/uploads/2022/04/Kitopi_Poland-1024x656.jpg' className='img-fluid'/>
            </div>

            <div className='col-md-6 text mt-3'>
              <h1>
                Building a software team
                for the unicorn in the cloud-kitchen industry</h1>
               <p>Kitopi was looking for an option to scale its software development team for ongoing and future product development needs. </p>
               <Link href={'/Learn'} className='bg-dark text-white rounded learnBtn'>learn More</Link>
            </div>
           </div> 
            
        </div>
      </div>
    
  )
}
