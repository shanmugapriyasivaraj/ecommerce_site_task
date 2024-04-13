import React from "react";
import Announcement from "../../common/components/Announcement/component/Announcement";
import Navbar from "../../common/components/Navbar/component/Navbar";

const BaseLayout = () => {
  return (
    <>
      <div>
        <Announcement />
        <Navbar />
      </div>
    </>
  );
};

export default BaseLayout;
