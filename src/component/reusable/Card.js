import React, { useEffect, useState } from "react";
// import PropType from 'prop-types'
import modelImage from "../../images/Models/modal1.jpg";
import api from "../../api";

const Card = ({ itemsName }) => {

  
  // const [items, setItems] = useState([]);
  // const [size, setSize] = useState("xs");
  // const API = api;
  // console.log("total items", itemsName);

  // const setFetching = async (url) => {
  //   try {
  //     let res = await fetch(url);
  //     let data = await res.json();
  //     setItems(data);
  //   } catch (error) {
  //     console.error("Error");
  //   }
  //   console.log(setItems);
  // };


  // const filteredItems = itemsName.filter((item) => item.sizes.includes(size));
  // console.log("filter", filteredItems);




  return (
    <div className="flex flex-wrap">
      {itemsName.map((item) => (
        <div
          style={{ height: "380px", width: "211px" }}
          className="ml-2 mt-[35px] flex items-center flex-col mb-9 "
          key={item.id}
        >
          <img
            style={{ height: "250px" }}
            src={item.image}
            className="w-[350px]"
          />
          <div className="mt-1 h-12 px-3 w-60 align-middle text-baseline text-center">
            {/* Cropped Stay Groovy off white */}
            {item.title.substring(0, 37)}
            {/* {console.log(item.title)} */}
          </div>
          <hr className="border-2 border-yellow-400  w-1/6" />
          <p className="mt-9">
            $ <span className=" text-2xl font-bold">{item.price}</span> .90
          </p>
          <p className="text-m text-gray-400">
            or 9 x <span className="font-bold">$1.21</span>
          </p>
          <button className="bg-black text-white px-16 py-3 mt-3 hover:bg-yellow-500 hover:text-white">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
