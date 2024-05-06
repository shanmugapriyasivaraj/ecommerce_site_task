import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import "../ProductCard/ProductCard.css";
import { IoHeartOutline } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../store/features/CartSlice";

function ProductCard({
  id,
  offers,
  cartIcons,
  image,
  title,
  offerPrice,
  originalPrice,
  rating,
  userRating,
  isDelete,
  isEye,
  isRating,
  isCartIcon,
}) {
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-[270px] group border-transparent rounded-lg relative ">
      <div className="p-9 w-[270px] h-[250px] bg-stone-100 rounded flex justify-center">
        <img
          class="p-5 w-[190px] height-[180px] "
          src={image}
          alt="product image"
        />
        {cartIcons ? (
          <div className="absolute top-0 ml-[150px] flex items-center justify-center ">
            <div className="flex-inline-block space-x-5 ml-10">
              <div className="bg-[#FFFFFF] mt-2 ml-[20px] rounded-full h-8 w-8 flex items-center justify-center">
                <IoHeartOutline className="text-[#000]" />{" "}
              </div>
              <div className="bg-[#fff] mt-2 rounded-full h-8 w-8 flex items-center justify-center">
                <BsEye className="text-[#000]" />
              </div>
            </div>
          </div>
        ) : isDelete ? (
          <div className="absolute top-0 ml-[150px] flex items-center justify-center ">
            <div className="flex-inline-block space-x-5 ml-10">
              <div className="bg-[#FFFFFF] mt-2 ml-[20px] rounded-full h-8 w-8 flex items-center justify-center">
                <IoTrashOutline className="text-[#000]" />{" "}
              </div>
              {/* <div className="bg-[#fff] mt-2 rounded-full h-8 w-8 flex items-center justify-center">
                <BsEye className="text-[#000]" />
              </div> */}
            </div>
          </div>
        ) : isEye ? (
          <div className="absolute top-0 ml-[150px] flex items-center justify-center ">
            <div className="flex-inline-block space-x-5 ml-10">
              {/* <div className="bg-[#FFFFFF] mt-2 ml-[20px] rounded-full h-8 w-8 flex items-center justify-center">
                  <IoHeartOutline className="text-[#000]" />{" "}
                </div> */}
              <div className="bg-[#fff] mt-2 rounded-full h-8 w-8 flex items-center justify-center">
                <BsEye className="text-[#000]" />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <div className="w-[55px] p-1 absolute top-0 start-0 bg-[#DB4444] rounded m-2 ">
          <p className=" text-white "> {offers}%</p>
        </div>
        {isCartIcon ? (
          <div class="absolute w-[270px] top-[210.5px] h-10 text-base bg-[#000] text-white rounded-[4px] tracking-wider flex max-md:hidden  ">
            <IoCartOutline className="mr-2 mt-[11px] ml-[60px]" />
            <button
              className="hover:bg-transparent hover:text-white ml-[3px]"
              onClick={() => {
                dispatch(addToCart({ id, title, image, offerPrice }));
              }}
            >
              Add To Cart
            </button>
          </div>
        ) : (
          <button
            class="absolute w-[270px] top-[210.5px] h-10 text-base bg-[#000] text-white rounded-[4px] tracking-wider hidden group-hover:block "
            onClick={() => {
              dispatch(addToCart({ id, title, image, offerPrice }));
            }}
          >
            Add To Cart
          </button>
        )}
      </div>

      <div class=" pt-4 bg-white border-transparent">
        <p class="text-base font-medium text-black tracking-wider ">{title}</p>
        <div>
          <p className="mt-2 text-[#DB4444] text-base space-x-1">
            $ {offerPrice}
            <span className="line-through text-[#000000] opacity-45 ml-[12px] ">
              ${originalPrice}
            </span>
          </p>
        </div>
        {isRating ? (
          <div className="flex space-x-0.5 mt-2  ">
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
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
