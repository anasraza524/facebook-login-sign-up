import './signup.css'

function from(){
return(

<body>
 {/* <nav className="navbar">
    <img className="logo" src="fb.png"/>
     <form className="login_form">
      <div className="email">
        <div className="font">Email or Phone</div>
        <input type="text" name=""/>
      </div>
      <div className="password">
        <div className="font">Password</div>
        <input type="password" name=""/>
      </div>
      <button className="login_btn">Login</button>
    </form> 
  </nav>*/}

 
    {/* <div className="logo_body">
  <img className="logobdy" src="fbbdy.png"/>
  <p className="like_font font1">Thanks for stopping by!</p>
  <p className="like_font">We hope to see you again soon.</p>
</div> */}

  <div className="signup_body">
    <p className="acc_crt">Create an account</p>
    <p className="free_hint">It's free and always will be.</p>
    <form className="signup_form">
      <div>
        
        <input className="firstname" type="text" name="" placeholder="First name"/>
        
        <input className="lastname" type="text" name="" placeholder="Last name"/>
        
        <input className="email" type="text" name="" placeholder="Mobile number or Email"/>
        
        <input className="password" type="password" name="" placeholder="Password"/>
        
        <input className="password2" type="password" name="" placeholder="Confirm password"/>
      </div>
      <p className="birthday">Birthday</p>
      
      <input className='dateOfbirth' type="date" /> 
    
    <div className="birth_date"> 
        
      {/* <select className="month">
         <option>Month</option><option>Jan</option><option>Feb</option><option>Mar</option>
         <option>Apr</option><option>May</option><option>Jun</option><option>Jul</option>
         <option>Aug</option><option>Sep</option><option>Oct</option><option>Nov</option>
         <option>Dec</option>
       </select>

        <select className="day">
         <option>Day</option><option>1</option><option>2</option><option>3</option>
         <option>4</option><option>5</option><option>6</option><option>7</option>
         <option>8</option><option>9</option><option>10</option><option>11</option>
         <option>12</option><option>13</option><option>14</option><option>15</option>
         <option>16</option><option>17</option><option>18</option><option>19</option>
         <option>20</option><option>21</option><option>22</option><option>23</option>
         <option>24</option><option>25</option><option>26</option><option>27</option>
         <option>28</option><option>29</option><option>30</option>
       </select>

       {/* <select className="year">
         <option>Year</option><option>1970</option><option>1972</option><option>1974</option>
         <option>1976</option><option>1978</option><option>1980</option><option>1982</option>
         <option>1984</option><option>1986</option><option>1988</option><option>1990</option>
         <option>1992</option><option>1995</option><option>1997</option><option>2000</option>
         <option>2002</option><option>2003</option><option>2004</option><option>2005</option>
         <option>2006</option><option>2007</option><option>2008</option>
       </select> */}
       
       {/* <p className="brth_hint"><a href="#">Why do i need to provide my date of birth?</a></p> */}
       
     </div> 
<label htmlFor="gender">Male</label>
      
      <input type="radio" name="gender" value="male"/>
      
      <label htmlFor="gender">Female</label>
      
      <input type="radio" name="gender" value="female"/>

    
      <p className="agreement">By clicking Sign Up, you agree to our <a href="#">Terms, Data Policy and Cookies Policy.</a> You may receive SMS Notifications from us and can opt out any time.</p>

      <button className="signup">Sign Up</button>
      
    </form>
  </div>



</body>
)


}
export default from;