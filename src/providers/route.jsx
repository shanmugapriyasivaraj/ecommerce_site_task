import React from "react";
import Wishlist from "../pages/Wishlist/views/Wishlist";
const BaseLayout = React.lazy(() => import("../pages/BaseLayout"));
const Home = React.lazy(() => import("../pages/Home/views/Home"));
const About = React.lazy(() => import("../pages/About/views/About"));
const Contact = React.lazy(() => import("../pages/Contact/views/Contact"));
const SignUp = React.lazy(() => import("../pages/Signup/views/Signup"));

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
    ],
  },
];
export default route;
