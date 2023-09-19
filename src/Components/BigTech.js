import React from 'react'
import './BigTech.css';
import Link from 'next/link';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLocationDot,
    faStar,
    faHeart,
    faUser,
    faBoxOpen,
    faCalendarDays,
    faPeopleGroup,
    faGraduationCap
} from "@fortawesome/free-solid-svg-icons";


export default function BigTech() {
  return (
    <div className='section bigTech bg-light'>
      <div className='container bg-light bigTech'>
        <div className='row'>
            <div className='col-md-12 colBigTech'>
              <h1>Learn why Big Tech have development centers in Poland</h1>
              <p>Software Developers from Poland are ranked in the Top 5 positions in global IT skills ranks. This is why corporations like Google, Amazon, and Revolut are opening their IT hubs in the cities like Kraków, Warsaw, Poznań, Gdańsk, Katowice, Łódź.</p>
              <Link href={'/ContactForm'} className='bookCall bg-danger rounded text-white'>Book A Counsultation Call</Link>
            </div>

            <div className='col-md-12 bigTechCol2'>
               <div className='row justify-content-evenly'> 
                <div className='col-md-3 bigColBox rounded'>
                  <FontAwesomeIcon icon={faGraduationCap} className='iconBig'/>
                  <h2>Technical Education & Skills</h2>
                  <p>Poland is a worldwide leader in the quality of IT graduates and software engineering scores.</p>
                </div>

                <div className='col-md-3 bigColBox rounded'>
                  <FontAwesomeIcon icon={faPeopleGroup} className='iconBig'/>
                  <h2>Over 800k IT Professionals</h2>
                  <p>Software Developers, IT Project Managers, UX/UI Designers, IT Infrastructure Engineers</p>
                </div>

                <div className='col-md-3 bigColBox rounded'>
                  <FontAwesomeIcon icon={faStar} className='iconBig'/>
                  <h2>US/ EU Work Standards</h2>
                  <p>English language proficiency and familiarity with top methodologies (Prince, Scrum, ITIL)</p>
                </div>
               </div> 
            </div>
        </div>
      </div>
    </div>
  )
}
