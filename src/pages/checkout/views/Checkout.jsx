import { useEffect, useState } from "react";
import CheckoutForm from "../component/CheckoutForm";
import axios from "axios";
import Img1 from "../../../assets/checkoutAssets/checkout1.png";
import Img2 from "../../../assets/checkoutAssets/checkout2.png";
import Img3 from "../../../assets/checkoutAssets/checkout3.png";
import Img4 from "../../../assets/checkoutAssets/checkout4.png";
import CustomInput from "../../../common/components/CustomInput";

// import CustomInput from "../../../common/components/CustomInput";
const Checkout = () => {
  const list = ["Account", " My Account", "Product", "View Cart"];
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
    <div className="mt-20 mx-[135px]">
      <div className="flex gap-[200px]">
        <div className="">
          {" "}
          <div>
            {" "}
            <ul className="text-[14px] flex ">
              {list &&
                list.map((e) => (
                  <li className="opacity-50">
                    {e}
                    <span className="mx-2">/</span>{" "}
                  </li>
                ))}
              <li>CheckOut</li>
            </ul>
          </div>
          <h1 className="font-inter font-medium text-4xl mt-[50px]">
            Billing Details
          </h1>
          <CheckoutForm />
        </div>

        <div className="w-[422px] mt-[190px] mr-5">
          {product.slice(0, 2).map((e) => (
            <>
              <div className="flex justify-between">
                <div className="flex gap-6">
                  <img className="h-[48px] w-[48px]" src={e.thumbnail} />
                  <div className="p-3 w-56 text-[16px]">{e.title}</div>
                </div>
                <div className="p-3 text-[16px]">${e.price}</div>
              </div>
              <div className="h-6"></div>
            </>
          ))}
          <div className="flex justify-between w-[422px]">
            <div className="flex gap-6">
              <div className="w-56 text-[16px]">Subtotal:</div>
            </div>
            <div className=" text-[16px]">$5555</div>
          </div>
          <div className="w-[422px] border-b-2 text-grey-500 my-2"></div>
          <div className="flex justify-between w-[422px]">
            <div className="flex gap-6">
              <div className="w-56 text-[16px]">Shipping:</div>
            </div>
            <div className=" text-[16px]">Free</div>
          </div>
          <div className="w-[422px] border-b-2 text-grey-500 my-2"></div>
          <div className="flex justify-between w-[422px]">
            <div className="flex gap-6">
              <div className="w-56 text-[16px]">Total:</div>
            </div>
            <div className=" text-[16px]">$1750</div>
          </div>
          <div class="flex justify-between items-center mb-4 mt-6">
            <div>
              {" "}
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-black bg-black border-black focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-black dark:border-black"
              />
              <label
                for="default-radio-1"
                class="ms-4 text-[16px] font-medium text-black dark:text-black"
              >
                Bank
              </label>
            </div>
            <div className="flex gap-1">
              <img className="w-[37px] h-[16px]" src={Img1} />
              <img className="w-[37px] h-[11px]" src={Img2} />
              <img className="w-[37px] h-[15px]" src={Img3} />
              <img className="w-[39px] h-[18px]" src={Img4} />
            </div>
          </div>
          <div class="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-black bg-black border-black focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-black dark:border-black"
            />
            <label
              for="default-radio-1"
              class="ms-4 text-[16px] font-medium text-black dark:text-black"
            >
              Cash on delivery
            </label>
          </div>
          <div className="flex mt-4">
            {" "}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
