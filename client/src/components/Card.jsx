import React, {useEffect} from 'react';

function Card(props) {
  const { item } = props;
  if (!item) return null;

  return (
    <div
      className="border-green-500 border-4 flex-col justify-items-center bg-white mt-12 "
      style = {{width: "300px", height: "500px"}}
    >
      <img className=" ml-6" src="images/image 11.png" alt=""/>
      
      <p className="text-center text-xl mt-2">{item.name}</p>
      <p className="text-center mt-4">{`${item.lot} ${item.lot_measure_unit}`}</p>
      <p className="text-center mt-2">{`${item.price} руб.`}</p>
      
      <div className="ml-24 mt-10">
        <button
          type="button"
          className="border w-10 border-white-500 bg-white text-black rounded-md px-4 py-2 mr-2 transition duration-500 ease select-none hover:bg-white-600 focus:outline-none focus:shadow-outline"
        >-</button>
        1
        <button
          type="button"
          className="border w-10 border-white-500 bg-white text-black rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white-600 focus:outline-none focus:shadow-outline"
        >+</button>
      </div>
      <button type="button" className=" border ml-14 border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline" >
          Добавить в корзину
      </button>
    </div>
  );
}

export default Card;
