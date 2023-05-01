import './Login.css';
import React,{useState} from 'react'
// import {GoogleLogin,GoogleLogout} from 'react-google-login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    

    // </GoogleOAuthProvider>;

    // const clientId="1061457779156-ji41itt43ki638rjeh6v9slkorm4idop.apps.googleusercontent.com";
    const navigate=useNavigate();

    const [showLoginButton,setShowLoginButton]= useState(true);
    const [showLogoutButton,setShowLogoutButton]=useState(false);

    const OnLoginSuccess=(credentialResponse) => {
        console.log("Login successfull",credentialResponse);
      
        setShowLoginButton(false);
        setShowLogoutButton(true);
        navigate('/homepage');
    }

    

    const OnLogoutSuccess=()=>{
        alert("You have been signed out successfully");
        setShowLoginButton(true);
        setShowLogoutButton(false);

    }

  return (
    <>
     <div className='head'>
      <h1>Login Here</h1>

    </div>
<div className='g-signIn'>
    <GoogleOAuthProvider clientId="1061457779156-4iu80nbgrbbf7jkg7tjibt1jc0mi2t4c.apps.googleusercontent.com">
    {showLoginButton ?
       <GoogleLogin
       onSuccess={OnLoginSuccess}
       onError={() => {
         console.log('Login Failed');
       }}
     />  :null
    }
    {showLogoutButton ? 
        googleLogout()

        :null
    } 
    </GoogleOAuthProvider>     
</div>
<div className='backimg'>

</div>
    </>
   
  )
}

export default Login
