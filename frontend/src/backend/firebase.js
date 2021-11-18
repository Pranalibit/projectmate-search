import firebase from 'firebase/compat/app';
import { getAuth ,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup  } from "firebase/auth";

import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyCjo3CfXZxSNSV_eqN7nd_XgiCX3dHD_1Q",
  authDomain: "simran-817a0.firebaseapp.com",
  projectId: "simran-817a0",
  storageBucket: "simran-817a0.appspot.com",
  messagingSenderId: "374629329621",
  appId: "1:374629329621:web:95d1cd3912d3b79e60105c"
};

const fire = firebase.initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(fire);
const registerWithEmailAndPassword = async (name,email, password) => {
  try {
    createUserWithEmailAndPassword(auth, name,email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    // ..
  });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const googleProvider = new GoogleAuthProvider();


const signInWithGoogle = async () => {
  try {
    signInWithPopup(auth,googleProvider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
     
      const user = result.user;
      console.log(user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;  
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      
    });

  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if(user)
    {
      alert("Hello"+user);
    }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
export {auth,db,signInWithEmailAndPassword,registerWithEmailAndPassword,signInWithGoogle};