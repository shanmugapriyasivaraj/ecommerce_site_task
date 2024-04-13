import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";

//Components - >
const Navbar = () => {
  return (
    <>
      <nav className="ml-[5%] bg-white mt-12 ">
        <div className="flex flex-wrap items-center justify-between mt-[70px] ">
          <p className="font-bold font-Inter text-[--secondary-color] text-[24px] tracking-wide">
            Exclusive
          </p>
          <div className="mr-[136px] gap-6 flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <div className=" flex justify-between h-[38px] w-[273px] bg-[#F5F5F5] p-3 rounded">
              <p className="text-[12px] font-[400] opacity-50 ">
                What are you looking for?
              </p>
              <p className=" font-bold text-[16px] text-[#000000]">
                <FiSearch />
              </p>
            </div>
            <div>
              <div className="flex gap-[16px] ">
                <p className="text-[24px]">
                  <IoMdHeartEmpty />
                </p>
                <p className="text-[24px]">
                  <IoCartOutline />
                </p>
              </div>
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-language"
          >
            <ul className="flex ml-[145px] flex-col font-medium p-4 md:p-0 mt-4 border    md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 px-3 text-[16px] font-[400] text-[--secondary-color] "
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="block py-2 px-3 text-[16px] font-[400] text-[--secondary-color] "
                  aria-current="page"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-2 px-3 text-[16px] font-[400] text-[--secondary-color] "
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className="block py-2 px-3 text-[16px] font-[400] text-[--secondary-color] "
                  aria-current="page"
                >
                  Sign Up
                </NavLink>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <div className="border mt-[16px] border-black opacity-[30%] border-b-black"></div>
    </>
  );
};

export default Navbar;
