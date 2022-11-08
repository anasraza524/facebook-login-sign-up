import Login from './component/login'
// import Signup from './component/signup'
import From from './component/from'
import Nav from './component/navBar'
import './App.css';
import Home from './component/Home';
import { useState } from 'react';
import {

  Routes,
  Route,
  Navigate,
 
} from "react-router-dom";
function App() {
  const [isLogin, setisLogin] = useState(false)
return(

  <>
  <Nav/>
{/* <div className="box">
   <div className="title-box">
    <img src="https://i.postimg.cc/NMyj90t9/logo.png" alt="Facebook"/>
    <p>Facebook helps you connect and share with the people in your life.</p>
    </div> */}
    
{/* <Nav/>
<Login/> */}

   
   {(isLogin)?
  <Home/>
  :
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="From" element={<From/>} />
    <Route path="*" element={<Navigate to="/" replace={true} />} />    
          </Routes> 
 
}

    
      </>)}

export default App;