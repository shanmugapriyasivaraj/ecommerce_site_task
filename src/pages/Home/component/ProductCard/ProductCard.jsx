import React from "react";
import image from "../../../Home/assets/image_1.png";
import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
import "../ProductCard/ProductCard.css";

function ProductCard() {
  return (
    <>
      <div className="w-full max-w-[270px]  border-transparent rounded-lg relative ">
        <div className="p-9 w-[270px] h-[250px] bg-stone-100 rounded flex justify-center">
          <img
            class="p-5 w-[190px] height-[180px] "
            src={image}
            alt="product image"
          />
          <div className="absolute top-0 ml-[150px] flex items-center justify-center ">
            <div className="flex-inline-block space-x-5 ml-10">
              <div className="bg-[#FFFFFF] mt-2 ml-[20px] rounded-full h-8 w-8 flex items-center justify-center">
                <IoHeartOutline className="text-[#000]" />
              </div>
              <div className="bg-[#fff] mt-2 rounded-full h-8 w-8 flex items-center justify-center">
                <IoEyeOutline className="text-[#000]" />
              </div>
            </div>
          </div>
          <div className="w-[55px] p-1 absolute top-0 start-0 bg-[#DB4444] rounded m-2 ">
            <p className=" text-white "> - 40%</p>
          </div>
          <button class="absolute w-[270px] top-[210.5px] h-10 text-base bg-[#000] text-white rounded-[4px] tracking-wider ">
            Add To Cart
          </button>
        </div>

        <div class=" pt-4 bg-white border-transparent">
          <p class="text-base font-medium text-black tracking-wider ">
            HAVIT HV-G92 Gamepad
          </p>
          <div>
            <p className="mt-2 text-[#DB4444] text-base space-x-1">
              $120{" "}
              <span className="line-through text-[#000000] opacity-45 ml-[12px] ">
                $160
              </span>
            </p>
          </div>
          <div className="flex space-x-0.5 mt-2 ">
            <TiStarFullOutline className="text-[#FFAD33]" />
            <TiStarFullOutline className="text-[#FFAD33]" />
            <TiStarFullOutline className="text-[#FFAD33]" />
            <TiStarFullOutline className="text-[#FFAD33]" />
            <TiStarFullOutline className="text-[#FFAD33]" />
            <div className="space-x-1">
              <p className="text-sm font-semibold opacity-45 ml-[10px] ">
                (88)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
