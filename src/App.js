import React from "react";
import travelData from "../src/Component/Travel";
import Card from "../src/Component/Cards";
import { GiWorld } from "react-icons/gi";

function App() {
  return (
    <>
    <div className="flex justify-center">
      <div className="absolute flex flex-wrap rounded-xl text-black justify-center text-white w-[55%] bg-gray-100  mt-10 ">
      <div className="relative  text-xl rounded-t-lg w-[100%] bg-red-500 text-white "><h1 className="flex justify-center h-10 mt-3"><GiWorld size={25}/> My Travel Journey</h1></div>
      {travelData.map((destination) => (
      <div key={destination.key} className="">
      
      <Card destination={destination} />
      
      </div>
      ))}
      </div>

    </div>
    <div>
      <h2>Google Map</h2>
      <iframe title="Google Map of Air Uni" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9387.31030004856!2d73.02783932793254!3d33.71113833825467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe5967d48243%3A0xcb2c90c562c4687e!2sAir%20University!5e0!3m2!1sen!2s!4v1713772046918!5m2!1sen!2s" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </>
  );
}

export default App;
