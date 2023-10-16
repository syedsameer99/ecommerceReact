import React from "react";
import IconCard from "../images/icon-card.jpg";
import SlideSideBar from "./SlideSideBar";

const Navigation = () => {
  return (
    <div>
      <div className="flex justify-end ">
        {/* <div className="absolute">
          <SlideSideBar />
        </div> */}
        <div>
          <button>
            <img src={IconCard} className="h-12 w-12 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
