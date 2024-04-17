import React from "react";

const Timer = (props) => {
  return (
    <>
      <div>
        <p className="text-xs ">{props.text}</p>
        <p className=" text-4xl font-bold font-poppins">{props.time}</p>
      </div>
      {props.dot ? (
        <div className="text-3xl mt-[13px] font-bold decoration-solid text-[#db4444] ">
          :
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Timer;
