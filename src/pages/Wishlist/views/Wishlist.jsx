import React, { useState, useEffect } from "react";
import ProductCard from "../../Home/component/ProductCard/ProductCard";
import axios from "axios";
import Button from "../../../common/components/Button";
import CategoryHeader from "../../Home/component/cardHeader/CardHeader";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../../../store/features/CartSlice";
import { removeWishlist } from "../../../store/features/WishlistSlice";

const Wishlist = () => {
  const [product, setProduct] = useState([]);
  const wishlistProduct = useSelector((state) => state.wishlist);
  const cartProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
    console.log(wishlistProduct.wishlist, "TTTTTTTTTTTTTTTTTTT");
  }, []);

  const handleMoveAllToBag = () => {
    wishlistProduct.wishlist.forEach((item) => {
      dispatch(addToCart(item));

      dispatch(removeWishlist({ id: item.id }));
    });
  };

  return (
    <div className="mb-[150] ">
      <div className="mt-[200px] mb-[50px] flex mx-[5%] justify-between ">
        <div className="text-[21px] ">
          {wishlistProduct.wishlist.length == 0
            ? "Your Wishlist Is Empty"
            : `Wishlist(${wishlistProduct.wishlist.length})`}
        </div>
        {wishlistProduct.wishlist.length == 0 ? (
          <p></p>
        ) : (
          <Button
            heading={"Move All to Bag"}
            width={140}
            height={40}
            bg={true}
            textColor={true}
            isBorder={true}
            onclick={handleMoveAllToBag}
          />
        )}
      </div>
      {wishlistProduct.wishlist.length == 0 ? (
        <div></div>
      ) : (
        <div class="m-auto w-[90%] flex overflow-x-auto gap-[30px] mt-[50px]">
          {wishlistProduct &&
            wishlistProduct.wishlist.map((item) => (
              <ProductCard
                id={item.id}
                title={item.title}
                offers={item.offers}
                isDelete={true}
                image={item.image}
                offerPrice={item.offerPrice}
                originalPrice={item.offerPrice * 2}
                rating={item.rating}
                userRating={item.userRating}
                isRating={false}
                isCartIcon={true}
              />
            ))}
        </div>
      )}

      <div className="mt-[50px]  flex mx-[2%] justify-between ">
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
