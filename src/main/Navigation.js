import React, { useState } from "react";
import IconCard from "../images/icon-card.jpg";
import SlideSideBar from "./SlideSideBar";

const Navigation = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div>
      <div className="flex justify-end ">
        <div className={`absolute  ${checked ? "block" : "hidden"} `}>
          <SlideSideBar />
        </div>
        <div className="absolute">
          <button onClick={handleChange}>
            <img src={IconCard} className="h-12 w-12" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
