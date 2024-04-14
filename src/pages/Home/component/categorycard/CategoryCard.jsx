import React from "react";
import { CiHeadphones } from "react-icons/ci";
import { CiMobile4 } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { CiCamera } from "react-icons/ci";
import { TbDeviceGamepad } from "react-icons/tb";
import Icons from "../categorycard/Icons";

const CategoryCard = () => {
  return (
    <>
      <div class=" h-[145px] ml-[135px]">
        <div class="mt-[50px] flex  gap-[30px] ">
          <Icons symbol={<CiMobile4 />} symbolName={"Phone"} />
          <Icons
            symbol={<HiOutlineComputerDesktop />}
            symbolName={"Computer"}
          />
          <Icons symbol={<BsSmartwatch />} symbolName={"SmartWatch"} />
          <Icons symbol={<CiCamera />} symbolName={"Camera"} />
          <Icons symbol={<CiHeadphones />} symbolName={"HeadPhones"} />
          <Icons symbol={<TbDeviceGamepad />} symbolName={"Gaming"} />
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
