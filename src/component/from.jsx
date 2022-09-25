import './signup.css'

function from(){
return(

<body>
  <nav class="navbar">
    <img class="logo" src="fb.png"/>
    <form class="login_form">
      <div class="email">
        <div class="font">Email or Phone</div>
        <input type="text" name=""/>
      </div>
      <div class="password">
        <div class="font">Password</div>
        <input type="password" name=""/>
      </div>
      <button class="login_btn">Login</button>
    </form>
  </nav>

  <section>
    <div class="logo_body">
  <img class="logobdy" src="fbbdy.png"/>
  <p class="like_font font1">Thanks for stopping by!</p>
  <p class="like_font">We hope to see you again soon.</p>
</div>

  <div class="signup_body">
    <p class="acc_crt">Create an account</p>
    <p class="free_hint">It's free and always will be.</p>
    <form class="signup_form">
      <div>
        <input class="firstname" type="text" name="" placeholder="First name"/>
        <input class="lastname" type="text" name="" placeholder="Last name"/>
        <input class="email" type="text" name="" placeholder="Mobile number or Email"/>
        <input class="password" type="password" name="" placeholder="Password"/>
        <input class="password2" type="password" name="" placeholder="Confirm password"/>
      </div>
      <p class="birthday">Birthday</p>
      <div class="birth_date">
       <select class="month">
         <option>Month</option><option>Jan</option><option>Feb</option><option>Mar</option>
         <option>Apr</option><option>May</option><option>Jun</option><option>Jul</option>
         <option>Aug</option><option>Sep</option><option>Oct</option><option>Nov</option>
         <option>Dec</option>
       </select>

       <select class="day">
         <option>Day</option><option>1</option><option>2</option><option>3</option>
         <option>4</option><option>5</option><option>6</option><option>7</option>
         <option>8</option><option>9</option><option>10</option><option>11</option>
         <option>12</option><option>13</option><option>14</option><option>15</option>
         <option>16</option><option>17</option><option>18</option><option>19</option>
         <option>20</option><option>21</option><option>22</option><option>23</option>
         <option>24</option><option>25</option><option>26</option><option>27</option>
         <option>28</option><option>29</option><option>30</option>
       </select>

       <select class="year">
         <option>Year</option><option>1970</option><option>1972</option><option>1974</option>
         <option>1976</option><option>1978</option><option>1980</option><option>1982</option>
         <option>1984</option><option>1986</option><option>1988</option><option>1990</option>
         <option>1992</option><option>1995</option><option>1997</option><option>2000</option>
         <option>2002</option><option>2003</option><option>2004</option><option>2005</option>
         <option>2006</option><option>2007</option><option>2008</option>
       </select>
       <p class="brth_hint"><a href="#">Why do i need to provide my date of birth?</a></p>
      </div>

      <input type="radio" name="gender" value="male"/>
      <input type="radio" name="gender" value="female"/>

      <p class="font">Male</p>
      <p class="font font2">Female</p>
      <p class="agreement">By clicking Sign Up, you agree to our <a href="#">Terms, Data Policy and Cookies Policy.</a> You may receive SMS Notifications from us and can opt out any time.</p>

      <button class="signup">Sign Up</button>
      
    </form>
  </div>

  </section>

</body>
)


}