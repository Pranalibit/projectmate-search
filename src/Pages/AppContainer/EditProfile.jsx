import {
  IoPersonCircleSharp,
  IoCardSharp,
  IoLogOutOutline,
} from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import Personalinfo from "../../Components/EditProfile/Personalinfo/Personalinfo";
import { Redirect, Route } from "react-router";
import Password from "../../Components/EditProfile/Changepassword";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase";

const EditProfile = () => {
  const [active, setActive] = useState("personal");
  //console.log(active);

  const logout = async () => {
    await auth.signOut();
    localStorage.removeItem("loggedIn");
    window.location.href = "/login";
  };

  return (
    <div className="flex flex-col md:flex-row mt-40 sm:mt-0 top-20 h-screen justify-center space-x-10 w-full">
      <div className="w-64">
        <div className="sticky top-20 my-8 ml-8 bg-white rounded-md border-2">
          <h1 className="p-5 border-b-2 border-gray-400 text-xl font-semibold">
            Edit Profile
          </h1>
          <div className="flex flex-col">
            <Link
              to="/settings/personal"
              onClick={() => setActive("personal")}
              className={
                " flex flex-row items-center space-x-1 p-4 " +
                (active === "personal"
                  ? " bg-gray-200 border-l-4 border-blue-600 "
                  : " ")
              }
            >
              <IoPersonCircleSharp className="text-2xl text-purple-500" />
              <div className="font-semibold text-base">
                Personal Information
              </div>
            </Link>
            <Link
              to="/settings/updatepassword"
              onClick={() => setActive("updatepassword")}
              className={
                " flex flex-row items-center space-x-1 p-4 " +
                (active === "updatepassword"
                  ? " bg-gray-200 border-l-4 border-red-600 "
                  : " ")
              }
            >
              <IoMdLock className="text-2xl text-blue-400 " />
              <div className="font-semibold text-base">Login and Password</div>
            </Link>

            {/* <Link to=" " className="flex flex-row items-center space-x-1 p-4">
              <IoCardSharp className="text-2xl text-green-500" />
              <div className="font-semibold text-base">Membership Settings</div>
            </Link> */}

            <a
              href=" "
              onClick={logout}
              className="flex flex-row items-center space-x-1 p-4"
            >
              <IoLogOutOutline className="text-2xl text-yellow-600" />
              <div className="font-semibold text-base">Logout</div>
            </a>
          </div>
        </div>
      </div>

      {/* 2nd column */}
      <div className="w-3/5 mt-20">
        <Route exact path="/settings">
          <Redirect to="/settings/personal" />
        </Route>
        <Route exact path="/settings/personal">
          <Personalinfo />
        </Route>
        <Route exact path="/settings/updatepassword">
          <Password />
        </Route>
      </div>
    </div>
  );
};

export default EditProfile;
