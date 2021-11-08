import React, { useState } from "react";
import "./AuthPage.css";
import {app} from "../../backend/firebase";
import { FcGoogle } from "react-icons/fc";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Authpage() {
  const [SignUp, setSignUp] = useState(false);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [emailError,setEmailError]=useState('');
  const [passwordError,setPasswordError]=useState('');
  const [hasAccount,setHasAccount]=useState('');

  const SignInClicked = async() => {
    setSignUp(!SignUp);
  };

  const SignUpClicked = () => { 
    setSignUp(!SignUp);
  };

  const handleLogin = ()=> {
    app
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch((err) =>{
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;      
      }
    });

  };

  const handleSignup = ()=> {
    app
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch((err) =>{
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;      
      }
    });

  };

  const handleLogout =() =>{}


  let classnames = " ";
  if (SignUp) classnames = " right-panel-active ";

  return (
    <div className=" bgImage flex justify-center items-center h-screen">
      <div
        className={" hidden  md:block container " + classnames}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action=" ">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href=" " className="social">
                <SiGithub />
              </a>
              <a href=" " className="social">
                <FcGoogle />
              </a>
              <a href=" " className="social">
                <SiLinkedin />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action=" ">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href=" " className="social">
                <SiGithub />
              </a>
              <a href=" " className="social">
                <FcGoogle />
              </a>
              <a href=" " className="social">
                <SiLinkedin />
              </a>
            </div>
            <span>or use your account</span>
            <input 
            type="email" 
            placeholder="Email"  
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
            />
            <input 
            type="password" 
            placeholder="Password"  
            value={password} 
            onChange={(e) =>setPassword(e.target.value)}
            />
            <a href=" ">Forgot your password?</a>
            <button >Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => SignInClicked()}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => SignUpClicked()}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
