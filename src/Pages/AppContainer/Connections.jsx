// Import Firestore database
// import db from 'firebase';
import { useState ,useEffect} from 'react';
import db from '../../firebase';
import firebase from 'firebase/compat/app';
import './card.css';
import cur from "../../assets/Group 4.png";
import Image from 'react-image-resizer';
import * as React from 'react';




const Connections = () => {

	const [info , setInfo] = useState([]);

	// Start the fetch operation as soon as
	// the page loads
	let user = firebase.auth().currentUser;
	console.log(user.email);

	// Fetch the required data using the get() method
	const Fetchdata = ()=>{
		console.log('fetch data');
		db.collection("personal-info").get().then((querySnapshot) => {
			
			// Loop through the data and store
			// it in array to display
			querySnapshot.forEach(element => {
				var data = 
				element.data();
				setInfo(arr => [...arr , data]);
        console.log(data);
		
				
			});
		})
	}
	useEffect(() => {
    Fetchdata();
  }, ['/connections'])
	// Display the result on the page
  	
		return (
		<div>
			<div class="space"></div>
			<div class="space"></div>
			<div class="space"></div>
			<div class="grid md:grid-cols-3 gap-8 m-5 max-w-5xl m-auto">
		
			{
			info.map((data) => (
				
			<Frame 

			name={data.Name}
			bio = {data.Bio}
			github = {data.Github}
			linkedin = {data.LinkedIn}
			clg_company = {data.clg_company}
			interest = {data.field_of_interest}
			Email_id={data.Email_id}
				/>
			))
		}
			</div>
	
     

	
		</div>

	);
	
	
}

// Define how each display entry will be structured
const Frame = ({name ,bio, github, linkedin, clg_company, interest, Email_id}) => {
	// console.log(name + " " + username + " " + linkedin);
	let link = "https://avatars.githubusercontent.com/" ;
	let result = link.concat(github);
	let git = "https://github.com/";
	let user = firebase.auth().currentUser;
	console.log(user.email);

	// console.log(firebase.firestore().auth().currentUser);
	if(Email_id != user.email){
		return (
			<main class="px-3">
		  {/* <div class="text-4xl sm:text-5xl text-center my-10">What type of food do you like?</div> */}
		  {/* grid md:grid-cols-3 gap-8 m-5 max-w-5xl m-auto */}
	
		  <div class="m-3 w-104 card">   
			<div class="bg-white">
			  <img src={result} alt="" class="w-full h-48 sm:h-56 object-cover" />
			  <div class="px-10 py-6 mb-10 text-center">
				  
				<div class="text-1xl font-bold text-green-400 mb-4">Bio: {bio} </div>
				<div class="text-1xl font-bold text-blue-400 mb-4">Name: {name}</div>
				<div class="text-1xl font-bold text-red-400 mb-4"><a href={git.concat(github)}>Github</a></div>
				<div class="text-1xl font-bold text-purple-400 mb-4"><a href={linkedin}>LinkedIn</a></div>
				<div class="text-1xl font-bold text-green-400 mb-4">College/Company: {clg_company} </div>
				<div class="text-1xl font-bold text-black-200 mb-4">Technical Expertise: {interest} </div>
				<div class="text-1xl font-bold text-black-200 mb-4">{Email_id}</div>
			  </div>
			  <div class="w-full text-lg h-8 text-white font-extrabold bg-green-500"></div>
			  {/* <button class="w-full text-lg h-16 text-white font-extrabold bg-green-500"></button> */}
			</div>
	
		  
		  </div>
		</main>
	
			
		);	
	}
	else{
		return null;
	}
	
}

export default Connections;