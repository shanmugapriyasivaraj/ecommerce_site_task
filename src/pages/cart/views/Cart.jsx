import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Button from "../../../common/components/Button";
import { MdOutlineClear } from "react-icons/md";
// import axios from "axios";
import CustomInput from "../../../common/components/CustomInput";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../../store/features/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart);

  let shippingPrice = 0;

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cartProduct.cart.map((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.offerPrice * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <>
      <div>
        <div className=" mt-[210px] ml-[65px]">
          <div className="text-sm font-poppins flex gap-2">
            <Link to="/">
              <p className="opacity-[50%]">Home</p>
            </Link>
            <span> / Cart</span>
          </div>
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
                {cartProduct.cart &&
                  cartProduct.cart.map((e) => (
                    <>
                      <tr className="rounded borded shadow h-[102px]">
                        <td className="px-12 py-4">
                          <div className="flex gap-10 relative">
                            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="bg-[#DB4444] p-[1px] w-[18px] h-[18px] rounded-full">
                                <MdOutlineClear
                                  className="text-white cursor-pointer"
                                  onClick={() => {
                                    dispatch(removeItem(e.id));
                                  }}
                                />
                              </div>
                            </div>
                            <img className="w-[56px] h-[56px]" src={e.image} />
                            <p className="mt-5">{e.title}</p>
                          </div>
                        </td>
                        <td className="px-12 py-4 ">${e.offerPrice}</td>
                        <td className="px-12 py-4 ">
                          <div className="flex gap-[10px] items-center justify-center w-[72px] h-[44px] rounded border-2 border-black]">
                            {e.quantity}
                            <div>
                              <IoIosArrowUp
                                onClick={() =>
                                  dispatch(incrementQuantity(e.id))
                                }
                              />
                              <IoIosArrowDown
                                onClick={() =>
                                  dispatch(decrementQuantity(e.id))
                                }
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 ">
                          {e.quantity * e.offerPrice}
                        </td>
                      </tr>
                      <br></br>
                    </>
                  ))}
              </tbody>
            </table>
            {cartProduct.Cart ? (
              <div className="flex justify-between">
                <Link to="/">
                  <Button
                    width={218}
                    height={56}
                    bg={false}
                    textColor={false}
                    heading={"Return to Shop"}
                    isBorder={true}
                  />
                </Link>
                <Button
                  width={218}
                  height={56}
                  bg={false}
                  textColor={false}
                  heading={"Update Cart"}
                  isBorder={true}
                />
              </div>
            ) : (
              <div className="mt-[30px]">
                <div className="flex justify-between">
                  <Link to="/">
                    <Button
                      width={218}
                      height={56}
                      bg={false}
                      textColor={false}
                      heading={"Return to Shop"}
                      isBorder={true}
                    />
                  </Link>
                  <Button
                    width={218}
                    height={56}
                    bg={false}
                    textColor={false}
                    heading={"Update Cart"}
                    isBorder={true}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="mt-[50px] ml-[65px] mb-[70px] flex justify-between">
            <div className="flex gap-[15px]">
              <CustomInput
                width={300}
                height={56}
                bgColor={"#fff"}
                isFocused={true}
                placeholder={"Coupen Code"}
                value={(val) => {
                  val.target.value;
                }}
              />
              <div className="mt-2">
                {" "}
                <Button
                  width={211}
                  height={56}
                  bg={true}
                  textColor={true}
                  heading={"Apply Coupens"}
                />
              </div>
            </div>
            <div className="w-[460px] h-[320px] mt-2 border-2 border-black rounded mr-[65px] font-poppins">
              <p className=" text-xl font-medium mt-10 ml-10">Cart Total</p>
              <div className="flex mt-6 ml-10 gap-[290px]">
                <p clas="text-base font-normal">Subtotal:</p>
                <p>{getTotal().totalPrice}</p>
              </div>
              <div className="mt-4 border-b-2 border-solid text-gray-500 w-[422px] m-auto"></div>
              <div className="flex mt-4 ml-10 gap-[290px]">
                <p clas="text-base font-normal">Shipping:</p>
                <p>{shippingPrice == 0 ? "Free" : shippingPrice}</p>
              </div>
              <div className="mt-4 border-b-2 border-solid text-gray-500 w-[422px] m-auto"></div>
              <div className="flex mt-4 ml-10 gap-[318px]">
                <p clas="text-base font-normal">Total:</p>
                <p>{shippingPrice + getTotal().totalPrice}</p>
              </div>
              <Link to={"/checkout"}>
                <div className="flex justify-center mb-2">
                  <Button
                    width={260}
                    height={56}
                    bg={true}
                    textColor={true}
                    heading={"Process to Checkout"}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
