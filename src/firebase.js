import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjo3CfXZxSNSV_eqN7nd_XgiCX3dHD_1Q",
  authDomain: "simran-817a0.firebaseapp.com",
  databaseURL: "https://simran-817a0-default-rtdb.firebaseio.com",
  projectId: "simran-817a0",
  storageBucket: "simran-817a0.appspot.com",
  messagingSenderId: "374629329621",
  appId: "1:374629329621:web:95d1cd3912d3b79e60105c"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
};