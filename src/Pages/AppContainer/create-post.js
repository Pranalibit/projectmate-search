import db from '../../firebase';
import {useState} from 'react';

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
		<div>
			<center>
				<form style={{marginTop:"200px" }}
				onSubmit={(event) => {sub(event)}}>
					<input type="text" placeholder="your userName"
					onChange={(e)=>{SetuserName(e.target.value)}} />
					<br/><br/>
					<input type="text" placeholder="date"
					onChange={(e)=>{SetdatePosted(e.target.value)}}/>
					<br/><br/>
					<input type="text" placeholder="desc"
					onChange={(e)=>{Setdesc(e.target.value)}}/>
					<br/><br/>
                    <input type="text" placeholder="roles"
					onChange={(e)=>{Setroles(e.target.value)}}/>
					<br/><br/>
                    <input type="text" placeholder="img"
					onChange={(e)=>{Setimg(e.target.value)}}/>
					<br/><br/>
					<button type="submit">Submit</button>
				</form>
			</center>
		</div>
	);
}

export default Create_Post;
