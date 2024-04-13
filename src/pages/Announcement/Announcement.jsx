import React from "react";
import { FaChevronDown } from "react-icons/fa6";
const Announcement = () => {
  return (
    <div
      id="sticky-banner"
      tabindex="-1"
      className="fixed h-12 top-0 start-0 z-50 flex justify-between w-full p-4  bg-black dark:bg-black "
    >
      <div className="flex ml-[445px] items-center">
        <div className="flex gap-4">
          <p className="font-[400] text-[14px] tracking-wide text-[--primary-color]  ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <p className="font-[600] underline underline-offset-1 text-[14px] text-[--primary-color]">
            ShopNow
          </p>
        </div>
      </div>
      <div className="mr-[136px] flex gap-[5px]">
        <p className="font-[400] text-[14px]  text-[--primary-color]  ">
          English{" "}
        </p>
        <p className="font-extrabold mt-[2px] text-[16px] text-[--primary-color]">
          <FaChevronDown />
        </p>
      </div>
    </div>
  );
};

export default Announcement;
