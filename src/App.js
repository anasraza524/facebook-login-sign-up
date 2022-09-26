 import Login from './component/login'
// import Signup from './component/signup'
import From from './component/from'
import Nav from './component/navBar'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
function App() {
return(

  <>
  <Nav/>
<div className="box">
   <div className="title-box">
    <img src="https://i.postimg.cc/NMyj90t9/logo.png" alt="Facebook"/>
    <p>Facebook helps you connect and share with the people in your life.</p>
    </div>
    
{/* <Nav/>
<Login/> */}

<Router>
   
   
  
   <From/>
    {/* <Routes>
          <Route path="From" element={<From/>} />
         
          
        </Routes> */}
 
  
    </Router>
    
    </div>  </>)}

export default App;
