import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import Login from './component/Login/Login';
import Singup from './component/Signup/Signup';


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
        <Route path='/register' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/sign-up' element={<Singup/>}/>

         
      </Routes>
      <Footer/>


      
      
    </div>
  )
}

export default App
