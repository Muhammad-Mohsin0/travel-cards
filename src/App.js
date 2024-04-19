import React from "react";
import travelData from "../src/Component/Travel";
import Card from "../src/Component/Cards";

function App() {
  return (
    <div className="flex justify-center">
    <div className="flex flex-wrap justify-center text-white w-[55%] bg-gray-400 mt-10 p-4">
    <div>
    <h1 className="text-xl w-[55%] bg-red-500 text-center mb-4">My Travel Journey</h1>
    </div>
      
      {travelData.map((destination) => (
            <Card key={destination.key} destination={destination} />
      ))}
    </div>
  </div>
  );
}

export default App;
