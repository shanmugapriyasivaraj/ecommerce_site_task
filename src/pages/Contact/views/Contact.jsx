import React from "react";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import CustomInput from "../../../common/components/CustomInput";
import Button from "../../../common/components/Button";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div>
        <div class="mt-[210px]  ml-[65px]">
          <div className="text-sm font-poppins flex gap-2">
            <Link to="/">
              <p className="opacity-[50%]">Home</p>
            </Link>
            <span> / Contact</span>
          </div>
        </div>
        <div class="flex">
          <div class="w-[340px] h-[450px] ml-[65px] mt-[70px] mb-[100px] rounded borded shadow">
            <div class="h-[445px] p-11">
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
          <div class="w-[650px] h-[450px] ml-[65px] mt-[70px] mb-[100px] flex-col rounded borded shadow">
            <div class="h-[445px] p-6 flex flex-col gap-10 ">
              <div class="flex gap-2">
                <CustomInput
                  placeholder="Your Name"
                  width={200}
                  height={50}
                  border={1}
                  bgColor={"#F5F5F5"}
                  placeholderRequired={true}
                />
                <CustomInput
                  placeholder="Your Email"
                  width={200}
                  height={50}
                  border={1}
                  bgColor={"#F5F5F5"}
                  placeholderRequired={true}
                />
                <CustomInput
                  placeholder="Your Phone"
                  width={200}
                  height={50}
                  border={1}
                  bgColor={"#F5F5F5"}
                  placeholderRequired={true}
                />
              </div>

              <CustomInput
                placeholder="Your Message"
                width={610}
                height={200}
                border={1}
                bgColor={"#F5F5F5"}
                placeholderRequired={true}
              />
              <div class="ml-[400px]">
                <Button
                  width={211}
                  height={56}
                  bg={true}
                  textColor={true}
                  heading={"Send Message"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
