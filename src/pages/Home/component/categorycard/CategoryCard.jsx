import React from "react";
import { CiHeadphones } from "react-icons/ci";
import { CiMobile4 } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { CiCamera } from "react-icons/ci";
import { TbDeviceGamepad } from "react-icons/tb";

const CategoryCard = () => {
  const cardData = [
    {
      cartIcon: <CiMobile4 />,
      cartName: "Phone",
    },
    {
      cartIcon: <HiOutlineComputerDesktop />,
      cartName: "Computers",
    },
    {
      cartIcon: <BsSmartwatch />,
      cartName: "SmartWatch",
    },
    {
      cartIcon: <CiCamera />,
      cartName: "Camera",
    },
    {
      cartIcon: <CiHeadphones />,
      cartName: "HeadPhones",
    },
    {
      cartIcon: <TbDeviceGamepad />,
      cartName: "Gaming",
    },
  ];
  return (
    <>
      <div class=" h-[145px] mx-[70px]">
        <div class="mt-[50px] flex  gap-[30px] ">
          {cardData &&
            cardData.map((data) => (
              <div class="lg:w-[140px] lg:h-[130px] w-[170px] h-[145px]   hover:bg-[#DB4444] hover:text-[#fff] rounded border-2 border-black border-opacity-30 gap-[10px] flex flex-col justify-center items-center">
                <div class="text-[40px] ">{data.cartIcon}</div>
                <div class="text-[16px]  font-light">{data.cartName}</div>
              </div>
            ))}

          {/* <Icons symbol={<CiMobile4 />} symbolName={"Phone"} />
          <Icons
            symbol={<HiOutlineComputerDesktop />}
            symbolName={"Computer"}
          />
          <Icons symbol={<BsSmartwatch />} symbolName={"SmartWatch"} />
          <Icons symbol={<CiCamera />} symbolName={"Camera"} />
          <Icons symbol={<CiHeadphones />} symbolName={"HeadPhones"} />
          <Icons symbol={<TbDeviceGamepad />} symbolName={"Gaming"} /> */}
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
