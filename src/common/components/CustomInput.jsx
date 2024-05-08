import React from "react";
import RequiredError from "./RequiredError";

const CustomInput = ({
  label,
  width,
  height,
  opacity,
  bgColor,
  value,
  border,
  placeholder,
  placeholderRequired,
  required,
  isFocused,
  formik,
  name,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center">
        {label && (
          <label
            className={`text-[16px] font-poppins font-normal opacity-${opacity}`}
          >
            {label}
          </label>
        )}

        {required && (
          <span className="text-[16px] font-normal opacity-40 text-red-500">
            *
          </span>
        )}
      </div>

      <input
        value={value}
        placeholder={`${placeholder ? placeholder : ""}${
          placeholderRequired ? "*" : ""
        }`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: bgColor,
          border: `${border}px`,
        }}
        className={`placeholder-gray-500 focus:outline-none focus:ring focus:border-black pl-4 rounded ${
          isFocused ? "border-2 border-black" : ""
        }`}
      />

      {formik && <RequiredError name={name} formik={formik} />}
    </div>
  );
};

export default CustomInput;
