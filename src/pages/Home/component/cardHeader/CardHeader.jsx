import React from "react";

import Timer from "../cardHeader/Timer";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Button from "../../../../common/components/Button";

const CategoryHeader = (props) => {
  return (
    <>
      <div class=" mt-[50px] ml-[65px] mb-[50px]">
        <div class="flex gap-[15px]">
          <div class="w-[20px] h-[40px] bg-[#db4444] rounded"></div>
          <div class="text-[#db4444] text-base mt-[10px]">{props.title}</div>
        </div>
        <div class="flex justify-between">
          <div class=" mt-[30px] flex justify-between gap-[87px]">
            <div class="text-4xl mt-[15px] font-semibold">{props.subtitle}</div>
            {props.timer ? (
              <div class="flex gap-[15px]">
                <Timer time={"03"} text={"Days"} dot={true} />
                <Timer time={"23"} text={"Hours"} dot={true} />
                <Timer time={"19"} text={"Minutes"} dot={true} />
                <Timer time={"56"} text={"Seconds"} dot={false} />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          {props.arrow ? (
            <div class="flex gap-[4px] justify-center mt-[30px] mr-[65px]">
              <div class="w-[46px] h-[46px] flex gap-[2px] justify-center items-center  rounded-full bg-[#f5f5f5]">
                <FaArrowLeft class="" />
              </div>
              <div class="w-[46px] h-[46px] flex gap-[2px] justify-center  items-center rounded-full bg-[#f5f5f5]">
                <FaArrowRight class="" />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {props.btn ? (
            <div class="mr-[65px]">
              <Button
                width={159}
                height={56}
                bg={true}
                textColor={true}
                heading={"View All"}
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryHeader;
