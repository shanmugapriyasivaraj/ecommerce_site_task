import React from "react";

const Features = (props) => {
  return (
    <div class="flex flex-col gap-[8px] justify-center text-center  h-[161px] mb-[100px] p-[2]">
      <div class=" mx-[100px] h-[77px] w-[77px] rounded-full justify-center text-center align-center bg-neutral-500 p-2">
        <div class="mx-[1px] h-[60px] w-[60px] p-2 rounded-full bg-black">
          <div className="text-white p-2 text-[29px]">{props.icon}</div>
        </div>
        </div>
        <div>
        <div className="text-[20px] font-[600] ">{props.title} </div>
        <div><p className="text-[14px] mt-[5px]">{props.subtitle}</p> </div>
        </div>
      </div>

  );
};

export default Features;
