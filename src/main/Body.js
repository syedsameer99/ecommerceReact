import React, { useState } from "react";
import SideBar from "./SideBar";
import MainContent from "./MainContent";
import api from "../api";

const Body = () => {
  const [itemMenu, setItemMenu] = useState("");
  const [itemNumber, setItemNumber] = useState("");
  console.log("itemMenu", itemMenu);
  return (
    <div>
      <div className="flex h-20">
        <SideBar itemMenu={itemMenu} setItemMenu={setItemMenu} />
        <MainContent
          items={api.filter((item) =>
            itemMenu ? item.sizes.some((prod) => prod === itemMenu) : true
          )
        }
        itemNumber={itemMenu.length}
        />
      </div>
    </div>
  );
};

export default Body;
