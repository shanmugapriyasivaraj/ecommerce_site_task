import React from "react";
import Slider from "../component/slider/Slider";
import Banner from "../component/banner/Banner";
import Feature from "../component/featurecard/Feature";
import CardHeader from "../../Home/component/cardHeader/CardHeader";
import ProductCard from "../component/ProductCard/ProductCard";
import CategoryCard from "../../Home/component/categorycard/CategoryCard";
const Home = () => {
  return (
    <div>
      <Slider />
      <CardHeader title={"Today"} subtitle={"Flash Sales"} timer={true} />
      <div class="m-auto w-[85%] flex overflow-x-auto gap-[30px]  ">
        <ProductCard />
        <ProductCard />/
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
    </div>
  );
};

export default Home;
