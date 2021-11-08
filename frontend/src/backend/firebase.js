import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyCjo3CfXZxSNSV_eqN7nd_XgiCX3dHD_1Q",
  authDomain: "simran-817a0.firebaseapp.com",
  projectId: "simran-817a0",
  storageBucket: "simran-817a0.appspot.com",
  messagingSenderId: "374629329621",
  appId: "1:374629329621:web:95d1cd3912d3b79e60105c"
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = getFirestore(app);
export {app,auth,db} ;