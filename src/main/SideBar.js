import React from "react";
import CustomButton from "../component/reusable/CustomButton";
const buttons = [
  {
    name: "XS",
    value: "xs",
  },
  {
    name: "S",
    value: "s",
  },
  {
    name: "M",
    value: "m",
  },
  {
    name: "ML",
    value: "ml",
  },
  {
    name: "L",
    value: "lg",
  },
  {
    name: "XL",
    value: "xl",
  },
  {
    name: "XXL",
    value: "xxl",
  },

  // "XS", "S", "M", "ML", "L", "XL", "XXL"
];
const SideBar = ({ setItemMenu, itemMenu }) => {
  return (
    <div className=" pl-4 ">
      <div className="ml-2 mt-[90px]">
        <p className="font-bold ml-5 text-base ">Sizes:</p>
        <div className="flex flex-wrap pl-4" style={{ width: "200px" }}>
          {buttons.map((item) => {
            return (
              <CustomButton
                key={item.id}
                name={item.name}
                buttonValue = {item.value}
                itemMenu={itemMenu}
                setItemMenu={setItemMenu}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
