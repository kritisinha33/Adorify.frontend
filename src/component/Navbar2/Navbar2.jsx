import React, { useState } from 'react'
import './Navbar2.css'
import cart_icon from '../assets/cart_icon.png'
const Navbar2 = () => {

    const [menu,setMenu] = useState("shop");


  return (
    <div className='nav mt-10'>
    <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}> Shop{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}> Men{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}> Women{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}> Kids{menu==="kids"?<hr/>:<></>}</li>
      </ul>   
      <div className="nav-login-cart">
       <button>Login</button> 
       <img src={cart_icon} alt=''/>
        </div> 

        
    </div>
  )
}

export default Navbar2