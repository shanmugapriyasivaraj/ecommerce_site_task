import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { PiHeadsetDuotone } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";

const Features = () => {
  const featuresData = [
    {
      icon: <FaTruckFast />,
      title: "FREE AND FAST DELIVERY",
      subtitle: "Free delivery for all orders over $140",
    },
    {
      icon: <PiHeadsetDuotone />,
      title: "24/7 CUSTOMER SERVICE",
      subtitle: "Friendly 24/7 customer support",
    },
    {
      icon: <GoShieldCheck />,
      title: "MONEY BACK GUARANTEE",
      subtitle: "We reurn money within 30 days",
    },
  ];
  return (
    <div className="flex justify-between mx-[249px] mt-[100px] ">
      {featuresData &&
        featuresData.map((data) => (
          <div class="flex flex-col gap-[20px] justify-center text-center  h-[161px] mb-[100px] p-[2]">
            <div class=" mx-[100px] h-[77px] w-[77px] rounded-full justify-center text-center align-center bg-neutral-500 p-2">
              <div class="mx-[1px] h-[60px] w-[60px] p-2 rounded-full bg-black">
                <div className="text-white p-2 text-[29px]">{data.icon}</div>
              </div>
            </div>
            <div>
              <div className="text-[20px] font-[600] ">{data.title} </div>
              <div>
                <p className="text-[14px] mt-[5px]">{data.subtitle}</p>{" "}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Features;
