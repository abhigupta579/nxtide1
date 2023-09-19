
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import  '@/components/Weekly.css';
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '@/app/DB/Api-db';



export default function Form() {

  var data1={
      name: '',
      eMail: '',   
      teamSize: '',
    
  }

   const[formData,setFormData]=useState(data1);

   async function sendData(){  // sendData fxn is created to send Data to firebase...
    const timestamp = Date.now().toString();//timestamp is Inbuilt fxn used to Update Id
    formData.id = timestamp;                //formData.id is created to give Random ID's...
    const docRef = doc(collection(db, 'nxTide1-form1'), timestamp);
    await setDoc(docRef, formData);
    
  }

   function changeData(e){
    setFormData({...formData,[e.target.name]:e.target.value});
   }
   function submitData(e){
    e.preventDefault();
    console.log(formData);
    sendData();
    alert('Data Added successfully...Thanks')

   }

    return (
    <div className='formAdd'>
       
      <form onSubmit={submitData}>
        <label>Name: {formData.name} </label><br/>
        <input type='text' name='name' id='name' onChange={changeData}/><br/>
        
        <label>Business E-Mail: {formData.eMail} </label><br/>
        <input type='text' name='eMail' id='eMail' onChange={changeData}/><br/>
        
        <label>Team Size you are looking for: {formData.teamSize} </label><br/>
        <input type='number' name='teamSize' id='teamSize' onChange={changeData}/><br/>

        <br/>
        <button type='submit' className='bg-danger border-rounded-pill'>Submit Form</button>
      </form>
    </div>
 
  )
}
