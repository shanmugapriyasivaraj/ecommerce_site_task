import React from "react";
import Blueth from "../../../../assets/homeAssets/Blueth.jpg";

const Banner = () => {
  return (
    <div>
      <img
        class="h-[500px]  w-[85%] m-auto mt-[100px] mb-[20px]  "
        src={Blueth}
        alt="image description"
      />
    </div>
  );
};

export default Banner;
