import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactForm.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLocationDot,
    faStar,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Header from '../Components/Header';
import Form from './Form';
import Partner from '../Components/Partner';


export default function ContactForm() {
  return (
    <div className='section contact'>
      <Header/>
      <div className='container-fluid'>
        <div className='row headContact'>
            <div className='col-md-10'>
                <h1>Request a free consultation</h1>
                <h3>We will contact you within a couple of hours to discuss the details of your project.</h3>
            </div>
        </div>

        <div className='row form1'>
            <div className='col-md-6 icon text-center'>
                <h1>4.8/5</h1>
               <div className='icons'>
                <h2><FontAwesomeIcon icon={faStar} className='star'/></h2>
                <h2><FontAwesomeIcon icon={faStar} className='star'/></h2>
                <h2><FontAwesomeIcon icon={faStar} className='star'/></h2>
                <h2><FontAwesomeIcon icon={faStar} className='star'/></h2>
                <h2><FontAwesomeIcon icon={faStar} className='star'/></h2>
               </div> 
                <h3>Based on 44 reviews on Clutch & Google Maps</h3>
            </div>

            <div className='col-md-6 formSubmit'>
                <h1>Send us a direct message</h1>
                <Form/>
            </div>
        </div>
      </div>
      <Partner/>

      <div className='container-fluid'>
        <div className='row address justify-content-center'>
          <div className='col-md-4 colAddress'>
            <h2>477 Madison Ave
                10022 New York, USA</h2>
             <h3>+1 646 480 0483</h3>
             <h4>contact@nxtide.com</h4>
             <img src='https://nxtide.com/wp-content/uploads/2022/12/nxtide-nyc.jpg' className='img-fluid'/>   
          </div>

          <div className='col-md-7 colMap'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96709.04364720185!2d-73.974624!3d40.758558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590713244d8b%3A0x2cd290a09504f937!2s477%20Madison%20Ave%2C%20New%20York%2C%20NY%2010022!5e0!3m2!1sen!2sus!4v1692155207497!5m2!1sen!2sus" width="700" height="450"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
