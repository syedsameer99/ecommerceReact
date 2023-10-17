import React, { useState } from "react";

const CustomButton = ({ name, buttonValue }) => {
  const [valueOutput, setValueOutput] = useState("");

  const buttonClick = (event) => {
    let a = event.target.value;
    setValueOutput(a);
    console.log("state",valueOutput);
    console.log("btn val", a);
  };

  return (
    <div>
      <button
        onClick={buttonClick}
        value={buttonValue}
        className="border rounded-full py-2 px-3 font-thin mt-4 mr-2 text-xs bg-slate-200 text-black hover:bg-black hover:text-white"
      >
        {name}
      </button>
    </div>
  );
};

export default CustomButton;
