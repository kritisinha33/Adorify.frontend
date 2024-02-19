import React, { useContext, useState } from 'react'
import './Navbar2.css'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
const Navbar2 = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='nav mt-10'>
    <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{ textDecoration: 'none' }}> Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{ textDecoration: 'none' }}> Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{ textDecoration: 'none' }}> Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{ textDecoration: 'none' }}> Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>   
      <div className="nav-login-cart">
       <button>Login</button> 
       <Link to="/cart"> <img src={cart_icon} alt=''/></Link>
       <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div> 

        
    </div>
  )
}

export default Navbar2