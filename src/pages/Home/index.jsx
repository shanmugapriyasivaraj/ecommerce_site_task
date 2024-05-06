import React from "react";
import ProductDetailsPage from "../productDetails/views/ProductDetailsPage";
// import Announcement from "../../common/components/Announcement/component/Announcement";
// import Navbar from "../../common/components/Navbar/component/Navbar";

const BaseLayout = () => {
  return (
    <>
      <div>
        {/* <Announcement />
        <Navbar /> */}
        <ProductDetailsPage />
      </div>
    </>
  );
};

export default BaseLayout;
