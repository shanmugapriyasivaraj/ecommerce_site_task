import React from "react";
import Slider from "../component/slider/Slider";
import Banner from "../component/banner/Banner";
import Feature from "../component/featurecard/Feature";
import CardHeader from "../../Home/component/cardHeader/CardHeader";
import ProductCard from "../component/ProductCard/ProductCard";
import CategoryCard from "../../Home/component/categorycard/CategoryCard";
import Features from "../component/features/Features";
import { FaTruckFast } from "react-icons/fa6";
import { PiHeadsetDuotone } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";

const Home = () => {
  return (
    <div>
      <Slider />
      <CardHeader title={"Today"} subtitle={"Flash Sales"} timer={true} />
      <div class="m-auto w-[85%] flex overflow-x-auto gap-[30px]  ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <CardHeader
        title={"Category"}
        subtitle={"Browse by Category"}
        timer={false}
      />
      <CategoryCard />
      <Banner />
      <CardHeader title={"Featured"} subtitle={"New Arrival"} timer={false} />
      <Feature />
      <div className="flex justify-between mx-[249px] mt-[100px] ">
      <Features icon={<FaTruckFast />} title={'FREE AND FAST DELIVERY'} subtitle={'Free delivery for all orders over $140'}/>
      <Features icon={<PiHeadsetDuotone />} title={'24/7 CUSTOMER SERVICE'} subtitle={'Friendly 24/7 customer support'}/>
      <Features icon={<GoShieldCheck />} title={'MONEY BACK GUARANTEE'} subtitle={'We reurn money within 30 days'}/></div>
    </div>
  );
};

export default Home;
