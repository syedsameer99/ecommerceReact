import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({ name, output }) => {
  const filterItems =()=>{
    
  }
  return (
    <div>
      <button
        onClick={filterItems}
        className="border rounded-full py-2 px-3 font-thin mt-4 mr-2 text-xs bg-slate-200 text-black hover:bg-black hover:text-white"
      >
        {name}
      </button>
    </div>
  );
};

CustomButton.propTypes = {
  name: PropTypes.string,
  output: PropTypes.string,
};

export default CustomButton;
