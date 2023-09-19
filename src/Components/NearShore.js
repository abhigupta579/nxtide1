import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState } from 'react'

import  './Nearshore.css';

import React from 'react'
import Link from 'next/link';

export default function NearShore() {
  return (
    <div className='section near'>
     <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-6 colNearText'>
              <h2>Nearshore & Offshore Software Development Centers for companies in Western Europe & USA</h2>
              <p>Whenever you are looking for a full-product development partner, a group of engineers, or a trusted party who will help you establish your own IT department in Poland - we got you covered.</p>
              <Link href={'/ContactForm'} className='bg-danger rounded text-white'>Schedule a Call</Link>
            </div>

            <div className='col-md-6 colNear'>
            <iframe width="500" height="315" src="https://www.youtube.com/embed/fVgq6j-krzU?si=B5YSuICZc4iE4JtN" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video1'></iframe>
            </div>
        </div>
     </div>
    </div>
  )
}
