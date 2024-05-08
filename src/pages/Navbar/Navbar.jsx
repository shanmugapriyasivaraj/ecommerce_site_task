import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

//Components - >
const Navbar = () => {
  const cartProduct = useSelector((state) => state.cart);
  const wishlistProduct = useSelector((state) => state.wishlist);

  const getTotalQuantity = () => {
    let total = 0;
    cartProduct.cart.map((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <>
      <nav className=" bg-white fixed top-0 left-0 w-full z-10">
        <div className=" ml-[5%] flex flex-wrap items-center justify-between mt-[70px] ">
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
                <Link to={"/wishlist"} className="text-[24px] relative">
                  {wishlistProduct.wishlist.length == 0 ? (
                    <p></p>
                  ) : (
                    <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="bg-[#DB4444]  w-[16px] h-[16px] rounded-full ">
                        <p className="text-xs text-white px-1">
                          {" "}
                          {wishlistProduct.wishlist.length}
                        </p>
                      </div>
                    </div>
                  )}
                  <IoMdHeartEmpty />
                </Link>

                <Link to={"/cart"} className="text-[24px] relative">
                  {getTotalQuantity() == 0 ? (
                    <p></p>
                  ) : (
                    <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="bg-[#DB4444]  w-[16px] h-[16px] rounded-full ">
                        <p className="text-xs text-white px-1">
                          {" "}
                          {getTotalQuantity()}
                        </p>
                      </div>
                    </div>
                  )}
                  <IoCartOutline />
                </Link>
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
            </ul>
          </div>
        </div>
        <div className="border mt-[16px]  border-black opacity-[30%] border-b-black"></div>
      </nav>
    </>
  );
};

export default Navbar;
