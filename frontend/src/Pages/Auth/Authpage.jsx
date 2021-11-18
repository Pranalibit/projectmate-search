import React, { useState ,useEffect} from "react";
import "./AuthPage.css";
import { useAuthState } from "react-firebase-hooks/auth";

import { FcGoogle } from "react-icons/fc";
import { SiGithub, SiLinkedin } from "react-icons/si";
import {auth,signInWithEmailAndPassword,registerWithEmailAndPassword,signInWithGoogle} from "../../backend/firebase";

const Authpage =()=> {
  const [SignUp, setSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [user, loading] = useAuthState(auth);
  // const history = useHistory();

  const SignInClicked = async() => {
    setSignUp(!SignUp);
  };

  const SignUpClicked = () => { 
    setSignUp(!SignUp);
  };

  

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) console.log("ahe");
  }, [user, loading]);

  let classnames = " ";
  if (SignUp) classnames = " right-panel-active ";

  return (
    <div className=" bgImage flex justify-center items-center h-screen">
      <div
        className={" hidden  md:block container " + classnames}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form >
            <h1>Create Account</h1>
            <div className="social-container">
              <a href=" " className="social">
                <SiGithub />
              </a>
              
              <span className="social" onClick={signInWithGoogle}> 
              <FcGoogle />
              </span>
               
            
              <a href=" " className="social">
                <SiLinkedin />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            />
            <input 
            type="text" 
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
            <button onClick={register}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form >
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
            <button onClick={() => signInWithEmailAndPassword(email, password)} >Sign In</button>
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

export default Authpage;