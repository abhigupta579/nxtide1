import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState } from 'react'

import  './Software.css';

import React from 'react'

export default function Software() {
  return (
    <div className='section soft'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-4 softText mt-3 text-center'>
                <h1>Software Team <span className='grey'>Extension</span></h1>
                <h4>Developers: 1-5</h4>
                <h5>Delivery time: 0-2 months</h5>
                <p>  A partially managed team that works within your processes. Best for providing additional capacity or competencies to the existing teams.</p>
            </div>

            <div className='col-md-4 softText  mt-3 text-center'>
            <h1>Dedicated Software<span className='grey'>Team</span></h1>
                <h4>Developers: 5-20</h4>
                <h5>Delivery time: 1-12 months</h5>
                <p>  A partially managed team that works within your processes. Best for providing additional capacity or competencies to the existing teams.</p>
            </div>

            <div className='col-md-4 softText  mt-3 text-center'>
            <h1>IT Development <span className='grey'>Hub</span></h1>
                <h4>Developers: 20+</h4>
                <h5>Delivery time: 1-2 years</h5>
                <p>  A partially managed team that works within your processes. Best for providing additional capacity or competencies to the existing teams.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

