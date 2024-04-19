import React from "react";
import { FaLocationDot } from "react-icons/fa6";

function Card({ destination }) {

  return (

    <div className="flex max-w-xl rounded shadow-lg m-4">
        <div className="w-full">
          <img src={destination.Imagesource} alt={destination.Placename}/>
        </div>
        <div >
          <p className="flex"><FaLocationDot color="oraqnge" />{destination.Country} <a href=""></a>
          </p>
          {destination.Placename}
          <br />
          <p className="flex">
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
