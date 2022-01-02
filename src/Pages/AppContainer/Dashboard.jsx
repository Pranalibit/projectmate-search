import Card from "../../Components/Card";
import Navbar from "../../Components/Navbar";
import Loader from "../../Components/Loader/Loader";
import db from '../../firebase';
import firebase from 'firebase/compat/app';
import { Switch, Route } from "react-router";
import Trends from "./Trends";
import ProfileCard from "../../Components/Profile/ProfileCard";
import NewsCard from "../../Components/News/NewsCard";
import ProfilePage from "./ProfilePage";
import EditProfile from "./EditProfile";
import Contests from "./Contests";
import Connections from "./Connections";
import { useState ,useEffect} from 'react';
import Posts from "./Post";
import Create_Post from "./create-post";
const Dashboard = () => {
  const [info , setInfo] = useState([]);
  
  const Fetchdata = ()=>{
		console.log('fetch data');
		db.collection("Post").get().then((querySnapshot) => {
			
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
  }, ['/dashboard']);
  useEffect(() => {
    <Loader />;
  }, []);
  
  return (
    <Switch>
      <>
        <Navbar />
        <Route exact path="/dashboard">
          <div><Create_Post/></div>
          <div className=" flex bg-gray-500 flex-row pt-20 w-full justify-center px-2 lg:space-x-10 lg:px-0">
            {/* left profile portion */}
            <div className=" flex font-Sora bg-gray-500 flex-row6 w-full justify-center px-2 lg:space-x-10 lg:px-0">
              <div className="sticky top-20 w-1/6 rounded-md shadow-2xl max-h-96 hidden lg:block text-white">
                <ProfileCard />
              </div>
              {/* center post portion */}
              <div className="lg:w-2/5 rounded-md">
               
                {/* create post */}
                <div className="border-2 border-gray-200 bg-white rounded-sm mb-3 px-3 pt-2">
                  <div className="flex flex-col">
                    <div className="flex flex-row space-x-4 items-center">
                      <img
                        className="rounded-full w-14 h-14"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZkSEm6tkwEyPiz1kmz9BMlcBsbjl8q__XQ&usqp=CAU"
                        alt="User"
                      />
                      <input
                        id="Post"
                        type="text"
                        className="outline-none placeholder-gray-600 border-2 w-full max-w-sm rounded-full h-10 sm:h-12 pl-3 bg-gray-300"
                        placeholder="Create a Post 📝"
                      />
                      <button className="bg-gray-400 px-3 sm:px-5 py-1 sm:py-2 text-lg sm:text-xl rounded-full">
                        Post
                      </button>
                    </div>

                    <div className="flex flex-row justify-around mt-2">
                      <div className="flex items-center">
                        <label
                          className="flex flex-row px-1 py-1 items-center hover:bg-gray-400 rounded cursor-pointer"
                          htmlFor="photo"
                        >
                          <img
                            className="w-10 h-8 mr-2"
                            src="https://img.icons8.com/fluency/48/000000/image.png"
                            alt="imageicon"
                          />
                          Photo
                        </label>
                        <input
                          id="photo"
                          placeholder=""
                          type="file"
                          className="hidden"
                        />
                      </div>

                      <div className="flex items-center">
                        <label
                          className="flex flex-row px-1 py-1 items-center hover:bg-gray-400 rounded cursor-pointer"
                          htmlFor="video"
                        >
                          <img
                            className="w-10 h-8 mr-2"
                            src="https://img.icons8.com/fluency/48/000000/video.png"
                            alt="videoicon"
                          />
                          Video
                        </label>
                        <input
                          id="video"
                          placeholder=""
                          type="file"
                          className="hidden"
                        />
                      </div>

                      <div className="flex items-center p-2">
                        <label
                          className="flex flex-row px-1 py-1 items-center hover:bg-gray-400 rounded cursor-pointer"
                          htmlFor="blog"
                        >
                          <img
                            className="w-10 h-8 mr-2"
                            src="https://img.icons8.com/fluency/48/000000/image.png"
                            alt="imageicon"
                          />
                          Blog
                        </label>
                        <input
                          id="blog"
                          placeholder=""
                          type="text"
                          className="hidden"
                        />
                      </div>
                      
                    </div>
                  </div>
                </div>
                
                {info.map((data) => (
                  
                  <Card
                  
                    userName={data.userName}
                    datePosted={data.datePosted}
                    img={data.img}
                    roles={data.role}
                    desc={data.desc}
                  />
                )
                )}
              </div>
             
              {/* right news portion */}
              <div className="top-20 w-1/5 shadow-2xl h-2/3 rounded-md hidden lg:block text-white mb-5">
                <NewsCard />
              </div>
            </div>
          </div>
        </Route>
        <Route exact path="/trends">
          <Trends />
        </Route>
        <Route exact path="/connections">
          <Connections />
        </Route>
        <Route exact path="/contests">
          <Contests />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route
          exact
          path={["/settings", "/settings/personal", "/settings/updatepassword"]}
        >
          <EditProfile />
        </Route>
      </>
    </Switch>
  );
};

export default Dashboard;