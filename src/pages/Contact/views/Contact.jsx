import React from "react";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import CustomInput from "../../../common/components/CustomInput";

const Contact = () => {
  return (
    <>
      <div class="h-[21px] mt-[210px]  ml-[65px]">
        <p class="text-sm font-poppins">
          <span class="text-gray-500 opacity-50 mr-2">Home</span>
          <a>/ Contact</a>
        </p>
      </div>
      <div class="flex">
        <div class="w-[340px] h-[400px] ml-[65px] mt-[70px] mb-[100px] rounded borded shadow">
          <div class="h-[366px] p-11">
            <div class="flex items-center gap-5">
              <div className="bg-[#DB4444] rounded-full h-9 w-9 flex items-center justify-center">
                <FiPhone className="text-[#fff]" />{" "}
              </div>
              <p class="text-base font-medium ">Call To Us</p>
            </div>
            <p class="text-sm font-normal mt-5">
              We are available 24/7, 7 days a week.
            </p>
            <p class="text-sm font-normal mt-3">Phone: +8801611112222</p>
            <div class="mt-6 border-b-2 border-solid text-black-500 w-[270px] m-auto"></div>
            <div class="flex items-center gap-5 mt-5">
              <div className="bg-[#DB4444] rounded-full h-9 w-9 flex items-center justify-center">
                <CiMail className="text-[#fff]" />{" "}
              </div>
              <p class="text-base font-medium ">Write To Us</p>
            </div>
            <p class="text-sm font-normal mt-5">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p class="text-sm font-normal mt-3">
              Emails: customer@exclusive.com
            </p>
            <p class="text-sm font-normal mt-3">
              Emails: customer@exclusive.com
            </p>
          </div>
        </div>
        <div class="w-[640px] h-[400px] ml-[65px] mt-[70px] mb-[100px] rounded borded shadow">
          <div>
            <CustomInput
              placeholder="Your Name"
              width={235}
              height={50}
              border={1}
              bgColor={"#F5F5F5"}
              required={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
