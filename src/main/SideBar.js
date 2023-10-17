import React from "react";
import CustomButton from "../component/reusable/CustomButton";

const SideBar = () => {
  return (
    <div className=" pl-4 ">
      <div className="ml-2 mt-[90px]">
        <p className="font-bold ml-5 text-base ">Sizes:</p>
        <div
          className="flex flex-wrap pl-4"
          style={{ width: "200px" }}
        >
          <CustomButton name="XS" output="xs" />
          <CustomButton name="S" />
          <CustomButton name="M" />
          <CustomButton name="ML" />
          <CustomButton name="L" />
          <CustomButton name="XL" />
          <CustomButton name="XXL" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
