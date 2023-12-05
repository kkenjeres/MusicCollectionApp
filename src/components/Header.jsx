import React from 'react'
import { GoHome } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='bg-black rounded-xl m-2 w-[30%] flex flex-col gap-2 '>
      <nav className='bg-[#121212] rounded-xl sticky top-0'>
        <ul>
          <li>
            <Link to="/home" className='flex items-center '>
              <GoHome className='mr-2'/>Home
            </Link>
          </li>
          <li>
            <Link to="/search" className='flex items-center '>
              <IoSearchSharp className='mr-2'/>Search
            </Link>
          </li>
        </ul>
      </nav>
      <div className='bg-[#121212] rounded-xl h-full '>
        <ul>
          <li>
            <Link to="/library" className='flex items-center '>
              <LuLibrary className='mr-2'/>Your Library
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header