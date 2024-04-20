import React, { useState, useEffect } from "react";
import ProductCard from "../../Home/component/ProductCard/ProductCard";
import axios from "axios";
import Button from "../../../common/components/Button";
import CategoryHeader from "../../Home/component/cardHeader/CardHeader";
const Wishlist = () => {
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
    <div className="mb-[150] ">
      <div className="mt-[200px] mb-[50px] flex mx-[5%] justify-between ">
        <div className="text-[21px] ">Wishlist(4)</div>
        <Button
          heading={"Move All to Bag"}
          width={140}
          height={40}
          isBorder={true}
        />
      </div>
      <div class="m-auto w-[90%] flex overflow-x-auto gap-[30px] mt-[50px]">
        {product &&
          product
            .slice(0, 5)
            .map((item) => (
              <ProductCard
                title={item.title}
                offers={item.discountPercentage}
                isDelete={true}
                image={item.thumbnail}
                offerPrice={item.price}
                originalPrice={item.price * 2}
                rating={item.rating}
                userRating={item.stock}
                isRating={false}
                isCartIcon={true}
              />
            ))}
      </div>
      <div className="mt-[70px]  flex mx-[2%] justify-between ">
        <CategoryHeader title={"Just for you"} />
        <div className="mt-[50px]">
          <Button heading={"See All"} width={140} height={40} isBorder={true} />
        </div>
      </div>
      <div class="m-auto w-[90%] flex overflow-x-auto gap-[30px] mt-[10px] mb-[150px]">
        {product &&
          product
            .slice(0, 5)
            .map((item) => (
              <ProductCard
                title={item.title}
                offers={item.discountPercentage}
                image={item.thumbnail}
                offerPrice={item.price}
                originalPrice={item.price * 2}
                rating={item.rating}
                userRating={item.stock}
                isRating={true}
                isCartIcon={true}
                isEye={true}
              />
            ))}
      </div>
    </div>
  );
};

export default Wishlist;
