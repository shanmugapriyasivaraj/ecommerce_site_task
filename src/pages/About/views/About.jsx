import React from "react";

import AboutImg from "../../../assets/aboutAssets/about1.jpg";
import { AiOutlineShop } from "react-icons/ai";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoGiftOutline } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import Features from "../../Home/component/features/Features";
import Img1 from "../../../assets/aboutAssets/about2.png";
import Img2 from "../../../assets/aboutAssets/about3.png";
import Img3 from "../../../assets/aboutAssets/about4.png";

import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const About = () => {
  const profileData = [
    {
      img: Img1,
      name: "Tom Cruise",
      designation: "Founder & Chairman",
    },
    {
      img: Img2,
      name: "Emma Watson",
      designation: "Managing Director",
    },
    {
      img: Img3,
      name: "Will Smith",
      designation: "Product Designer",
    },
  ];
  const AboutData = [
    {
      icon: <AiOutlineShop />,
      title: "10.5K",
      subtitle: "Sellers active our site",
    },
    {
      icon: <AiOutlineDollarCircle />,
      title: "33K",
      subtitle: "Monthly Product Sale",
    },
    {
      icon: <IoGiftOutline />,
      title: "45.5K",
      subtitle: "Customer active in our site",
    },
    {
      icon: <TbMoneybag />,
      title: "25K",
      subtitle: "Annual Gross sale in our site",
    },
  ];
  return (
    <>
      <div className="mt-[240px] mb-8 ml-[5%]">
        <div className="flex gap-[200px] ">
          <div className="text-[14px] flex ">
            <Link to={"/"}>
              {" "}
              <p className="opacity-50">Home</p>
            </Link>
            <span className="mx-2">/</span> About
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-[50px]">
            {" "}
            <h1 className="tracking-wider text-[54px] font-semibold font-inter">
              Our Story
            </h1>
            <p className=" mt-6 w-[570px] h-[130px] text-[16px]">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p className="w-[560px] text-[16px]">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div>
            <img className="h-[405px] w-[505px]" src={AboutImg} />
          </div>
        </div>
        <div className="flex gap-12 ">
          {AboutData &&
            AboutData.map((e) => (
              <div className="mt-[100px] w-[270px] ml-8 h-[230px] hover:bg-[#DB4444]  hover:text-white rounded border-2 border-neutral-400">
                <div class="flex flex-col gap-[20px] justify-center mt-[30px] text-center  h-[161px] mb-[100px] p-[2]">
                  <div class=" mx-[100px] h-[77px] w-[77px] rounded-full justify-center text-center align-center bg-neutral-500 p-2">
                    <div class="mx-[1px] h-[60px] w-[60px] p-2 rounded-full bg-black">
                      <div className="text-white p-2 text-[29px]">{e.icon}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[20px] font-[600] ">{e.title}</div>
                    <div>
                      <p className="text-[14px] mt-[5px]">{e.subtitle}</p>{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))}{" "}
        </div>
        <div className="flex gap-12">
          {profileData &&
            profileData.map((e) => (
              <div className=" flex flex-col gap-1 mt-[100px] h-[564px] ml-10 w-[370px]">
                <div className="h-[430px] pt-10  bg-[#F5F5F5]">
                  <img
                    className="h-[391px]  mx-[67px]  w-[236px]"
                    src={e.img}
                  />
                </div>
                <p className="font-inter font-medium text-[32px]">{e.name}</p>
                <p className="text-[16px]">{e.designation}</p>
                <div className="flex text-[18px] gap-3">
                  <CiTwitter />
                  <IoLogoInstagram />
                  <RiLinkedinLine />
                </div>
              </div>
            ))}
        </div>
        <Features />
      </div>
    </>
  );
};

export default About;
