import React, { useState, useEffect } from "react";
import CategoryHeader from "../../Home/component/cardHeader/CardHeader";
import axios from "axios";
import ProductCard from "../../Home/component/ProductCard/ProductCard";

import { FaStar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";

import { HiArrowPath } from "react-icons/hi2";
import Button from "../../../common/components/Button";
import { Link, useParams } from "react-router-dom";
import Cart from "../../cart/views/Cart";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../../store/features/WishlistSlice";
import { addToCart } from "../../../store/features/CartSlice";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedMod, setSelectedMod] = useState(singleProduct.thumbnail);
  const wishlistProduct = useSelector((state) => state.wishlist);
  const cartProduct = useSelector((state) => state.cart);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setSingleProduct(response.data);
        console.log(singleProduct, "singleProduct");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProduct(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    getData();
  }, [id]);

  const handleModSelection = (mod) => {
    if (mod !== singleProduct.thumbnail) {
      setSelectedMod(mod);
    }
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleAddToWishlist = () => {
    dispatch(
      addToWishlist({
        id: singleProduct.id,
        title: singleProduct.title,
        offers: singleProduct.discountPercentage,
        image: selectedMod || singleProduct.thumbnail,
        offerPrice: singleProduct.price,
        originalPrice: singleProduct.price * 2,
        rating: singleProduct.rating,
        userRating: singleProduct.userRating,
        isWishlist: !wishlistProduct.wishlist.find((item) => item.id === id)
          ?.isWishlist,
      })
    );
  };

  return (
    <div>
      <div>
        <div className=" h-[21px] opacity-50 mt-[190px] ml-[78px] font-sans">
          Account / {singleProduct.category}/{" "}
          <span className="font-semibold ">{singleProduct.title}</span>
        </div>
        <div className="flex ">
          <div>
            {singleProduct.images &&
              singleProduct.images.slice(0, 4).map((image, index) => (
                <div>
                  <img
                    key={index}
                    className="h-[138px] w-[140px] mt-[27px] ml-[78px]"
                    src={image}
                    alt="nothing"
                    onClick={() => handleModSelection(image)}
                  />
                </div>
              ))}
          </div>
          <div>
            <div>
              <img
                className="h-[620px] w-[600px] mt-[60px] ml-[78px]"
                src={selectedMod || singleProduct.thumbnail}
                alt="Selected Image"
              />
            </div>
          </div>
          <div className="ml-[4%] gap-[20%]">
            <div className="text-[26px] mt-[50px]  font-sans ">
              {singleProduct.title}
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
                  |&nbsp;&nbsp;In Stock ({singleProduct.stock})
                </span>
              </div>
            </div>
            <div className="text-[24px] ml-[4px] mb-[12px]">
              ${singleProduct.price}
            </div>
            <div className="text-[16px] ml-[4px] line-[2px] h-[67px] w-[380px] mb-[10%] font-sans ">
              {singleProduct.description}
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

              <Button
                onclick={() => {
                  dispatch(
                    addToCart({
                      id: singleProduct.id,
                      title: singleProduct.title,
                      image: selectedMod || singleProduct.thumbnail,
                      offerPrice: singleProduct.price,
                    })
                  );
                }}
                height={42}
                width={140}
                bg={true}
                textColor={true}
                heading={"Buy Now"}
                isBorder={false}
              />

              {/* <div className="h-[42px] w-[140px] border border-black border-opacity-25 rounded flex items-center justify-center text-[20px] font-sans">
              Buy Now
            </div> */}

              <div className="h-[42px] w-[40px] border border-black border-opacity-25 rounded flex items-center justify-center cursor-pointer">
                {wishlistProduct.wishlist.find(
                  (item) => item.id === singleProduct.id
                )?.isWishlist ? (
                  <IoMdHeart onClick={handleAddToWishlist} />
                ) : (
                  <IoHeartOutline onClick={handleAddToWishlist} />
                )}
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

      <div className="mt-[100px]">
        <CategoryHeader title={"Related Items"} btn={false} arrow={false} />
        <div className="m-auto w-[90%] flex overflow-x-auto gap-[30px]">
          {product &&
            product
              .slice(0, 5)
              .map((item) => (
                <ProductCard
                  key={item.id}
                  title={item.title}
                  offers={item.discountPercentage}
                  cartIcon={["PiHeadsetDuotone", "PiHeadsetDuotone"]}
                  image={item.thumbnail}
                  offerPrice={item.price}
                  originalPrice={item.price * 2}
                  rating={item.rating}
                  userRating={item.stock}
                  isRating={true}
                  cartIcons={true}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

// id: singleProduct.id,
// title: singleProduct.title,
// offers: singleProduct.discountPercentage,
// image: selectedMod || singleProduct.thumbnail,
// offerPrice: singleProduct.price,
// originalPrice: singleProduct.price * 2,
// rating: singleProduct.rating,
// userRating: singleProduct.userRating,
