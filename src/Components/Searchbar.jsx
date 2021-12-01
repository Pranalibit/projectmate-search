import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div class="flex items-center justify-center">
      <div className="flex justify-center items-center">
        <input
          type="text"
          className=" py-2 w-80 text-white font-medium text-lg "
          placeholder="Search..."
        />
        <button className=" bg-transparent border border-white flex items-center justify-center h-11 px-2 rounded-none  ">
          <IoSearch className="w-6 h-6"/>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
