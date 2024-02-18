import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Contact from './Pages/Contact';
import Login from './component/Login/Login';
import Singup from './component/Signup/Signup';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import men_banner from './component/assets/banner_mens.png'
import women_banner from './component/assets/banner_women.png'
import kid_banner from './component/assets/banner_kids.png'
import Product from './Pages/Product';
import LoginSignup2 from './Pages/LoginSignup2';

// import { analytics } from './Helper/index';
// import { logEvent } from 'firebase/analytics';

function App() {
 
// if (analytics){
//   logEvent(analytics,'Init...')
// }
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/sign-up' element={<Singup/>}/>
         <Route path='/shop' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
       <Route path=':productId' element={<Product/>}/>
       <Route path='loginsignup2' element={<LoginSignup2/>}/>

         
      </Routes>
      <Footer/>


      
      
    </div>
  )
}

export default App

