import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [filteredData, setFilteredData] = useState("");

  useEffect(() => {
    //searching logic
  }, [filteredData]);

  return (
    <div className="">
      <div className="flex mx-auto relative items-center border-2 px-2 pr-4 rounded-full bg-black opacity-90 lg:ml-40">
        <input
          className="bg-black rounded-full text-sm border-0 p-4 w-full h-7 outline-none text-white"
          type="text"
          placeholder="Search..."
          value={filteredData}
          onChange={(event) => setFilteredData(event.target.value)}
        />
        {filteredData.length !== 0 && (
          <IoClose
            id="clearBtn"
            onClick={() => setFilteredData("")}
            className="absolute right-8 cursor-pointer text-white text-xl sm:text-base"
          />
        )}
        <IoSearch className="text-gray-400"/>
      </div>
    </div>
  );
};

export default SearchBar;
