import React from "react";
import { FaLocationDot } from "react-icons/fa6";

function Card({ destination }) {

  return (

    <div className="flex max-w-xl rounded shadow-lg m-4">
        <div className=" w-110">
          <img src={destination.Imagesource} alt={destination.Placename}/>
        </div>
        <div >
          <p className="flex"><FaLocationDot size={20} color="orange" />{destination.Country}  <a href={destination.Location} target="_blank" className="ml-4 underline">View on Google map</a> <br />
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
