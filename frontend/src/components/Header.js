import React from 'react';
import Logo from './Logo';
import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-40'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div>
          <Link to="/">
            <Logo w={100} h={50} />
          </Link>
        </div>

        <div className='hidden lg:flex items-center w-full h-11 justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input type='text' placeholder='search product here...' className='w-full outline-none' />
          <div className='text-lg min-w-[50px] h-11 bg-blue-600 flex items-center justify-center rounded-r-full text-white cursor-pointer'>
            <CiSearch />
          </div>
        </div>

        <div className='flex item-center gap-7'>
            <div className='text-2xl cursor-pointer relative'>
                <FaUserAlt />
            </div>

            <div className='text-2xl cursor-pointer relative'>
                <span>
                    <FaCartArrowDown />
                </span>
                <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                    <p>0</p>
                </div>
            </div>
            
            <div>
                <Link to="/login" className=' w-100 bg-wite-600 bg-blue-700 text-white px-3 py-2 rounded-full flex items-center justify-center p-y-5'>
                Login
                </Link>
            </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
