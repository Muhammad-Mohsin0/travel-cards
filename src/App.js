import React from "react";
import travelData from "../src/Component/Travel";
import Card from "../src/Component/Cards";
import { GiWorld } from "react-icons/gi";

function App() {
  return (
    <div className="flex justify-center">
    <div className="flex flex-wrap justify-center text-white w-[55%] bg-red-400 mt-10 p-4">
    
    <h1 className="flex text-xl  bg-red-500 text-center mb-4"><GiWorld />My Travel Journey</h1>
    
      
      {travelData.map((destination) => (
            <Card key={destination.key} destination={destination} />
      ))}
    </div>
  </div>
  );
}

export default App;
