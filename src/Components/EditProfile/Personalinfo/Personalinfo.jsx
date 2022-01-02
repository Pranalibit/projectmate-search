import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'react-nice-dates/build/style.css'
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import db from '../../../firebase';
const Personalinfo = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [num, setnum] = useState();
  const [bio, setbio] = useState("");
  const [linkedIn, setlinkedIn] = useState("");
  const [github, setgithub] = useState("");
  const [project, setproject] = useState("");
  const [proj_info, setproj_info] = useState("");
  const [field, setfield] = useState("");
  const [clg, setclg] = useState("");

  const sub = (e) => {
    e.preventDefault();
    //add data
    db.collection("personal-info").add({
      Name: name,
      Email_id: email,
      mobile_num:num,
      Bio: bio,
      LinkedIn: linkedIn,
      Github: github,
      Project_title: project,
      Proj_Description: proj_info,
      field_of_interest: field,
      clg_company: clg
     
      

    })
      .then((docref) => {
        alert("Data Successfully Submitted");
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }
  return (
    <div className="container">
      <h1 className="border-b-2 text-black font font-semibold text-lg">
        Personal Information
      </h1>
      <div className="flex flex-row">
        <div> <br />
          <form onSubmit={(event) => { sub(event) }}>

            <label className="font-semibold w-max mt-3 py-0.5 rounded mb-3 bg-gray-300"
              htmlFor="Name">Full Name
            </label><br />
            <input
              placeholder="Enter name .."
              type="text"
              className="focus:shadow-3xl mt-2 w-80 rounded border-2 outline-none"
              onChange={(e) => setname(e.target.value)}
            /><br /><br />

            <label className="font-semibold w-max px-2 py-0.5 rounded mb-1 bg-gray-300"
              htmlFor="email">Email
            </label><br />
            <input
              placeholder="Enter email .."
              type="email"
              className="focus:shadow-3xl mt-2 w-80 rounded mb-1 border-2 outline-none"
              onChange={(e) => setemail(e.target.value)}
            />
            <br /><br/><label className="font-semibold w-max px-2 py-0.5 rounded mb-1 bg-gray-300"
              htmlFor="Mobile No.">Mobile Number
            </label><br />
            <input
              placeholder="Mobile No."
              type="text"
              className="focus:shadow-3xl mt-2 w-80 rounded border-2 outline-none"
              onChange={(e) => setnum(e.target.value)}
            /><br />

            <div className="mt-5 flex flex-col">
              <label
                className="font-semibold w-max px-2 py-0.5 rounded mb-1 bg-gray-300"
                htmlFor="bio"> Bio
              </label>
              <textarea
                name="bio"
                rows={3}
                cols={30}
                placeholder="Enter your bio...."
                className="focus:shadow-3xl  w-80 rounded outline-none border-2 resize"
                onChange={(e) => setbio(e.target.value)}
              ></textarea>
            </div>

            <br /><label className="font-semibold w-max px-2 py-0.5 rounded mb-1 bg-gray-300"
              htmlFor="Github">College/Company
            </label><br />
            <input
              placeholder="College/Company name"
              type="text"
              className="focus:shadow-3xl mt-2 w-80 rounded border-2 outline-none"
              onChange={(e) => setclg(e.target.value)}
            /><br />

            <br /><label className="font-semibold w-max px-2 py-0.5 rounded mb-1 bg-gray-300"
              htmlFor="LinkedIn">LinkedIn
            </label><br />
            <input
              placeholder="LinkedIn link"
              type="url"
              className="focus:shadow-3xl mt-2 w-80 rounded border-2 outline-none"
              onChange={(e) => setlinkedIn(e.target.value)}
            /><br /><br />

            <label className="font-semibold w-max px-2 py-0.5 rounded mb-1 bg-gray-300"
              htmlFor="Github">Github
            </label><br />
            <input
              placeholder="Github username"
              type="text"
              className="focus:shadow-3xl mt-2 w-80 rounded border-2 outline-none"
              onChange={(e) => setgithub(e.target.value)}
            /><br /><br />

            <label className="font-semibold w-max px-2 py-0.5 rounded mb-1 bg-gray-300"
              htmlFor="Project">Project
            </label><br />
            <input
              placeholder="Title"
              type="text"
              className="focus:shadow-3xl mt-2 w-80 rounded border-2 outline-none"
              onChange={(e) => setproject(e.target.value)}
            /><br />
            <textarea
              name="Project"
              rows={3}
              cols={50}
              placeholder="Description"
              className="focus:shadow-3xl mt-3 w-80 rounded outline-none border-2 resize"
              onChange={(e) => setproj_info(e.target.value)}
            ></textarea><br />

            <br /><label className="font-semibold w-max px-2 py-0.5 rounded mb-1 bg-gray-300"
              htmlFor="Domain of Interest">Field of Interest
            </label><br />
            <input
              placeholder="doamains"
              type="text"
              className="focus:shadow-3xl mt-2 w-80 rounded border-2 outline-none"
              onChange={(e) => setfield(e.target.value)}
            /><br /><br />

            
            <button type="submit"
              className="font-Sora text-sm border-2 bg-gradient-to-tr from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 hover:border-2 mt-5 px-3.5 py-1.5 rounded-full"
            >
              Done
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Personalinfo;
