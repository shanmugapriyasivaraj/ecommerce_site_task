import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import CustomInput from "../../../common/components/CustomInput";
const CheckoutForm = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required*"),
    companyName: Yup.string().max(20, "Must be 20 characters or less"),
    streetAddress: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required*"),
    apartment: Yup.string().max(20, "Must be 20 characters or less"),

    email: Yup.string().email("Email is invalid").required("Email is required"),
    city: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required*"),

    phoneNumber: Yup.string()
      .max(10, "Must be 10 Numbers")
      .required("Phone Number is required*"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      companyName: "",
      streetAddress: "",
      apartment: "",
      city: "",
      phoneNumber: "",
      email: "",
      prevInfo: false,
    },
    validationSchema: validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className=" mt-[50px]">
      <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
        <CustomInput
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.firstName}
          width={470}
          height={50}
          label="First Name"
          name="firstName"
          type="text"
          required={true}
          opacity={40}
          bgColor={"#F5F5F5"}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <p className="text-red-500">{formik.errors.firstName}</p>
        )}
        <CustomInput
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.companyName}
          width={470}
          height={50}
          label="Company Name"
          name="companyName"
          type="text"
          opacity={40}
          bgColor={"#F5F5F5"}
        />
        <CustomInput
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.streetAddress}
          width={470}
          height={50}
          label="Street Address"
          name="streetAddress"
          type="text"
          required={true}
          opacity={40}
          bgColor={"#F5F5F5"}
        />
        <CustomInput
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.apartment}
          width={470}
          height={50}
          label="Apartment,floor,etc.(optional)"
          name="companyName"
          type="text"
          bgColor={"#F5F5F5"}
          opacity={40}
        />
        <CustomInput
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.city}
          width={470}
          height={50}
          label="Town/City"
          name="city"
          type="text"
          required={true}
          opacity={40}
          bgColor={"#F5F5F5"}
        />
        <CustomInput
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.phoneNumber}
          width={470}
          height={50}
          label="Phone Number"
          name="phoneNumber"
          type="number"
          required={true}
          opacity={40}
          bgColor={"#F5F5F5"}
        />
        <CustomInput
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.email}
          width={470}
          height={50}
          label="Email Address"
          name="emailAddress"
          type="email"
          required={true}
          opacity={40}
          bgColor={"#F5F5F5"}
        />
        <div className="flex justify-start gap-4">
          {" "}
          <CustomInput
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.prevInfo}
            isChecked={true}
            height={24}
            width={24}
            name="prevInfo"
            type="checkbox"
            opacity={40}
            bgColor={"#DB4444"}
          />
          <p className="text-[16px] mt-2.5">
            Save this information for faster check-out next time
          </p>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
