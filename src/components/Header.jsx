import React from "react";
import { GoHome } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="fixed bottom-2 left-0 right-0 m-auto flex w-[95%] rounded-xl bg-black ">
      <nav className="w-full  rounded-xl bg-[#121212] p-2">
        <ul className="flex justify-between">
          <li>
            <Link to="/home" className="flex items-center ">
              <GoHome className="mr-2" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/search" className="flex items-center ">
              <IoSearchSharp className="mr-2" />
              Search
            </Link>
          </li>
          <li>
            <Link to="/library" className="flex items-center ">
              <LuLibrary className="mr-2" />
              Library
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
