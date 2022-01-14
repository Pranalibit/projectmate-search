import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import db from '../../firebase';
import { useState} from 'react';
const ProfileCard = () => {
  const [name, setname] = useState("");
  const[bio,setbio] = useState("");
  const [git, setgit] = useState("");
  const [clg, setclg] = useState("");
  let user = firebase.auth().currentUser;
  db.collection("personal-info").where('Email_id', '==', user.email).get().then((querySnapshot) => {

    querySnapshot.forEach(element => {
      var data = element.data();
     
      setname(data.Name);
      setbio(data.Bio); 
      setgit(data.Github);
      setclg(data.clg_company);
      // setproject(data.Project_title);
      // setproj_info(data.Proj_Description)
      
    });
  })
  return (
    <div className="flex flex-col justify-center items-center hover:bg-gray-700 bg-gray-900 pb-10 rounded-lg ">
      <div className="bg-blue-700 w-full h-28 rounded-t-lg "></div>
      <img
        src={"https://avatars.githubusercontent.com/"+git} 
        alt="Profile"
        className="flex w-20 h-25 rounded-full -mt-11 mb-6"
      />
      <p className="text-xl font-semibold mb-2">{name}</p>
      <p className="text-center">{clg}</p>
 
      <p className="text-center text-sm pt-3 px-3 font-Sora">
      {bio} </p>
      <Link to='/profile'>
      <button
        type="button"
        className="font-Sora text-sm border-2 bg-gradient-to-tr from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 hover:border-2 mt-5 px-3.5 py-1.5 rounded-full"
      >
        View Profile
      </button>
      </Link>
    </div>
  );
};

export default ProfileCard;