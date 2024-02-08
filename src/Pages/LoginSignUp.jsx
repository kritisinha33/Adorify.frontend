import React, { useState } from 'react'
import './LoginSignUp.css'


function LoginSignUp() {
  const [action,setAction] = useState("SignUp")
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
       {action==="Login"?<div></div>:<div className="input">
          <input type="text"  placeholder='Username'/>
        </div>}
        {action==="Login"?<div></div>:<div className="input">
          <input type="number"  placeholder='Phone Number'/>
        </div>}
       
        <div className="input">
          <input type="email" placeholder='Email' />
        </div>
        <div className="input">
         <input type="password" placeholder='Password' />
        </div>
       
        
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click here</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>SignUp</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    
    </div>
  )
}

export default LoginSignUp