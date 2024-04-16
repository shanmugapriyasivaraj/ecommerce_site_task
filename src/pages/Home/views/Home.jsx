import React from "react";
import Slider from "../component/slider/Slider";
import Banner from "../component/banner/Banner";
import Feature from "../component/featurecard/Feature";
import CardHeader from "../../Home/component/cardHeader/CardHeader";
import ProductCard from "../component/ProductCard/ProductCard";
import CategoryCard from "../../Home/component/categorycard/CategoryCard";
import Button from "../component/buttons/Button";

const Home = () => {
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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
    </div>
  );
};

export default Home;
