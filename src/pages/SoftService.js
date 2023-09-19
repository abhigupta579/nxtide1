import React from 'react'
import './SoftService.css';
import Header from '@/Components/Header';
import Link from 'next/link';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    faLocationDot,
    faLaptop,
    faBoxOpen,
    faBuilding,
    faMobileScreen,
    faGlobe,
   faCloudArrowDown
} from "@fortawesome/free-solid-svg-icons";

export default function SoftService() {
  return (
    <div className='service'>
       <Header/>
       <div className='container-fluid'>
        <div className='row justify-content-evenly'>
            <div className='col-md-5 mt-4 colHireContent'>
               <h1>Hire the right team for your next project.</h1>
               <p>It&apos;s our job to make sure you will choose the right team based on your internal structure, long-term goals, and current needs. We offer flexible engagement models across the most demanding technologies in the three biggest domains.</p>
               <Link href={'/ContactForm'} className='contact bg-danger'>Contact Us</Link>
            </div>

            <div className='col-md-5 mt-4 colHireImg'>
                <img src='https://nxtide.com/wp-content/uploads/2021/12/9Y4A1809-1-1024x683.jpg' className='img-fluid rounded'/>
            </div>
        </div>

        <div className='row engageRow justify-content-evenly' style={{padding:'0px 40px'}}>
            <div className='col-md-5 mt-4 engage align-self-center'>
                <h3>We Offer</h3>
                <h1>Different Engagement Models For Clients With Different Needs</h1>
                <p>01 World-class, Agile teams for early-stage startups</p>
                <p>02 Flexible team extension squads for scaleups</p>
                <p>03 Entire IT Hubs for aspiring corporates</p>
                <Link href={'/ContactForm'} className='talkBtn'>Let&apos;s Talk</Link>
            </div>

            <div className='col-md-3 mt-4 dedicatedCard'>
             <FontAwesomeIcon icon={faLaptop} className='lapIcon'/>
             <h2>Dedicated Team</h2>
             <p>World-class, Agile teams for early-stage startups
                Flexible team extension squads for scaleups
                Entire IT Hubs for aspiring corporates</p>
            </div>

            <div className='col-md-3 mt-col'>
              <div className='row'>
                <div className='col-md-12  mt-4 multiCard bg-dark text-white'>
                   <FontAwesomeIcon icon={faBoxOpen} className='boxIcon'/>
                  <h2>Team Extension</h2>
                  <p>Partially managed team that works within your processes on goals set by you. Best for providing additional capacity or competencies to the existing units.</p>
                </div>
                <div className='col-md-12 mt-4 multiCard bg-dark text-white'>
                   <FontAwesomeIcon icon={faBuilding} className='buildIcon'/>
                   <h2>Own IT Hub</h2>
                   <p>Your Own IT Center will be build with our help within the borders of Poland. The best solution for scale-ups and corporates looking for long-term engagement and cost optimization.</p>
                </div>
              </div>
             </div>
            </div>
              <div className='row across justify-content-evenly'>
                   <div className='col-md-7 colAcross1'>
                    <h1>Across Three Biggest Areas Of Expertise</h1>
                   </div>
                   <div className='col-md-2 colAcross1'>
                    <Link href={'/ContactForm'} className='callBtn'>Schedule A Call</Link>
                </div>
              </div>

              <div className='row across2 justify-content-center'>
                <div className='col-md-3 mt-4 colAcross2'>
                  <FontAwesomeIcon icon={faMobileScreen} className='acrossIcons'/>
                  <h2>Mobile applications</h2>
                  <p>Build using modern, native technologies for both iOS and Android</p>
                </div>

                <div className='col-md-3 mt-4 colAcross2'>
                  <FontAwesomeIcon icon={faGlobe} className='acrossIcons'/>
                  <h2>Web applications</h2>
                  <p>Stunning, well designed applications that are built to delight.</p>
                </div>

                <div className='col-md-3 mt-4 colAcross2'>
                  <FontAwesomeIcon icon={faCloudArrowDown} className='acrossIcons' />
                  <h2>Cloud applications</h2>
                  <p>Build using modern, native technologies for both iOS and Android</p>
                </div>
              </div>

              <div className='row across3'>
              </div>
            
        </div>
       </div>
    
  )
}
