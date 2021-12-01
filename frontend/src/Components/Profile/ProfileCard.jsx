import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex flex-col justify-center items-center hover:bg-gray-700 bg-darkshade pb-10 rounded-lg">
      <div className="bg-blue-700 w-full h-24 rounded-t-lg "></div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZkSEm6tkwEyPiz1kmz9BMlcBsbjl8q__XQ&usqp=CAU"
        alt="Profile"
        className="flex w-20 h-20 rounded-full -mt-11"
      />
      <p className="text-xl font-semibold">Mark Bhaiya</p>
      <p>Software Developer</p>
      <div className="flex flex-row space-x-6 mt-2 ">
        <div className="flex flex-col justify-center items-center">
          <span>0</span>
          <span className="font-medium text-sm text-gray-400 font-Sora">Posts</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>0</span>
          <span className="font-medium text-sm text-gray-400 font-Sora">Projects</span>
        </div>
      </div>
      <p className="text-center text-sm pt-3 px-3 font-Sora">
      Life would be much easier if I had the source code.
      </p>
      <button
        type="button"
        className="font-Sora text-sm border-2 bg-gradient-to-tr from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 hover:border-2 mt-5 px-3.5 py-1.5 rounded-full"
      >
        View Profile
      </button>
    </div>
  );
};

export default ProfileCard;
