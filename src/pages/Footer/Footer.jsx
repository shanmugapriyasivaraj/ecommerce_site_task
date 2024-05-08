// import React from "react";
import { RiFacebookLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { LuSendHorizonal } from "react-icons/lu";
import { Link } from "react-router-dom";

// Assets
import QR from "../Footer/assets/qr.png";
import Google from "../Footer/assets/gp.png";
import Apple from "../Footer/assets/ap.png";

const Footer = () => {
  return (
    <footer className=" h-[440px] bg-black">
      <div>
        <div className="flex justify-between gap-[24px] ml-[135px] mr-[135px]  ">
          <div className="w-[217px] flex flex-col gap-6 mt-[80px] ">
            <h2 className="text-[24px] font-[700] font-inter text-[--title-color]">
              Exclusive
            </h2>
            <p className="text-[20px] text-[--title-color] font-poppins font-[500]">
              Subscribe
            </p>
            <p className="text-[16px] flex text-[--title-color] font-poppins font-[400]">
              Get 10% off your first order
            </p>
            <div className="h-[48px] justify-between flex p-3 w-[200px] rounded border border-[--title-color]">
              <p className="text-[16px] font-[400] text-[--title-color] opacity-40">
                Enter your email
              </p>
              <p className="text-[20px] mt-[2px] text-[--title-color] ">
                <LuSendHorizonal />
              </p>
            </div>
          </div>
          <div className="w-[175px] flex flex-col gap-6 mt-[80px] ">
            <p className="text-[20px] text-[--title-color] font-poppins font-[500]">
              Support
            </p>

            <p className="text-[16px] flex text-[--title-color] font-poppins font-[400]">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-[16px] flex text-[--title-color] font-poppins font-[400]">
              exclusive@gmail.com
            </p>
            <p className="text-[16px] flex text-[--title-color] font-poppins font-[400]">
              +88015-88888-9999
            </p>
          </div>
          <div className="w-[123px] flex flex-col gap-6 mt-[80px] ">
            <p className="text-[20px] text-[--title-color] font-poppins font-[500]">
              Account
            </p>

            <p className="text-[16px] flex text-[--title-color] font-poppins font-[400]">
              My Account
            </p>
            <p className="text-[16px] flex text-[--title-color] font-poppins font-[400]">
              Login / Register
            </p>
            <Link to="/cart">
              <p className="text-[16px] flex text-[--title-color] font-poppins font-[400]">
                Cart
              </p>
            </Link>
            <Link to="/wishlist">
              <p className="text-[16px] flex text-[--title-color] font-poppins font-[400]">
                Wishlist
              </p>
            </Link>
            <Link to="/">
              <p className="text-[16px] flex text-[--title-color] font-poppins font-[400]">
                Shop
              </p>
            </Link>
          </div>
          <div className="w-[109px] flex flex-col gap-6 mt-[80px] ">
            <p className="text-[20px] text-[--title-color] font-poppins font-[500]">
              Quick Link
            </p>

            <p className="text-[16px] flex text-[--title-color] font-poppins font-[400]">
              Privacy Policy
            </p>
            <p className="text-[16px] flex text-[--title-color] font-poppins font-[400]">
              Terms Of Use
            </p>
            <p className="text-[16px] flex text-[--title-color] font-poppins font-[400]">
              FAQ
            </p>
            <Link to="/contact">
              <p className="text-[16px] flex text-[--title-color] font-poppins font-[400]">
                Contact
              </p>
            </Link>
          </div>
          <div className="w-[217px] flex flex-col gap-6 mt-[80px] ">
            <p className="text-[20px] text-[--title-color] font-poppins font-[500]">
              Download App
            </p>
            <p className="text-[12px] flex text-[--title-color] opacity-70 font-poppins font-[500]">
              Save $3 with App New User Only
            </p>
            <div className="flex gap-3">
              <div className="h-[78px] w-[76px] rounded border-1 border border-[--title-color]">
                <img
                  src={QR}
                  alt=""
                  className="object-cover h-[76px] w-[76px] "
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="h-[30px] rounded w-[104px] border-b border border-[--title-color]">
                  <img
                    src={Google}
                    alt=""
                    className="object-cover h-[30px] w-[104px] "
                  />
                </div>
                <div className="h-[32px] rounded w-[104px] border   border-[--title-color]">
                  <img
                    src={Apple}
                    alt=""
                    className="object-cover h-[30px] w-[104px] "
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <RiFacebookLine className="text-[24px] text-[--title-color]" />
              <CiTwitter className="text-[24px] text-[--title-color]" />
              <IoLogoInstagram className="text-[24px] text-[--title-color]" />
              <RiLinkedinLine className="text-[24px] text-[--title-color]" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 ">
        <div className="border mt-[16px] border-[--title-color] opacity-10 border-b-black"></div>
        <div className="mt-[10px]  text-center ml">
          {" "}
          <span className="  text-[16px] text-[--title-color] opacity-30">
            © Copyright Rimel 2022. All right reserved{" "}
          </span>
        </div>
      </div>{" "}
    </footer>
  );
};

export default Footer;
