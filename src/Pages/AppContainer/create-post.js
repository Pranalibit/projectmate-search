import db from '../../firebase';
import {useState} from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'

const Create_Post = () => {
	const [userName, SetuserName] = useState("");
	const [datePosted , SetdatePosted] = useState("");
	const [img , Setimg] = useState("");
    const [roles , Setroles] = useState("");
    const [desc , Setdesc] = useState("");
	const sub = (e) => {
		e.preventDefault();
		
		// Add data to the store
		db.collection("Post").add({
			userName: userName,
			datePosted: datePosted,
			img: img,
            roles: roles,
            desc: desc

		})
		
		.then((docRef) => {
			alert("Data Successfully Submitted");
		})
		.catch((error) => {
			console.error("Error adding document: ", error);
		});
	}

	return (
		<div className='container box1'>
			<center>
				<form style={{marginTop:"200px" ,marginRight:"200pax",background:"white"}}
				onSubmit={(event) => {sub(event)}}>
					<input type="text"  className='box' placeholder="UserName"
					onChange={(e)=>{SetuserName(e.target.value)}} required />
					<br/><br/>
					<input type="text"  className='box' placeholder="Date"
					onChange={(e)=>{SetdatePosted(e.target.value)}} required/>
					<br/><br/>
					<input type="textarea"  className='box' placeholder="Project Description"
					onChange={(e)=>{Setdesc(e.target.value)}} required/>
					<br/><br/>
                    <input type="text" className='box' placeholder="Role You are Looking For!"
					onChange={(e)=>{Setroles(e.target.value)}} required/>
					<br/><br/>
                    <input type="text"  className='box' placeholder="Github"
					onChange={(e)=>{Setimg(e.target.value)}} required/>
					<br/><br/>
					
					<button className='btn'type="submit">Post</button>
				</form>
			</center>
		</div>
	);
}

export default Create_Post;