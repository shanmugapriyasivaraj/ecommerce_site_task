import React from "react";
import { Outlet } from "react-router-dom";

import Announcement from "../pages/Announcement/Announcement";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const BaseLayout = () => {
  return (
    <>
      <div>
        <Announcement />
        <Navbar />
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
