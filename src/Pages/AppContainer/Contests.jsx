import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { CustomTable } from "../../Components/CustomTable/CustomTable";

const Contests = () => {
  const [allContest, setAllContest] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getAllContest().then((res) => setAllContest(res));
  }, []);
  // console.log(allContest);

  const filterContests =  allContest.filter(
    (contest) =>
      contest.name.toLowerCase().includes(search.toLowerCase()) ||
      contest.site.toLowerCase().includes(search.toLowerCase())
  );

  // Structure of columns for custom data table
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      style: {
        fontSize: "14px",
        fontWeight: 500,
        backgroundColor: "#3ACDE9",
      },
      wrap: true,
      // center: true,
    },
    {
      name: "Site",

      selector: (row) => (
        <a
          href={row.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center hover:text-yellow-700 font-medium text-sm "
        >
          {row.site}
          <FiExternalLink className="ml-0.5" />
        </a>
      ),
      style: {
        backgroundColor: "#E5E7E9 ",
      },
      center: true,
      minWidth: "100px",
      maxWidth: "200px",
    },
    {
      name: "Date",
      selector: (row) => row.start_time.split("T")[0],
      sortable: true,
      minWidth: "90px",
      maxWidth: "135px",
      center: true,
      style: {
        // backgroundColor: "#AED6F1 ",
      },
    },
    {
      name: "Duration",
      selector: (row) => row.duration,
      sortable: true,
      style: {
        backgroundColor: "#E5E7E9 ",
      },
      minWidth: "90px",
      maxWidth: "200px",
      center: true,
      hide : "sm"
    },
    
    {
      name: "Start Time",
      selector: (row) => row.start_time.split("T")[1].slice(0,5),
      wrap: true,
      style: {
        // backgroundColor: "#E5E7E9 ",
      },
      center: true,
      minWidth: "80px",
      maxWidth: "150px",
      hide : "sm"
    },
  ];

  return (
    
    <div className="pt-16 bg-blue-100 min-h-screen md:px-10 lg:px-16 xl:px-20 space-y-7">
      <br></br>
      <br></br>
      {/* <div className="sticky top-20 flex justify-around space-x-4 items-center ">
        <div className=" flex mx-auto">
          <div className="flex ">
            <input
              type="text"
              className="px-3 py-2 w-60 border font-Sora border-black text-black rounded-l-sm outline-none focus:outline-none placeholder-gray-800"
              placeholder="Search here ⌨️..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="flex items-center rounded-r-sm bg-black justify-center px-4 border-r">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
              </svg>
            </button>
          </div>
        </div>
        
      </div> */}
      <div className="flex ml-2 md:ml-0 mt-3 ">
            <input
              type="text"
              className="px-3 py-2 w-60 border font-Sora border-black text-black rounded-l-sm outline-none focus:outline-none placeholder-gray-800"
              placeholder="Search here ⌨️..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="flex items-center rounded-r-sm bg-black justify-center px-4 border-r">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
              </svg>
            </button>
          </div>
      <div className="shadow-2xl mx-2 md:mx-0 font-Sora">
        <CustomTable columns={columns} data={filterContests} />
      </div>
    </div>
  );
};

export default Contests;

export const getAllContest = () => {
  // console.log("Get All Contest");

  return fetch("https://kontests.net/api/v1/all", {
    method: "GET",
    headers: {},
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};
