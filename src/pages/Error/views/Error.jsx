import React from "react";
import Button from "../../../common/components/Button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div class="h-[21px] mt-[50px] ml-[65px]">
        <p class="text-sm font-poppins">
          <span class="text-gray-500 opacity-50 mr-2">Home</span>
          <a>/ 404 Error</a>
        </p>
      </div>
      <div class="mb-[100px]">
        <div class="h-[179px] mt-[200px] flex flex-col justify-center items-center gap-8">
          <p class="text-8xl font-medium ">404 Not Found</p>
          <p class="text-base font-normal">
            Your visited page not found. You may go home page.
          </p>
        </div>
        <div class="mt-[60px] flex justify-center">
          <Link to="/">
            <Button
              width={254}
              height={56}
              bg={true}
              textColor={true}
              heading={"Back to Home Page"}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
