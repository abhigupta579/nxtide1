import React from 'react'
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Count() {
    const Completionist = () => <span>You are good to go!</span>;
    
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <Completionist />;
        } else {
          // Render a countdown
          return <span>{hours} Hours : {minutes} Minutes : {seconds} seconds</span>;
        }
      }; 
  return (
    <div className='count1'>
        {/* <h1>Countdown...</h1> */}
        <Countdown
    date={Date.now() + 5000}
    renderer={renderer}
  />
    </div>
  )
}
