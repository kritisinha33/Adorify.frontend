import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Contact from './Pages/Contact';
import Singup from './component/Signup/Signup';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import men_banner from './component/assets/banner_mens.png'
import women_banner from './component/assets/banner_women.png'
import kid_banner from './component/assets/banner_kids.png'
import Product from './Pages/Product';
import LoginSignup2 from './Pages/LoginSignup2';
import Navbar2 from './component/Navbar2/Navbar2';
import Cart from './Pages/Cart';
import  About  from './Pages/About';






// import { analytics } from './Helper/index';
// import { logEvent } from 'firebase/analytics';

function App() {
 
// if (analytics){
//   logEvent(analytics,'Init...')
// }
  return (
    <div>
      
      <Navbar/>
      <Navbar2/>
      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path='/sign-up' element={<Singup/>}/>
         <Route path='/shop' element={<Shop/>}/>
         <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
       
       <Route path='loginsignup2' element={<LoginSignup2/>}/>
        
         
        <Route path='/product' element={<Product/>}/>
       <Route path='/product/:productId' element={<Product/>}/>
       <Route path='/cart' element={<Cart/>}/>

       
         
      </Routes>
      <Footer/>


      
      
    </div>
  )
}

export default App

