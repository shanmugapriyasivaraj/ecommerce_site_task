import React from "react";

const Icons = (props) => {
  return (
    <>
      <div class=" w-[170px] h-[145px]  hover:bg-[#DB4444] hover:text-[#fff] rounded border-2 border-black border-opacity-30 gap-[10px] flex flex-col justify-center items-center">
        <div class="text-[40px] ">{props.symbol}</div>
        <div class="text-[16px]  font-light">{props.symbolName}</div>
      </div>
    </>
  );
};

export default Icons;
