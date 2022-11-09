import Login from './component/login'
// import Signup from './component/signup'
import From from './component/from'
import Nav from './component/navBar'
import './App.css';
import Home from './component/Home';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState,useEffect } from 'react';
import {

  Routes,
  Route,
  Navigate,
 
} from "react-router-dom";
function App() {
  const [isLogin, setisLogin] = useState(false)
  useEffect(() => {
    const auth = getAuth();
  const Unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('user',user)
      setisLogin(true)
      // ...
    } else {
      // User is signed out
      // ...
      setisLogin(false)
    }
  });
  
   return()=>{
    console.log('cleanUp function')
    Unsubscribe()
   }
   
  }, [])
  

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