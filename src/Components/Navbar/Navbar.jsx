import React from 'react';
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import Logo from '../../assets/imgs/logo.png';

function Navbar() {
  return (
    <nav className="bg-[#FFFFFF] p-4">
      <div className="mx-10 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <img src={Logo} alt="Logo" className="sm:w-44" />
        </div>
        <div className="flex flex-col text-sm sm:text-base sm:flex-row space-x-5">
          <div className="flex items-center space-x-2 ml-5 sm:ml-0">
            <BsTelephone className='text-buttonBg' /><a className="text-black text-sm">+1 (905) 206-1444</a>
          </div>
          <div className="flex items-center space-x-2">
            <CiMail className='text-buttonBg' /><a className="text-black text-sm">info@thecanadianhome.com</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
