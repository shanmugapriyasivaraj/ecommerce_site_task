import React from "react";
import Wishlist from "../pages/Wishlist/views/Wishlist";
import ProductDetailsPage from "../pages/productDetails/views/ProductDetailsPage";
import Checkout from "../pages/checkout/views/Checkout";
const BaseLayout = React.lazy(() => import("../pages/BaseLayout"));
const Home = React.lazy(() => import("../pages/Home/views/Home"));
const About = React.lazy(() => import("../pages/About/views/About"));
const Contact = React.lazy(() => import("../pages/Contact/views/Contact"));
const SignUp = React.lazy(() => import("../pages/Signup/views/Signup"));
const Cart = React.lazy(() => import("../pages/cart/views/Cart"));
const Error = React.lazy(() => import("../pages/Error/views/Error"));

const route = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/productdetails/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
];
export default route;
