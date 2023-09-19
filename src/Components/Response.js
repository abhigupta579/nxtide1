import React, {useState,useEffect} from 'react'
import './Response.css';
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from '@/app/DB/Api-db';

export default function Response() {

    const [getForm, setForm] = useState([]);

    async function getData(){
       var collectData = collection(db, 'nxTide1-form1');
       var getProduct = await getDocs(collectData);
       var getProductList = getProduct.docs.map((item)=>item.data()
       )
       console.log(getProductList);
       setForm(getProductList);
     }
   
     useEffect(() => {
       getData();
     }, []);
  

  return (
    <div className='section response'>
        
      <div className='container'>
      <h1>Responses Received so far from Developers...</h1>
        <div className='row'>
          {
            getForm.map((data1)=>( 
           <div className='col-md-4 colResponse mt-5' key={data1.id}>
              <h3>Name: {data1.name}</h3>
              <h3>E-Mail: {data1.eMail}</h3>
              <h3>Team-Size: {data1.teamSize}</h3>
           </div>
           ))} 
        </div>
      </div>
    </div>
  )
}
