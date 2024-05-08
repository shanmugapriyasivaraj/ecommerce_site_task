import React, { useEffect, useState } from "react";
import Slider from "../component/slider/Slider";
import Banner from "../component/banner/Banner";
import Feature from "../component/featurecard/Feature";
import CardHeader from "../../Home/component/cardHeader/CardHeader";
import ProductCard from "../component/ProductCard/ProductCard";
import CategoryCard from "../../Home/component/categorycard/CategoryCard";

import Button from "../../../common/components/Button";

import Features from "../component/features/Features";
import { PiHeadsetDuotone } from "react-icons/pi";
import axios from "axios";

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProduct(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mt-[160px]">
      <Slider />

      {/* flash card header and card */}
      <CardHeader
        title={"Today's"}
        subtitle={"Flash Sales"}
        timer={true}
        arrow={true}
      />
      <div class="m-auto w-[90%] flex overflow-x-auto gap-[30px]  ">
        {product &&
          product
            .slice(1, 6)
            .map((item) => (
              <ProductCard
                id={item.id}
                title={item.title}
                offers={item.discountPercentage}
                cartIcons={true}
                image={item.thumbnail}
                offerPrice={item.price}
                originalPrice={item.price * 2}
                rating={item.rating}
                userRating={item.stock}
                isRating={true}
              />
            ))}
      </div>

      {/* {button} */}
      <div class="flex justify-center items-center mt-[50px]">
        <Button
          width={234}
          height={56}
          bg={true}
          textColor={true}
          heading={"View All Products"}
        />
      </div>
      <div className="mt-[50px] border-black opacity-[30%] border-[0.5px]"></div>

      {/* category card and header */}
      <CardHeader
        title={"Categories"}
        subtitle={"Browse By Category"}
        timer={false}
        arrow={true}
      />
      <CategoryCard />
      <div className="mt-[50px] border-black opacity-[30%] border-[0.5px]"></div>

      {/* month header and card */}
      <CardHeader
        title={"This Month"}
        subtitle={"Best Selling Products"}
        timer={false}
        arrow={false}
      />
      <div class="m-auto w-[90%] flex overflow-x-auto gap-[30px]">
        {product &&
          product
            .slice(1, 6)
            .map((item) => (
              <ProductCard
                id={item.id}
                title={item.title}
                offers={item.discountPercentage}
                cartIcons={true}
                image={item.thumbnail}
                offerPrice={item.price}
                originalPrice={item.price * 2}
                rating={item.rating}
                userRating={item.stock}
                isRating={true}
              />
            ))}
      </div>

      {/* banner */}
      <Banner />

      {/* ourproduct header and card */}
      <CardHeader
        title={"Our Products"}
        subtitle={"Explore our Products"}
        timer={false}
        arrow={true}
      />
      <div class="m-auto w-[90%] flex overflow-x-auto gap-[30px]">
        {product &&
          product
            .slice(1, 6)
            .map((item) => (
              <ProductCard
                id={item.id}
                title={item.title}
                offers={item.discountPercentage}
                cartIcons={true}
                image={item.thumbnail}
                offerPrice={item.price}
                originalPrice={item.price * 2}
                rating={item.rating}
                userRating={item.stock}
                isRating={true}
              />
            ))}
      </div>
      <div class="m-auto w-[90%] flex overflow-x-auto gap-[30px] mt-[50px]">
        {product &&
          product
            .slice(1, 6)
            .map((item) => (
              <ProductCard
                id={item.id}
                title={item.title}
                offers={item.discountPercentage}
                cartIcons={true}
                image={item.thumbnail}
                offerPrice={item.price}
                originalPrice={item.price * 2}
                rating={item.rating}
                userRating={item.stock}
                isRating={true}
              />
            ))}
      </div>

      {/* {button} */}
      <div class="flex justify-center items-center mt-[50px]">
        <Button
          width={234}
          height={56}
          bg={true}
          textColor={true}
          heading={"View All Products"}
        />
      </div>

      {/* new arrival header */}
      <CardHeader
        title={"Featured"}
        subtitle={"New Arrival"}
        timer={false}
        arrow={true}
      />
      <Feature />
      <Features />
    </div>
  );
};

export default Home;
