import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState } from 'react'
import  './Partner.css';

import React from 'react'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLocationDot,
    faStar,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function Partner() {
  return (
    <div className='section parter bg-light'>
      <div className='container'>
        <div className='row content'>
            <div className='col-md-6 rating'>
              <h1>4.8/5</h1>
             <div className='icons'> 
              <h2><FontAwesomeIcon icon={faStar} className='star'/></h2>
              <h2><FontAwesomeIcon icon={faStar} className='star'/></h2>
              <h2><FontAwesomeIcon icon={faStar} className='star'/></h2>
              <h2><FontAwesomeIcon icon={faStar} className='star'/></h2>
              <h2><FontAwesomeIcon icon={faStar} className='star'/></h2>
             </div> 
              <p>Based on 44 reviews on Clutch & Google Maps</p>
            </div>

            <div className='col-md-6 colText'>
              <h1>Choose a trusted partner with years of experience</h1>
              <p>We helped many small, medium, and large companies with their struggle in building successful remote software development teams or the whole IT hubs located in Poland.</p>
              <Link href={'/ContactForm'} className='bookBtn bg-dark text-white rounded'>Book a Consultation</Link>
            </div>
        </div>

        <div className='row'>
            <div className='col-md-3 image'>
              <img src='https://nxtide.com/wp-content/uploads/2021/11/1200px-Atom_Bank_Logo.svg-1024x414.png' className='img-fluid'/>
            </div>

            <div className='col-md-3 image'>
            <img src='https://nxtide.com/wp-content/uploads/2021/12/Frost.png' className='img-fluid'/> 
            </div>

            <div className='col-md-3 image'>
            <img src='https://nxtide.com/wp-content/uploads/2021/11/Webinterpret-logo-big.png' className='img-fluid'/>
            </div>

            <div className='col-md-3 image'>
            <img src='https://nxtide.com/wp-content/uploads/2022/03/withhealth.png' className='img-fluid'/>
            </div>
        </div>
      </div>
    </div>
  )
}
