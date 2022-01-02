import GitHubCalendar from 'react-github-calendar';
import { ImStatsBars } from "react-icons/im";
import firebase from "firebase/compat/app";
import db from '../../firebase';
import { useState, useEffect } from 'react';
const ProfilePage = () => {
  const [git , setgit] = useState();
  const [name , setname] = useState();
  const[bio,setbio] = useState();
  const [clg, setclg] = useState();
  const [num, setnum] = useState();
  const [interest, setinterest] = useState();
  const [project, setproject] = useState("");
  const [proj_info, setproj_info] = useState("");
  let user = firebase.auth().currentUser;
  
  console.log(user.metadata.creationTime);
  const Fetchdata = () => {
    console.log('user');
    db.collection("personal-info").where('Email_id', '==', user.email).get().then((querySnapshot) => {

      querySnapshot.forEach(element => {
        var data = element.data();
       
        setgit(data.Github);
        setname(data.Name);
        setbio(data.Bio);
        setclg(data.clg_company);
        setnum(data.mobile_num);
        setinterest(data.field_of_interest);
        setproject(data.Project_title);
        setproj_info(data.Proj_Description)
        
      });
    })
  }
  useEffect(() => {

    Fetchdata();
  }, [])
  

  return (

    <div className="mx-auto p-5 pt-20">
      <div className="md:flex no-wrap md:-mx-2">
        {/* <!-- Left Side --> */}
        <div className="w-full md:w-3/12 md:mx-2">
          {/* <!-- Profile Card --> */}
          <div className="bg-white p-3 border-t-4 border-gray-600">
            <div className="image overflow-hidden">
              <img
                className="mx-auto"
                src={"https://avatars.githubusercontent.com/"+git} width="200" height="200"
                alt="lol"
              />
            </div>
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
              {name}
            </h1>
            <h3 className="text-gray-600 font-lg font-semibold leading-6">
              {bio}
            </h3>
            <p className="text-sm font-semibold text-gray-500 hover:text-gray-600 leading-6">
              {clg}
            </p>
            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li className="flex items-center py-3">
                <span>Status</span>
                <span className="ml-auto">
                  <span className="bg-green-600 py-1 px-2 rounded text-white text-sm">
                    Active
                  </span>
                </span>
              </li>
              <li className="flex items-center py-3">
                <span>Member since</span>
                <span className="ml-auto">{user.metadata.creationTime}</span>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Right Side --> */}
        <div className="w-full md:w-9/12 mx-2">
          {/* <!-- Profile tab -->
            <!-- About Section --> */}
          <div className="shadow-lg border-2 p-2 mb-4">
          </div>
          <div className="bg-white p-3 shadow-xl border-2 rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 border-b-2">
              <span className="text-gray-700">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">About</span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-sm ">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Full Name</div>
                  <div className="px-4 py-2">{name}</div>
                </div>
                
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Contact No : </div>
                  <div className="px-4 py-2">{num}</div>
                </div>
               
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Email : </div>
                  <div className="px-4 py-2">
                    <a className="text-blue-800" href="mailto:jane@example.com">
                    {user.email}
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Collge/Company</div>
                  <div className="px-4 py-2">{clg}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Interested Field</div>
                  <div className="px-4 py-2">
                    <div className="px-4 py-2">
                    {interest}
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          {/* <!-- End of about section --> */}
          <div className="my-4"></div>
          {/* <!-- Experience and education --> */}
          <div className="bg-white p-3 shadow-lg border-2 rounded-sm">
            <div className="grid">
              <div>
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3 border-b-2 ">
                  <span className="text-gray-700">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">Project Experience</span>
                </div>
                <ul className="list-inside space-y-2">
                  <li>
                    <div className="text-teal-600">
                      {project}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {proj_info}
                    </div>
                  </li>
               
            
               
                </ul>
              </div>
              <div>
          
           
              </div>
            </div>
            {/* <!-- End of Experience and education grid --> */}
          </div>
          <div className="mt-4"></div>
          <div className="bg-white p-3 shadow-lg border-2 rounded-sm">
            <div className="grid grid-cols-1">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3 border-b-2 ">
                <span className="text-gray-700">
                  <ImStatsBars className="text-lg" />
                  {/* <img src={stats} width="24" height="24" alt="stats" /> */}
                </span>
                <span className="tracking-wide">Git Stats</span>
              </div>
              <GitHubCalendar username={git} />

            </div>
            {/* <!-- End of git stats grid --> */}
          </div>
          {/* <!-- End of profile tab --> */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
