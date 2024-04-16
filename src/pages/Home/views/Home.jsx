import React, { useEffect, useState } from "react";
import Slider from "../component/slider/Slider";
import Banner from "../component/banner/Banner";
import Feature from "../component/featurecard/Feature";
import CardHeader from "../../Home/component/cardHeader/CardHeader";
import ProductCard from "../component/ProductCard/ProductCard";
import CategoryCard from "../../Home/component/categorycard/CategoryCard";
import Button from "../component/buttons/Button";

import Features from "../component/features/Features";
import { FaTruckFast } from "react-icons/fa6";
import { PiHeadsetDuotone } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";
import axios from "axios";

const Home = () => {
  // const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get("https://dummyjson.com/products")
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      return response;
    };

    fetchData();
  }, []);
  return (
    <div>
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
          product.map(() => (
            <ProductCard
              title={""}
              offers={""}
              cartIcon={[]}
              image={""}
              offerPrice={""}
              originalPrice={""}
              rating={""}
              userRating={""}
            />
          ))}
      </div>
      <Button />
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div class="m-auto w-[90%] flex overflow-x-auto gap-[30px] mt-[50px]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Button />

      {/* new arrival header */}
      <CardHeader
        title={"Featured"}
        subtitle={"New Arrival"}
        timer={false}
        arrow={true}
      />
      <Feature />
      <div className="flex justify-between mx-[249px] mt-[100px] ">
        <Features
          icon={<FaTruckFast />}
          title={"FREE AND FAST DELIVERY"}
          subtitle={"Free delivery for all orders over $140"}
        />
        <Features
          icon={<PiHeadsetDuotone />}
          title={"24/7 CUSTOMER SERVICE"}
          subtitle={"Friendly 24/7 customer support"}
        />
        <Features
          icon={<GoShieldCheck />}
          title={"MONEY BACK GUARANTEE"}
          subtitle={"We reurn money within 30 days"}
        />
      </div>
    </div>
  );
};

export default Home;
