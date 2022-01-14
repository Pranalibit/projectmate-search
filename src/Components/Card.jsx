import { FC } from "react";

// interface CardTypeProps {
//   img: any;
//   userName: string;
//   datePosted: string;
//   roles: string[];
//   desc: string;
// }

const Card  = ({
  img,
  roles,
  desc,
  userName,
  datePosted,
}) => {
  const colors = ["green", "red", "indigo", "yellow", "blue", "purple"];

  // A function to get random numbers between 0 and length of array colors
  const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
  };

  return (
    <div className=" bgpt-0-0 mx-auto top-0 relative pb-2">
      <div className=" w-full lg:max-w-full lg:flex mx-auto">
        <div className="border-r border-b border-l w-full border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between">
          <div className="mb-8 min-w-full">
            {/* <div className="text-gray-900 font-bold  mb-2">
              {roles.map((role,index) => (
                <span
                  // key={index}
                  className={
                    "text-sm mt-1 font-semibold inline-block py-1 px-2 uppercase rounded text-black mr-1 " +
                    "bg-" +
                    colors[getRandomNumber()] +
                    "-200"
                  }
                >
                  {role}
                </span>
              ))}
            </div> */}
            <div className="text-gray-700 text-sm font-semibold font-Sora">{desc}</div>
          </div>
          <div className="flex justify-between">
            <div className="flex w-full text-sm items-center">
              <img
                className="w-8 h-8 rounded-full mr-3"
                src={img}
                alt="avatar"
              />
              <div className="text-xs font-medium inline-block py-1 px-2 rounded text-black bg-gray-200 mr-1">
                <p className="text-gray-900 leading-none">{userName}</p>
                <p className="text-gray-600">{datePosted}</p>
              </div>
            </div>
            <button className=" relative flex justify-evenly items-center z-10 bg-white border rounded-md p-1 opacity-75 hover:opacity-100 focus:outline-none focus:border-gray-500">
              <span className="inline-block text-sm px-1 text-gray-600">Share</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-4 w-6 my-1 text-blue-700"
              >
                <path
                  fill="currentColor"
                  d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;