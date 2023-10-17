import React, { useState } from "react";
import SideBar from "./SideBar";
import MainContent from "./MainContent";
import api from "../api";

const Body = () => {
  const [products, setProducts] = useState("");

  return (
    <div>
      <div className="flex h-20">
        <SideBar />
        <MainContent
          items={api.filter((item) =>
            products ? item.sizes.some((prod) => prod === products) : true
          )}
        />
      </div>
    </div>
  );
};

export default Body;
