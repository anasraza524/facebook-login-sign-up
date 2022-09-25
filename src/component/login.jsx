 import { useFormik } from 'formik';
 import * as yup from 'yup';
 import {Link} from "react-router-dom";
import './login.css'

 function login (){

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
       validationSchema: yup.object({
        email: yup
          .string('Enter your email')
          .email('Enter a valid email')
          .required('Email is required'),
        password: yup
          .string('Enter your password')
          .min(8, 'Password should be of minimum 8 characters length')
          .required('Password is required'),
      
      }),
        onSubmit: (values) => {
          console.log("values" ,values);
        },
      });
      return (
        <div class="box">
  <div class="title-box">
    <img src="https://i.postimg.cc/NMyj90t9/logo.png" alt="Facebook"/>
    <p>Facebook helps you connect and share with the people in your life.</p>
  </div>
  <div class="form-box">
          
          <form onSubmit={formik.handleSubmit}>
            <input
             
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              
              
            />
            <br/>
            {(formik.touched.email && Boolean(formik.errors.email))?
            <span style={{color:"red"}}>{formik.errors.email}</span>
          :null }
            
            <br/>
            <input
              
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
             
             
            />
            <br/>
            {(formik.touched.password && Boolean(formik.errors.password))?
            <span style={{color:"red"}}>{formik.errors.password} </span>
            : null
            }
            <br/>
            <button color="primary" variant="contained" fullWidth type="submit">
            Log In
            </button>
            <Link to="/">Forgotten Password</Link>
          </form>
        </div>
        

        <hr/>
    <div class="create-btn">
      <Link to="/" target="_blank">Create New Account</Link>
    </div>
  </div>








    // <form action="/">
    //   <input type="text" placeholder="Email address or phone number"/>
    //   <input type="password" placeholder="Password"/>
    //   <button type="submit">Log In</button>
    //   <Link to="/">Forgotten Password</Link>
    // </form>
    
        

      );
 }

   export default login ;
