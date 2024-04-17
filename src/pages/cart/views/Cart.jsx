import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Button from "../../../comman/components/Button";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartDetails = await axios.get("https://dummyjson.com/products");
        setCart(cartDetails.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div class=" h-[21px] mt-[50px] ml-[65px]">
        <p class="text-sm font-poppins">
          <span class="text-gray-500 opacity-50 mr-2">Home</span>
          <a> / Cart</a>
        </p>
      </div>
      <div>
        <div className="mx-[65px] mt-[50px] overflow-x-auto">
          <table className="min-w-full divide-y">
            <thead className="rounded borded shadow h-[72px]">
              <tr>
                <th className="px-12 py-3 text-left text-base font-normal">
                  Product
                </th>
                <th className="px-12 py-3 text-left text-base font-normal">
                  Price
                </th>
                <th className="px-12 py-3 text-left text-base font-normal">
                  Quantity
                </th>
                <th className="px-12 py-3 text-left text-base font-normal">
                  Subtotal
                </th>
              </tr>
            </thead>

            <tbody>
              {cart &&
                cart.slice(0, 2).map((e) => (
                  <>
                    <tr class="rounded borded shadow h-[102px]">
                      <td className="px-12 py-4 ">
                        <div class="flex gap-[20px] items-center">
                          <img class="w-[56px] h-[56px]" src={e.thumbnail} />
                          <p>{e.title}</p>
                        </div>
                      </td>
                      <td className="px-12 py-4 ">${e.price}</td>
                      <td className="px-12 py-4 ">
                        <div class="flex gap-[10px] items-center justify-center w-[72px] h-[44px] rounded border-2 border-black]">
                          01
                          <div>
                            <IoIosArrowUp />
                            <IoIosArrowDown />
                          </div>
                        </div>
                      </td>
                      <td className="px-12 py-4 ">{"1213"}</td>
                    </tr>
                    <br></br>
                  </>
                ))}
            </tbody>
          </table>
          <div class="flex justify-between">
            <Button
              width={218}
              height={56}
              bg={false}
              textColor={false}
              heading={"Return to Stop"}
            />
            <Button
              width={218}
              height={56}
              bg={false}
              textColor={false}
              heading={"Update Cart"}
            />
          </div>
        </div>
        <div class="mt-[50px] ml-[65px] flex justify-between">
          <div>coupens</div>
          <div class="w-[470px] h-[320px] border-2 mr-[65px] font-poppins">
            <p class=" text-xl font-medium mt-10 ml-10">Cart Total</p>
            <div class="flex mt-6 ml-10 gap-[260px]">
              <p clas="text-base font-normal">Subtotal:</p>
              <p>$1750</p>
            </div>
            <div class="mt-4 border-b-2 border-solid text-gray-500 w-[422px] m-auto"></div>
            <div class="flex mt-4 ml-10 gap-[260px]">
              <p clas="text-base font-normal">Shipping:</p>
              <p>Free</p>
            </div>
            <div class="mt-4 border-b-2 border-solid text-gray-500 w-[422px] m-auto"></div>
            <div class="flex mt-4 ml-10 gap-[290px]">
              <p clas="text-base font-normal">Total:</p>
              <p>$1750</p>
            </div>
            <div class="flex justify-center mt-3">
              <Button
                width={260}
                height={56}
                bg={true}
                textColor={true}
                heading={"Process to Checkout"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
{
  /* <div class="h-[432px] mt-[50px] ml-[65px] mr-[65px] flex flex-col gap-14">
          <div class="justify-center items-center flex gap-[270px] h-[72px] rounded borded shadow">
            <p class="text-base font-normal text-[rgba(0, 0, 0, 1)]">Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          {cart &&
            cart.slice(0, 2).map((e) => (
              <div class="justify-center items-center gap-[240px] flex h-[102px] rounded borded shadow">
                <div class="flex gap-[20px] items-center">
                  <img class="w-[56px] h-[56px]" src={e.thumbnail} />
                  <p>{e.title}</p>
                </div>
                <div>{e.price}</div>
                <div class="flex gap-[10px] items-center justify-center w-[72px] h-[44px] rounded border-2 border-black]">
                  01
                  <div>
                    <IoIosArrowUp />
                    <IoIosArrowDown />
                  </div>
                </div>
                <div>hhi</div>
              </div>
            ))}
        </div> */
}
