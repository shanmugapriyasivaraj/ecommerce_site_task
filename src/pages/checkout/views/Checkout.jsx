import Img1 from "../../../assets/checkoutAssets/checkout1.png";
import Img2 from "../../../assets/checkoutAssets/checkout2.png";
import Img3 from "../../../assets/checkoutAssets/checkout3.png";
import Img4 from "../../../assets/checkoutAssets/checkout4.png";
import CustomInput from "../../../common/components/CustomInput";
import Button from "../../../common/components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

// import CustomInput from "../../../common/components/CustomInput";
const Checkout = () => {
  const list = ["Account", " My Account", "Product", "View Cart"];
  const cartProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let shippingPrice = 0;

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cartProduct.cart.map((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.offerPrice * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };
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
    <div className="mt-[240px] mb-8 mx-[135px]">
      <div className="">
        {" "}
        <div>
          {" "}
          <ul className="text-[14px] flex ">
            {list &&
              list.map((e) => (
                <li className="opacity-50">
                  {e}
                  <span className="mx-2">/</span>{" "}
                </li>
              ))}
            <li>CheckOut</li>
          </ul>
        </div>
        <h1 className="font-inter font-medium text-4xl mt-[50px]">
          Billing Details
        </h1>
        <div className=" mt-[50px]">
          <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
            <div className="flex gap-80">
              <div>
                {" "}
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
                  formik={formik}
                />
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
                  formik={formik}
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
                  formik={formik}
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
                  formik={formik}
                />
                <CustomInput
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  values={formik.values.email}
                  width={470}
                  height={50}
                  label="Email Address"
                  name="email"
                  type="email"
                  required={true}
                  opacity={40}
                  bgColor={"#F5F5F5"}
                  formik={formik}
                />
                <div className="flex justify-start gap-4 mt-5">
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
                </div>{" "}
              </div>
              <div className="w-[422px] mt-[30px] mr-5">
                {cartProduct.cart.map((e) => (
                  <>
                    <div className="flex justify-between">
                      <div className="flex gap-6">
                        <img className="h-[48px] w-[48px]" src={e.image} />
                        <div className="p-3 w-56 text-[16px]">{e.title}</div>
                      </div>
                      <div className="p-3 text-[16px]">
                        $ {e.quantity * e.offerPrice}
                      </div>
                    </div>
                    <div className="h-6"></div>
                  </>
                ))}
                <div className="flex justify-between w-[422px]">
                  <div className="flex gap-6">
                    <div className="w-56 text-[16px]">Subtotal:</div>
                  </div>
                  <div className=" text-[16px]">
                    {" "}
                    <p>${getTotal().totalPrice}</p>
                  </div>
                </div>
                <div className="w-[422px] border-b-2 text-grey-500 my-2"></div>
                <div className="flex justify-between w-[422px]">
                  <div className="flex gap-6">
                    <div className="w-56 text-[16px]">Shipping:</div>
                  </div>
                  <div className=" text-[16px]">
                    {" "}
                    <p>{shippingPrice == 0 ? "Free" : shippingPrice}</p>
                  </div>
                </div>
                <div className="w-[422px] border-b-2 text-grey-500 my-2"></div>
                <div className="flex justify-between w-[422px]">
                  <div className="flex gap-6">
                    <div className="w-56 text-[16px]">Total:</div>
                  </div>
                  <div className=" text-[16px]">
                    $ {shippingPrice + getTotal().totalPrice}
                  </div>
                </div>
                <div class="flex justify-between items-center mb-4 mt-6">
                  <div>
                    {" "}
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-black bg-black border-black focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-black dark:border-black"
                    />
                    <label
                      for="default-radio-1"
                      class="ms-4 text-[16px] font-medium text-black dark:text-black"
                    >
                      Bank
                    </label>
                  </div>
                  <div className="flex gap-1">
                    <img className="w-[37px] h-[16px]" src={Img1} />
                    <img className="w-[37px] h-[11px]" src={Img2} />
                    <img className="w-[37px] h-[15px]" src={Img3} />
                    <img className="w-[39px] h-[18px]" src={Img4} />
                  </div>
                </div>
                <div class="flex items-center">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 text-black bg-black border-black focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-black dark:border-black"
                  />
                  <label
                    for="default-radio-1"
                    class="ms-4 text-[16px] font-medium text-black dark:text-black"
                  >
                    Cash on delivery
                  </label>
                </div>
                <div className="flex mt-4 gap-3">
                  {" "}
                  <CustomInput
                    width={300}
                    height={56}
                    bgColor={"#fff"}
                    isFocused={true}
                    placeholder={"Coupen Code"}
                    value={(val) => {
                      val.target.value;
                    }}
                  />
                  <div className="mt-2">
                    {" "}
                    <Button
                      height={56}
                      width={211}
                      bg={true}
                      textColor={true}
                      heading={"Apply Coupen"}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  {" "}
                  <Button
                    type="submit"
                    height={56}
                    width={190}
                    bg={true}
                    textColor={true}
                    heading={"Place Order"}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
