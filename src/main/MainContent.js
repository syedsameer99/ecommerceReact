import React, { useEffect } from "react";
import Card from "../component/reusable/Card";

const MainContent = () => {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
  });
  return (
    <div className="w-full mt-6 ml-6">
      <p className="pl-5 pt-5 text-base">16 Product(s) found</p>
      <div className="flex flex-wrap ">
        <Card />
      </div>
    </div>
  );
};

export default MainContent;