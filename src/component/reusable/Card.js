import React, { useEffect, useState } from "react";
// import PropType from 'prop-types'
import modelImage from "../../images/Models/modal1.jpg";
import api from "../../api";

const Card = () => {
  const [items, setItems] = useState([]);
  const API =  api ;
  console.log(API);

  const setFetching = async (url) => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      setItems(data);
    } catch (error) {
      console.error("Error");
    }
    console.log(setItems);
  };

  useEffect(() => {
    setFetching(API);
  }, []);
  return (
    <div className="flex flex-wrap border border-black">
      {API.map((item) => (
        <div
          style={{ height: "360px", width: "211px" }}
          className="ml-2 mt-6 flex items-center flex-col mb-9 "
          key={item.id}
        >
          <img style={{ height: "150px" }} src={item.image} className="w-35" />
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

// Card.prototype={
//   image:PropType.string
// }

export default Card;
