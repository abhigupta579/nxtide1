import React ,{useState,useEffect} from 'react'
import './Auth.css';
import { getAuth ,signInWithEmailAndPassword, onAuthStateChanged,signOut} from "firebase/auth";
import { app } from '@/app/DB/Api-db';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '@/app/page1';

export default function SignIN() {
   
    const auth = getAuth(app);
    
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

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

    function signIn(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then((value)=>alert('User Login Successfully...'))
        .catch((err)=>alert('Invalid Details entered...Please Fill again.'));
    }


if(user===null){
  return (
    <div className='signIn'>
     <div className='container-fluid'>
      <div className='row justify-content-center'>
      <div className='col-md-5 mt-4 colAuth text-center align-self-center'>   
      <h1>Login : </h1>
      <label>E-mail : </label>
      <input type='email' required placeholder='enter E-mail...' onChange={(e)=>setEmail(e.target.value)} id='email'/><br/>

      <label>Password : </label>
      <input type='password' required placeholder='enter Password...' onChange={(e)=>setPassword(e.target.value)} id='pass'/><br/>
 
      <button className='loginBtn' onClick={signIn}>Login</button>
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