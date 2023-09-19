import React, { useState } from 'react'

let student = {
    name: '',
    rollNo: ''
};

export default function Demo1() {
    const [studentData,setStudentData] = useState(student);
    const [getData,setData] = useState([]);

    const addStudent = ()=>{
      setData(studentData);
    }
    
    const changeData = (e)=>{
      setStudentData({...studentData,[e.target.name]:e.target.value});
   
    };


    const submitData=(e)=>{
      e.preventDefault();
      alert('Student Added...');
      console.log(studentData);
      // document.write(`Data received: Name = ${studentData.name} <br> Roll No: ${studentData.rollNo}`)
    }
  
    return (
    <div className='demo2' style={{backgroundColor: 'lightpink'}}>
        <h1>Demo1...</h1>
          <form onSubmit={submitData}>
            <label>Name: {studentData.name}</label>
            <input type='text' name='name' id='name' onChange={changeData}/><br/>

            <label>Roll No: {studentData.rollNo}</label>
            <input type='number' name='rollNo' id='rollNo' onChange={changeData}/><br/>

            <button onClick={addStudent}>Add Data</button>

            <h1>Data Recieved: </h1>
    
          </form>
         
      
    </div>
  )
}
