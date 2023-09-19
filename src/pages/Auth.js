import React ,{useState,useEffect} from 'react';
import './Auth.css';
import { getAuth,onAuthStateChanged ,signOut} from 'firebase/auth';
import { app } from '@/app/DB/Api-db';
import SignUp from './SignUp';
import SignIN from './SignIN';
import Home from '@/app/page1';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Auth() {
 
    const auth = getAuth(app);
    const[user,setUser]=useState(null);

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
           if(user){
             setUser(user);
           }
           else{
              setUser(null);
           }
        })
      },[]);

      if(user===null){
        return (
            <div className="section auth">
              <div className='container-fluid'>
                <div className='row justify-content-center'>   
                  <div className='col-md-5 mt-4 colAuth align-self-center'> 
                   <SignUp/>
                   <Link href={'/SignIN'}>Already have an Account? Sign In</Link>
                  </div>
                  <div className='col-md-5 mt-4 colAuth'>
                    <img src='https://cdn4.sharechat.com/img_473531_26e48274_1673013471093_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=093_sc.jpg' className='img-fluid' style={{height:'500px'}}/>
                  </div> 
                  
            </div>
           </div> 
          </div>  
          )
       }
    
        return (
        
        <div className="section loginPage">
          <div className='container-fluid'>
            <div className='row'>
            <div className='col-md-12'>    
            <h2>Hello , <span style={{color:'red'}}>{user.email}</span></h2>
            <h3>You have now Access to our Full Website.</h3>
              <Home/>
            <h3>Thanks for Visiting our Site...</h3>
            <button onClick={()=>signOut(auth)} className="logoutBtn bg-primary text-white rounded-pill">Logout</button>
        </div>
       </div>
       </div>
       </div>     
      )
}
