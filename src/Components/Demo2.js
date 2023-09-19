import React from 'react'
import { useState } from 'react'
import './Demo2.css';

export default function Demo2() {
  
  const[show,setShow]=useState(false);
  const[color,setColor]=useState(false);
  const[count,setCount]=useState(0);
  const[colorClk,setColorClk]=useState('');

  const countInc=()=>{
    setCount(count+1);
  }
  const countDec=()=>{
    setCount(count-1);
  }

  const colorChange=()=>{
    setColor(!color);
  }
  const colorRed=()=>{
    setColorClk('red');
  }  
  const colorBlue=()=>{
    setColorClk('blue');
  }  

    return (
   <div className='colorCondition'>
   {  color?
       <div style={{backgroundColor: 'pink',border:'1px solid blue',width:'300px',margin:'30px 100px' }}>
       <h2 style={{color:'white'}}>Demo2</h2>
       <p>Welcome to React clasees.</p>
     </div> :
          <div style={{backgroundColor: 'lightskyblue',border:'1px solid blue',width:'300px',margin:'30px 100px'}}>
          <h2 style={{color:'red'}}>Demo2</h2>
          <p>Welcome to React clasees.</p>
        </div>
   }
   <button onClick={colorChange} style={{margin:'0px 100px'}}>ColorClick</button><br/><br/>



   <div className={colorClk}>
    <h2>Color Change...</h2>
    <p>Please Click on Buttons to see Effects of color.</p>
    <button onClick={colorRed}>ClkRed</button>
    <button onClick={colorBlue}>ClkBlue</button>
    <button onClick={()=>setColorClk('green')}>ClkGreen</button>
   </div>



   <div style={{backgroundColor:'lightcyan',width:'300px',margin:'30px 100px'}}>
    <h1>Counter...</h1>
    <h2>{count}</h2>
    <button onClick={countInc} style={{backgroundColor:'lightseagreen' ,margin:'20px 30px'}}>Count++</button>
    <button onClick={countDec} style={{backgroundColor:'red'}}>Count--</button>
   </div>
   
   </div> 
  )
}
