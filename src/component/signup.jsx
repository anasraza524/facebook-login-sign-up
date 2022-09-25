
import './form.css'

function signup(){
return(
    <div class="box">
  <div class="title-box">
    <img src="https://i.postimg.cc/NMyj90t9/logo.png" alt="Facebook"/>
    <p>Facebook helps you connect and share with the people in your life.</p>
  </div>
  <div class="form-box">
    <form action="/">
      <input type="text" placeholder="Email address or phone number"/>
      <input type="password" placeholder="Password"/>
      <button type="submit">Log In</button>
      <Link to="/">Forgotten Password</Link>
    </form>
    <hr/>
    <div class="create-btn">
      <Link to="/" target="_blank">Create New Account</Link>
    </div>
  </div>
</div>

)}