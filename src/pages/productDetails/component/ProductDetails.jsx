import React, { useState } from "react";
import Mod1 from "../../../assets/ProductAssets/Mod1.jpg";
import Mod2 from "../../../assets/ProductAssets/Mod2.jpg";
import Mod3 from "../../../assets/ProductAssets/Mod3.jpg";
import Mod4 from "../../../assets/ProductAssets/Mod4.jpg";
import Fullmod from "../../../assets/ProductAssets/Fullmod.jpg";
import { FaStar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { HiArrowPath } from "react-icons/hi2";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(2);
  const [selectedSize, setSelectedSize] = useState("M");

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div>
      <div className=" h-[21px] opacity-50 mt-[50px] ml-[78px] font-sans">
        Account / Gaming /{" "}
        <span className="font-semibold "> Havic HV G-92 Gamepad</span>
      </div>
      <div className="flex ">
        <div>
          <div>
            <img
              class="h-[138px] w-[140px] mt-[60px] ml-[78px] "
              src={Mod1}
              alt="nothing"
            />
          </div>
          <div>
            <img
              class="h-[138px] w-[140px] mt-[23px] ml-[78px] "
              src={Mod2}
              alt="nothing"
            />
          </div>
          <div>
            <img
              class="h-[138px] w-[140px] mt-[23px] ml-[78px] "
              src={Mod3}
              alt="nothing"
            />
          </div>
          <div>
            <img
              class="h-[138px] w-[140px] mt-[23px] ml-[78px] "
              src={Mod4}
              alt="nothing"
            />
          </div>
        </div>
        <div>
          <div>
            <img
              class="h-[620px] w-[600px] mt-[60px] ml-[78px] "
              src={Fullmod}
              alt="nothing"
            />
          </div>
        </div>
        <div className="ml-[4%] gap-[20%]">
          <div className="text-[26px] mt-[50px]  font-sans ">
            Havic HV G-92 Gamepad
          </div>
          <div className="flex ">
            <div className="text-yellow-400 flex  space-x-0.5 mt-[15px] ml-[4px]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-zinc-400 opacity-[80%]" />
            </div>
            <div className="mx-[4px] mb-[12px] mt-[10px]  ">
              (150 Reviews){" "}
              <span className="text-[18px] font-sans text-lime-400">
                {" "}
                |&nbsp;&nbsp;In Stock
              </span>
            </div>
          </div>
          <div className="text-[24px] ml-[4px] mb-[12px]">$192.00</div>
          <div className="text-[16px] ml-[4px] line-[2px] h-[67px] w-[380px] mb-[10%] font-sans ">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </div>
          <div className="border-b-2  "></div>
          <div className="flex mt-[25px] gap-[12px] text-[21px] font-sans ml-[2px]">
            Colours : <FaCircle className="text-cyan-400 mt-[7px] " />{" "}
            <FaCircle className="text-red-400 mt-[7px]" />
          </div>

          <div className="flex items-center mt-[18px] ">
            <div className="text-[20px] mt-[6px] font-sans">Size :</div>

            {["XS", "S", "M", "L", "XL"].map((size) => (
              <div
                key={size}
                className={`bg-white h-[33px] w-[33px] ml-[16px]  border border-black border-opacity-25 rounded-md mt-[9px] flex items-center justify-center cursor-pointer hover:bg-red-400 ${
                  selectedSize === size && "bg-red-400"
                }`}
                onClick={() => handleSizeSelection(size)}
              >
                <span className="text-xs font-sans">{size}</span>
              </div>
            ))}
          </div>

          <div className="flex mt-[28px] gap-[14px] ">
            <div className="flex">
              <div
                className="h-[42px] w-[40px] border border-black border-opacity-25 rounded-l flex items-center justify-center text-[28px] font-sans hover:bg-red-400 cursor-pointer"
                onClick={handleDecrement}
              >
                -
              </div>
              <div className="h-[42px] w-[82px] border border-black border-opacity-25 font-sans flex items-center justify-center text-[21px]">
                {quantity}
              </div>
              <div
                className="h-[42px] w-[40px] border border-black border-opacity-25  rounded-r flex items-center justify-center text-[28px] font-sans hover:bg-red-400 cursor-pointer"
                onClick={handleIncrement}
              >
                +
              </div>
            </div>
            <div className="h-[42px] w-[140px] border border-black border-opacity-25 rounded flex items-center justify-center text-[20px] font-sans">
              Buy Now
            </div>
            <div className="h-[42px] w-[40px] border border-black border-opacity-25 rounded flex items-center justify-center">
              <FaRegHeart />
            </div>
          </div>

          <div>
            <div class="flex justify-center items-center h-[78px] w-[390px] rounded-t-lg  border border-black border-opacity-25 mt-[40px] mb-0 ">
              <div class="flex items-center">
                <div class="text-[24px] mb-[15px] mt-[10px]">
                  <FaTruckFast />
                </div>
                <div class="text-[20px] mt-[10px] ml-[24px] p-[4px] font-sans">
                  Free Delivery
                  <p class="text-[14px] mb-2 underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
            </div>

            <div class="flex justify-center items-center h-[78px] w-[390px] rounded-b-lg border border-black border-opacity-25">
              <div class="flex items-center">
                <div class="text-[25px]  ml-[0.3px] mb-[15px] mt-[10px] ">
                  <HiArrowPath />
                </div>
                <div class="text-[19px] mt-[10px] mr-[23px] p-[20px] mx-[5px] font-sans">
                  Return Delivery
                  <p class="text-[14px] ">
                    Free 30 Days Delivery Returns.{" "}
                    <span className="underline">Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
