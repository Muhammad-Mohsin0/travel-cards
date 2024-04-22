import React from "react";
import { FaLocationDot } from "react-icons/fa6";

function Card({ destination }) {

  return (

    <div className="flex max-w-2xl rounded shadow-lg bg-gray-200 text-black mt-10 m-4 items-center">
       <div className="ml-2 mr-5 my-2 w-[150%] duration-300 hover:scale-105  " >
          <img src={destination.Imagesource} alt={destination.Placename} className="rounded h-64  object-cover  " />
       </div>
        <div className="mt-5">
          <p className="flex"><FaLocationDot size={20} color="orange" />{destination.Country}  
          <a href={destination.Location} target="_blank" rel="noopener" className="ml-4 underline">View on Google map</a> <br />
          </p>
          <h1 className="text-2xl font-bold ">{destination.Placename}</h1>
          
          <br />
          <p >
          <strong>{destination.Visitdate}</strong>
          </p>
          <br />
          <p >
          {destination.About}
          </p>
        </div>
  </div>
  );
}

export default Card;
