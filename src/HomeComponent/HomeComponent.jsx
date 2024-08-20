import React, { useState } from 'react'
import './HomeComponent.css'
import LoginComponent from '../LoginComponent/LoginComponent';
import SignupComponent from '../SignupComponent/SignupComponent';
const HomeComponent = () => {


  const[loginsignupState , setLoginsignupState] = useState(null);
  const[loginState , setLoginState] = useState(null);
  const[signupState,setSignupState] = useState(null);

  const loginHandle = ()=>{
    setLoginsignupState(<LoginComponent/>)
  }

  const signupHandle=()=>{
    setLoginsignupState(<SignupComponent/>)
  }
    
  return (
    <div>
        <div className='body'>
        
        <div className='navbar'>
            <button className='login-btn' onClick={loginHandle}>Login !</button>
            <button className='signup-btn' onClick={signupHandle}>Sign Up!</button>
            {loginsignupState}

{/* 
            {signupState}
            {loginState} */}
            
        </div>  
    </div>
    </div>

  
  )
}

export default HomeComponent