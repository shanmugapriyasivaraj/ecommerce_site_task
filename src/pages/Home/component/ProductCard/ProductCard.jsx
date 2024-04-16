import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import "../ProductCard/ProductCard.css";

function ProductCard({
  offers,
  cartIcons,
  image,
  title,
  offerPrice,
  originalPrice,
  rating,
  userRating,
}) {
  return (
    <>
      <div className="w-full max-w-[270px] group border-transparent rounded-lg relative ">
        <div className="p-9 w-[270px] h-[250px] bg-stone-100 rounded flex justify-center">
          <img
            class="p-5 w-[190px] height-[180px] "
            src={image}
            alt="product image"
          />
          <div className="absolute top-0 ml-[150px] flex items-center justify-center ">
            <div className="flex-inline-block space-x-5 ml-10">
              {cartIcons.map((icon) => (
                <div className="bg-[#FFFFFF] mt-2 ml-[20px] rounded-full h-8 w-8 flex items-center justify-center">
                  {/* <IoHeartOutline className="text-[#000]" /> */}{" "}
                  <i className="text-[#000]">{icon}</i>
                </div>
              ))}
              {/* <div className="bg-[#fff] mt-2 rounded-full h-8 w-8 flex items-center justify-center">
                <IoEyeOutline className="text-[#000]" />
              </div> */}
            </div>
          </div>
          <div className="w-[55px] p-1 absolute top-0 start-0 bg-[#DB4444] rounded m-2 ">
            <p className=" text-white "> {offers}</p>
          </div>
          <button class="absolute w-[270px] top-[210.5px] h-10 text-base bg-[#000] text-white rounded-[4px] tracking-wider hidden group-hover:block ">
            Add To Cart
          </button>
        </div>

        <div class=" pt-4 bg-white border-transparent">
          <p class="text-base font-medium text-black tracking-wider ">
            {title}
          </p>
          <div>
            <p className="mt-2 text-[#DB4444] text-base space-x-1">
              $ {offerPrice}
              <span className="line-through text-[#000000] opacity-45 ml-[12px] ">
                ${originalPrice}
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
                ({userRating})
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
