import React, { useState, useEffect } from "react";
import ProductDetails from "../component/ProductDetails";
import CategoryHeader from "../../Home/component/cardHeader/CardHeader";
import axios from "axios";
import ProductCard from "../../Home/component/ProductCard/ProductCard";

const ProductDetailsPage = () => {
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
    <div className="mt-[160px] mb-20">
      <ProductDetails />
      <div className="mt-[100px]">
        <CategoryHeader title={"Related Items"} btn={false} arrow={false} />
        <div class="m-auto w-[90%] flex overflow-x-auto gap-[30px]">
          {product &&
            product
              .slice(0, 5)
              .map((item) => (
                <ProductCard
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
