import React from "react";
import SideBar from "./SideBar";
import MainContent from "./MainContent";
import SlideSideBar from "./SlideSideBar";

const Body = () => {
  return (
    <div>
      <div className="flex h-20">
        <SideBar />
        <MainContent />
        {/* <SlideSideBar /> */}
      </div>
    </div>
  );
};

export default Body;
