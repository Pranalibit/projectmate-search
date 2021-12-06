import Card from "../../Components/Card";
import Navbar from "../../Components/Navbar";
import Loader from "../../Components/Loader/Loader";
import { useEffect } from "react";
import { Switch, Route } from "react-router";
import Trends from "./Trends";
import ProfileCard from "../../Components/Profile/ProfileCard";
import NewsCard from "../../Components/News/NewsCard";
import ProfilePage from "./ProfilePage";
import EditProfile from "./EditProfile";
import Contests from "./Contests";
import Connections from "./Connections";

const Dashboard = () => {
  const details = [
    {
      userName: "Pranali Pardeshi",
      img: "https://avatars.githubusercontent.com/Pranalibit",
      datePosted: "15 November",
      role: ["UI-UX Designer"],
      desc: "I need a UI-UX designed for my upcoming project who can make good looking professional UI and UX.",
    },
    {
      userName: "Rutika Patil",
      img: "https://avatars.githubusercontent.com/Rutika2001",
      datePosted: "25 November",
      role: ["Frontend Developer", "Reactjs Developer"],
      desc: "I need a reactjs developer who can build efficient frontend for my website.",
    },
    {
      userName: "Pratiksha Patil",
      img: "https://avatars.githubusercontent.com/Pratiksha-ui",
      datePosted: "1 December",
      role: ["Android Developer"],
      desc: "I need a Android developer for my project who can help me in making native android apps.",
    },
    {
      userName: "Om Chakane",
      img: "https://avatars.githubusercontent.com/omichan222",
      datePosted: "5 December",
      role: ["Backend Developer "],
      desc: "I need a Backend Developer for my current project who can make and manage databases and create endpoints for the frontend .",
    },
  ];

  useEffect(() => {
    <Loader />;
  }, []);
  return (
    <Switch>
      <>
        <Navbar />
        <Route exact path="/dashboard">
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

                {details.map((detail, index) => (
                  <Card
                    key={index}
                    userName={detail.userName}
                    datePosted={detail.datePosted}
                    img={detail.img}
                    roles={detail.role}
                    desc={detail.desc}
                  />
                ))}
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