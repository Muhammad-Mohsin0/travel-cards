import React from "react";
import travelData from "../src/Component/Travel";
import Card from "../src/Component/Cards";
import { GiWorld } from "react-icons/gi";

function App() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center text-white w-[50%] bg-gray-400 mt-10 p-4">
        <h1 className="flex w-max text-xl bg-red-500 text-center"><GiWorld size={25}/> My Travel Journey</h1>
        {travelData.map((destination) => (
          <div key={destination.key} className="flex w-full mb-4">
            <div className="w-2/3 pl-4">
              <Card destination={destination} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
