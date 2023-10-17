import React, { useEffect, useState } from "react";
import Card from "../component/reusable/Card";

const MainContent = ({items,prodcuts}) => {
  const [totalItems, setTotalItems] = useState("10");
  return (
    <div className="w-full mt-6 ml-6">
      <p className="pl-5 pt-16 text-sm">16 Product({totalItems}) found</p>
      <div className="flex flex-wrap ">
        <Card itemsName={items} />
      </div>
    </div>
  );
};



export default MainContent;
