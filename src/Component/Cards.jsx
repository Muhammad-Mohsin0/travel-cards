import React from "react";

function Card({ destination }) {
  return (
    <div className="flex max-w-sm rounded shadow-lg m-4">
    <img src={destination.Imagesource} alt={destination.Placename} />
     <div >{destination.Placename}</div>
         <p >
          {destination.Country} 
          <a href="">map</a>
          </p>
         <p >
         {destination.Visitdate}
        </p>
         <p >
          {destination.About}
         </p>
    </div>
  );
}

export default Card;
